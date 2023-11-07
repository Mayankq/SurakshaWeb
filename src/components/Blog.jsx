import { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  const [blogTitles, setBlogTitles] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');

  useEffect(() => {
    const fetchBlogTitles = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/getBlogs');
        setBlogTitles(response.data.titles);
      } catch (error) {
        console.error('Error fetching blog titles:', error);
      }
    };

    fetchBlogTitles();
  }, []);

  const handleTitleClick = async (title) => {
    try {
      // Assuming the server expects a GET request with the title as a parameter
      const response = await axios.get(`http://127.0.0.1:3000/getBlog/${title}`);
  
      // Update the state with the selected title and blog content
      setSelectedTitle(title);
      setBlogContent(response.data.blog);
    } catch (error) {
      console.error('Error fetching blog content:', error);
    }
  };
  

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%', marginRight: '20px' }}>
          <h2>Blog Titles</h2>
          <ul>
            {blogTitles.map((title) => (
              <li
                key={title}
                onClick={() => handleTitleClick(title)}
                style={{ cursor: 'pointer', marginBottom: '5px' }}
              >
                {title}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ width: '70%' }}>
          <h2>{selectedTitle}</h2>
          <div dangerouslySetInnerHTML={{ __html: blogContent }} />
        </div>
      </div>
    </div>
  );
};

export default Blog;

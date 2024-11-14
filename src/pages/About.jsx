

export default function About() {  
  const [movies, setMovie] = useState([]);  
  const [loading, setLoading] = useState(true); // To track loading state  
  const [error, setError] = useState(null); // To track errors  



  // Loading state  
  if (loading) {  
    return <div>Loading...</div>;  
  }  

  // Error state  
  if (error) {  
    return <div>Error: {error}</div>;  
  }  

  return (  

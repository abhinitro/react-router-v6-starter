import { useNavigate,useParams } from 'react-router-dom';




const withNavigate = Component => props => {
 
  const navigate = useNavigate();
  const params=useParams();
  
  return <Component {...props}  navigate={navigate} isAuth={true} params={params}/>;
};


export default withNavigate;
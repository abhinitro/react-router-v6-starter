import { useNavigate } from 'react-router-dom';


const withNavigate = Component => props => {
  const navigate = useNavigate();
  return <Component {...props}  navigate={navigate} isAuth={true}/>;
};


export default withNavigate;
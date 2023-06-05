import { Card, CardContent, Avatar, Typography } from '@mui/material';
import pic from './profile.PNG';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function App() {

  function clickGithub() {
    console.log("github");
  }

  function clickLinkedIn() {
    console.log("linkedin");
  }

  function clickEmail() {
    console.log("email");
  }

  return (
    <Card>
      <CardContent>
        <Avatar src={pic}>
        </Avatar>
        <Typography>Sawyer Fenwick</Typography>
        <GitHubIcon onClick={clickGithub}/>
        <LinkedInIcon sx={{color: '#0077b5'}} onClick={clickLinkedIn}/>
        <EmailIcon onClick={clickEmail}/>
      </CardContent>
    </Card>
  );
}

export default App;

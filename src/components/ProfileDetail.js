import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
`;

const AvatarStyled = styled(Avatar)`
  height: 100px;
  width: 100px;
`;

function ProfileDetail() {
  return (
    <Grid item xs={6}>
      <Center>
        <AvatarStyled />
      </Center>
    </Grid>
  );
}

export default ProfileDetail;

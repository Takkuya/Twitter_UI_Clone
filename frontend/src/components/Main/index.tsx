import React from 'react';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

export default function Main() {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Takuya</strong>
          <span>2559 Tweets</span>
        </ProfileInfo>
      </Header>

      {/* <ProfilePage /> */}

      {/* <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu> */}
    </Container>
  );
}

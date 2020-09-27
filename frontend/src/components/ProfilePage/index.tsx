import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

export default function ProfilePage() {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Takuya</h1>
        <h2>Takkuya_00</h2>

        <p>
          Apenas alguém apaixonado por Yorushika, TUYU, The Binary, Yourness e
          outras bandas aí.
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 4 de maio de 2004
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>1373</strong>
          </span>
          <span>
            <strong>51 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

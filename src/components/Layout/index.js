import { useContext } from 'react';

import { ThemeContext } from '../../pages/_app';

import { Container, Wrapper, Header, Search, Main, ProfileImage, ProfileInformation } from './styles';

import { FiSun, FiSearch } from 'react-icons/fi';

import { MdLocationOn, MdLink } from 'react-icons/md';

import { FaTwitter } from 'react-icons/fa';

import { BiBuildingHouse } from 'react-icons/bi'

import { BsMoon } from 'react-icons/bs';

import { dark, light } from '../../styles/Themes';

export default function Layout() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <Container>
      <Wrapper>
        <Header>
          <h1>Devfinder</h1>

          <div onClick={toggleTheme}>
            { theme === dark ? <span>Light</span> : <span>Dark</span> }
            { theme === dark ? <span><FiSun size={16} /></span> : <BsMoon size={16} />}
          </div>
        </Header>

        <Search>
          <div>
            <FiSearch size={20} className="icon" />
            <input type="text" placeholder="Search GitHub username..." />
          </div>

          <button>Search</button>
        </Search>

        <Main>
          <ProfileImage>
            <img src="https://avatars.githubusercontent.com/u/62671884?s=400&v=4" alt="Profile Image" />
          </ProfileImage>

          <ProfileInformation>
            <div className="profile-top">
              <div className="profile-image">
                <img src="https://avatars.githubusercontent.com/u/62671884?s=400&v=4" alt="Profile Image" />
              </div>

              <div className="profile-information">
                <div>
                  <h3>Name</h3>
                  <span>Username</span>
                </div>

                <label>Joined 25 Jan 2021</label>
              </div>
            </div>

            <div className="profile-description">
              Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>

            <div className="statistics">
              <div>
                <span>Repos</span>
                <h1>8</h1>
              </div>

              <div>
                <span>Followers</span>
                <h1>3938</h1>
              </div>

              <div>
                <span>Following</span>
                <h1>9</h1>
              </div>
            </div>

            <div className="profile-footer">
              <div>
                <div className="row">
                  <MdLocationOn size={16} />
                  <span>San Francisco</span>
                </div>

                <div className="row">
                  <MdLink size={16} />
                  <span>https://github.com/luizsp7m</span>
                </div>
              </div>

              <div>
                <div className="row">
                  <FaTwitter size={16} />
                  <span>Not available</span>
                </div>

                <div className="row">
                  <BiBuildingHouse size={16} />
                  <span>San Francisco</span>
                </div>
              </div>
            </div>
          </ProfileInformation>
        </Main>
      </Wrapper>
    </Container>
  );
}
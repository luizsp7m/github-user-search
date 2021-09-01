import { useContext, useEffect, useState } from 'react';

import { ThemeContext } from '../../pages/_app';

import { Container, Wrapper, Header, Search, Main, ProfileImage, ProfileInformation } from './styles';

import { FiSun, FiSearch } from 'react-icons/fi';

import { MdLocationOn, MdLink } from 'react-icons/md';

import { FaTwitter } from 'react-icons/fa';

import { BiBuildingHouse } from 'react-icons/bi'

import { BsMoon } from 'react-icons/bs';

import { dark, light } from '../../styles/Themes';

import { format } from 'date-fns';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function Layout() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  const [username, setUsername] = useState('luizsp7m');
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      getUser();
    }
  }

  async function getUser() {
    if (username.trim() === '') {
      return toast.error("Invalid username");
    }

    try {
      setLoading(true);

      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();

      if (response.status !== 200) throw new Error();

      setUser(data);
    } catch (error) {
      toast.error("Username not found");
    } finally {
      setLoading(true);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Container>
      <ToastContainer 
        style={{
          fontSize: '1.25rem',
        }}
      />
      <Wrapper>
        <Header>
          <h1>Devfinder</h1>

          <div onClick={toggleTheme}>
            {theme === dark ? <span>Light</span> : <span>Dark</span>}
            {theme === dark ? <span><FiSun size={16} /></span> : <BsMoon size={16} />}
          </div>
        </Header>

        <Search>
          <div>
            <FiSearch size={20} className="icon" />
            <input
              type="text"
              placeholder="Search GitHub username..."
              value={username}
              onChange={({ target }) => setUsername(target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          <button onClick={getUser}>Search</button>
        </Search>

        <Main>
          <ProfileImage>
            <img src={user?.avatar_url} alt="Profile Image" />
          </ProfileImage>

          <ProfileInformation>
            <div className="profile-top">
              <div className="profile-image">
                <img src={user?.avatar_url} alt="Profile Image" />
              </div>

              <div className="profile-information">
                <div>
                  {user?.name ? <h3>{user?.name}</h3> : <h3 className="n-ava">Without name</h3>}
                  <span>@{user?.login}</span>
                </div>

                {user?.created_at && <label>Joined {format(new Date(user?.created_at), 'dd MMM yyyy')}</label>}
              </div>
            </div>

            <div className="profile-description">
              {user?.bio === null ? 'This profile has no bio' : user?.bio}
            </div>

            <div className="statistics">
              <div>
                <span>Repos</span>
                <h1>{user?.public_repos}</h1>
              </div>

              <div>
                <span>Followers</span>
                <h1>{user?.followers}</h1>
              </div>

              <div>
                <span>Following</span>
                <h1>{user?.following}</h1>
              </div>
            </div>

            <div className="profile-footer">
              <div>
                <div className="row">
                  <MdLocationOn size={16} />
                  {user?.location ? <span>{user?.location}</span> : <span className="n-ava">Not available</span>}
                </div>

                <div className="row">
                  <MdLink size={16} />
                  <a href={user?.html_url} target="_blank">{user?.html_url}</a>
                </div>
              </div>

              <div>
                <div className="row">
                  <FaTwitter size={16} />
                  {user?.twitter_username ? <span>@{user?.twitter_username}</span> : <span className="n-ava">Not available</span>}
                </div>

                <div className="row">
                  <BiBuildingHouse size={16} />
                  {user?.company ? <span>{user?.company}</span> : <span className="n-ava">Not available</span>}
                </div>
              </div>
            </div>
          </ProfileInformation>
        </Main>
      </Wrapper>
    </Container>
  );
}
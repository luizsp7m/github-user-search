import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  cursor: default;

  padding: 2rem 0rem;
`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 568px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  transition: .15s;

  > h1 {
    color: ${({ theme }) => theme.colors.text};
    text-transform: lowercase;
    font-weight: 600;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;

    &:hover {

    }

    > span {
      font-size: 1rem;
      letter-spacing: .25rem;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
`

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
  gap: 1rem;
  background: ${({ theme }) => theme.colors.secondary};
  transition: .15s;
  padding: .75rem;
  border-radius: .5rem;

  .icon {
    color: ${({ theme }) => theme.colors.primary};
  }

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;

    > input {
      background: none;
      border: none;
      padding: 1rem .5rem;
      width: 100%;
      outline: none;
      color: ${({ theme }) => theme.colors.text};

      &::placeholder {
        color: ${({ theme }) => theme.colors.text};
        opacity: .75;
      }
    }
  }

  > button {
    padding: 1rem 2rem;
    background: ${({ theme }) => theme.colors.primary};
    color: #fafafa;
    outline: none;
    border: none;
    border-radius: .5rem;
    cursor: pointer;
    transition: opacity .25s;

    &:hover {
      opacity: .85;
    }
  }
`

export const Main = styled.div`
  display: flex;
  gap: 3rem;
  border-radius: .5rem;
  background: ${({ theme }) => theme.colors.secondary};
  transition: .15s;
  padding: 3rem;
`

export const ProfileImage = styled.div`
  > img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
  }
  
  @media(max-width: 578px) {
    display: none;
  }
`

export const ProfileInformation = styled.div`
  width: 100%;

  .n-ava {
    opacity: .5;
  }

  > div.profile-top {
    > div.profile-image {
      display: none;

      > img {
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
      }
    }

    > div.profile-information {
      display: flex;
      justify-content: space-between;

      > div {
        margin-bottom: 2rem;

        > h3 {
          font-size: 1.75rem;
          letter-spacing: .05rem;
          color: ${({ theme }) => theme.colors.text};
          font-weight: 700;
          margin-bottom: 1rem;
        }

        > span {
          color: ${({ theme }) => theme.colors.primary};
          font-size: 1.35rem;
          letter-spacing: .05rem;
        }
      }

      > label {
          color: ${({ theme }) => theme.colors.text};
          font-size: 1.35rem;
          letter-spacing: .05rem;
      }
    }
  }

  > div.profile-description {
    font-size: 1.35rem;
    letter-spacing: .05rem;
    color: ${({ theme }) => theme.colors.textOpacity};
    line-height: 1.90rem;
  }

  > div.statistics {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;
    background: ${({ theme }) => theme.colors.background};
    transition: .15s;
    padding: 2rem;
    border-radius: .5rem;
    color: ${({ theme }) => theme.colors.text};

    > div {
      > span {
        font-size: 1.10rem;
        opacity: .95;
      }

      > h1 {
        margin-top: 1rem;
        font-size: 2.25rem;
      }
    }
  }

  > div.profile-footer {
    display: flex;
    gap: 4rem;

    > div {
      > div.row {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin: 1.45rem 0;
        color: ${({ theme }) => theme.colors.text};
        opacity: .9;
        font-size: 1.15rem;

        > span, a {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          max-width: 25ch;
        }

        > a {
          color: ${({ theme }) => theme.colors.text};
          text-decoration: none;
        }
      }
    }
  }

  @media(max-width: 578px) {
    > div.profile-top {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-bottom: 2rem;

      > div.profile-image {
        display: block;
      }

      > div.profile-information {
        flex-direction: column;
        
        > div {
          margin-bottom: 1rem;
        }
      }
    }

    > div.profile-footer {
      flex-direction: column;
      gap: 0;

      > div {
        > div.row {
          margin: 0 0 1.45rem 0;
        }
      }
    }
  }
`
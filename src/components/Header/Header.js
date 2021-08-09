import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>

            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>

          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>

      <MainHeader>
        <DesktopActionGroup>
          <button>
            <Search size={24} />
          </button>

          <button>
            <Menu size={24} />
          </button>
        </DesktopActionGroup>

        <Logo />

        <SubscribeWrapper>
          <Button>Subscribe</Button>

          <SignInLink href="">Already a subscriber?</SignInLink>
        </SubscribeWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const DesktopActionGroup = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex: 1;
    margin-top: 12px;
  }
`;

const SubscribeWrapper = styled.div`
  display: none;
  justify-self: end;
  
  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    
    & button {
      margin-top: 32px;
    }
  }
`;

const SignInLink = styled.a`
  font-family: var(--font-family-serif);
  font-size: ${14 / 16}rem;
  font-weight: var(--font-weight-normal);
  font-style: italic;
  text-decoration: underline;
`;

const MainHeader = styled(MaxWidthWrapper)`
  margin-top: 32px;
  margin-bottom: 48px;
  
  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }
  
  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;

export default Header;

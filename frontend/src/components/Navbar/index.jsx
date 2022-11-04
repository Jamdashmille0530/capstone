import * as Styles from './styles'
import { Link } from 'react-router-dom'
import Logo from 'assets/Logo.png'
import Button from 'components/Button'
import { useContext } from 'react'
import { useState } from 'react'
import AuthContext from 'context/AuthProvider'
import { logout } from 'utils/auth.routes'

const Navbar = () => {
  const { auth } = useContext(AuthContext)
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <>
      <Styles.Wrapper>
        <Styles.Container>
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-12" />
          </Link>

          <Styles.Navlinks>
            {!auth ? (
              <>
                <Link to="/signuptwo">
                  <Button secondary>Sign up</Button>
                </Link>
                <Link to="/Login">
                  <Button>Login</Button>
                </Link>
                <Link to="/Chat">
                  <Button secondary>Chat</Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/Chat">
                  <Button secondary>Chat</Button>
                </Link>

                {auth?.role === 'ADMIN' && (
                  <div className="flex items-center justify-between py-8">
                    <nav>
                      <section className="MOBILE-MENU flex ">
                        <div
                          className="HAMBURGER-ICON space-y-2"
                          onClick={() => setIsNavOpen((prev) => !prev)}
                        >
                          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        </div>

                        <div
                          className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}
                        >
                          <div
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)}
                          >
                            <svg
                              className="h-8 w-8 text-gray-600"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          </div>
                          <ul className="flex flex-col items-center justify-between min-h-[250px]">
                            <li className="border-b border-gray-400 my-8 uppercase">
                              <a href="/">Home</a>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                              <a href="/profile">Profile</a>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                              <a href="/scholar">Calendar</a>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                              <a href="/Admin">Admin</a>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                              <a href="/application">Application</a>
                            </li>
                            <Button onClick={() => logout(auth?.id)}>
                              logout
                            </Button>
                          </ul>
                        </div>
                      </section>
                    </nav>
                    <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 30%;
        height: 100vh;
        top: 0;
        right: 0;
        background: #e9ffe0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
                  </div>
                )}
                {auth?.role === 'SCHOLAR' && (
                  <div className="flex items-center justify-between py-8">
                    <nav>
                      <section className="MOBILE-MENU flex ">
                        <div
                          className="HAMBURGER-ICON space-y-2"
                          onClick={() => setIsNavOpen((prev) => !prev)}
                        >
                          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        </div>

                        <div
                          className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}
                        >
                          <div
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)}
                          >
                            <svg
                              className="h-8 w-8 text-gray-600"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          </div>
                          <ul className="flex flex-col items-center justify-between min-h-[250px]">
                            <li className="border-b border-gray-400 my-8 uppercase">
                              <a href="/">Home</a>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                              <a href="/profile">Profile</a>
                            </li>

                            <Button onClick={() => logout(auth?.id)}>
                              Logout
                            </Button>
                          </ul>
                        </div>
                      </section>
                    </nav>
                    <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 30%;
        height: 100vh;
        top: 0;
        right: 0;
        background: #f7fff3;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
                  </div>
                )}
              </>
            )}
          </Styles.Navlinks>
        </Styles.Container>
      </Styles.Wrapper>
    </>
  )
}

export default Navbar

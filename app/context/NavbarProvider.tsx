'use client';
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
interface ContextTypes {
  sectionVisible: string;
  setSectionVisible: Dispatch<SetStateAction<string>>;
  navClicked: boolean;
  setNavClicked: Dispatch<SetStateAction<boolean>>;
}
const NavbarContext = createContext<ContextTypes>({
  sectionVisible: 'about',
  setSectionVisible: () => {},
  navClicked: false,
  setNavClicked: () => {},
});
type Props = {
  children: ReactNode;
};
export const NavbarProvider = ({ children }: Props) => {
  const [sectionVisible, setSectionVisible] = useState<string>('');
  const [navClicked, setNavClicked] = useState<boolean>(false);
  useEffect(() => {
    setSectionVisible('about');
    setNavClicked(false);
  }, []);
  return (
    <NavbarContext.Provider
      value={{ sectionVisible, setSectionVisible, navClicked, setNavClicked }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => {
  return useContext(NavbarContext);
};

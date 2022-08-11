import {
  StyleButton,
  StyledHeaderLogin,
  StyledServiceIcon,
  StyleHeaderSubLogin,
  StyleHeaderSubLoginItem,
} from "../Header/Header.style";
import {
  StyledHeaderServiceList,
  StyleHeader,
  StyleHeaderForm,
  StyleHeaderServcie,
  StyleHeaderTitle,
} from "./Header.style";

import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useEffect, useRef, useState } from "react";

export const Header = () => {
  const loginRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: any) => {
    if (loginRef.current && !loginRef.current.contains(e.target)) {
      setShowLogin(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
  }, []);

  const [showLogin, setShowLogin] = useState<boolean>(false);

  return (
    <StyleHeader>
      <StyleHeaderTitle>
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <p style={{ fontWeight: "300" }}>GUMAX - Pioneering fashion forecast</p>
      </StyleHeaderTitle>
      <StyleHeaderForm>
        <StyleHeaderServcie>
          <StyledHeaderServiceList>
            <a href="/">Home</a>
            <a href="/service">Policies</a>
            <a href="/service">Order</a>
            <a href="/service">Messenger</a>
            <a href="/service">Request</a>
          </StyledHeaderServiceList>
        </StyleHeaderServcie>
        <StyledServiceIcon></StyledServiceIcon>
        <StyledHeaderLogin onClick={() => setShowLogin(!showLogin)}>
          <div className="headerLogin" ref={loginRef}>
            Login
          </div>
        </StyledHeaderLogin>
        <StyleHeaderSubLogin style={{ display: showLogin ? "block" : "none" }}>
          <StyleHeaderSubLoginItem>
            <StyleButton className="buttonLarge">
              <span>
                <PersonIcon className="buttonIcon" />
              </span>
              <span className="buttonContent">Tài khoản</span>
            </StyleButton>
            <StyleButton className="buttonLarge">
              <span>
                <PublicIcon />
              </span>
              <span className="buttonContent">Ngôn ngữ</span>
            </StyleButton>
            <StyleButton className="buttonLarge">
              <span>
                <HelpIcon />
              </span>
              <span className="buttonContent">Câu Hỏi Thường Gặp</span>
            </StyleButton>
            <StyleButton className="buttonLarge">
              <span>
                <SettingsIcon />
              </span>
              <span className="buttonContent">Cài đặt</span>
            </StyleButton>
            <StyleButton className="buttonLarge">
              <span>
                <LogoutIcon />
              </span>
              <span className="buttonContent">Đăng xuất</span>
            </StyleButton>
          </StyleHeaderSubLoginItem>
        </StyleHeaderSubLogin>
      </StyleHeaderForm>
    </StyleHeader>
  );
};

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YoutubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import CopyrightIcon from "@mui/icons-material/Copyright";

import {
  StyleSidebar,
  StyleSidebarContact,
  StyleSidebarContactFb,
  StyleSidebarContentFeedback,
  StyleSidebarCopyRigt,
  StyleSidebarInfo,
  StyleSidebarSocial,
  StyleSidebarTextFeedback,
  StyleSidebarWrapper,
} from "./Sidebar.style";
import { useEffect, useState } from "react";
import { authAxios } from "../../ConstantType/ConstantType";
import Slide from "../Slide/Slide";

export const Sidebar = () => {
  const [slide, setSlide] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await authAxios.get(`SanPham/LoaiSanPham`);
        setSlide(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  const slideCollapse = slide.slice(0, 5);
  const newArray = slideCollapse.map((item) => item.lstAnh);
  const newFlat = newArray.flat();

  return (
    <StyleSidebar>
      <StyleSidebarWrapper>
        <Slide img={newFlat} />
        <StyleSidebarContactFb>
          <div className="sidebar_title--feedback">Feedback</div>
          <StyleSidebarContentFeedback>
            <div className="sidebar_bg--feedback">
              <img
                src="https://stupendous-florentine-180ebc.netlify.app/static/media/bg.a941c0b3b8cf051d7455.png"
                alt=""
              />
            </div>
            <StyleSidebarTextFeedback>
              <div className="sidebar_text--name">Mai Huy</div>
              <div className="sidebar_text--info">
                Very gút áp tờ nun Very gút áp tờ nun Very gút áp tờ nun Very
                gút áp tờ nun
              </div>
            </StyleSidebarTextFeedback>
          </StyleSidebarContentFeedback>
        </StyleSidebarContactFb>
        <StyleSidebarContact>
          <div className="sidebarTitle">Contact for me!</div>
          <StyleSidebarSocial>
            <div className="sidebarItem">
              <FacebookIcon className="sidebarItemIcon" />
            </div>
            <div className="sidebarItem">
              <InstagramIcon className="sidebarItemIcon" />
            </div>
            <div className="sidebarItem">
              <YoutubeIcon className="sidebarItemIcon" />
            </div>
            <div className="sidebarItem">
              <TwitterIcon className="sidebarItemIcon" />
            </div>
            <div className="sidebarItem">
              <GoogleIcon className="sidebarItemIcon" />
            </div>
          </StyleSidebarSocial>
        </StyleSidebarContact>
        <StyleSidebarInfo>
          <div className="sidebar_item--info">
            <span>Hotline</span>: 096.341.1489
          </div>
          <div className="sidebar_item--info">
            <span>Email</span>: Maihuy245@gmail.com
          </div>
          <div style={{ fontSize: "13.5px" }} className="sidebar_item--info">
            <span>Working</span>: Monday - Satuday (off Sunday)
          </div>
          <StyleSidebarCopyRigt>
            <CopyrightIcon className="sidebar_copyright--icon" />
            Maihuy245
          </StyleSidebarCopyRigt>
        </StyleSidebarInfo>
      </StyleSidebarWrapper>
    </StyleSidebar>
  );
};

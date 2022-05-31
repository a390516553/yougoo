import React from "react";
// import ban from "@images/ban.png";
// import ban2 from "@images/ban2.png";
// import you1 from "@images/you1.jpg";
// import you2 from "@images/you2.jpg";
// import you3 from "@images/you3.jpg";
// import you4 from "@images/you4.jpg";
// import question from "@images/question.png";
// import right from "@images/right.png";
// import language from "@images/language.png";
// import why2 from "@images/why2.png";
// import why3 from "@images/why3.png";
// import why4 from "@images/why4.png";
// import why5 from "@images/why5.png";
// import why6 from "@images/why6.png";
// import seo from "@images/seo.png";
// import macbook from "@images/macbook.png";
// import { Button } from "antd";
// var scrollFlag = false;
// window.onscroll = function () {
//   let scrollHigh =
//     document.documentElement.scrollTop || document.body.scrollTop;
//   scrollFlag = scrollHigh > -100 ? true : false;
//   console.log("scrollFun------------", scrollHigh);
//   console.log("scrollFlag------------", scrollFlag);
// };

function Home() {
  return (
    // onScroll={scrollFun}
    <div>
      <div className="home_top">
        <div className="home_menu">
          <div className="home_menu_top">
            <div className="top_deatail">
              <div className="menu_logo"></div>
              <div className="menu_desc">服务分类</div>
            </div>
          </div>
          <div className="home_menu_list">
            <ul>
              <li>
                <div className="li_left">
                  <div className="li_left_img"></div>
                </div>
                <div className="li_right">YouTube Live 直播</div>
              </li>
              <li>
                <div className="li_left_two">
                  <div className="li_left_img_two"></div>
                </div>
                <div className="li_right">Facebook Live 直播</div>
              </li>
              <li>
                <div className="li_left_three">
                  <div className="li_left_img_three"></div>
                </div>
                <div className="li_right">Shopee Live 直播</div>
              </li>
              <li>
                <div className="li_left_four">
                  <div className="li_left_img_four"></div>
                </div>
                <div className="li_right">YouTube 推广引流</div>
              </li>
              <li>
                <div className="li_left_five">
                  <div className="li_left_img_five"></div>
                </div>
                <div className="li_right">YouTube 排名优化</div>
              </li>
              <li>
                <div className="li_left_six">
                  <div className="li_left_img_six"></div>
                </div>
                <div className="li_right">Twitter 推广曝光</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="home_package_box">
        <div className="box_top">
          <div className="top_left">直播套餐</div>
          <div className="top_center"></div>
          <div className="top_right">
            <div className="right-l">了解更多</div>
            <div className="right-r"></div>
          </div>
        </div>
        <div className="box_center">
          <ul>
            <li>
              <div className="li_top li_one"></div>
              <div className="li_bottom">
                <div className="buy_buttom">直播套餐</div>
                <div className="buy_desc">YouTube 人气流量套餐</div>
                <div className="buy_price">¥ 1500+</div>
              </div>
            </li>
            <li>
              <div className="li_top li_one"></div>
              <div className="li_bottom">
                <div className="buy_buttom">直播套餐</div>
                <div className="buy_desc">Facebook 人气流量套餐</div>
                <div className="buy_price">¥ 900+</div>
              </div>
            </li>
            <li>
              <div className="li_top li_three"></div>
              <div className="li_bottom">
                <div className="buy_buttom">直播套餐</div>
                <div className="buy_desc">YouTube 在线观众包月</div>
                <div className="buy_price">¥ 1000+</div>
              </div>
            </li>
            <li>
              <div className="li_top li_four"></div>
              <div className="li_bottom">
                <div className="buy_buttom">直播套餐</div>
                <div className="buy_desc">Facebook 在线观众包月</div>
                <div className="buy_price">¥ 900+</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="home_package_box two_package">
        <div className="box_top">
          <div className="top_left">YouTube 服 务</div>
          <div className="top_center"></div>
          <div className="top_right">
            <div className="right-l">了解更多</div>
            <div className="right-r"></div>
          </div>
        </div>
        <div className="box_center">
          <ul>
            <li>
              <div className="li_top li_one"></div>
              <div className="li_bottom">
                <div className="buy_buttom">YouTube 服务</div>
                <div className="buy_desc">YouTube 直播号</div>
                <div className="buy_price">¥ 800</div>
              </div>
            </li>
            <li>
              <div className="li_top li_one"></div>
              <div className="li_bottom">
                <div className="buy_buttom">YouTube 服务</div>
                <div className="buy_desc">YouTube 播放观看次数 1000 View</div>
                <div className="buy_price">¥ 25</div>
              </div>
            </li>
            <li>
              <div className="li_top li_one"></div>
              <div className="li_bottom">
                <div className="buy_buttom">YouTube 服务</div>
                <div className="buy_desc">YouTube 指定IP播放 1000次</div>
                <div className="buy_price">¥ 35</div>
              </div>
            </li>
            <li>
              <div className="li_top li_one"></div>
              <div className="li_bottom">
                <div className="buy_buttom">YouTube 服务</div>
                <div className="buy_desc">YouTube 分享、Like赞 100次</div>
                <div className="buy_price">¥ 10</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="home_package_box three_package">
        <div className="box_top">
          <div className="top_left">Facebook 服 务</div>
          <div className="top_center"></div>
          <div className="top_right">
            <div className="right-l">了解更多</div>
            <div className="right-r"></div>
          </div>
        </div>
        <div className="box_center">
          <ul>
            <li>
              <div className="li_top li_one"></div>
              <div className="li_bottom">
                <div className="buy_buttom">Facebook 服务</div>
                <div className="buy_desc">Facebook Page 主页 1000粉丝+赞</div>
                <div className="buy_price">¥ 100</div>
              </div>
            </li>
            <li>
              <div className="li_top li_one"></div>
              <div className="li_bottom">
                <div className="buy_buttom">Facebook 服务</div>
                <div className="buy_desc">Facebook 播放、分享、评论</div>
                <div className="buy_price">¥ 10</div>
              </div>
            </li>
            <li>
              <div className="li_top li_one"></div>
              <div className="li_bottom">
                <div className="buy_buttom">Facebook 服务</div>
                <div className="buy_desc">Facebook 主页点评</div>
                <div className="buy_price">¥ 10</div>
              </div>
            </li>
            <li>
              <div className="li_top li_one"></div>
              <div className="li_bottom">
                <div className="buy_buttom">Facebook 服务</div>
                <div className="buy_desc">Facebook 直播数据流量1000次</div>
                <div className="buy_price">¥ 10</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="home_package_box four_package">
        <div className="box_top">
          <div className="top_left">Instagram 服 务</div>
          <div className="top_center"></div>
          <div className="top_right">
            <div className="right-l">了解更多</div>
            <div className="right-r"></div>
          </div>
        </div>
        <div className="box_center">
          <ul>
            <li>
              <div className="li_top li_one"></div>
              <div className="li_bottom">
                <div className="buy_buttom">Instagram 服务</div>
                <div className="buy_desc">Instagram 华人粉 100个</div>
                <div className="buy_price">¥ 20</div>
              </div>
            </li>
            <li>
              <div className="li_top li_one"></div>
              <div className="li_bottom">
                <div className="buy_buttom">Instagram 服务</div>
                <div className="buy_desc">Instagram 欧美粉 100个</div>
                <div className="buy_price">¥ 10</div>
              </div>
            </li>
            <li>
              <div className="li_top li_one"></div>
              <div className="li_bottom">
                <div className="buy_buttom">Instagram 服务</div>
                <div className="buy_desc">Instagram 未来 100赞 30张</div>
                <div className="buy_price">¥ 120</div>
              </div>
            </li>
            <li>
              <div className="li_top li_one"></div>
              <div className="li_bottom">
                <div className="buy_buttom">Instagram 服务</div>
                <div className="buy_desc">Instagram 赞like 1000个</div>
                <div className="buy_price">¥ 20</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="home_package_box five_package">
        <div className="box_top">
          <div className="top_left">Twitter 服 务</div>
          <div className="top_center"></div>
          <div className="top_right">
            <div className="right-l">了解更多</div>
            <div className="right-r"></div>
          </div>
        </div>
        <div className="box_center">
          <ul>
            <li>
              <div className="li_top li_one"></div>
              <div className="li_bottom">
                <div className="buy_buttom">Twitter 服务</div>
                <div className="buy_desc">Twitter 粉丝 1000个</div>
                <div className="buy_price">¥ 100</div>
              </div>
            </li>
            <li>
              <div className="li_top li_one"></div>
              <div className="li_bottom">
                <div className="buy_buttom">Twitter 服务</div>
                <div className="buy_desc">Twitter 粉丝 100个</div>
                <div className="buy_price">¥ 15</div>
              </div>
            </li>
            <li>
              <div className="li_top li_one"></div>
              <div className="li_bottom">
                <div className="buy_buttom">Twitter 服务</div>
                <div className="buy_desc">Twitter 转发 100次</div>
                <div className="buy_price">¥ 10</div>
              </div>
            </li>
            <li>
              <div className="li_top li_one"></div>
              <div className="li_bottom">
                <div className="buy_buttom">Twitter 服务</div>
                <div className="buy_desc">Twitter 收藏like 100次</div>
                <div className="buy_price">¥ 10</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="home_round">
        <div className="home_round_up"></div>
      </div>
    </div>
  );
}

export default Home;

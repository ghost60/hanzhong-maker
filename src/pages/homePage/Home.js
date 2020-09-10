import React from "react";
import {Card, Carousel, Image} from "antd";
import SiderNav from "../../common/SiderNav";
import '../../styles/Home.scss'

function Home() {
  return (
    <div className='content'>
      <SiderNav />
      <div className="content-main">
        <div className='header-image'>
          <Carousel autoplay>
            <div>
              <img alt='' src='https://img.36krcdn.com/20200726/v2_0157d17a5c194120ac275169c87d8289_img_jpg' />
            </div>
            <div>
              <img alt='' src='https://img.36krcdn.com/20200726/v2_0157d17a5c194120ac275169c87d8289_img_jpg' />
            </div>
            <div>
              <img alt='' src='https://img.36krcdn.com/20200726/v2_0157d17a5c194120ac275169c87d8289_img_jpg' />
            </div>
          </Carousel>
          <div className='header-image-small'>
            { [0,1,2,3].map(i=>{
                return <Image
                  key={i}
                  width={180}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              })
            }
          </div>
        </div>
        <div className='home-flow-list'>
          <Card className='home-flow-item' hoverable style={{ width: 690, height:200 }}>
              <div className='item-content'>
                  <Image src="https://img.36krcdn.com/20200910/v2_4b1633cec4b8406780597ee1e9bf9d8c_img_png?x-oss-process=image/resize,m_mfit,w_432,h_288,limit_0/crop,w_432,h_288,g_center"/>
                <div className=''>

                </div>
              </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Home;
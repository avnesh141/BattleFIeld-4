import React, { useEffect, useState } from 'react'
import "./ServerInfo.css"

function ServerInfo() {
  const [data, setData] = useState({});

  const func = async () => {
    const response = await fetch("/api/server/1");
    const json = await response.json();
    setData(json.serverData);
  }
  useEffect(() => {
    func();
    console.log(data);
  }, [])


  const onHoverRightpanel = (e) => {
    const ele = document.getElementsByClassName('right-panel')[0];
    ele.classList.remove('hide');
    ele.classList.add('show');
  }
  const onMouseleave = (e) => {
    const ele = document.getElementsByClassName('right-panel')[0];
    ele.classList.remove('show');
    ele.classList.add('hide');
  }

  return (
    <div className='server-page' style={{ backgroundImage: `linear-gradient(rgba(16, 16, 16, .6), rgba(16, 16, 16, .6)),url("/assets/601abb0b487fc1bfc56a1c3b_menu__background-30blur.jpg")` }}>
      <div className="left-panel">
        <div className="left-panel-items">
          <ul className='left-list-top left-list'>
            <li className='list-item'>
              <img src="assets/601aafaa108eb614c813203a_side-menu__career.png" alt="" />
              <div className="side-menu__popup"><div className="side-menu__text">Battlefield 5</div></div>
            </li>
            <li className='list-item'>
              <img src="assets/601aafac57edde91d49b301f_side-menu__game-1.png" alt="" />
              <div className="side-menu__popup"><div className="side-menu__text">Battlefield 1</div></div>
            </li>
            <li className='list-item'>
              <img src="assets/601aafabd334e34cd4dbb8ba_side-menu__game-2.png" alt="" />
              <div className="side-menu__popup"><div className="side-menu__text">Battlefield 4</div></div>
            </li>
            <li className='list-item'>
              <img src="assets/601aafab108eb6365513203b_side-menu__game.png" alt="" />
              <div className="side-menu__popup"><div className="side-menu__text">Battlefield Hardline</div></div>
            </li>
            <li className='list-item'>
              <img src="assets/601aafab2823bb5957cc1ffd_side-menu__game-3.png" alt="" />
              <div className="side-menu__popup"><div className="side-menu__text">Career</div></div>
            </li>
            <li className='list-item'>
              <img src="assets/601aafab68a3c97a6a478b8d_side-menu__watch.svg" alt="" />
              <div className="side-menu__popup"><div className="side-menu__text">Watch</div></div>
            </li>
            <li className='list-item'>
              <img src="assets/601aafab332f0ade9870b435_side-menu__news.svg" alt="" />
              <div className="side-menu__popup"><div className="side-menu__text">News</div></div>
            </li>
          </ul>
          <ul className='left-list-bottom left-list'>
            <li className='list-item list-item-bottom'>
              <img src="assets/601aafabd71ff7186d1c97d5_side-menu__help.svg" alt="" />
              <div className="side-menu__popup"><div className="side-menu__text">Help</div></div>
            </li>
            <li className='list-item list-item-bottom'>
              <img src="assets/601aafabc5fc83c1e7f50842_side-menu__quit.svg" alt="" />
              <div className="side-menu__popup"><div className="side-menu__text">Quit</div></div>
            </li>
          </ul>
        </div>
        {/* <div className="bar"> */}
        <div className="left-panel-bar">
          {/* </div> */}
        </div>
      </div>
      <div className="details-panel">
        <div className="head">
          <ul className="path">
            <li> <img src="assets/601ab21dde67c22de2b6d61b_back.svg" alt="" /></li>
            <li>MULTIPLAYER &nbsp; / &nbsp;</li>
            <li>SERVER BROWSER &nbsp; /</li>
          </ul>
          <h1>SERVER INFO</h1>
        </div>

        <div className="server-content">
          <div className="server-titles">
            <div className="server-name"> <h2>! RC3-BASECAMPS</h2></div>
            <div className="location">
              <ul>
                <li><img src="assets/6022d74ce15ae958f20e10a9_america-flag.svg" alt="" /></li>
                <li>CONQUEST LARGE - </li>
                <li>LANCANG DAM -</li>
                <li>CUSTOM -</li>
                <li>60 HZ</li>
              </ul>

            </div>
            <div className="urls">
              Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord https://discord.gg/3r5NK4d
            </div>
          </div>
          <div className="buttons">
            <div className="btn join">
              JOIN
            </div>
            <div className=" btn spectate">
              SPECTATE
            </div>
            <div className="btn join-as-commander">
              JOIN AS COMMANDER
            </div>
            <div className="btn favourite">
              <ul>
                <li>
                  <img className='white-fav' src="assets/601ab1b8abc05e847f1ac43f_favorites-white.svg" alt="" />
                  <img className='black-fav' src="assets/601ab1b8ba5feb6d6e9bb7f6_favorites-black.svg" alt="" />
                </li>
                <li>
                  13672
                </li>
              </ul>
            </div>
          </div>
          <div className="basic-details">
            <div className="players basic-details-item">
              <ul>
                <li>PLAYERS</li>
                <li>60/64</li>
              </ul>
            </div>
            <div className="ping basic-details-item">
              <ul>
                <li>PING</li>
                <li>104ms</li>
              </ul>

            </div>
            <div className="tickrate basic-details-item">
              <ul>
                <li>TICKRATE</li>
                <li>60Hz</li>
              </ul>

            </div>
          </div>
          <div className="settings">
            <div className="table setting">
              Settings
              <div>
                <div className="row">
                  <div>Region</div>
                  <div>EUROPE - DE</div>
                </div>
                <div className="row">
                  <div>PUNKBASTER</div>
                  <div>ON</div>
                </div>
                <div className="row">
                  <div>FAIRFIGHT</div>
                  <div>ON</div>
                </div>
                <div className="row">
                  <div>PASSWORD</div>
                  <div>ON</div>
                </div>
                <div className="row">
                  <div>PRESET</div>
                  <div>ON</div>
                </div>
              </div>
            </div>
            <div className="table advanced">
              Advanced
              <div>
                <div className="row">
                  <div>MINIMAP</div>
                  <div>ON</div>
                </div>
                <div className="row">
                  <div>ONLY SQUAD LEADER SPAWN</div>
                  <div>ON</div>
                </div>
                <div className="row">
                  <div>VEHICLES</div>
                  <div>ON</div>
                </div>
                <div className="row">
                  <div>TEAM BALANCE</div>
                  <div>ON</div>
                </div>
                <div className="row">
                  <div>MINIMAP SPOTTING</div>
                  <div>ON</div>

                </div>
                <div className="row">
                  <div>HUD</div>
                  <div>ON</div>

                </div>
                <div className="row">
                  <div>3D VEHICLE CAM</div>
                  <div>ON</div>
                </div>
                <div className="row">
                  <div>REGENERATIVE HEALTH</div>
                  <div>ON</div>
                </div>
                <div className="row">
                  <div>KILL CAM</div>
                  <div>ON</div>
                </div>
                <div className="row">
                  <div>FRIENDLY FIRE</div>
                  <div>OFF</div>
                </div>
                <div className="row">
                  <div>3D SPOTTING</div>
                  <div>ON</div>
                </div>
                <div className="row">
                  <div>ENEMY NAME TAGS</div>
                  <div>ON</div>
                </div>
              </div>
            </div>
            <div className="table rules">
              Rules
              <div>
                <div className="row">
                  <div> TICKETS</div>
                  <div style={{color:'#f3f300'}}>{data.tickets}</div>
                </div>
                <div className="row">
                  <div>VEHICLE SPAWN DELAY</div>
                  <div style={{color:'#f3f300'}}>{data.vehicle_spawn_delay}</div>
                </div>
                <div className="row">
                  <div>BULLET DAMAGE</div>
                  <div>100</div>
                </div>
                <div className="row">
                  <div>KICK AFTER TEAM KILLS</div>
                  <div>5</div>
                </div>
                <div className="row">
                  <div>PLAYER HEALTH</div>
                  <div>100</div>
                </div>
                <div className="row">
                  <div>PLAYER RESPAWN TIME</div>
                  <div>100</div>
                </div>
                <div className="row">
                  <div>KICK AFTER IDLE</div>
                  <div>300</div>
                </div>
                <div className="row">
                  <div>BAN AFTER KICKS</div>
                  <div>3</div>
                </div>
              </div>
            </div>
          </div>
          <div className="map-rotation">
            <div className='card'>
              <img src="assets/browser__SI-next-image-01.png" alt="" />
              <div className="location-name">CONQUEST LARGE
                DAWNBRAKER</div>
            </div>
            <div className='card'>
              <img src="assets/browser__SI-next-image-02.png" alt="" />
              <div className="location-name">CONQUEST LARGE
                PROPAGANDA</div>
            </div>
            <div className='card'>
              <img src="assets/browser__SI-next-image-03.png" alt="" />
              <div className="location-name">CONQUEST LARGE
                OPERATION LOCKER</div>
            </div>
            <div className='card'>
              <img src="assets/browser__SI-next-image-04.png" alt="" />
              <div className="location-name">CONQUEST LARGE
                LANCANG DAM</div>
            </div>
            <div className='card'>
              <img src="assets/browser__SI-next-image-05.png" alt="" />
              <div className="location-name">CONQUEST LARGE
                SIEGE OF SHANGHAI</div>
            </div>
            <div className='card'>
              <img src="assets/browser__SI-next-image-06.png" alt="" />
              <div className="location-name">CONQUEST LARGE
                GOLMUD RAILWAY</div>
            </div>
            <div className='card'>
              <img src="assets/browser__SI-next-image-01.png" alt="" />
              <div className="location-name">CONQUEST LARGE
                DAWNBRAKER</div>
            </div>
            <div className='card'>
              <img src="assets/browser__SI-next-image-02.png" alt="" />
              <div className="location-name">CONQUEST LARGE
                PROPAGANDA</div>
            </div>
            <div className='card'>
              <img src="assets/browser__SI-next-image-03.png" alt="" />
              <div className="location-name">CONQUEST LARGE
                OPERATION LOCKER</div>
            </div>
            <div className='card'>
              <img src="assets/browser__SI-next-image-04.png" alt="" />
              <div className="location-name">CONQUEST LARGE
                LANCANG DAM</div>
            </div>
            <div className='card'>
              <img src="assets/browser__SI-next-image-05.png" alt="" />
              <div className="location-name">CONQUEST LARGE
                SIEGE OF SHANGHAI</div>
            </div>
            <div className='card'>
              <img src="assets/browser__SI-next-image-06.png" alt="" />
              <div className="location-name">CONQUEST LARGE
                GOLMUD RAILWAY</div>
            </div>
            <div className='card'>
              <img src="assets/browser__SI-next-image-01.png" alt="" />
              <div className="location-name">CONQUEST LARGE
                DAWNBRAKER</div>
            </div>
            <div className='card'>
              <img src="assets/browser__SI-next-image-02.png" alt="" />
              <div className="location-name">CONQUEST LARGE
                PROPAGANDA</div>
            </div>
            <div className='card'>
              <img src="assets/browser__SI-next-image-03.png" alt="" />
              <div className="location-name">CONQUEST LARGE
                OPERATION LOCKER</div>
            </div>
            <div className='card'>
              <img src="assets/browser__SI-next-image-04.png" alt="" />
              <div className="location-name">CONQUEST LARGE
                LANCANG DAM</div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-panel hide" onMouseLeave={onMouseleave} onMouseOver={onHoverRightpanel}>
        <div className="right-item-div">
          <div className="item-right">
            <div className="right-item-name">
              <img src="assets/601ab15999e303e7c202c28c_squad.svg" alt="" />
              <p>SQUAD</p>
            </div>
            <div className="right-item-action">
              <img className='black-join' src="assets/601ab1596100550691c84f76_home__join-black.svg" alt="" />
              <img className='white-join' src="assets/601ab158769fa828e95f98df_home__join-default.svg" alt="" />
              <div className="action">
                <p>Squad join</p>
              </div>
            </div>
          </div>
          <div className="item-right">
            <div className="right-item-name">
              <img src="assets/601ab159d334e32483dbbcbb_online.svg" alt="" />
              <p>ONLINE</p>
            </div>
            <div className="right-item-action">
              <img src="assets/601ab1585908791f051d4af4_home__friend-picture-MaryJane.png" alt="" />
              <div className="action">
                <p>Mary Jane</p>
                <p>Online</p>
              </div>
            </div>
          </div>
          <div className="item-right">
            <div className="right-item-name">
              <img src="assets/601ab15904900760dbfa7f70_offline.svg" alt="" />
              <p>OFFLINE</p>
            </div>
            <div className="right-item-action">
              <img src="assets/601ab1583424fd3ddf23a848_home__friend-picture-420.png" alt="" />
              <div className="action">
                <p>420</p>
                <p>Offline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServerInfo
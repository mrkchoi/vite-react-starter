import React from "react";

import airpods2nd from "../../../public/assets/media/14_compare/compare_airpods_2nd_gen__fw52r8rxrpyu_large_2x.png";
import airpods3rd from "../../../public/assets/media/14_compare/compare_airpods_3rd_gen__dyuzfy04ht0m_large_2x.png";
import airpodsPro2nd from "../../../public/assets/media/14_compare/compare_airpods_pro__e9uzt0mzviem_large_2x.png";
import airpodsMax from "../../../public/assets/media/14_compare/compare_airpods_max__b14s2x6q07rm_large_2x.png";

import adaptive from "../../../public/assets/media/14_compare/icons/icon_adaptive_audio__d8u8yljaa8mu_large_2x.png";
import active from "../../../public/assets/media/14_compare/icons/icon_noise_cancellation__dte2s5scoscy_large_2x.png";
import transparent from "../../../public/assets/media/14_compare/icons/icon_transparency__fdepuo39ruum_large_2x.png";
import conversation from "../../../public/assets/media/14_compare/icons/icon_conversation_awareness__f72duwcnafyy_large_2x.png";
import spatial from "../../../public/assets/media/14_compare/icons/icon_spatial_audio__kmoa5vlnkdmm_large_2x.png";
import sweat from "../../../public/assets/media/14_compare/icons/icon_water_resistent__6yj92ikcoiaa_large_2x.png";
import chargingAirpods2 from "../../../public/assets/media/14_compare/icons/icon_airpods_2nd_gen__by79soh60lqq_large_2x.png";
import chargingAirpodsPro from "../../../public/assets/media/14_compare/icons/icon_airpods_3rd_gen__c9jxrgyqb1me_large_2x.png";
import smartCase from "../../../public/assets/media/14_compare/icons/icon_airpods_max__utl1i3hqs6aq_large_2x.png";

function Compare() {
  return (
    <div className="compare pt-16 sm:pt-24 lg:pt-32">
      <div className="compare__title text-[2rem] sm:text-[2.5rem] lg:text-[3.5vw]">
        Which AirPods are
        <br />
        right for you?
      </div>
      <div className="compare__grid grid-cols-repeat2 sm:grid-cols-repeat4 ml-8 mr-8 gap-x-[24px] gap-y-[24px] overflow-x-hidden sm:gap-x-[34px] sm:gap-y-[53px]">
        {/* AirPods - 2nd Generation */}
        <div className="compare__item airpods-2nd-gen device">
          <div className="compare__deviceWrapper">
            <img src={airpods2nd} alt="" className="compare__deviceImg" />
          </div>
          <div className="compare__deviceContent">
            <div className="compare__deviceTitle">AirPods</div>
            <div className="compare__deviceText">2nd generation</div>
            <div className="compare__devicePrice">$129</div>
            <a href="/" className="compare__deviceBuyBtn">
              Buy
            </a>
            <a href="/" className="compare__deviceLearnMore">
              Learn more{" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="compare__caret--small caret"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.96967 7.46967C10.2626 7.17678 10.7374 7.17678 11.0303 7.46967L15.0303 11.4697C15.3232 11.7626 15.3232 12.2374 15.0303 12.5303L11.0303 16.5303C10.7374 16.8232 10.2626 16.8232 9.96967 16.5303C9.67678 16.2374 9.67678 15.7626 9.96967 15.4697L13.4393 12L9.96967 8.53033C9.67678 8.23744 9.67678 7.76256 9.96967 7.46967Z"
                    fill="#000000"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div className="compare__item airpods-2nd-gen adaptive-audio">—</div>
        <div className="compare__item airpods-2nd-gen anc-transparency">—</div>
        <div className="compare__item airpods-2nd-gen conversation-awareness">
          —
        </div>
        <div className="compare__item airpods-2nd-gen spatial-audio">—</div>
        <div className="compare__item airpods-2nd-gen sweat-and-water">—</div>
        <div className="compare__item airpods-2nd-gen charging">
          <div className="compare__featureWrapper">
            <div className="compare__featureMediaWrapper">
              <img
                src={chargingAirpods2}
                alt=""
                className="compare__featureImg charging"
              />
            </div>
            <div className="compare__featureText">Lightning Charging Case</div>
          </div>
        </div>
        <div className="compare__item airpods-2nd-gen single-charge">
          <div className="compare__singleCharge--title">5 hrs</div>
          <div className="compare__singleCharge--detail">
            Up to 5 hours of listening time with a single charge
          </div>
        </div>
        {/* AirPods - 3nd Generation */}
        <div className="compare__item airpods-3rd-gen device">
          <div className="compare__deviceWrapper">
            <img src={airpods3rd} alt="" className="compare__deviceImg" />
          </div>
          <div className="compare__deviceContent">
            <div className="compare__deviceTitle">AirPods</div>
            <div className="compare__deviceText">2nd generation</div>
            <div className="compare__devicePrice">$169</div>
            <a href="/" className="compare__deviceBuyBtn">
              Buy
            </a>
            <a href="/" className="compare__deviceLearnMore">
              Learn more{" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="compare__caret--small caret"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.96967 7.46967C10.2626 7.17678 10.7374 7.17678 11.0303 7.46967L15.0303 11.4697C15.3232 11.7626 15.3232 12.2374 15.0303 12.5303L11.0303 16.5303C10.7374 16.8232 10.2626 16.8232 9.96967 16.5303C9.67678 16.2374 9.67678 15.7626 9.96967 15.4697L13.4393 12L9.96967 8.53033C9.67678 8.23744 9.67678 7.76256 9.96967 7.46967Z"
                    fill="#000000"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div className="compare__item airpods-3rd-gen adaptive-audio">—</div>
        <div className="compare__item airpods-3rd-gen anc-transparency">—</div>
        <div className="compare__item airpods-3rd-gen conversation-awareness">
          —
        </div>
        <div className="compare__item airpods-3rd-gen spatial-audio">
          <div className="compare__featureWrapper">
            <div className="compare__featureMediaWrapper">
              <img src={spatial} alt="" className="compare__featureImg" />
            </div>
            <div className="compare__featureText">
              Personalized Spatial Audio with dynamic head tracking
            </div>
          </div>
        </div>
        <div className="compare__item airpods-3rd-gen sweat-and-water">
          <div className="compare__featureWrapper">
            <div className="compare__featureMediaWrapper">
              <img src={sweat} alt="" className="compare__featureImg" />
            </div>
            <div className="compare__featureText">
              Sweat and water resistant
            </div>
          </div>
        </div>
        <div className="compare__item airpods-3rd-gen charging">
          <div className="compare__featureWrapper">
            <div className="compare__featureMediaWrapper">
              <img
                src={chargingAirpodsPro}
                alt=""
                className="compare__featureImg charging"
              />
            </div>
            <div className="compare__featureText">
              Lightning Charging Case or MagSafe Charging Case
            </div>
          </div>
        </div>
        <div className="compare__item airpods-3rd-gen single-charge">
          <div className="compare__singleCharge--title">6 hrs</div>
          <div className="compare__singleCharge--detail">
            Up to 6 hours of listening time with a single charge
          </div>
        </div>
        {/* AirPods Pro - 2nd Generation */}
        <div className="compare__item airpods-pro device">
          <div className="compare__deviceWrapper">
            <img src={airpodsPro2nd} alt="" className="compare__deviceImg" />
          </div>
          <div className="compare__deviceContent">
            <div className="compare__deviceTitle">AirPods</div>
            <div className="compare__deviceText">2nd generation</div>
            <div className="compare__devicePrice">$129</div>
            <a href="/" className="compare__deviceBuyBtn">
              Buy
            </a>
            <a href="/" className="compare__deviceLearnMore">
              Learn more{" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="compare__caret--small caret"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.96967 7.46967C10.2626 7.17678 10.7374 7.17678 11.0303 7.46967L15.0303 11.4697C15.3232 11.7626 15.3232 12.2374 15.0303 12.5303L11.0303 16.5303C10.7374 16.8232 10.2626 16.8232 9.96967 16.5303C9.67678 16.2374 9.67678 15.7626 9.96967 15.4697L13.4393 12L9.96967 8.53033C9.67678 8.23744 9.67678 7.76256 9.96967 7.46967Z"
                    fill="#000000"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div className="compare__item airpods-pro adaptive-audio">
          <div className="compare__featureWrapper">
            <div className="compare__featureMediaWrapper">
              <img src={adaptive} alt="" className="compare__featureImg" />
            </div>
            <div className="compare__featureText">Adaptive Audio</div>
          </div>
        </div>
        <div className="compare__item airpods-pro anc-transparency">
          <div className="compare__featureWrapper">
            <div className="compare__featureMediaWrapper">
              <img src={active} alt="" className="compare__featureImg" />
              <img src={transparent} alt="" className="compare__featureImg" />
            </div>
            <div className="compare__featureText">
              Active Noise Cancellation and Transparency Mode
            </div>
          </div>
        </div>
        <div className="compare__item airpods-pro conversation-awareness">
          <div className="compare__featureWrapper">
            <div className="compare__featureMediaWrapper">
              <img src={conversation} alt="" className="compare__featureImg" />
            </div>
            <div className="compare__featureText">Conversation Awareness</div>
          </div>
        </div>
        <div className="compare__item airpods-pro spatial-audio">
          <div className="compare__featureWrapper">
            <div className="compare__featureMediaWrapper">
              <img src={spatial} alt="" className="compare__featureImg" />
            </div>
            <div className="compare__featureText">
              Personalized Spatial Audio with dynamic head tracking
            </div>
          </div>
        </div>
        <div className="compare__item airpods-pro sweat-and-water">
          <div className="compare__featureWrapper">
            <div className="compare__featureMediaWrapper">
              <img src={sweat} alt="" className="compare__featureImg" />
            </div>
            <div className="compare__featureText">
              Sweat and water resistant
            </div>
          </div>
        </div>
        <div className="compare__item airpods-pro charging">
          <div className="compare__featureWrapper">
            <div className="compare__featureMediaWrapper">
              <img
                src={chargingAirpodsPro}
                alt=""
                className="compare__featureImg charging"
              />
            </div>
            <div className="compare__featureText">
              MagSafe Charging Case (USB‑C) with speaker and lanyard loop
            </div>
          </div>
        </div>
        <div className="compare__item airpods-pro single-charge">
          <div className="compare__singleCharge--title">6 hrs</div>
          <div className="compare__singleCharge--detail">
            Up to 6 hours of listening time with a single charge
          </div>
        </div>
        {/* AirPods Max */}
        <div className="compare__item airpods-max device">
          <div className="compare__deviceWrapper">
            <img src={airpodsMax} alt="" className="compare__deviceImg" />
          </div>
          <div className="compare__deviceContent">
            <div className="compare__deviceTitle">AirPods</div>
            <div className="compare__deviceText">2nd generation</div>
            <div className="compare__devicePrice">$129</div>
            <a href="/" className="compare__deviceBuyBtn">
              Buy
            </a>
            <a href="/" className="compare__deviceLearnMore">
              Learn more{" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="compare__caret--small caret"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.96967 7.46967C10.2626 7.17678 10.7374 7.17678 11.0303 7.46967L15.0303 11.4697C15.3232 11.7626 15.3232 12.2374 15.0303 12.5303L11.0303 16.5303C10.7374 16.8232 10.2626 16.8232 9.96967 16.5303C9.67678 16.2374 9.67678 15.7626 9.96967 15.4697L13.4393 12L9.96967 8.53033C9.67678 8.23744 9.67678 7.76256 9.96967 7.46967Z"
                    fill="#000000"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div className="compare__item airpods-max adaptive-audio">—</div>
        <div className="compare__item airpods-max anc-transparency">
          <div className="compare__featureWrapper">
            <div className="compare__featureMediaWrapper">
              <img src={active} alt="" className="compare__featureImg" />
              <img src={transparent} alt="" className="compare__featureImg" />
            </div>
            <div className="compare__featureText">
              Active Noise Cancellation and Transparency Mode
            </div>
          </div>
        </div>
        <div className="compare__item airpods-max conversation-awareness">
          —
        </div>
        <div className="compare__item airpods-max spatial-audio">
          <div className="compare__featureWrapper">
            <div className="compare__featureMediaWrapper">
              <img src={spatial} alt="" className="compare__featureImg" />
            </div>
            <div className="compare__featureText">
              Personalized Spatial Audio with dynamic head tracking
            </div>
          </div>
        </div>
        <div className="compare__item airpods-max sweat-and-water">—</div>
        <div className="compare__item airpods-max charging">
          <div className="compare__featureWrapper">
            <div className="compare__featureMediaWrapper">
              <img
                src={smartCase}
                alt=""
                className="compare__featureImg charging"
              />
            </div>
            <div className="compare__featureText">Lightning Charging Case</div>
          </div>
        </div>
        <div className="compare__item airpods-max single-charge">
          <div className="compare__singleCharge--title">20 hrs</div>
          <div className="compare__singleCharge--detail">
            Up to 20 hours of listening time with a single charge
          </div>
        </div>
      </div>
      <div className="compare__all p-12">
        <a href="/" className="compare__allLink text-[1rem]">
          Compare all AirPods models{" "}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="compare__caret caret w-[1rem]"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.96967 7.46967C10.2626 7.17678 10.7374 7.17678 11.0303 7.46967L15.0303 11.4697C15.3232 11.7626 15.3232 12.2374 15.0303 12.5303L11.0303 16.5303C10.7374 16.8232 10.2626 16.8232 9.96967 16.5303C9.67678 16.2374 9.67678 15.7626 9.96967 15.4697L13.4393 12L9.96967 8.53033C9.67678 8.23744 9.67678 7.76256 9.96967 7.46967Z"
                fill="#000000"
              ></path>
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Compare;

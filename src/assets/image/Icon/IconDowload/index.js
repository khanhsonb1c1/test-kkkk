const IconDownload = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64.007"
      height="61.578"
      viewBox="0 0 64.007 61.578"
    >
      <defs>
        <filter
          id="Path_299"
          x="0"
          y="0"
          width="64.007"
          height="61.578"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="1" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feFlood flood-opacity="0.149" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Path_203"
          x="3.697"
          y="3.516"
          width="56.615"
          height="54.602"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="1" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="2.5" result="blur-2" />
          <feFlood flood-opacity="0.149" />
          <feComposite operator="in" in2="blur-2" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g
        id="Side_Buttons"
        data-name="Side Buttons"
        transform="translate(7.5 6.5)"
      >
        <g transform="matrix(1, 0, 0, 1, -7.5, -6.5)" filter="url(#Path_299)">
          <path
            id="Path_299-2"
            data-name="Path 299"
            d="M24.5,0c13.533,0,24.5,10.427,24.5,23.289,0,7.254-3.49,13.734-9.575,18.469A24.658,24.658,0,0,1,24.5,46.578C10.971,46.578,0,36.151,0,23.289S10.971,0,24.5,0Z"
            transform="translate(7.5 6.5)"
            fill="#fff"
            opacity="0.3"
          />
        </g>
        <g
          id="Group_123"
          data-name="Group 123"
          transform="translate(4.197 4.016)"
        >
          <g
            transform="matrix(1, 0, 0, 1, -11.7, -10.52)"
            filter="url(#Path_203)"
          >
            <path
              id="Path_203-2"
              data-name="Path 203"
              d="M20.307,0C31.523,0,40.615,8.641,40.615,19.3S31.523,38.6,20.307,38.6,0,29.961,0,19.3,9.092,0,20.307,0Z"
              transform="translate(11.7 10.52)"
              fill="#fff"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
          </g>
          <path
            id="Path_328"
            data-name="Path 328"
            d="M0,10.062V0"
            transform="translate(20.428 10.481)"
            fill="none"
            stroke="#141414"
            stroke-linecap="round"
            stroke-width="2"
          />
          <path
            id="Path_329"
            data-name="Path 329"
            d="M-1315.015-710.748l3.133,3.289,2.976-3.289"
            transform="translate(1332.278 728.464)"
            fill="none"
            stroke="#141414"
            stroke-linecap="round"
            stroke-width="2"
          />
          <path
            id="Path_330"
            data-name="Path 330"
            d="M16.462-2.8V0H0V-2.8"
            transform="translate(12.229 25.318)"
            fill="none"
            stroke="#141414"
            stroke-linecap="round"
            stroke-width="2"
          />
        </g>
      </g>
    </svg>
  );
};

export default IconDownload;

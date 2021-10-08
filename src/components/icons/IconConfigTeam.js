import * as React from 'react';

function TeamConfig(props) {
  const { color } = props;

  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0)" fill={color}>
        <path d="M14 4.87a4.266 4.266 0 00-4.26 4.26c0 2.35 1.91 4.26 4.26 4.26 2.35 0 4.26-1.91 4.26-4.26 0-2.35-1.91-4.26-4.26-4.26zm0 7.304a3.048 3.048 0 01-3.043-3.044A3.048 3.048 0 0114 6.087a3.048 3.048 0 013.043 3.043A3.048 3.048 0 0114 12.173zM22.522 9.74a3.048 3.048 0 00-3.044 3.043 3.048 3.048 0 003.044 3.043 3.048 3.048 0 003.043-3.043 3.048 3.048 0 00-3.043-3.044zm0 4.869a1.828 1.828 0 01-1.826-1.826c0-1.007.819-1.826 1.826-1.826 1.007 0 1.826.819 1.826 1.826 0 1.007-.82 1.826-1.826 1.826zM5.565 9.74a3.047 3.047 0 00-3.044 3.043 3.048 3.048 0 003.044 3.043 3.048 3.048 0 003.043-3.043 3.047 3.047 0 00-3.043-3.044zm0 4.869a1.828 1.828 0 01-1.826-1.826c0-1.007.819-1.826 1.826-1.826 1.006 0 1.826.819 1.826 1.826 0 1.007-.82 1.826-1.826 1.826zM14 14.608c-4.363 0-7.913 3.55-7.913 7.913a.609.609 0 001.217 0A6.703 6.703 0 0114 15.826a6.703 6.703 0 016.696 6.695.609.609 0 001.217 0c0-4.363-3.55-7.913-7.913-7.913z" />
        <path d="M22.522 17.043a5.478 5.478 0 00-2.838.791.61.61 0 00.632 1.04 4.245 4.245 0 012.206-.614c2.35 0 4.26 1.912 4.26 4.261a.609.609 0 001.218 0 5.485 5.485 0 00-5.478-5.478zM8.315 17.833a5.482 5.482 0 00-2.837-.79A5.485 5.485 0 000 22.521a.609.609 0 001.217 0 4.265 4.265 0 016.466-3.647.61.61 0 00.632-1.041z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h28v28H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

TeamConfig.defaultProps = {
  color: '#4F5769',
};

export default TeamConfig;

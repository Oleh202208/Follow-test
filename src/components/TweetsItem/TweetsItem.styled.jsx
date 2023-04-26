import { StyledBtn } from '../../components/Button/Button.styled';
import styled from 'styled-components';
import * as backgroundImage from '../../images/logo.png';
import * as bgImageLarge from '../../images/logo@2x.png';
import * as goItLogo from '../../images/Logo.svg';

export const Item = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  padding-top: 178px;
  box-sizing: border-box;
  font-weight: 500;
  color: #ebd8ff;

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  background-image: ${`url(${goItLogo.default})`},
    ${`url(${backgroundImage.default})`},
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);

  background-size: 76px 22px, 308px 168px, 100%;
  background-position: top 20px left 20px, top 28px left 36px, 100%;
  background-repeat: no-repeat;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${`url(${goItLogo.default})`},
      ${`url(${bgImageLarge.default})`},
      linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  }

  ::before {
    content: '';
    position: absolute;
    top: 214px;
    left: 0px;

    width: 380px;
    height: 8px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  bottom: 36px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Image = styled.img`
  display: block;
  position: absolute;
  top: 178px;
  left: 150px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border: 4px solid #ebd8ff;
`;

export const TweetsText = styled.p`
  font-size: 20px;
  line-height: 24px;
  margin: 0;
  display: block;
  text-transform: uppercase;
  color: #ebd8ff;
  margin-bottom: 16px;
`;

export const FollowBtn = styled(StyledBtn)`
  display: block;
  width: 196px;
  height: 50px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  background-color: ${props => (props.isActive ? '#5cd3a8' : '#ebd8ff')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
`;

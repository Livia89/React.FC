import styled from 'styled-components';
import { space, SpaceProps, typography, TypographyProps } from 'styled-system';

type TextPros = TypographyProps & SpaceProps;

export const Text = styled.p<TextPros>`
  font-size: 14px;
  color: #fff;
  ${typography}
  ${space}
`;

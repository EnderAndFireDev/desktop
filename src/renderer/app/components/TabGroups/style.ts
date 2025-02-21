import styled from 'styled-components';
import { icons } from '../../constants';
import { centerIcon } from '~/shared/mixins';

export const StyledTabGroups = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const AddTabGroup = styled.div`
  width: 42px;
  height: 42px;
  border: 1px #42424252 solid;
  transition: background-color 0.3s;
  opacity: 0.54;
  border-radius: 50px;
  ${centerIcon(24)};
  background-image: url(${icons.add});
  transition: 0.1s opacity;
  filter: invert(100%);
  margin-bottom: 8px;

  &:hover {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.12);
  }
`;

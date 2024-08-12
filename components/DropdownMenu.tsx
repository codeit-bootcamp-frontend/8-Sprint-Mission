import { useState } from "react";
import styled from "styled-components";

export default function DropdownMenu({
  onSortSelection,
  selectedSort,
}: {
  onSortSelection: (sortType: string) => void;
  selectedSort: string;
}) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <SortButtonWrapper>
      <SortDropdownTriggerButton onClick={toggleDropdown}>
        {selectedSort === "recent" ? "최신순" : "인기순"}
        <span>▼</span>
      </SortDropdownTriggerButton>

      {isDropdownVisible && (
        <StyledDropdownMenu>
          <DropdownItem
            onClick={() => {
              onSortSelection("recent");
              setIsDropdownVisible(false);
            }}
          >
            최신순
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              onSortSelection("like");
              setIsDropdownVisible(false);
            }}
          >
            인기순
          </DropdownItem>
        </StyledDropdownMenu>
      )}
    </SortButtonWrapper>
  );
}

// styled-components
const SortButtonWrapper = styled.div`
  position: relative;
`;

const SortDropdownTriggerButton = styled.button`
  width: 130px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 12px 20px;
  font-size: 16px;
  font-family: "Pretendard";
  color: #1f2937;
  background-color: #ffffff;
`;

const StyledDropdownMenu = styled.div`
  position: absolute;
  top: 110%;
  right: 0;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 99;
`;

const DropdownItem = styled.div`
  width: 130px;
  height: 44px;
  padding: 12px 20px;
  border-bottom: 1px solid #e5e7eb;
  font-size: 16px;
  color: #1f2937;
  text-align: center;
  cursor: pointer;

  :last-child {
    border-bottom: none;
  }
`;

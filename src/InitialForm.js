import { useState } from "react";

export default function InitialForm() {
  const [modeSelected, setModeSelected] = useState("5:5");
  const [timeLimit, setTimeLimit] = useState("ON");

  // console.log("modeSelected: " + modeSelected);

  function handleModeClick(e) {
    // console.log("e.currentTarget:");
    // console.log(e.currentTarget);
    // console.log(e.currentTarget.dataset);
    setModeSelected(e.currentTarget.dataset.mode);
  }

  function handleTimeLimitClick(e) {
    setTimeLimit(e.currentTarget.dataset.mode);
  }

  return (
    <form className="form">
      <div className="form-team-name form-team-blue">
        <h2>블루팀 이름 입력</h2>
        <input
          type="text"
          name="team-blue"
          maxLength={50}
          placeholder="블루팀의 이름을 입력해주세요."
          required
        />
      </div>
      <div className="form-team-name form-team-red">
        <h2>레드팀 이름 입력</h2>
        <input
          type="text"
          name="team-blue"
          maxLength={50}
          placeholder="레드팀의 이름을 입력해주세요."
          required
        />
      </div>
      <div className="form-mode">
        <h2>모드</h2>
        <ConfigButtonGroup>
          <ConfigButton
            mode="SOLO"
            onClick={handleModeClick}
            isSelected={"SOLO" === modeSelected}
          />
          <ConfigButton
            mode="1:1"
            onClick={handleModeClick}
            isSelected={"1:1" === modeSelected}
          />
          <ConfigButton
            mode="5:5"
            onClick={handleModeClick}
            isSelected={"5:5" === modeSelected}
          />
        </ConfigButtonGroup>
      </div>
      <div className="form-time-limit">
        <h2>시간 제한</h2>
        <ConfigButtonGroup>
          <ConfigButton
            mode="ON"
            onClick={handleTimeLimitClick}
            isSelected={"ON" === timeLimit}
          />
          <ConfigButton
            mode="OFF"
            onClick={handleTimeLimitClick}
            isSelected={"OFF" === timeLimit}
          />
        </ConfigButtonGroup>
      </div>
      <div className="form-submit">
        <button>
          <span>모의밴픽 방 생성</span>
        </button>
      </div>
    </form>
  );
}

function ConfigButtonGroup({ children }) {
  return <div className="form-btn-group">{children}</div>;
}

function ConfigButton({ mode, onClick, isSelected }) {
  return (
    <div
      className={"form-btn" + (isSelected ? " form-btn--selected" : "")}
      data-mode={mode}
      onClick={onClick}
    >
      <span>{mode}</span>
    </div>
  );
}

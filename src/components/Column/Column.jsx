import Card from "../Card/Card";
import * as S from "./Column.styled";

function Column() {
  // const filtertasks = tasks.filter((task) => task.status === title);

  return (
    <S.Column>
      {/* <S.ColumnRow> */}
        {/* <S.Title>{title}</S.Title>
      </S.ColumnRow>
      <S.Cards>
        {filtertasks.map((task) => {
          return <Card key={task._id} task={task} />;
        })}
      </S.Cards> */}
    </S.Column>
  );
}

export default Column;

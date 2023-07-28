import React, { useEffect } from "react";
import styles from "./CalendarSidebarPanel.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/redux-app/hooks";
import {
  getDayDateByDate,
  getDayDateByNumbers,
} from "../../../utils/date-calculate";
import Text from "../../atoms/Text/Text";
import { languages } from "../../../languages/languages";
import { postNewEvent } from "../../../redux/features/calendarEvents/event-slice";
import { setModalVisible } from "../../../redux/features/modal/modal-slice";
import { InputRadio } from "../../atoms/InputRadio/InputRadio";
import { CalendarEvent, DayDate } from "../../../types/types";
import { useForm } from "react-hook-form";

export const CalendarSidebarPanel: React.FC = () => {
  const dispatch = useAppDispatch();
  const { weekDays, monthsNames } = languages.PL;
  const selectedDay: DayDate | null = useAppSelector(
    (state) => state.slectedDate.selectedDay
  );

  const todayDate = getDayDateByDate(new Date());
  const { day, month, year, weekday } = selectedDay
    ? selectedDay.date
    : todayDate.date;

  const openModal = () => {
    dispatch(setModalVisible({ component: <h1>hello</h1> }));
  };

  const { handleSubmit, register, control, watch } = useForm({
    defaultValues: {
      type: "",
      type1: "",
    },
  });

  const tt = watch("type");
  console.log(tt);
  return (
    <div className={styles.wrapper}>
      <div className={styles.dateInfo}>
        <Text textLarge>{year}</Text>
        <Text primaryDefault xSmallBold>{`${day} ${monthsNames[month]}`}</Text>
        <Text textLarge>{weekDays[weekday]}</Text>
      </div>
      {/* <input type="radio" {...register("type")} />
      <input type="radio" {...register("type1")} /> */}
      <InputRadio
        register={register("type")}
        control={control}
        label={"nowy "}
      />
      <button onClick={openModal}>add todo</button>
    </div>
  );
};

import React from "react";
import "./schedulePage.css";

export const SchedulePage: React.FC = () => {
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>День недели
                        <br/>
                        Дата
                    </th>
                    <th>Час</th>
                    <th>Предмет</th>
                    <th>Преподаватель</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td rowSpan={3}>Понедельник <br/> 12.02.2024</td>
                    <td>12 <sup>40</sup></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>15 <sup>55</sup></td>
                    <td>К.р Информационные технологии и психология управления</td>
                    <td>Каф.АСОИ,к.5. <br/>Леванцов В.Н.</td>
                </tr>
                <tr>
                    <td>16 <sup>20</sup></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td rowSpan={3}>Вторник
                        <br/>13.02.2024
                    </td>
                    <td>9 <sup>00</sup></td>
                    <td> Экзамен Информационные технологии и психология управления</td>
                    <td>Каф.АСОИ,к.5. <br/>Леванцов В.Н.</td>
                </tr>
                <tr>
                    <td>10 <sup>45</sup></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>12 <sup>55</sup></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td rowSpan={3}>Среда
                        <br/>14.02.2024
                    </td>
                    <td>9 <sup>00</sup></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>10 <sup>45</sup></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>12 <sup>55</sup></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>

            <table>
                <thead>
                <tr>
                    <th>Предмет</th>
                    <th>Преподаватель</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Информационные технологии и психология управления</td>
                    <td>Леванцов В.Н.</td>
                </tr>
                <tr>
                    <td>Разработка web приложений</td>
                    <td>Кучеров А.И.</td>
                </tr>
                </tbody>
            </table>
        </>
    );
}
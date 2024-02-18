import React from "react";
import {Box, Heading, Image, ListItem, UnorderedList} from "@chakra-ui/react";
import "./facultyPage.css"

export const FacultyPage: React.FC = () => {
    return (
        <Box className={"faculty-block"}>
            <div>
                <Heading as='h4' size='md'>Кафедра АСОИ обеспечивает учебный процесс по одноименной
                    специальности</Heading>
                <UnorderedList>
                    <ListItem>1-53 01 02 «Автоматизированные системы обработки информации» со
                        специализациями:</ListItem>
                    <ListItem>1-53 01 02 01 «Автоматизированные системы обработки и отображения информации»,</ListItem>
                    <ListItem>1-53 01 02 03 «Корпоративные сети и системы».</ListItem>
                </UnorderedList>

                По окончанию обучения выпускники получают профессиональную квалификацию
                «Инженер по информационным технологиям».
            </div>

            <div>
                <Heading as='h4' size='md'>Формы обучения</Heading>
                <UnorderedList>
                    <ListItem>очная - 4 года;</ListItem>
                    <ListItem>заочная дистанционная - 5 лет;</ListItem>
                    <ListItem>заочная сокращенная - 4 года;</ListItem>
                    <ListItem>заочная сокращенная дистанционная - 4 года.</ListItem>
                </UnorderedList>
            </div>

            <div>
                <Heading as='h4' size='md'>Области работы выпускников</Heading>
                <UnorderedList>
                    <ListItem>опромышленное программирование:</ListItem>
                    <ListItem>разработка web–приложений на платформах Java, .NET, PHP;</ListItem>
                    <ListItem>автоматизация бизнес–процессов средствами ERP–системы «1C: Управление производственным предприятием 8»;</ListItem>
                    <ListItem>системное администрирование:</ListItem>
                    <ListItem>проектирование и обслуживание корпоративных сетей;</ListItem>
                    <ListItem>диагностика и устранение неисправностей компьютерных систем и сетей:</ListItem>
                    <ListItem>обработка мультимедийной информации:</ListItem>
                    <ListItem>компьютерная графика и анимация, монтаж аудио и видео данных;</ListItem>
                    <ListItem>web–дизайн.</ListItem>
                </UnorderedList>
            </div>

            <div>
                <Heading as='h4' size='md'>Места распределения выпускников</Heading>

                <UnorderedList>
                    <ListItem>ЭПАМ Системз, ИВА-Гомель, IT Support Me, Эксадел и другие</ListItem>
                    <ListItem>ГБСофт, БелКриптСофт, ЭлитСофт, Афалина;</ListItem>
                    <ListItem>Белтелеком, Велком, ТВКом, МТС;</ListItem>
                    <ListItem>Беларуснефть, Гомельэнерго, Гомельоблгаз, Гомельводоканал и другие.</ListItem>
                </UnorderedList>
            </div>

            <div>
                <Heading as='h4' size='md'>Фото сотрудников кафедры на начало 2010 года</Heading>
                <Image
                    src={"https://asoi.gsu.by/sites/physics__asoi/files/styles/slider/public/images/slides/2021-05/sostav_kafedry2020_0.jpg?itok=25z-mqlt"}
                />
            </div>

            <div>
                <Heading as='h4' size='md'>Историческая справка</Heading>
                Кафедра АСОИ создана в 1988 году на физическом факультете на основе кафедры технических средств
                обработки
                экономической информации экономического факультета. Первым заведующим кафедрой был избран доцент Иванюк
                Алексей Иванович. С 1993 года становлением специальности занимался кандидат технических наук, доцент
                Демиденко Олег Михайлович.
                <Image
                    src={"https://asoi.gsu.by/sites/physics__asoi/files/inline-images/demidenko_0.gif"}
                />
            </div>
        </Box>
    );
}
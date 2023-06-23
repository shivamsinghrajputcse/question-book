USE devDB;

-- Uncomment the following lines before docker compose to resetup the database

-- DROP TABLE IF EXISTS `institute`;
-- DROP TABLE IF EXISTS `course`;
-- DROP TABLE IF EXISTS `institute_course`;
-- DROP TABLE IF EXISTS `question_paper`;


CREATE TABLE `institute` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `institute_name` varchar(255) NOT NULL,
  `alt_name` JSON,
  `website` text,
  `country` varchar(255),
  `state` varchar(255)
);

-- Populate `institute` table
INSERT INTO `institute` (`institute_name`, `alt_name`, `website`, `country`, `state`)
VALUES ('Demo Institute', '["demo-alt_name1", "demo-alt_name2", "demo-alt_name3"]', 'https://www.demo.website.com/', 'demo-country', 'demo-state'),
       ('National Institute of Technology Jamshedpur', '["NIT Jamshedpur", "NITJSR", "NIT Jam"]', 'https://www.nitjsr.ac.in/', 'India', 'Jharkhand');


CREATE TABLE `course` (
  `course_id` integer AUTO_INCREMENT PRIMARY KEY ,
  `course_name` varchar(255),
  `synonyms` JSON
);


CREATE TABLE `institute_course` (
  `institute_id` integer,
  `course_id` integer,
  PRIMARY KEY (`institute_id`, `course_id`)
);

ALTER TABLE `institute_course` ADD FOREIGN KEY (`institute_id`) REFERENCES `institute` (`id`);

ALTER TABLE `institute_course` ADD FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`);


-- Populate `course` table
INSERT INTO `course` (`course_name`, `synonyms`)
VALUES ('demo Course 1', '["demoCourse1 Alt 1", "demoCourse1 Alt 2"]'),
       ('demo Course 2', '["demoCourse2 Alt 1", "demoCourse2 Alt 2"]'),
       ('demo Course 3', '["demoCourse3 Alt 1", "demoCourse3 Alt 2"]');

-- Populate `institute_course` table
INSERT INTO `institute_course` (`institute_id`, `course_id`)
VALUES (1, 1),
       (1, 2);


CREATE TABLE `question_paper` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `url` text,
  `year` varchar(4),
  `semester` varchar(6),
  `exam_type` varchar(10),
  `title` varchar(255),
  `institute_id` integer,
  `course_id` integer
);


ALTER TABLE `question_paper` ADD FOREIGN KEY (`institute_id`) REFERENCES `institute` (`id`);

ALTER TABLE `question_paper` ADD FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`);

-- Populate `question_paper` table
INSERT INTO `question_paper` (`url`, `year`, `semester`, `exam_type`, `title`, `institute_id`, `course_id`)
VALUES ('https://github.com/debasishbsws/question-book/blob/main/data/demo_institute/demo_course_1/2022/spring/ENDSEM-Demo_Question_Paper_Title_1.pdf', '2022', 'Spring', 'ENDSEM', 'DEMO Question Paper Title 1', 1, 1),
       ('https://github.com/debasishbsws/question-book/blob/main/data/demo_institute/demo_course_1/2022/spring/MIDSEM-Demo_Question_Paper_Title_1.pdf', '2022', 'Spring', 'MIDSEM', 'DEMO Question Paper Title 1', 1, 1),
       ('https://github.com/debasishbsws/question-book/blob/main/data/demo_institute/demo_course_1/2022/spring/MIDSEM-Demo_Question_Paper_Title_2.pdf', '2022', 'Spring', 'MIDSEM', 'DEMO Question Paper Title 2', 1, 1),
       ('https://github.com/debasishbsws/question-book/blob/main/data/demo_institute/demo_course_1/2022/autumn/ENDSEM-Demo_Question_Paper_Title_3.pdf', '2022', 'Autumn', 'ENDSEM', 'DEMO Question Paper Title 3', 1, 1),
       ('https://github.com/debasishbsws/question-book/blob/main/data/demo_institute/demo_course_1/2021/autumn/ENDSEM-Demo_Question_Paper_Title_1.pdf', '2021', 'Autumn', 'ENDSEM', 'DEMO Question Paper Title 1', 1, 1),
       ('https://github.com/debasishbsws/question-book/blob/main/data/demo_institute/demo_course_2/2021/spring/ENDSEM-Demo_Question_Paper_Title_4.pdf', '2021', 'Spring', 'ENDSEM', 'DEMO Question Paper Title 4', 1, 2);

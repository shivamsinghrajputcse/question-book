CREATE TABLE `address` (
  `id` integer PRIMARY KEY,
  `institute_id` integer,
  `google_maps` text,
  `address_street` varchar(255),
  `address_state` varchar(255),
  `address_country` varchar(255),
  `address_postal_code` varchar(15)
);

CREATE TABLE `institute` (
  `id` integer PRIMARY KEY,
  `institute_name` varchar(255) NOT NULL,
  `alt_name` JSON,
  `address_id` integer
);

CREATE TABLE `institute_course` (
  `institute_id` integer,
  `course_id` integer,
  PRIMARY KEY (`institute_id`, `course_id`)
);

CREATE TABLE `course` (
  `course_id` integer PRIMARY KEY,
  `course_name` varchar(255),
  `synonyms` JSON
);

CREATE TABLE `question_paper` (
  `id` integer PRIMARY KEY,
  `url` text,
  `year` varchar(4),
  `semester` varchar(6),
  `exam_type` varchar(10),
  `title` varchar(255),
  `institute_id` integer,
  `course_id` integer
);

ALTER TABLE `address` ADD FOREIGN KEY (`institute_id`) REFERENCES `institute` (`id`);

ALTER TABLE `institute` ADD FOREIGN KEY (`address_id`) REFERENCES `address` (`id`);

ALTER TABLE `institute_course` ADD FOREIGN KEY (`institute_id`) REFERENCES `institute` (`id`);

ALTER TABLE `institute_course` ADD FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`);

ALTER TABLE `question_paper` ADD FOREIGN KEY (`institute_id`) REFERENCES `institute` (`id`);

ALTER TABLE `question_paper` ADD FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`);
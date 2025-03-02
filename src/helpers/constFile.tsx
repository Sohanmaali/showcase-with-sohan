// =================================PROFILE SECTION=================================

import {
  IoCalendarOutline,
  IoLocationOutline,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoMailOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";

export const profileImage = "/assets/images/sohan.jpg";

export const typingWords = ["Web Developer", "Software Developer"];

export const contactDetails = [
  {
    icon: IoMailOutline,
    label: "Email",
    value: "sohanmaali144@gmail.com",
    link: "mailto:sohanmaali4@gmail.com",
  },
  {
    icon: IoPhonePortraitOutline,
    label: "Phone",
    value: "+91 - 6232389832",
    link: "tel:+916232389832",
  },
  { icon: IoCalendarOutline, label: "Birthday", value: "Oct 08, 2002" },
  {
    icon: IoLocationOutline,
    label: "Location",
    value: "Amla, Khategaon, Dewas",
  },
];

export const socialLinks = [
  { icon: IoLogoGithub, link: "https://github.com/Sohanmaali" },
  {
    icon: IoLogoLinkedin,
    link: "https://www.linkedin.com/in/sohan-maali1/",
  },
  {
    icon: IoLogoInstagram,
    link: "https://www.instagram.com/sohan.maali1",
  },
];

export const resumeLink = "/assets/file/Sohan_Maali_Resume.pdf";
// =================================LEFT SIDE BAR END=================================

// =================================NAVBAR SECTION=================================
export const navLinks = [
  "/",
  "/resume",
  "/project",
  "/code",
  "/gallery",
  "/blog",
  "/contact",
];

// =================================ABOUT PAGE=================================
export const aboutDetails = [
  "Hey there, I'm Sohan Maali, a MERN Stack Developer at Foduu. I have a passion for building scalable web applications and crafting seamless user experiences. My journey in development revolves around turning complex challenges into elegant, high-performing solutions.",
  "With a keen interest in modern web technologies, I am constantly refining my skills, staying up to date with industry trends, and exploring innovative approaches to development. Beyond coding, I’m always eager to collaborate, learn, and contribute to projects that push the boundaries of web technology.",
];

export const expertiseCard = [
  {
    image:
      "https://portfoliogallary.onrender.com/assets/images/icon-design.svg",
    heading: "Full Stack Development",

    description:
      "I am a skilled MERN stack developer with experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I specialize in API integration, server-side rendering, and database management.",
  },
  {
    image:
      "https://portfoliogallary.onrender.com/assets/images/icon-design.svg",
    heading: "Java Development",
    description:
      "I am a skilled Java developer with experience in building applications using Java, Spring Boot, Hibernate, and RESTful APIs. I specialize in backend development, database management, and API integration.",
  },
  {
    image:
      "https://portfoliogallary.onrender.com/assets/images/icon-design.svg",
    heading: "GitHub",
    description:
      "GitHub is essential for version control and collaboration. Its intuitive interface, pull requests, and issue tracking simplify development. Continuous integration ensures up-to-date code, making GitHub vital to my workflow.",
  },
  {
    image:
      "https://portfoliogallary.onrender.com/assets/images/icon-design.svg",
    heading: "Open Source Contributor",
    description:
      "Open Source is the future. I contribute to open-source projects on weekends, learning from best practices while helping others and giving back to the community.",
  },
];

export const teacherTestimonials = [
  {
    image: "/assets/teacher/vaibhav_sir.jpg",
    name: "Vaibhav sir",
    about:
      "Amidst books, laughter, and endless dreams, Teachers' guidance,like a gentle stream. Their dedication, a beacon so bright,illuminates our futures shining light.",
  },
  {
    image: "/assets/teacher/pawan_sir.jpg",
    name: "Pawan sir",
    about:
      "Under the mentorship of Pawan Sahu Sir, a Java expert, honed skills in Java programming with a meticulous and insightful approach. Pawan's commitment to excellence and expertise in navigating Java complexities contributed significantly to a deeper understanding of robust and scalable solutions.",
  },
  {
    image: "/assets/teacher/gourav_sir.jpg",
    name: "Gourav sir",
    about:
      "Gourav Kothari Sir, my Frontend Technology trainer, is a masterful guide, blending expertise with passion to create a beautiful learning journey through the intricate world of web development. His teachings transform code into a harmonious masterpiece, making the complex dance of HTML, CSS, and JavaScript a captivating art form.",
  },
  {
    image: "/assets/teacher/ayush_sir.jpeg",
    name: "Ayush Sir",
    about:
      "Managed by Ayush Rajput Sir, a seasoned and dynamic manager known for fostering a collaborative and goal-driven work environment. Under his leadership, gained valuable insights into project management, team coordination, and strategic decision-making. Ayush's mentorship has contributed to the development of effective problem-solving skills and a results-oriented mindset. His managerial guidance has been instrumental in achieving project milestones and maintaining a high standard of work efficiency.",
  },
];

export const technologyTestimonials = [
  {
    name: "JavaScript",
    link: "",
    url: "/assets/images/technology/javascript-horizontal.svg",
  },
  {
    name: "Nextjs",
    link: "",
    url: "/assets/images/technology/nextjs-2.svg",
  },
  {
    name: "React",
    link: "",
    url: "/assets/images/technology/logo-react.svg",
  },
  {
    name: "Nest js",
    link: "",
    url: "/assets/images/technology/NestJS-logo-wordmark.svg",
  },
  {
    name: "Bootstrap",
    link: "",
    url: "/assets/images/technology/Bootstrap_logo.svg",
  },
  {
    name: "MongoDb",
    link: "",
    url: "/assets/images/technology/MongoDBCompass.svg",
  },
  {
    name: "hibernate",
    link: "",
    url: "/assets/images/technology/hibernate-ar21.svg",
  },
  {
    name: "java",
    link: "",
    url: "/assets/images/technology/java-horizontal.svg",
  },

  {
    name: "mysql",
    link: "",
    url: "/assets/images/technology/mysql-horizontal.svg",
  },
  {
    name: "JavaScript",
    link: "",
    url: "/assets/images/technology/w3_css-ar21.svg",
  },

  {
    name: "html",
    link: "",
    url: "/assets/images/technology/w3_html5-ar21 (1).svg",
  },
];

// =================================RESUME PAGE=================================

export const educationData = [
  {
    institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal",
    link: "https://www.rgpv.ac.in/",
    duration: "2023-2025",
    description:
      "Currently pursuing an MCA (Master of Computer Applications) at Patel College Of Science & Technology Indore. Demonstrated excellence in coursework related to software development, database management, algorithms, and computer networking.",
  },
  {
    institution: "Barkatullah Vishwavidyalaya, Bhopal",
    link: "http://www.bubhopal.ac.in/1068/Home",
    duration: "2020-2023",
    description:
      "Completed a BCA (Bachelor of Computer Applications) from Harda Adarsh College. Gained expertise in programming, database management, software development, and computer networking.",
  },
  {
    institution: "Govt High School Khategaon",
    link: "https://schools.org.in/dewas/23230620403/govt-hss-excellence-khategaon.html",
    duration: "2019-2020",
    description:
      "Completed 12th Grade with a specialization in the Science Stream, demonstrating a strong foundation in Mathematics and Sciences. Achieved 75% in the 12th-grade board examinations.",
  },
  {
    institution: "Gaytri Vidya Mandir, Khategaon",
    duration: "2017-2018",
    description:
      "Completed 10th Grade with a specialization in Computer Science, achieving 75% in the 10th-grade board examinations.",
  },
];

export const experiences = [
  {
    company: "InfoBeans Foundation Indore",
    link: "https://www.infobeans.com/infobeans-foundation/",
    duration: "April 2023–June 2024",
    description:
      "Completed ITEP training at InfoBeans Foundation, Indore. Gained hands-on experience in software development, programming, and IT solutions, enhancing skills in web development, database management, and software engineering best practices.",
  },
  {
    company: "FODUU - Web Design Company India",
    link: "https://www.foduu.com/",
    duration: "July 2024–Present",
    description:
      "Responsible for web design and development, contributing to various projects with expertise in front-end and back-end technologies.",
  },
];

// =================================PROJECT PAGE =================================

export const projectDetails = [
  {
    name: "carmucho",
    details:
      "Developed a user-friendly car booking platform with advanced search, filters, and location-based availability. Integrated a real-time chat system using Socket.IO with typing indicators, read receipts, and user-specific conversations. Implemented real-time notifications for bookings and messages. Built an admin dashboard to manage inventory, bookings, and customer interactions.",
    technology: [
      "Nest",
      "Next",
      "MongoDB",
      "Socket.io",
      "Bootstrap",
      "Typescript",
      "Redis",
      "MongoDB",
    ],
    image: "/assets/images/carmucho.png",
    url: "https://carmucho.com/",
  },
  {
    name: "scrapify",
    details:
      "Developed a full-stack MERN web application to streamline scrap material sales. Implemented user authentication and role-based access control for sellers and admins. Built a dynamic dashboard for managing listings, prices, and transactions. Integrated secure payments, optimized RESTful APIs, and enhanced UX with a responsive design and real-time notifications.",
    technology: ["Nest", "Next", "MongoDB", "Typescript", "Tailwind css"],
    image: "/assets/images/scrapify.png",
    url: "https://scrapify-livb.onrender.com/",
  },
  {
    name: "AOK",
    details:
      "Developed an online shop management system for efficient inventory, orders, and customer management. Implemented user authentication and role-based access for admins and staff. Integrated secure payment gateways and optimized RESTful APIs for seamless operations. Designed a responsive UI with real-time stock updates, order tracking, and automated notifications for users.",
    technology: ["Nest", "React", "Mongodb", "Typescript", "JavaScript"],
    image: "/assets/images/aok.png",
    url: "https://aok-ui.onrender.com",
  },
];

// =================================CODE PAGE=================================

export const programQuestions = [
  {
    type: "dir",
    name: "Test folder one",
    files: [
      { name: "fileOne", solution: "Solution for fileOne in folderOne" },
      { name: "fileTwo", solution: "Solution for fileTwo in folderOne" },
    ],
  },

  {
    type: "dir",
    name: "Test folder two",
    files: [
      {
        type: "dir",
        name: "Test two inner folder",
        files: [
          { name: "fileOne", solution: "Solution for two inner folder file" },
          {
            name: "fileTwo",
            solution: "Solution for two inner folder file second",
          },
        ],
      },
      { name: "fileOne", solution: "Solution for fileOne in folderOne" },
      {
        type: "dir",
        name: "Test two inner folder",
        files: [
          { name: "fileOne", solution: "Solution for two inner folder file" },
          {
            name: "fileTwo",
            solution: "Solution for two inner folder file second",
          },
        ],
      },
    ],
  },

  {
    type: "file",
    name: "Mark sheet",
    solution: `import java.util.Scanner;

class Marksheet{

  static String setRed = "\u001B[31m";
  static String resetRed = "\u001B[0m";
  static String setBlue = "\u001B[34m";
  static String endBlue = "\u001B[0m";
  static String setGreen = "\u001B[32m";
  static String endGreen = "\u001B[0m";

  // ----------------------------------------------------------Marksheet------------------------------------------------------------
  public static void marksheetResult(
    String semSub[],
    byte semMarks[],
    boolean semAtkt[],
    byte atsem,
    byte semester,
    String s_Name,
    String f_Name,
    String m_Name,
    String roll_num,
    String enrollment_no,
    String status,
    short totalNumber,
    String result
  ) {
    // count total number
    for (int i = 0; i < semMarks.length; i++) {
      totalNumber += semMarks[i];
    }

    // check atkt
    // String atkt = " ";
    // for (int i = 0; i < semAtkt.length; i++) {
    // if (semAtkt[i]) {
    // atkt = "ATKT";
    // } else {

    // }
    // }

    String atkt[] = new String[8];
    for (int i = 0; i < semMarks.length; i++) {
      if (i < 6) {
        if (semMarks[i] < 22) {
          atkt[i] = "ATKT";
        } else {
          atkt[i] = " ";
        }
      } else {
        if (semMarks[i] < 12) {
          atkt[i] = "ATKT";
        } else {
          atkt[i] = " ";
        }
      }
    }

    System.out.println(
      "=======================================================================================================================\n"
    );
    System.out.println(
      "\t\t\t\t\t DEVI AHILYA VISHWA VIDYALAYA, INDORE (M.P.)"
    );
    System.out.println(
      "\t\t\t\t\t     MAIN-EXAMINATION  B.C.A SEM - " + semester
    );
    System.out.println(
      "\n=======================================================================================================================\n"
    );
    System.out.printf(
      "\t Name: %-20s\t\t\t\t\t\t\t Roll No: %-20s \n",
      s_Name,
      roll_num
    );
    System.out.printf(
      "\t Father Name: %-20s\t\t\t\t\t\t Enrollment No: %-20s\n",
      f_Name,
      enrollment_no
    );
    System.out.printf(
      "\t Mother Name: %-20s\t\t\t\t\t\t Status: %-20s\n",
      m_Name,
      status
    );
    System.out.println(
      "\n=======================================================================================================================\n"
    );
    System.out.println(
      "\t Subject \t\t\t Maximum \t\t\t Minimum \t\t\t Obtained \n"
    );
    System.out.println(
      "\t " +
      semSub[0] +
      "\t\t\t\t   50 \t\t\t\t   22 \t\t\t\t    " +
      semMarks[0] +
      "\t" +
      setRed +
      atkt[0] +
      resetRed
    );
    System.out.println(
      "\t " +
      semSub[1] +
      "\t\t\t\t   50 \t\t\t\t   22 \t\t\t\t    " +
      semMarks[1] +
      "\t" +
      setRed +
      atkt[1] +
      resetRed
    );
    System.out.println(
      "\t " +
      semSub[2] +
      "\t\t\t\t   50 \t\t\t\t   22 \t\t\t\t    " +
      semMarks[2] +
      "\t" +
      setRed +
      atkt[2] +
      resetRed
    );
    System.out.println(
      "\t " +
      semSub[3] +
      "\t\t\t\t   50 \t\t\t\t   22 \t\t\t\t    " +
      semMarks[3] +
      "\t" +
      setRed +
      atkt[3] +
      resetRed
    );
    System.out.println(
      "\t " +
      semSub[4] +
      "\t\t\t   50 \t\t\t\t   22 \t\t\t\t    " +
      semMarks[4] +
      "\t" +
      setRed +
      atkt[4] +
      resetRed
    );
    System.out.println(
      "\t " +
      semSub[5] +
      "\t\t\t   50 \t\t\t\t   22 \t\t\t\t    " +
      semMarks[5] +
      "\t" +
      setRed +
      atkt[5] +
      resetRed
    );
    System.out.println(
      "\t " +
      semSub[6] +
      "\t\t\t\t   25 \t\t\t\t   12 \t\t\t\t    " +
      semMarks[6] +
      "\t" +
      setRed +
      atkt[6] +
      resetRed
    );
    System.out.println(
      "\t " +
      semSub[7] +
      "\t\t\t\t   25 \t\t\t\t   12 \t\t\t\t    " +
      semMarks[7] +
      "\t" +
      setRed +
      atkt[7] +
      resetRed
    );
    System.out.println(
      "\n======================================================================================================================="
    );
    System.out.println(
      "\t\t\t\t\tTotal-350 \t\t\t\t\t\t\tTotal obt. " + totalNumber
    );
    System.out.println(
      "\t Result - " + result + "\t\t\t\t\t\t\t\t\t\t\t Attempt - " + atsem
    );
    System.out.println(
      "=======================================================================================================================\n"
    );
    System.out.println(
      "-----------------------------------------------------------------------------------------------------------------------\n"
    );
    System.out.println("\n\n");
  }

  // ---------------------------------------------------------atktExam------------------------------------------------------------
  public static byte atktExam(
    String semSub[],
    byte semMarks[],
    boolean semAtkt[],
    byte countAtkt,
    Scanner sc
  ) {
    for (int i = 0; i < semAtkt.length; i++) {
      if (i < 6) {
        if (semAtkt[i]) {
          System.out.printf("\t Enter " + semSub[i] + " marks: \n\t ");
          semMarks[i] = sc.nextByte();

          if (semMarks[i] < 0 || semMarks[i] >= 50) {
            System.out.printf(
              setRed +
              "\t Invalid  marks please re-enter valid marks: \n\t " +
              resetRed
            );
            i--;
            continue;
          }
          if (semMarks[i] >= 22) {
            semAtkt[i] = false;
            countAtkt--;
          }
          if (semMarks[i] < 22) {
            semAtkt[i] = true;
            // countAtkt--;
          }
        }
      } else {
        if (semAtkt[i]) {
          System.out.printf("\t Enter " + semSub[i] + " marks: \n\t ");
          semMarks[i] = sc.nextByte();

          if (semMarks[i] < 0 || semMarks[i] >= 25) {
            System.out.printf(
              setRed +
              "\t Invalid  marks please re-enter valid marks: \n\t " +
              resetRed
            );
            i--;
            continue;
          }
          if (semMarks[i] >= 12) {
            semAtkt[i] = false;
            countAtkt--;
          }
          if (semMarks[i] < 12) {
            semAtkt[i] = true;
            // countAtkt++;
          }
        }
      }
    }
    return countAtkt;
  }

  // --------------------------------------------check-marks(MAIN-EXAM)---------------------------------------------------------
  public static byte mainExam(
    String sem1Sub[],
    byte sem1Marks[],
    boolean sem1Atkt[],
    byte count1_atkt,
    Scanner sc
  ) {
    for (int i = 0; i < sem1Marks.length; i++) {
      if (i < 6) {
        System.out.printf("\t Enter " + sem1Sub[i] + " marks out of 50: \n\t ");
        sem1Marks[i] = sc.nextByte();
        if (sem1Marks[i] > 50 || sem1Marks[i] < 0) {
          System.out.printf(
            setRed +
            "\t Invalid marks plz re-enter " +
            sem1Sub[i] +
            " marks: \n\t " +
            resetRed
          );
          i--;
          continue;
        }
        if (sem1Marks[i] < 22) {
          count1_atkt++;
          sem1Atkt[i] = true;
        } else {
          sem1Atkt[i] = false;
        }
      } else {
        System.out.printf("\t Enter " + sem1Sub[i] + " marks out of 25: \n\t ");
        sem1Marks[i] = sc.nextByte();
        if (sem1Marks[i] > 25 || sem1Marks[i] < 0) {
          System.out.printf(
            setRed +
            "\t Invalid marks plz re-enter " +
            sem1Sub[i] +
            " marks: \n\t " +
            resetRed
          );
          i--;
          continue;
        }
        if (sem1Marks[i] < 12) {
          count1_atkt++;
          sem1Atkt[i] = true;
        } else {
          sem1Atkt[i] = false;
        }
      }
    }
    return count1_atkt;
  }

  // ----------------------------------------------------------check-result----------------------------------------------------------
  public static String checkResult(byte totalAktk, String checkResult) {
    if (totalAktk <= 2) {
      checkResult = (setGreen + "PASS" + endGreen);
    } else {
      checkResult = (setRed + "FAIL" + resetRed);
    }
    return checkResult;
  }

  // ------------------------------------------------------way-atkt-------------------------------------------------------------
  public static byte wayAtkt(
    String semSub[],
    byte semMarks[],
    boolean semAtkt[],
    byte totalAtkt,
    byte semester,
    byte countAtkt,
    String result,
    byte atsem,
    Scanner sc
  ) {
    System.out.println(
      setRed +
      "\t\t\t\t\t you have " +
      countAtkt +
      " atkt in " +
      semester +
      " semester: " +
      resetRed
    );
    result = checkResult(totalAtkt, result);
    atsem++;

    return atktExam(semSub, semMarks, semAtkt, countAtkt, sc);
  }

  // ------------------------------------------------------------Degree---------------------------------------------------------
  public static void degree(String date, String s_Name) {
    System.out.println(
      "\t\t\t *************************** Degree ***************************"
    );

    System.out.println(
      "\n\n\t\t===================================================================================\n"
    );
    System.out.println(
      "\t\t\t\t DEVI AHILYA VISHWA VIDYALAYA, INDORE (M.P.)\n"
    );
    System.out.println("\t\t\t\t   Bachelor of compute Application\n\n");
    System.out.println(
      "\t\t\t Certified Certified that " +
      s_Name +
      " obtained the Degree of \n \t\t\t BACHELOR OF COMPUTER APPLICATION in this University at the \n \t\t\t Examination held in " +
      date +
      " and was placed in the 1 Division.\n"
    );

    System.out.println(
      "\t\t====================================================================================\n\n\n\n"
    );
  }

  // ------------------------------------------------------------Migration---------------------------------------------------------

  public static void migration(
    String date,
    String s_Name,
    String enrollment_no
  ) {
    System.out.println(
      "\t\t\t *************************** MIGRATION ***************************"
    );
    System.out.println(
      "\n\n\t\t====================================================================================\n"
    );
    System.out.println(
      "\t\t\t\t DEVI AHILYA VISHWA VIDYALAYA, INDORE (M.P.)\n"
    );
    System.out.println("\t\t\t\t  MIGRATION CERTIFICATE - " + date + "\n");

    System.out.println(
      "\t\t\t\t Mr/Miss " +
      s_Name +
      " Entrolment No. " +
      enrollment_no +
      " \n \t\t\t is informed that this University has no Objection to his/ her\n \t\t\t migrating to another University.He/ She has 10198777 as a regular\n \t\t\t student  at Bachelor of Computer Application  Examination."
    );

    System.out.println(
      "\n\n\n\t\t\t UNIVERSITY HOUSE\t\t\t\t ================= \n\t\t\t INDORE-455332\t\t\t\t\t      D.A.V.V \n\t\t\t Date-" +
      date +
      "\t\t\t\t ================="
    );
    System.out.println(
      "\t\t====================================================================================\n"
    );
  }

  // ------------------------------------------------------------main-method---------------------------------------------------------
  public static void main(String[] args) {
    // semester subject array:
    String sem1Sub[] = {
      "Java",
      "Python",
      "MYsql",
      "Hindi",
      "Vocational-1",
      "Vocational-2",
      "Lab-1",
      "Lab-2",
    };
    String sem2Sub[] = {
      "c++",
      "Python",
      "PHP",
      "Hindi",
      "Vocational-1",
      "Vocational-2",
      "Lab-1",
      "Lab-2",
    };
    String sem3Sub[] = {
      "Java",
      "Python",
      "php",
      "Hindi",
      "Vocational-1",
      "Vocational-2",
      "Lab-1",
      "Lab-2",
    };
    String sem4Sub[] = {
      "Java",
      "Python",
      "MYsql",
      "Hindi",
      "Vocational-1",
      "Vocational-2",
      "Lab-1",
      "Lab-2",
    };
    String sem5Sub[] = {
      "Java",
      "Python",
      "MYsql",
      "Hindi",
      "Vocational-1",
      "Vocational-2",
      "Lab-1",
      "Lab-2",
    };
    String sem6Sub[] = {
      "Java",
      "Python",
      "MYsql",
      "Hindi",
      "Vocational-1",
      "Vocational-2",
      "Lab-1",
      "Lab-2",
    };

    // 1st semester marks array:
    byte sem1Marks[] = new byte[8];
    byte sem2Marks[] = new byte[8];
    byte sem3Marks[] = new byte[8];
    byte sem4Marks[] = new byte[8];
    byte sem5Marks[] = new byte[8];
    byte sem6Marks[] = new byte[8];

    // check Atkt array:
    boolean sem1Atkt[] = new boolean[8];
    boolean sem2Atkt[] = new boolean[8];
    boolean sem3Atkt[] = new boolean[8];
    boolean sem4Atkt[] = new boolean[8];
    boolean sem5Atkt[] = new boolean[8];
    boolean sem6Atkt[] = new boolean[8];

    Scanner sc = new Scanner(System.in);

    // Input basic information :
    System.out.printf("\t Enter your name:  ");
    String s_Name = sc.nextLine();
    System.out.printf("\t Father name: ");
    String f_Name = sc.nextLine();
    System.out.printf("\t Mother name: ");
    String m_Name = sc.nextLine();
    System.out.printf("\t Roll number: ");
    String roll_No = sc.nextLine();
    System.out.printf("\t Enrollment number: ");
    String enrollmentNum = sc.nextLine();
    String status;
    short totalNumber = 0;

    // check and enter status:
    boolean flag = false;
    do {
      System.out.printf("\t status: ");
      status = sc.nextLine();
      if (
        status.equals("Private") ||
        status.equals("private") ||
        status.equals("Regular") ||
        status.equals("regular")
      ) {
        break;
      } else {
        System.out.printf(
          setRed + "\t Type only: (regular / private) \n " + resetRed
        );
        flag = true;
      }
    } while (flag);

    // check atkt
    byte count1_atkt = 0, count2_atkt = 0, count3_atkt = 0, count4_atkt =
      0, count5_atkt = 0, count6_atkt = 0;
    byte atsem1 = 0, atsem2 = 0, atsem3 = 0, atsem4 = 0, atsem5 = 0, atsem6 = 0;
    byte totalAktk1 = 0, totalAktk2 = 0, totalAktk3 = 0, totalAktk4 =
      0, totalAktk5 = 0, totalAktk6 = 0;
    byte semester = 0;
    String result = "";
    atsem1 = 1;

    // enter marks:
    do {
      System.out.println(
        "\n-----------------------------------------------------------------------------------------------------------------------"
      );
      System.out.println(
        setBlue + "\t\t\t\t\t\t     1 st semester \t" + endBlue
      );
      System.out.println(
        "-----------------------------------------------------------------------------------------------------------------------\n"
      );

      // check marks of semester -1
      count1_atkt = 0;
      totalAktk1 = 0;
      count1_atkt = mainExam(sem1Sub, sem1Marks, sem1Atkt, count1_atkt, sc);
      totalAktk1 = count1_atkt;
      System.out.println();

      // check result
      result = checkResult(totalAktk1, result);
      semester = 1;
      // marksheet 1st semester:
      marksheetResult(
        sem1Sub,
        sem1Marks,
        sem1Atkt,
        atsem1,
        semester,
        s_Name,
        f_Name,
        m_Name,
        roll_No,
        enrollmentNum,
        status,
        totalNumber,
        result
      );

      if (totalAktk1 > 2) {
        System.out.println(
          setRed +
          "\t\t\t\t\t\t   " +
          totalAktk1 +
          " atkt in 1st semester " +
          resetRed
        );
        System.out.println(
          setRed + "\t\t\t\t\t\t     !! Sem-Back !! " + resetRed
        );
        atsem1++;
        continue;
      } else {
        System.out.println(
          setGreen +
          "\t\t\t\t\t Congractulation you promoted to 2nd semester: \n\t" +
          endBlue
        );
        if ((totalAktk1 > 0 && totalAktk1 <= 2)) {
          semester = 1;
          count1_atkt =
            wayAtkt(
              sem1Sub,
              sem1Marks,
              sem1Atkt,
              totalAktk1,
              semester,
              count1_atkt,
              result,
              atsem1,
              sc
            );
        }
        atsem2++;

        do {
          System.out.println(
            "\n-----------------------------------------------------------------------------------------------------------------------"
          );
          System.out.println(
            setBlue + "\t\t\t\t\t\t     2nd semester \t" + endBlue
          );
          System.out.println(
            "-----------------------------------------------------------------------------------------------------------------------\n"
          );
          semester = 2;
          count2_atkt = 0;
          count2_atkt = mainExam(sem2Sub, sem2Marks, sem2Atkt, count2_atkt, sc);
          totalAktk2 = (byte) (count2_atkt + count1_atkt);

          // first semester result:
          semester = 1;
          result = checkResult(totalAktk1, result);
          marksheetResult(
            sem1Sub,
            sem1Marks,
            sem1Atkt,
            atsem1,
            semester,
            s_Name,
            f_Name,
            m_Name,
            roll_No,
            enrollmentNum,
            status,
            totalNumber,
            result
          );

          // second semester result:
          semester = 2;
          result = checkResult(totalAktk2, result);
          marksheetResult(
            sem2Sub,
            sem2Marks,
            sem2Atkt,
            atsem2,
            semester,
            s_Name,
            f_Name,
            m_Name,
            roll_No,
            enrollmentNum,
            status,
            totalNumber,
            result
          );

          if (totalAktk2 > 2) {
            System.out.println(
              setRed +
              "\t\t\t\t\t         " +
              count2_atkt +
              " atkt in 2nd semester" +
              resetRed
            );
            System.out.println(
              setRed + "\t\t\t\t\t\t       Total atkt " + totalAktk2 + resetRed
            );
            System.out.println(
              setRed + "\t\t\t\t\t\t     !! Sem-Back !! " + resetRed
            );
            atsem2++;

            if (count1_atkt <= 2 && count1_atkt > 0) {
              semester = 1;
              count1_atkt =
                wayAtkt(
                  sem1Sub,
                  sem1Marks,
                  sem1Atkt,
                  totalAktk1,
                  semester,
                  count1_atkt,
                  result,
                  atsem1,
                  sc
                );
            }
            continue;
          } else {
            System.out.println(
              setGreen +
              "\t\t\t\t\t Congractulation you promoted to 3rd semester: \n\t" +
              endBlue
            );
            if (count1_atkt <= 2 && count1_atkt > 0) {
              semester = 1;
              count1_atkt =
                wayAtkt(
                  sem1Sub,
                  sem1Marks,
                  sem1Atkt,
                  totalAktk1,
                  semester,
                  count1_atkt,
                  result,
                  atsem1,
                  sc
                );
            }
            if (count2_atkt > 0 && count2_atkt <= 2) {
              semester = 2;
              count2_atkt =
                wayAtkt(
                  sem2Sub,
                  sem2Marks,
                  sem2Atkt,
                  totalAktk2,
                  semester,
                  count2_atkt,
                  result,
                  atsem2,
                  sc
                );
            }
            atsem3++;
            do {
              System.out.println(
                "\n-----------------------------------------------------------------------------------------------------------------------"
              );
              System.out.println(
                setBlue + "\t\t\t\t\t\t     3rd semester \t" + endBlue
              );
              System.out.println(
                "-----------------------------------------------------------------------------------------------------------------------\n"
              );
              count3_atkt = 0;
              count3_atkt =
                mainExam(sem3Sub, sem3Marks, sem3Atkt, count3_atkt, sc);

              // 1st semester result:
              semester = 1;
              result = checkResult(count1_atkt, result);
              marksheetResult(
                sem1Sub,
                sem1Marks,
                sem1Atkt,
                atsem1,
                semester,
                s_Name,
                f_Name,
                m_Name,
                roll_No,
                enrollmentNum,
                status,
                totalNumber,
                result
              );

              // 2nd semester result:
              semester = 2;
              result = checkResult(count2_atkt, result);
              marksheetResult(
                sem2Sub,
                sem2Marks,
                sem2Atkt,
                atsem2,
                semester,
                s_Name,
                f_Name,
                m_Name,
                roll_No,
                enrollmentNum,
                status,
                totalNumber,
                result
              );

              // 3rd semester result:
              semester = 3;
              totalAktk3 = (byte) (count1_atkt + count2_atkt + count3_atkt);
              result = checkResult(totalAktk3, result);
              marksheetResult(
                sem3Sub,
                sem3Marks,
                sem3Atkt,
                atsem3,
                semester,
                s_Name,
                f_Name,
                m_Name,
                roll_No,
                enrollmentNum,
                status,
                totalNumber,
                result
              );

              // check 3rd semester atkt
              if (totalAktk3 > 2) {
                System.out.println(
                  setRed +
                  "\t\t\t\t\t        " +
                  count3_atkt +
                  " atkt in 3rd semester" +
                  resetRed
                );
                System.out.println(
                  setRed +
                  "\t\t\t\t\t\t      Total atkt " +
                  totalAktk3 +
                  resetRed
                );
                System.out.println(
                  setRed + "\t\t\t\t\t\t     !! Sem-Back !! " + resetRed
                );
                atsem3++;

                // 1st semester atktexam:
                if (count1_atkt <= 2 && count1_atkt > 0) {
                  semester = 1;
                  count1_atkt =
                    wayAtkt(
                      sem1Sub,
                      sem1Marks,
                      sem1Atkt,
                      totalAktk1,
                      semester,
                      count1_atkt,
                      result,
                      atsem1,
                      sc
                    );
                }
                // 2nd semester atkt exam
                if (count2_atkt <= 2 && count2_atkt > 0) {
                  semester = 2;
                  count2_atkt =
                    wayAtkt(
                      sem2Sub,
                      sem2Marks,
                      sem2Atkt,
                      totalAktk2,
                      semester,
                      count2_atkt,
                      result,
                      atsem2,
                      sc
                    );
                }

                continue;
              } else {
                System.out.println(
                  setGreen +
                  "\t\t\t\t\t Congractulation you promoted to 4th semester: \n\t" +
                  endBlue
                );

                // 1st semester atktexam:
                if (count1_atkt <= 2 && count1_atkt > 0) {
                  semester = 1;
                  count1_atkt =
                    wayAtkt(
                      sem1Sub,
                      sem1Marks,
                      sem1Atkt,
                      totalAktk1,
                      semester,
                      count1_atkt,
                      result,
                      atsem1,
                      sc
                    );
                }
                // 2nd semester atkt exam
                if (count2_atkt <= 2 && count2_atkt > 0) {
                  semester = 2;
                  count2_atkt =
                    wayAtkt(
                      sem2Sub,
                      sem2Marks,
                      sem2Atkt,
                      totalAktk2,
                      semester,
                      count2_atkt,
                      result,
                      atsem2,
                      sc
                    );
                }
                // 3rd semester atkt exam
                if (count3_atkt > 0 && count3_atkt <= 2) {
                  semester = 3;
                  count3_atkt =
                    wayAtkt(
                      sem3Sub,
                      sem3Marks,
                      sem3Atkt,
                      totalAktk3,
                      semester,
                      count3_atkt,
                      result,
                      atsem3,
                      sc
                    );
                }
                atsem4++;
                do {
                  System.out.println(
                    "\n-----------------------------------------------------------------------------------------------------------------------"
                  );
                  System.out.println(
                    setBlue + "\t\t\t\t\t\t     4th semester \t" + endBlue
                  );
                  System.out.println(
                    "-----------------------------------------------------------------------------------------------------------------------\n"
                  );
                  count4_atkt = 0;
                  // 4th semester exam:
                  count4_atkt =
                    mainExam(sem4Sub, sem4Marks, sem4Atkt, count4_atkt, sc);
                  totalAktk4 =
                    (byte) (
                      count1_atkt + count2_atkt + count3_atkt + count4_atkt
                    );

                  // 1st semester marksheet:
                  semester = 1;
                  result = checkResult(totalAktk1, result);
                  marksheetResult(
                    sem1Sub,
                    sem1Marks,
                    sem1Atkt,
                    atsem1,
                    semester,
                    s_Name,
                    f_Name,
                    m_Name,
                    roll_No,
                    enrollmentNum,
                    status,
                    totalNumber,
                    result
                  );

                  // 2nd semester exam:
                  semester = 2;
                  result = checkResult(totalAktk2, result);
                  marksheetResult(
                    sem2Sub,
                    sem2Marks,
                    sem2Atkt,
                    atsem2,
                    semester,
                    s_Name,
                    f_Name,
                    m_Name,
                    roll_No,
                    enrollmentNum,
                    status,
                    totalNumber,
                    result
                  );

                  // 3rd semester exam:
                  semester = 3;
                  result = checkResult(totalAktk3, result);
                  marksheetResult(
                    sem3Sub,
                    sem3Marks,
                    sem3Atkt,
                    atsem3,
                    semester,
                    s_Name,
                    f_Name,
                    m_Name,
                    roll_No,
                    enrollmentNum,
                    status,
                    totalNumber,
                    result
                  );

                  // 4th semester exam:
                  semester = 4;
                  totalAktk4 =
                    (byte) (
                      count1_atkt + count2_atkt + count3_atkt + count4_atkt
                    );
                  result = checkResult(totalAktk4, result);
                  marksheetResult(
                    sem4Sub,
                    sem4Marks,
                    sem4Atkt,
                    atsem4,
                    semester,
                    s_Name,
                    f_Name,
                    m_Name,
                    roll_No,
                    enrollmentNum,
                    status,
                    totalNumber,
                    result
                  );

                  if (totalAktk4 > 2) {
                    System.out.println(
                      setRed +
                      "\t\t\t\t\t        " +
                      count4_atkt +
                      " atkt in 4th semester" +
                      resetRed
                    );
                    System.out.println(
                      setRed +
                      "\t\t\t\t\t\t     Total atkt " +
                      totalAktk4 +
                      resetRed
                    );
                    System.out.println(
                      setRed + "\t\t\t\t\t\t     !! Sem-Back !! " + resetRed
                    );

                    atsem4++;

                    if (count1_atkt <= 2 && count1_atkt > 0) {
                      semester = 1;
                      count1_atkt =
                        wayAtkt(
                          sem1Sub,
                          sem1Marks,
                          sem1Atkt,
                          totalAktk1,
                          semester,
                          count1_atkt,
                          result,
                          atsem1,
                          sc
                        );
                    }
                    if (count2_atkt <= 2 && count2_atkt > 0) {
                      semester = 2;
                      count2_atkt =
                        wayAtkt(
                          sem2Sub,
                          sem2Marks,
                          sem2Atkt,
                          totalAktk2,
                          semester,
                          count2_atkt,
                          result,
                          atsem2,
                          sc
                        );
                    }
                    if (count3_atkt <= 2 && count3_atkt > 0) {
                      semester = 3;
                      count3_atkt =
                        wayAtkt(
                          sem3Sub,
                          sem3Marks,
                          sem3Atkt,
                          totalAktk3,
                          semester,
                          count3_atkt,
                          result,
                          atsem3,
                          sc
                        );
                    }
                    continue;
                  } else {
                    System.out.println(
                      setGreen +
                      "\t\t\t\t\t Congractulation you promoted to 5th semester: \n\t" +
                      endBlue
                    );

                    if (count1_atkt <= 2 && count1_atkt > 0) {
                      semester = 1;
                      count1_atkt =
                        wayAtkt(
                          sem1Sub,
                          sem1Marks,
                          sem1Atkt,
                          totalAktk1,
                          semester,
                          count1_atkt,
                          result,
                          atsem1,
                          sc
                        );
                    }
                    if (count2_atkt <= 2 && count2_atkt > 0) {
                      semester = 2;
                      count2_atkt =
                        wayAtkt(
                          sem2Sub,
                          sem2Marks,
                          sem2Atkt,
                          totalAktk2,
                          semester,
                          count2_atkt,
                          result,
                          atsem2,
                          sc
                        );
                    }
                    if (count3_atkt <= 2 && count3_atkt > 0) {
                      semester = 3;
                      count3_atkt =
                        wayAtkt(
                          sem3Sub,
                          sem3Marks,
                          sem3Atkt,
                          totalAktk3,
                          semester,
                          count3_atkt,
                          result,
                          atsem3,
                          sc
                        );
                    }
                    if (count4_atkt <= 2 && count4_atkt > 0) {
                      semester = 4;
                      count4_atkt =
                        wayAtkt(
                          sem4Sub,
                          sem4Marks,
                          sem4Atkt,
                          totalAktk4,
                          semester,
                          count4_atkt,
                          result,
                          atsem4,
                          sc
                        );
                    }
                    atsem5++;
                    do {
                      System.out.println(
                        "\n-----------------------------------------------------------------------------------------------------------------------"
                      );
                      System.out.println(
                        setBlue + "\t\t\t\t\t\t     5th semester \t" + endBlue
                      );
                      System.out.println(
                        "-----------------------------------------------------------------------------------------------------------------------\n"
                      );
                      semester = 5;
                      count5_atkt = 0;
                      count5_atkt =
                        mainExam(sem5Sub, sem5Marks, sem5Atkt, count5_atkt, sc);
                      totalAktk5 =
                        (byte) (
                          count5_atkt +
                          count4_atkt +
                          count3_atkt +
                          count2_atkt +
                          count1_atkt
                        );
                      result = checkResult(totalAktk5, result);

                      // 1st semester marksheet:
                      semester = 1;
                      result = checkResult(totalAktk1, result);
                      marksheetResult(
                        sem1Sub,
                        sem1Marks,
                        sem1Atkt,
                        atsem1,
                        semester,
                        s_Name,
                        f_Name,
                        m_Name,
                        roll_No,
                        enrollmentNum,
                        status,
                        totalNumber,
                        result
                      );

                      // 2nd semester exam:
                      semester = 2;
                      result = checkResult(totalAktk2, result);
                      marksheetResult(
                        sem2Sub,
                        sem2Marks,
                        sem2Atkt,
                        atsem2,
                        semester,
                        s_Name,
                        f_Name,
                        m_Name,
                        roll_No,
                        enrollmentNum,
                        status,
                        totalNumber,
                        result
                      );

                      // 3rd semester exam:
                      semester = 3;
                      result = checkResult(totalAktk3, result);
                      marksheetResult(
                        sem3Sub,
                        sem3Marks,
                        sem3Atkt,
                        atsem3,
                        semester,
                        s_Name,
                        f_Name,
                        m_Name,
                        roll_No,
                        enrollmentNum,
                        status,
                        totalNumber,
                        result
                      );

                      // 4th semester exam:
                      semester = 4;
                      result = checkResult(totalAktk4, result);
                      marksheetResult(
                        sem4Sub,
                        sem4Marks,
                        sem4Atkt,
                        atsem4,
                        semester,
                        s_Name,
                        f_Name,
                        m_Name,
                        roll_No,
                        enrollmentNum,
                        status,
                        totalNumber,
                        result
                      );

                      semester = 5;
                      totalAktk5 =
                        (byte) (
                          count1_atkt +
                          count2_atkt +
                          count3_atkt +
                          count4_atkt +
                          count5_atkt
                        );
                      result = checkResult(totalAktk5, result);
                      marksheetResult(
                        sem5Sub,
                        sem5Marks,
                        sem5Atkt,
                        atsem5,
                        semester,
                        s_Name,
                        f_Name,
                        m_Name,
                        roll_No,
                        enrollmentNum,
                        status,
                        totalNumber,
                        result
                      );

                      if (totalAktk5 > 2) {
                        System.out.println(
                          setRed +
                          "\t\t\t\t\t        " +
                          count5_atkt +
                          " atkt in 5th semester" +
                          resetRed
                        );
                        System.out.println(
                          setRed +
                          "\t\t\t\t\t\t     Total atkt " +
                          totalAktk5 +
                          resetRed
                        );
                        System.out.println(
                          setRed + "\t\t\t\t\t\t     !! Sem-Back !! " + resetRed
                        );
                        atsem5++;

                        if (count1_atkt <= 2 && count1_atkt > 0) {
                          semester = 1;
                          count1_atkt =
                            wayAtkt(
                              sem1Sub,
                              sem1Marks,
                              sem1Atkt,
                              totalAktk1,
                              semester,
                              count1_atkt,
                              result,
                              atsem1,
                              sc
                            );
                        }
                        if (count2_atkt <= 2 && count2_atkt > 0) {
                          semester = 2;
                          count2_atkt =
                            wayAtkt(
                              sem2Sub,
                              sem2Marks,
                              sem2Atkt,
                              totalAktk2,
                              semester,
                              count2_atkt,
                              result,
                              atsem2,
                              sc
                            );
                        }
                        if (count3_atkt <= 2 && count3_atkt > 0) {
                          semester = 3;
                          count3_atkt =
                            wayAtkt(
                              sem3Sub,
                              sem3Marks,
                              sem3Atkt,
                              totalAktk3,
                              semester,
                              count3_atkt,
                              result,
                              atsem3,
                              sc
                            );
                        }
                        if (count4_atkt <= 2 && count4_atkt > 0) {
                          semester = 4;
                          count4_atkt =
                            wayAtkt(
                              sem4Sub,
                              sem4Marks,
                              sem4Atkt,
                              totalAktk4,
                              semester,
                              count4_atkt,
                              result,
                              atsem4,
                              sc
                            );
                        }
                        continue;
                      } else {
                        System.out.println(
                          setGreen +
                          "\t\t\t\t\t Congractulation you promoted to 6th semester: \n\t" +
                          endBlue
                        );

                        if (count1_atkt <= 2 && count1_atkt > 0) {
                          semester = 1;
                          count1_atkt =
                            wayAtkt(
                              sem1Sub,
                              sem1Marks,
                              sem1Atkt,
                              totalAktk1,
                              semester,
                              count1_atkt,
                              result,
                              atsem1,
                              sc
                            );
                        }
                        if (count2_atkt <= 2 && count2_atkt > 0) {
                          semester = 2;
                          count2_atkt =
                            wayAtkt(
                              sem2Sub,
                              sem2Marks,
                              sem2Atkt,
                              totalAktk2,
                              semester,
                              count2_atkt,
                              result,
                              atsem2,
                              sc
                            );
                        }
                        if (count3_atkt <= 2 && count3_atkt > 0) {
                          semester = 3;
                          count3_atkt =
                            wayAtkt(
                              sem3Sub,
                              sem3Marks,
                              sem3Atkt,
                              totalAktk3,
                              semester,
                              count3_atkt,
                              result,
                              atsem3,
                              sc
                            );
                        }
                        if (count4_atkt <= 2 && count4_atkt > 0) {
                          semester = 4;
                          count4_atkt =
                            wayAtkt(
                              sem4Sub,
                              sem4Marks,
                              sem4Atkt,
                              totalAktk4,
                              semester,
                              count4_atkt,
                              result,
                              atsem4,
                              sc
                            );
                        }
                        if (count5_atkt <= 2 && count5_atkt > 0) {
                          semester = 5;
                          count5_atkt =
                            wayAtkt(
                              sem5Sub,
                              sem5Marks,
                              sem5Atkt,
                              totalAktk5,
                              semester,
                              count5_atkt,
                              result,
                              atsem5,
                              sc
                            );
                        }
                        atsem6++;
                        do {
                          System.out.println(
                            "\n-----------------------------------------------------------------------------------------------------------------------"
                          );
                          System.out.println(
                            setBlue +
                            "\t\t\t\t\t\t     6th semester \t" +
                            endBlue
                          );
                          System.out.println(
                            "-----------------------------------------------------------------------------------------------------------------------\n"
                          );
                          semester = 6;
                          count6_atkt = 0;
                          count6_atkt =
                            mainExam(
                              sem6Sub,
                              sem6Marks,
                              sem6Atkt,
                              count6_atkt,
                              sc
                            );

                          // 1st semester
                          // marksheet:
                          semester = 1;
                          result = checkResult(totalAktk1, result);
                          marksheetResult(
                            sem1Sub,
                            sem1Marks,
                            sem1Atkt,
                            atsem1,
                            semester,
                            s_Name,
                            f_Name,
                            m_Name,
                            roll_No,
                            enrollmentNum,
                            status,
                            totalNumber,
                            result
                          );

                          // 2nd semester
                          // exam:
                          semester = 2;
                          result = checkResult(totalAktk2, result);
                          marksheetResult(
                            sem2Sub,
                            sem2Marks,
                            sem2Atkt,
                            atsem2,
                            semester,
                            s_Name,
                            f_Name,
                            m_Name,
                            roll_No,
                            enrollmentNum,
                            status,
                            totalNumber,
                            result
                          );

                          // 3rd semester
                          // exam:
                          semester = 3;
                          result = checkResult(totalAktk3, result);
                          marksheetResult(
                            sem3Sub,
                            sem3Marks,
                            sem3Atkt,
                            atsem3,
                            semester,
                            s_Name,
                            f_Name,
                            m_Name,
                            roll_No,
                            enrollmentNum,
                            status,
                            totalNumber,
                            result
                          );

                          // 4th semester
                          // exam:
                          semester = 4;
                          result = checkResult(totalAktk4, result);
                          marksheetResult(
                            sem4Sub,
                            sem4Marks,
                            sem4Atkt,
                            atsem4,
                            semester,
                            s_Name,
                            f_Name,
                            m_Name,
                            roll_No,
                            enrollmentNum,
                            status,
                            totalNumber,
                            result
                          );

                          semester = 5;
                          result = checkResult(totalAktk5, result);
                          marksheetResult(
                            sem5Sub,
                            sem5Marks,
                            sem5Atkt,
                            atsem5,
                            semester,
                            s_Name,
                            f_Name,
                            m_Name,
                            roll_No,
                            enrollmentNum,
                            status,
                            totalNumber,
                            result
                          );

                          semester = 6;
                          totalAktk6 =
                            (byte) (
                              count1_atkt +
                              count2_atkt +
                              count3_atkt +
                              count4_atkt +
                              count5_atkt +
                              count6_atkt
                            );
                          result = checkResult(totalAktk6, result);
                          marksheetResult(
                            sem6Sub,
                            sem6Marks,
                            sem6Atkt,
                            atsem6,
                            semester,
                            s_Name,
                            f_Name,
                            m_Name,
                            roll_No,
                            enrollmentNum,
                            status,
                            totalNumber,
                            result
                          );

                          if (totalAktk6 > 2) {
                            System.out.println(
                              setRed +
                              "\t\t\t\t\t       \t" +
                              count6_atkt +
                              " atkt in 6th semester" +
                              resetRed
                            );
                            System.out.println(
                              setRed +
                              "\t\t\t\t\t\t      Total atkt " +
                              totalAktk6 +
                              resetRed
                            );
                            System.out.println(
                              setRed +
                              "\t\t\t\t\t\t     !! Sem-Back !! " +
                              resetRed
                            );
                            atsem6++;

                            if (count1_atkt <= 2 && count1_atkt > 0) {
                              semester = 1;
                              count1_atkt =
                                wayAtkt(
                                  sem1Sub,
                                  sem1Marks,
                                  sem1Atkt,
                                  totalAktk1,
                                  semester,
                                  count1_atkt,
                                  result,
                                  atsem1,
                                  sc
                                );
                            }
                            if (count2_atkt <= 2 && count2_atkt > 0) {
                              semester = 2;
                              count2_atkt =
                                wayAtkt(
                                  sem2Sub,
                                  sem2Marks,
                                  sem2Atkt,
                                  totalAktk2,
                                  semester,
                                  count2_atkt,
                                  result,
                                  atsem2,
                                  sc
                                );
                            }
                            if (count3_atkt <= 2 && count3_atkt > 0) {
                              semester = 3;
                              count3_atkt =
                                wayAtkt(
                                  sem3Sub,
                                  sem3Marks,
                                  sem3Atkt,
                                  totalAktk3,
                                  semester,
                                  count3_atkt,
                                  result,
                                  atsem3,
                                  sc
                                );
                            }
                            if (count4_atkt <= 2 && count4_atkt > 0) {
                              semester = 4;
                              count4_atkt =
                                wayAtkt(
                                  sem4Sub,
                                  sem4Marks,
                                  sem4Atkt,
                                  totalAktk4,
                                  semester,
                                  count4_atkt,
                                  result,
                                  atsem4,
                                  sc
                                );
                            }
                            if (count5_atkt <= 2 && count5_atkt > 0) {
                              semester = 5;
                              count5_atkt =
                                wayAtkt(
                                  sem5Sub,
                                  sem5Marks,
                                  sem5Atkt,
                                  totalAktk5,
                                  semester,
                                  count5_atkt,
                                  result,
                                  atsem5,
                                  sc
                                );
                            }
                            continue;
                          } else {
                            int n = 1;
                            if (
                              count1_atkt >= 1 ||
                              count2_atkt >= 1 ||
                              count3_atkt >= 1 ||
                              count4_atkt >= 1 ||
                              count5_atkt >= 1 ||
                              count6_atkt >= 1
                            ) {
                              while (n == 1) {
                                System.out.println(
                                  setRed +
                                  " \t\t\t\t\t  LAST CHANCE FOR ATKT EXAM: " +
                                  resetRed
                                );

                                if (count1_atkt <= 2 && count1_atkt > 0) {
                                  semester = 1;
                                  count1_atkt =
                                    wayAtkt(
                                      sem1Sub,
                                      sem1Marks,
                                      sem1Atkt,
                                      totalAktk1,
                                      semester,
                                      count1_atkt,
                                      result,
                                      atsem1,
                                      sc
                                    );
                                  totalAktk1 = (count1_atkt);

                                  result = checkResult(totalAktk1, result);
                                  if (count1_atkt == 0) {
                                    marksheetResult(
                                      sem1Sub,
                                      sem1Marks,
                                      sem1Atkt,
                                      atsem1,
                                      semester,
                                      s_Name,
                                      f_Name,
                                      m_Name,
                                      roll_No,
                                      enrollmentNum,
                                      status,
                                      totalNumber,
                                      result
                                    );
                                  }
                                }

                                if (count2_atkt <= 2 && count2_atkt > 0) {
                                  semester = 2;
                                  count2_atkt =
                                    wayAtkt(
                                      sem2Sub,
                                      sem2Marks,
                                      sem2Atkt,
                                      totalAktk2,
                                      semester,
                                      count2_atkt,
                                      result,
                                      atsem2,
                                      sc
                                    );
                                  totalAktk2 =
                                    (byte) (count1_atkt + count2_atkt);
                                }
                                if (count3_atkt <= 2 && count3_atkt > 0) {
                                  semester = 3;
                                  count3_atkt =
                                    wayAtkt(
                                      sem3Sub,
                                      sem3Marks,
                                      sem3Atkt,
                                      totalAktk3,
                                      semester,
                                      count3_atkt,
                                      result,
                                      atsem3,
                                      sc
                                    );
                                  totalAktk3 =
                                    (byte) (
                                      count1_atkt + count2_atkt + count3_atkt
                                    );
                                }
                                if (count4_atkt <= 2 && count4_atkt > 0) {
                                  semester = 4;
                                  count4_atkt =
                                    wayAtkt(
                                      sem4Sub,
                                      sem4Marks,
                                      sem4Atkt,
                                      totalAktk4,
                                      semester,
                                      count4_atkt,
                                      result,
                                      atsem4,
                                      sc
                                    );
                                  totalAktk4 =
                                    (byte) (
                                      count1_atkt +
                                      count2_atkt +
                                      count3_atkt +
                                      count4_atkt
                                    );
                                }

                                if (count5_atkt <= 2 && count5_atkt > 0) {
                                  semester = 5;
                                  count5_atkt =
                                    wayAtkt(
                                      sem5Sub,
                                      sem5Marks,
                                      sem5Atkt,
                                      totalAktk5,
                                      semester,
                                      count5_atkt,
                                      result,
                                      atsem5,
                                      sc
                                    );
                                  totalAktk5 =
                                    (byte) (
                                      count1_atkt +
                                      count2_atkt +
                                      count3_atkt +
                                      count4_atkt +
                                      count5_atkt
                                    );
                                }
                                if (count6_atkt <= 2 && count6_atkt > 0) {
                                  semester = 6;
                                  count6_atkt =
                                    wayAtkt(
                                      sem6Sub,
                                      sem6Marks,
                                      sem6Atkt,
                                      totalAktk6,
                                      semester,
                                      count6_atkt,
                                      result,
                                      atsem6,
                                      sc
                                    );
                                  totalAktk6 =
                                    (byte) (
                                      count1_atkt +
                                      count2_atkt +
                                      count3_atkt +
                                      count4_atkt +
                                      count5_atkt +
                                      count6_atkt
                                    );
                                }
                                totalAktk6 =
                                  (byte) (
                                    count1_atkt +
                                    count2_atkt +
                                    count3_atkt +
                                    count4_atkt +
                                    count5_atkt +
                                    count6_atkt
                                  );
                                if (totalAktk6 != 0) {
                                  System.out.println(
                                    setRed +
                                    "\t\t\t\t\tSorry you can not continue this course: " +
                                    resetRed
                                  );
                                  n++;
                                } else {
                                  System.out.println("Degree: ");
                                  System.out.println("Enter date for Degree: ");
                                  sc.nextLine();
                                  String date = sc.nextLine();

                                  Marksheet.degree(date, s_Name);
                                  Marksheet.migration(
                                    date,
                                    s_Name,
                                    enrollmentNum
                                  );
                                }
                                n++;
                              }
                            }
                            if (n == 1) {
                              System.out.println("Degree: ");
                              System.out.println("Enter date for Degree: ");
                              sc.nextLine();
                              String date = sc.nextLine();

                              Marksheet.degree(date, s_Name);
                              Marksheet.migration(date, s_Name, enrollmentNum);
                            }
                          }

                          break;
                        } while (totalAktk6 >= 3);
                      }
                    } while (totalAktk5 >= 3);
                  }
                } while (totalAktk4 >= 3);
              }
            } while (totalAktk3 >= 3);
          }
        } while (totalAktk2 >= 3);
      }
    } while (totalAktk1 >= 3);
  }
}`,
  },

  {
    type: "file",
    name: "Code For Disable Inspect Mode",
    solution: `export  function DisableInspect() {
      useEffect(() => {
        
        const handleContextMenu = (e: any) => e.preventDefault();
    
        const handleKeyDown = (e: any) => {
          if (
            e.keyCode === 123 || // F12
            (e.ctrlKey && e.shiftKey && [73, 74, 67].includes(e.keyCode)) || // Ctrl+Shift+I/J/C
            (e.ctrlKey && e.keyCode === 85) // Ctrl+U
          ) {
            e.preventDefault();
          }
        };
    
        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("keydown", handleKeyDown);
    
        return () => {
          document.removeEventListener("contextmenu", handleContextMenu);
          document.removeEventListener("keydown", handleKeyDown);
        };
      }, []);
    
      return <div>Inspect Mode Disabled</div>;
    }`,
  },
  {
    type: "file",
    name: "Copy Text on Clipboard",
    solution: `export const copyToClipboard = (text: string) => {
  if (typeof window !== "undefined" && navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  } else if (typeof document !== "undefined") {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      toast.success("Copied to clipboard!");
    } catch (err) {
      console.error("Fallback: Copy failed", err);
    }
    document.body.removeChild(textArea);
  } else {
    console.error("Clipboard API not available");
  }
};`,
  },
  {
    type: "file",
    name: "Disable original text copy on clipboard",
    solution: `export const useCopyProtect = () => {
      useEffect(() => {
        const handleCopy = (event: any) => {
          event.preventDefault();
          event.clipboardData.setData(
            "text/plain",
            "NAA! Beta Mera content churane ki koshish mat kariyo!! 😜😜"
          );
        };
    
        document.addEventListener("copy", handleCopy);
    
        return () => {
          document.removeEventListener("copy", handleCopy);
        };
      }, []);
    };
    `,
  },
  {
    type: "file",
    name: "WAP to find the median of two sorted arrays",
    solution: "Answer will be available after some time 🙌",
  },
  {
    type: "file",
    name: "WAP to print the diagonal elements of a matrix",
    solution: "Answer will be available after some time 🙌",
  },
  {
    type: "file",
    name: "WAP to find the sum of row and column elements of a matrix",
    solution: "Answer will be available after some time 🙌",
  },
  {
    type: "file",
    name: "WAP to print Pascal's triangle",
    solution: "Answer will be available after some time 🙌",
  },
  {
    type: "file",
    name: "WAP to print all unique elements in an array",
    solution: "Answer will be available after some time 🙌",
  },
  {
    type: "file",
    name: "WAP to rearrange an array such that even index elements are smaller and odd index elements are greater",
    solution: "Answer will be available after some time 🙌",
  },
];

export const repositories = [
  {
    type: "repo",
    name: "Interview Preparation",
    url: "https://github.com/Sohanmaali/Interview-Preparation",
  },
  {
    type: "repo",
    name: "Java Program Practice",
    url: "https://github.com/Sohanmaali/Java-Program-Practice",
  },
  {
    type: "repo",
    name: "Nest JS Authentication",
    url: "https://github.com/Sohanmaali/Nest-Authentication",
  },
];

// =================================GALLERY PAGE=================================

export const gallerySlider = [
  "/assets/images/slider/1.jpg",
  "/assets/images/slider/2.jpg",
  "/assets/images/slider/4.jpg",
];

export const oneYearjourney = [
  {
    step: 1,
    title: "💡Embrace Lifelong Learning",
    image: "/assets/images/sohan/1.jpg",
    details:
      "Stay curious and open to new ideas. Every challenge is an opportunity to grow. Keep learning, keep evolving, and never stop exploring new skills.",
  },
  {
    step: 2,
    title: "💬 Communicate with Clarity",
    image: "/assets/images/sohan/2.jpg",
    details:
      "Listen actively and express yourself clearly. Meaningful conversations build trust and deepen relationships. Choose your words wisely and speak with intention.",
  },
  {
    step: 3,
    title: "🚀 Take Action, Not Just Plans",
    image: "/assets/images/sohan.jpg",
    details:
      "Dreams remain dreams without action. Start small, stay consistent, and take deliberate steps toward your goals every day. Progress is built one step at a time.",
  },
];

export const leftMarquee = [
  "/assets/code/code_1.jpg",
  "/assets/code/code_2.jpg",
  "/assets/code/code_3.jpg",
  "/assets/code/code_4.jpg",
  "/assets/code/code_5.jpg",
  "/assets/code/code_6.jpg",
  "/assets/code/code_7.jpg",
  "/assets/code/code_8.jpg",
  "/assets/code/code_9.jpg",
  "/assets/code/code_10.jpg",
];

export const rightMarquee = [
  "/assets/code/code_1.jpg",
  "/assets/code/code_2.jpg",
  "/assets/code/code_3.jpg",
  "/assets/code/code_4.jpg",
  "/assets/code/code_5.jpg",
  "/assets/code/code_6.jpg",
  "/assets/code/code_7.jpg",
  "/assets/code/code_8.jpg",
  "/assets/code/code_9.jpg",
  "/assets/code/code_10.jpg",
];

export const infoBeans = [
  {
    eventName: "Guru purnima",
    images: [
      "/assets/images/gurupurnima/g1.jpg",
      "/assets/images/gurupurnima/g3.jpg",
      "/assets/images/gurupurnima/g4.jpg",
      "/assets/images/gurupurnima/g5.jpg",
    ],
  },
  {
    eventName: "Shree ganesh chaturthi",
    images: [
      "/assets/images/ganesh_chaturthi/ganeshji1.jpg",
      "/assets/images/ganesh_chaturthi/ganeshji4.jpg",
      "/assets/images/ganesh_chaturthi/gnaesh2.jpg",
      "/assets/images/ganesh_chaturthi/rangloi2.jpg",
    ],
  },
  {
    eventName: "Birthday",
    images: [
      "/assets/images/Birthday/birt6.jpg",
      "/assets/images/Birthday/birth-day1.jpg",
      "/assets/images/Birthday/birth2.jpg",
      "/assets/images/Birthday/birth6.jpg",
    ],
  },
];

export const foduuEvent = [
  {
    eventName: "Shree ganesh chaturthi",
    images: [
      "/assets/images/foduu/ganesh_chaturthi/IMG_20240907_204655_0905.jpg",
      "/assets/images/foduu/ganesh_chaturthi/IMG_20240907_204657_0283.jpg",
      "/assets/images/foduu/ganesh_chaturthi/IMG_20240907_204700_0080.jpg",
      "/assets/images/foduu/ganesh_chaturthi/IMG_20240908_102603.jpg",
      "/assets/images/foduu/ganesh_chaturthi/IMG_20240908_102619.jpg",
    ],
  },
  {
    eventName: "Dipawali",
    images: [
      "/assets/images/foduu/dipawali/1729874714606.jpg",
      "/assets/images/foduu/dipawali/IMG-20241026-WA0001.jpg",
      "/assets/images/foduu/dipawali/IMG-20241026-WA0005.jpg",
      "/assets/images/foduu/dipawali/IMG-20241026-WA0015.jpg",
      "/assets/images/foduu/dipawali/IMG-20241026-WA0019.jpg",
      "/assets/images/foduu/dipawali/IMG-20241026-WA0022.jpg",
      "/assets/images/foduu/dipawali/IMG-20241113-WA0005.jpg",
      "/assets/images/foduu/dipawali/IMG-20241113-WA0007.jpg",
    ],
  },
  {
    eventName: "Birthday",
    images: [
      "/assets/images/foduu/barthday/IMG-20250207-WA0001.jpg",
      "/assets/images/foduu/barthday/IMG-20250207-WA0019.jpg",
      "/assets/images/foduu/barthday/IMG-20250207-WA0013.jpg",
      "/assets/images/foduu/barthday/IMG-20250207-WA0035.jpg",
    ],
  },
];

// =================================BLOG SECTION=================================
export const blogs = [
  {
    heading: "The Art of Coding: More Than Just Writing Code",
    slug: "the-art-of-coding-more-than-just-writing-code",
    image: "/assets/images/blog/coding.jpeg",
    details:
      "Coding is often perceived as a technical skill—one that requires logic, problem-solving, and an understanding of programming languages. However, coding is much more than simply writing lines of code. It is an art, a craft that involves creativity, structure, and design.",
    description: `<h1>The Creative Aspect of Coding</h1>
    <p>Many believe that coding is strictly analytical, but creativity plays a significant role in software development. Writing clean, efficient, and scalable code is like composing music or painting a masterpiece. A well-structured program not only works flawlessly but also has an elegance that experienced developers appreciate. Creativity comes into play when finding innovative solutions to complex problems or designing intuitive user interfaces.</p>    
    <h2>Problem-Solving and Logic</h2>
    <p>At its core, coding is about solving problems. Whether you're developing a mobile application, a website, or an AI algorithm, each line of code serves a purpose. Developers must break down problems into smaller, manageable parts and create solutions that are both efficient and maintainable. Logical thinking and structured decision-making are key components of writing effective code.</p>
    
    <h2>Writing Readable and Maintainable Code</h2>
    <p>Good code is not just about functionality; it should be readable and maintainable. This means using meaningful variable names, adding comments where necessary, and following best practices in coding standards. Future developers (or even your future self) should be able to understand and modify the code with ease. Code that is well-organized reduces technical debt and makes long-term maintenance easier.</p>
    
    <h2>The Continuous Learning Process</h2>
    <p>Technology evolves rapidly, and so does coding. A good developer never stops learning. Whether it’s mastering a new programming language, keeping up with the latest frameworks, or understanding emerging trends like AI and blockchain, continuous improvement is essential. Engaging with the coding community, reading documentation, and experimenting with new technologies keep developers ahead in the game.</p>
    
    <h2>Conclusion</h2>
    <p>Coding is not just about writing instructions for computers; it is a blend of logic, creativity, and continuous learning. It is an art that requires patience, persistence, and a willingness to improve. Whether you are a beginner or an experienced developer, embracing the artistic side of coding can make you a better programmer and problem solver.</p>
`,
  },
  {
    heading:
      "The Role of Farmers (Kishan) in Agriculture: Backbone of the Nation",
    slug: "the-role-of-farmers-kishan-in-agriculture-backbone-of-the-nation",
    image: "/assets/images/blog/kishan.jpeg",
    details:
      "Agriculture has been the foundation of human civilization for thousands of years. In India, where over half of the population is engaged in farming, Kishan (farmers) are considered the backbone of the nation. They play a crucial role in food production, economic development, and environmental sustainability.",
    description: `The Importance of Farmers in Agriculture
Farmers are responsible for producing the food that sustains billions of people. Their hard work ensures that we have grains, vegetables, fruits, dairy, and other essential products. Without farmers, there would be no food security, and economies would struggle to sustain themselves.

1. Food Production and Supply
Farmers cultivate land, grow crops, and raise livestock to provide food for the population. They use different farming techniques, such as organic farming, sustainable agriculture, and modern technology-based farming, to increase productivity.

2. Contribution to the Economy
Agriculture contributes significantly to the GDP of many countries, especially in developing nations like India. The farming sector provides employment opportunities to millions of people, from small-scale farmers to large agribusinesses.

3. Environmental Sustainability
Farmers play a key role in maintaining the balance of nature. Sustainable farming practices, such as crop rotation, organic fertilizers, and conservation techniques, help protect the soil, water, and biodiversity.

Challenges Faced by Farmers
Despite their immense contribution, farmers face several challenges:

Climate Change: Unpredictable weather patterns, droughts, floods, and rising temperatures impact crop production.
Debt and Financial Issues: Many farmers struggle with loans and lack financial support for modern farming techniques.
Market Prices: Fluctuating market rates for crops make it difficult for farmers to earn stable incomes.
Lack of Modern Technology: Small farmers often do not have access to advanced machinery, irrigation systems, and storage facilities.
The Future of Farming
With advancements in agritech, AI, and sustainable farming practices, the future of agriculture looks promising. Governments and organizations are working on initiatives such as:

Organic and Sustainable Farming to reduce chemical usage.
Smart Agriculture with AI-powered tools for better yield prediction.
Financial Support and government schemes to help small-scale farmers.
Conclusion
Farmers (Kishan) are the lifeline of agriculture and a crucial part of the global economy. Supporting them with better policies, technology, and fair pricing can ensure a prosperous agricultural future. It’s time to recognize their efforts and work towards sustainable farming solutions.

🚜 Salute to all the hardworking farmers who feed the world! 🌾`,
  },
];

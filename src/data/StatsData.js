import React from 'react';
import {GiEarthAmerica} from 'react-icons/gi'
import {MdAirplanemodeActive, MdTimer} from 'react-icons/md'
import {FaMoneyCheck} from 'react-icons/fa'

export const StatsData = [
    {
        icon: (<GiEarthAmerica css={`
        color: #0ce9a0`}
        />),
        title: "الأعمال الخارجية",
        desc: "ساهمنا في إنشاء مدارس ومساجد في أكثر من 32 دولة "
    },
     {
        icon: (<MdAirplanemodeActive />),
        title: "الوصول إلى جميع الدول",
        desc: "أعمالنا التطوعية والإجتماعية لا تقتصر على الداخل وإنما نسعى بأن نوصل خبراتنا لأرجاء المعمورة"
    },
     {
        icon: (<MdTimer css={`
        color: #0ce9a0`}/>),
        title: "نساهم في تنظيم وقت العائلة",
        desc: "حيث أن برامجنا تبدأ من بعد صلاة الفجر وحتى الساعة التاسعة مساءً "
    },
     {
        icon: (<FaMoneyCheck />),
        title: "أكثر من ألف مشترك",
        desc: "برامجنا تشمل الجنسين الرجال والنساء ولجميع الأعمار "
    },
]
// Store translations for both pages
const translations = {
  'index': {
    'ar': {
      'title': 'المخترعون | أكاديمية برمجة وروبوتات وSTEM للأطفال في مصر',
      'meta_description': 'أكاديمية مخترعون — أكاديمية برمجة وروبوتات وتكنولوجيا تعليم (EdTech) للأطفال في مصر (القاهرة، الإسكندرية، الغردقة). دورات STEM، بايثون، الذكاء الاصطناعي. مؤسس ومالك: باسل سلام.',
      'seo_intro': 'أكاديمية مخترعون في مصر — أكاديمية برمجة للأطفال، أكاديمية روبوتات، STEM وتكنولوجيا التعليم (EdTech) في القاهرة والإسكندرية والغردقة. مؤسس ومالك الأكاديمية: باسل سلام (Bassel Sallam).',
      'nav_courses': 'كورساتنا',
      'nav_why': 'لماذا مخترعون',
      'nav_projects': 'إنجازاتنا',
      'nav_partnership': 'الشراكات',
      'nav_pricing': 'الأسعار',
      'nav_faq': 'الأسئلة الشائعة',
      'book_now': 'احجز الان',
      'hero_title_1': 'رحلة',
      'hero_title_2': 'الإكتشاف',
      'hero_title_3': 'تبدأ من هنا',
      'list_item_1': 'برامج تعليمية مصممة للأطفال لصقل مهاراتهم',
      'list_item_2': 'نمزج بين التعلم و المتعة من خلال مشاريع عملية تنمي التفكير و الإبداع',
      'list_item_3': 'معنا, لا يتعلم الطفل فحسب, بل يصنع شيئا يعبر به عن ذاته',
      'contact_us': 'تواصل معنا',
      'discover_platform': 'اكتشف منصة التعلم الإلكتروني',
      'courses_title': 'كورساتنا',
      'courses_desc': 'مجموعة من البرامج التعليمية الممتعة التي تنمي مهارات طفلك وتفتح له أبواب المستقبل',
      'course1_title': 'الروبوتات والذكاء الاصطناعي',
      'course1_desc1': 'يتعلم الأطفال تجميع الروبوتات التعليمية بأجزاء مختلفة واستخدام أدوات برمجة بسيطة',
      'course1_desc2': 'يستخدم خوارزميات الذكاء الاصطناعي مثل التعلم الآلي واتخاذ القرارات',
      'course1_desc3': 'نظريات مبسطة وسهلة الفهم',
      'course1_desc4': 'ينخرط في التفكير المنطقي والتحليل العملي من خلال مشاريع عملية خطوة بخطوة واستكشاف',
      'course2_title': 'تصميم وتطوير المواقع الإلكترونية',
      'course2_desc1': 'يتعلم الأطفال كيفية إنشاء مواقع ويب ذات استخدامات مختلفة',
      'course2_desc2': 'برمجة بسيطة في HTML، CSS، والمزيد',
      'course2_desc3': 'يكتسب عملياً هيكل الموقع وكيفية تصميمها بفعالية وجاذبية',
      'course2_desc4': 'يمارس مشاريع عملية ويطبق المحتوى من خلال تطبيقات ومشاريع فعلية',
      'course3_title': 'تصميم الجرافيك',
      'course3_desc1': 'يكتشف الأطفال أساسيات التصميم الفني من خلال برامج الجرافيك والفنون الرقمية',
      'course3_desc2': 'يستخدم أدوات تصميم احترافية مبسطة للمبتدئين لإنتاج صور ورسومات جذابة',
      'course3_desc3': 'يتعلم تقنيات الألوان وتأثيرات الصور ويطور مهارات للتعبير عن الأفكار باحترافية وفنية',
      'course4_title': 'برمجة تطبيقات الهاتف',
      'course4_desc1': 'يتعلم الأطفال كيفية بناء تطبيقات بسيطة باستخدام أدوات سهلة الاستخدام ومناسبة لأعمارهم',
      'course4_desc2': 'يحدد مكونات التطبيق ويتفاعل مع وظائف التطبيق بطريقة عملية وتفاعلية',
      'course4_desc3': 'يطور فكرة الحلول من المشكلة إلى المنتج، مما يعزز مهاراتهم التكنولوجية والابتكارية',
      'course5_title': 'بايثون (Python)',
      'course5_desc1': 'يتعلم الأطفال بايثون ببساطة وأوامرها، حيث إنها من أشهر لغات البرمجة عالميا',
      'course5_desc2': 'يطبق ما يتعلمه في مشاريع برمجية منظمة لبناء مهارات التفكير',
      'course5_desc3': 'يؤسس أساسا قويا في البرمجة لتعلم لغات وأدوات أكثر تقدما في المستقبل',
      'why_title': 'لماذا تختار "مخترعون" لأطفالك؟',
      'why_desc': 'لأننا لا نعلم فقط… بل نطلق طاقات الأطفال ليفكروا، ويبتكروا، ويصنعوا مستقبلهم بأيديهم',
      'why_item1_title': 'التعلم العملي من اليوم الأول',
      'why_item1_desc': 'نساعد الطفل على إنجاز مشروع حقيقي بيديه، و ليس مجرد الملاحظة.',
      'why_item2_title': 'محتوى مناسب للعمر',
      'why_item2_desc': 'برامج تعليمية مصممة خصيصاً لسنه واهتماماته، دون تعقيد.',
      'why_item3_title': 'تفاعل مباشر مع المعلمين',
      'why_item3_desc': 'تتيح الدروس المباشرة للطفل المشاركة و طرح الأسئلة و الإجابة عليها.',
      'why_item4_title': 'نتائج واضحة وإنجاز حقيقي',
      'why_item4_desc': 'ينتهي كل كورس بمشروع عملي و شهادة معتمدة.',
      'why_item5_title': 'بيئة تعليمية آمنة ومحفزة',
      'why_item5_desc': 'تجربة تعليمية ممتعة و داعمة تشجع على الابتكار.',
      'projects_title': 'أفكار تتحول لإنجازات',
      'projects_desc': 'من فكرة بسيطة إلى مشروع حقيقي، هنا نحتفل بإبداعات الطلاب التي أصبحت واقعا ملموسا',
      'testimonials_title': 'أصوات النجاح طلابنا يحكون قصتهم',
      'analysis_branches': 'فروع في مصر',
      'analysis_satisfaction': 'معدل رضا الطلاب',
      'analysis_parents': 'أولياء أمور راضون',
      'analysis_graduated': 'طالب متخرج',
      'journey_title': 'رحلة تعلم طفلك معنا',
      'journey_desc': 'مع كل تجربة جديدة، نزرع في طفلك حب التعلم وشغف الاكتشاف',
      'plan_step1_title': 'حضور أسبوعي مرن',
      'plan_step1_desc': 'حصّة واحدة أسبوعياً، سواء أونلاين أو حضورياً.',
      'plan_step2_title': 'تطبيق عملي أثناء الحصة',
      'plan_step2_desc': 'ينجز الطفل مشروعاً بسيطاً خلال كل حصة لترسيخ المعلومات.',
      'plan_step3_title': 'فيديوهات مراجعة ومتابعة',
      'plan_step3_desc': 'نوفر مواد مسجلة للمراجعة و التعلم الإضافي طوال الأسبوع.',
      'plan_step4_title': 'مشروع تخرج في نهاية البرنامج',
      'plan_step4_desc': 'ينجز الطفل مشروعاً نهائياً يلخص فيه كل ما تعلمه و يعرضه بكل فخر.',
      'quote': '"نؤمن أن كل خطوة في رحلتنا مع طفلك هي بداية لحلم جديد يكبر معه"',
      'partners_title': 'مع شركائنا نفتح لأطفالكم أبواب المستقبل',
      'pricing_title': 'استثمر في مهارات طفلك مع أفضل الخيارات',
      'features_title': 'كل الخطط تشمل:',
      'feature_item1': 'حضور في مجموعات صغيرة (بحد أقصى ٧ طلاب)',
      'feature_item2': 'مهام عملية في كل حصة',
      'feature_item3': 'فيديوهات تعليمية مدى الحياة',
      'feature_item4': 'متابعة فردية من خلال الواجبات',
      'feature_item5': 'لا توجد رسوم إضافية على المعدات',
      'feature_item6': 'شهادة معتمدة عند الانتهاء من كل مستوى',
      'feature_item7': 'دعم فني مستمر للرد على أسئلة الأطفال',
      'feature_item8': 'بيئة تعليمية ممتعة و محفزة على الإبداع',
      'plan_beginner_title': 'الخطة المبتدئة',
      'plan_beginner_desc': 'مثالية لبداية قوية: يكتسب طفلك مهارات أساسية ويبدأ مشاريعه العملية الأولى بثقة',
      'plan_intermediate_title': 'الخطة المتوسطة',
      'plan_intermediate_desc': 'قفزة نوعية في مهاراته: يتعمق طفلك ويُنفذ مشاريع أكثر تقدماً تؤهله للمرحلة التالية',
      'plan_advanced_title': 'الخطة المتقدمة',
      'plan_advanced_badge': 'الأكثر تميزا',
      'plan_advanced_desc': 'رحلة نحو الاحتراف: يصل طفلك لمستوى متقدم، بمهارات عملية قادرة على إحداث فرق حقيقي',
      'faq_title': 'كل اللي محتاج تعرفه قبل بداية رحلة طفلك معنا',
      'faq_q1': 'هل يوجد تطبيق عملي للمناهج؟',
      'faq_a1': 'نعم بالتأكيد! في مخترعون نعتمد كليا على التعلم التجريبي، ويوجد في كل محاضرة مشروعين على الأقل',
      'faq_q2': 'كيف اقوم بالحجز؟',
      'faq_a2': 'يمكنك التواصل معنا على الأرقام الموضحة بالموقع، او الحجز عن طريق زر \'احجز الآن\'، او عن طريق الواتساب',
      'faq_q3': 'ما هي طرق الحضور المتاحة؟',
      'faq_a3': 'لدينا 4 أنواع من الحضور (حضور فعلي في أحد الفروع – حضور أونلاين – حضور مدمج بين الأونلاين والفروع – شراء كورسات مسجلة على منصة التعلم الإلكتروني)',
      'faq_q4': 'اين توجد فروعكم؟',
      'faq_a4': 'لدينا فروع في محافظات (القاهرة – الإسكندرية – الغردقة) و لدينا أكثر من فرع و أكثر من مدرسة لذلك يفضل من العميل تحديد منطقته السكنية، و نحن سوف نختار له أقرب مكان لضمان راحتك',
      'faq_q5': 'ما هي المواعيد؟',
      'faq_a5': 'عند التسجيل سوف يقوم الكادر المتخصص بالتواصل معك لتحديد أنسب ميعاد لك',
      'faq_q6': 'هل يمكنني تجربة الأكاديمية قبل البدء؟',
      'faq_a6': 'نعم بالتأكيد، نحن في مخترعون واثقون من رضا عملائنا، لذلك نتيح حضور المحاضرة الأولى مجانًا',
      'contact_form_title': 'سجل اهتمامك وابدأ رحلة طفلك',
      'form_name_ph': 'الاسم',
      'form_email_ph': 'البريد الإلكتروني',
      'form_message_ph': 'اكتب رسالتك',
      'form_submit_btn': 'أرسل رسالتك',
      'footer_slogan': 'نصنع مستقبل المبدعين',
      'footer_desc': 'نؤمن بقدرات كل طفل و نصنع معه بداية جديدة نحو المستقبل',
      'footer_courses_heading': 'كورساتنا',
      'footer_course1': 'الروبوتات والذكاء الاصطناعي',
      'footer_course2': 'تصميم وتطوير المواقع الإلكترونية',
      'footer_course3': 'تصميم الجرافيك',
      'footer_course4': 'برمجة تطبيقات الهاتف',
      'footer_course5': 'بايثون',
      'footer_discover_platform': 'اكتشف منصة التعلم الإلكتروني',
      'footer_copyright': '© 2018 - 2025 أكاديمية مخترعون، كل الحقوق محفوظة'
    },
    'en': {
      'title': 'Mokhtareon | Kids Programming, Robotics & STEM EdTech Academy Egypt',
      'meta_description': 'Mokhtareon — kids programming academy, robotics academy, STEM and edtech in Egypt (Cairo, Alexandria, Hurghada). Python, AI and hands-on coding courses. Founder & Owner: Bassel Sallam.',
      'seo_intro': 'Mokhtareon is Egypt\'s kids programming academy, robotics academy, STEM and edtech academy serving Cairo, Alexandria and Hurghada. Founder & Owner: Bassel Sallam (باسل سلام).',
      'nav_courses': 'Our Courses',
      'nav_why': 'Why Mokhtareon',
      'nav_projects': 'Our Achievements',
      'nav_partnership': 'Partnership',
      'nav_pricing': 'Pricing',
      'nav_faq': 'FAQ',
      'book_now': 'Book Now',
      'hero_title_1': 'The Journey of',
      'hero_title_2': 'Discovery',
      'hero_title_3': 'Starts Here',
      'list_item_1': 'Educational programs designed for children to develop their skills',
      'list_item_2': 'We combine learning and fun through practical projects that develop thinking and creativity',
      'list_item_3': 'With us, children don\'t just learn, they create something that expresses themselves',
      'contact_us': 'Contact Us',
      'discover_platform': 'Discover E-Learning Platform',
      'courses_title': 'Our Courses',
      'courses_desc': 'A collection of fun educational programs that develop your child\'s skills and open doors to the future',
      'course1_title': 'Robotics and Artificial Intelligence',
      'course1_desc1': 'Children learn to assemble educational robots with different parts and use simple programming tools',
      'course1_desc2': 'Uses artificial intelligence algorithms such as machine learning and decision making',
      'course1_desc3': 'Simplified and easy-to-understand theories',
      'course1_desc4': 'Engages in logical thinking and practical analysis through step-by-step practical projects and exploration',
      'course2_title': 'Website Design and Development',
      'course2_desc1': 'Children learn how to create websites with different uses',
      'course2_desc2': 'Simple programming in HTML, CSS, and more',
      'course2_desc3': 'Practically acquires website structure and how to design them effectively and attractively',
      'course2_desc4': 'Practices practical projects and applies content through actual applications and projects',
      'course3_title': 'Graphic Design',
      'course3_desc1': 'Children discover the basics of artistic design through graphic programs and digital arts',
      'course3_desc2': 'Uses simplified professional design tools for beginners to produce attractive images and graphics',
      'course3_desc3': 'Learns color techniques and image effects and develops skills to express ideas professionally and artistically',
      'course4_title': 'Mobile App Programming',
      'course4_desc1': 'Children learn how to build simple applications using beginner-friendly tools suitable for their age',
      'course4_desc2': 'Identifies application components and interacts with application functions in a practical and interactive way',
      'course4_desc3': 'Develops the idea of solutions from problem to product, enhancing their technological and innovative skills',
      'course5_title': 'Python',
      'course5_desc1': 'Children learn Python simply and its commands, as it is one of the most popular programming languages globally',
      'course5_desc2': 'Applies what they learn in organized programming projects to build thinking skills',
      'course5_desc3': 'Establishes a strong foundation in programming to learn more advanced languages and tools in the future',
      'why_title': 'Why Choose "Mokhtareon" for Your Children?',
      'why_desc': 'Because we don\'t just teach... we unleash children\'s potential to think, innovate, and create their future with their own hands',
      'why_item1_title': 'Practical learning from day one',
      'why_item1_desc': 'We help the child to carry out a real project with their own hands, not just observing.',
      'why_item2_title': 'Age-appropriate content',
      'why_item2_desc': 'Educational programs tailored to his age and interests, without complexity.',
      'why_item3_title': 'Live interaction with teachers',
      'why_item3_desc': 'Live lessons allow children to participate, ask, and answer questions.',
      'why_item4_title': 'Clear results and real achievement',
      'why_item4_desc': 'Each course ends with a practical project and a certified certificate.',
      'why_item5_title': 'Safe and stimulating learning environment',
      'why_item5_desc': 'A fun and supportive learning experience that encourages innovation.',
      'projects_title': 'Ideas Turned Into Achievements',
      'projects_desc': 'From a simple idea to a real project, here we celebrate student creations that have become tangible reality',
      'testimonials_title': 'Voices of Success: Our Students Tell Their Stories',
      'analysis_branches': 'branches in Egypt',
      'analysis_satisfaction': 'student satisfaction rate',
      'analysis_parents': 'satisfied parents',
      'analysis_graduated': 'graduated student',
      'journey_title': 'Your Child\'s Learning Journey With Us',
      'journey_desc': 'With every new experience, we instill a love of learning and passion for discovery in your child',
      'plan_step1_title': 'Flexible weekly attendance',
      'plan_step1_desc': 'One session per week, either online or in-person.',
      'plan_step2_title': 'Practical application during the session',
      'plan_step2_desc': 'The child completes a simple project during each session to reinforce information.',
      'plan_step3_title': 'Review and continuation videos',
      'plan_step3_desc': 'We provide recorded materials for review and further learning throughout the week.',
      'plan_step4_title': 'Graduation project at the end of the program',
      'plan_step4_desc': 'The child completes a final project summarizing everything they have learned and presents it proudly.',
      'quote': '"We believe that every step in our journey with your child is the beginning of a new dream that grows with them"',
      'partners_title': 'With our partners, we open the doors of the future for your children',
      'pricing_title': 'Invest in your child\'s skills with the best options',
      'features_title': 'All plans include:',
      'feature_item1': 'Small group attendance (maximum 7 students)',
      'feature_item2': 'Practical tasks in each session',
      'feature_item3': 'Lifetime educational videos',
      'feature_item4': 'Individual follow-up through assignments',
      'feature_item5': 'No additional equipment fees',
      'feature_item6': 'Certified certificate upon completion of each level',
      'feature_item7': 'Continuous technical support to answer children\'s questions',
      'feature_item8': 'A fun and stimulating learning environment for creativity',
      'plan_beginner_title': 'Beginner Plan',
      'plan_beginner_desc': 'Ideal for a strong start: your child gains basic skills and confidently begins their first practical projects',
      'plan_intermediate_title': 'Intermediate Plan',
      'plan_intermediate_desc': 'A qualitative leap in their skills: your child delves deeper and executes more advanced projects qualifying them for the next stage',
      'plan_advanced_title': 'Advanced Plan',
      'plan_advanced_badge': 'Most Popular',
      'plan_advanced_desc': 'A journey towards professionalism: your child reaches an advanced level, with practical skills capable of making a real difference',
      'faq_title': 'Everything you need to know before starting your child\'s journey with us',
      'faq_q1': 'Is there practical application of the curricula?',
      'faq_a1': 'Yes, absolutely! At Mokhtareon, we rely entirely on experiential learning, and there are at least two projects in each lecture',
      'faq_q2': 'How do I book?',
      'faq_a2': 'You can contact us at the numbers listed on the website, or book via the "Book Now" button, or via WhatsApp',
      'faq_q3': 'What are the available attendance methods?',
      'faq_a3': 'We have 4 types of attendance (in-person at one of our branches – online attendance – blended attendance between online and branches – purchasing recorded courses on the e-learning platform)',
      'faq_q4': 'Where are your branches?',
      'faq_a4': 'We have branches in governorates (Cairo – Alexandria – Hurghada) and we have more than one branch and more than one school, so it is preferable for the client to specify their residential area, and we will choose the closest area to ensure your comfort',
      'faq_q5': 'What are the timings?',
      'faq_a5': 'Upon registration, the specialized staff will contact you to determine the most suitable time for you',
      'faq_q6': 'Can I try the academy before starting?',
      'faq_a6': 'Yes, absolutely, we at Mokhtareon are confident in our customers\' satisfaction, so we allow attending the first lecture for free',
      'contact_form_title': 'Register your interest and start your child\'s journey',
      'form_name_ph': 'Name',
      'form_email_ph': 'Email Address',
      'form_message_ph': 'Write your message',
      'form_submit_btn': 'Send your message',
      'footer_slogan': 'We Create the Future of Innovators',
      'footer_desc': 'We believe in every child\'s abilities and create with them a new beginning towards the future',
      'footer_courses_heading': 'Our Courses',
      'footer_course1': 'Robotics and Artificial Intelligence',
      'footer_course2': 'Website Design and Development',
      'footer_course3': 'Graphic Design',
      'footer_course4': 'Mobile App Programming',
      'footer_course5': 'Python',
      'footer_discover_platform': 'Discover E-Learning Platform',
      'footer_copyright': '© 2018 - 2025 Mokhtareon Academy, All Rights Reserved'
    }
  },
  'book': {
    'ar': {
      'page_title': 'احجز الآن - المخترعون',
      'main_heading': 'احجز مكان طفلك معنا',
      'sub_heading': 'اختر المسار المناسب وابدأ رحلة طفلك نحو عالم التكنولوجيا والابتكار',
      'form_title': 'استمارة الحجز',
      'child_name_ph': 'اسم الطفل',
      'child_age_ph': 'عمر الطفل',
      'parent_name_ph': 'اسم ولي الأمر',
      'parent_phone_ph': 'رقم الهاتف',
      'parent_email_ph': 'البريد الإلكتروني',
      'course_select': 'اختر الكورس',
      'course_option_default': 'اختر الكورس',
      'course_option1': 'الروبوتات والذكاء الاصطناعي',
      'course_option2': 'تصميم وتطوير المواقع الإلكترونية',
      'course_option3': 'تصميم الجرافيك',
      'course_option4': 'برمجة تطبيقات الهاتف',
      'course_option5': 'بايثون',
      'location_ph': 'موقع الحضور',
      'submit_button': 'تأكيد الحجز',
      'contact_heading': 'تواصل معنا',
      'address': 'العنوان',
      'phone': 'الهاتف',
      'email': 'البريد الإلكتروني',
      'back_home': 'العودة للرئيسية'
    },
    'en': {
      'page_title': 'Book Now - Mokhtareon',
      'main_heading': 'Book Your Child\'s Place With Us',
      'sub_heading': 'Choose the right path and start your child\'s journey into the world of technology and innovation',
      'form_title': 'Booking Form',
      'child_name_ph': 'Child\'s Name',
      'child_age_ph': 'Child\'s Age',
      'parent_name_ph': 'Parent\'s Name',
      'parent_phone_ph': 'Phone Number',
      'parent_email_ph': 'Email Address',
      'course_select': 'Select Course',
      'course_option_default': 'Select Course',
      'course_option1': 'Robotics and Artificial Intelligence',
      'course_option2': 'Website Design and Development',
      'course_option3': 'Graphic Design',
      'course_option4': 'Mobile App Programming',
      'course_option5': 'Python',
      'location_ph': 'Attendance Location',
      'submit_button': 'Confirm Booking',
      'contact_heading': 'Contact Us',
      'address': 'Address',
      'phone': 'Phone',
      'email': 'Email',
      'back_home': 'Back to Home'
    }
  },
  'partnership': {
    'en': {
      'title': 'Partnership | Mokhtareon Academy',
      'meta_description': 'Partner with Mokhtareon — Egypt\'s hands-on STEM academy for schools and clubs. Robotics, programming, and technology programs for children aged 6+.',
      'nav_about': 'About',
      'nav_programs': 'Programs',
      'nav_schools': 'For Schools',
      'nav_clubs': 'For Clubs',
      'nav_contact': 'Contact',
      'nav_home': 'Home',
      'hero_badge': 'School & Club Partnerships',
      'hero_title_1': 'Bring Hands-On',
      'hero_title_2': 'Technology Learning',
      'hero_title_3': 'to Your Institution',
      'hero_sub': 'Partner with Mokhtareon to deliver practical robotics, programming, and STEM programs that turn curious children into confident young innovators — with zero operational burden on your team.',
      'hero_cta_primary': 'Start a Partnership',
      'hero_cta_whatsapp': 'Chat on WhatsApp',
      'stat_established': 'Established',
      'stat_branches': 'Branches',
      'stat_programs': 'Core Programs',
      'stat_age': 'Starting Age',
      'about_label': 'Who We Are',
      'about_title': 'Mokhtareon — Where Young Inventors Begin',
      'about_lead': 'Mokhtareon is a programming and robotics academy for children aged 7 and above, founded in 2020 by a team of engineers who believe complex technology can be taught to kids — when it is explained the right way.',
      'about_p2': 'We started with our Robotics pathway and built our name around a simple mission: help children innovate, build, and become inventors. Today we run 10+ branches across Cairo, Giza, and Alexandria, delivering structured, project-based learning that parents and educators trust.',
      'pill_practical': 'Hands-On',
      'pill_kids': 'Ages 6–16',
      'pill_trusted': 'Trusted Since 2020',
      'programs_label': 'Our Curriculum',
      'programs_title': 'Programs Built for Real Learning',
      'programs_desc': 'Every track is age-appropriate, project-driven, and designed to build confidence through doing — not just watching.',
      'curriculum_robotics_title': 'Robotics',
      'curriculum_robotics_age': 'Ages 8+',
      'curriculum_robotics_desc': 'Build, wire, and program real robots. Students learn electronics, sensors, and problem-solving through hands-on projects.',
      'curriculum_web_title': 'Web Development',
      'curriculum_web_age': 'Ages 10+',
      'curriculum_web_desc': 'Create real websites with HTML, CSS, and JavaScript. Students publish projects they can proudly share with family and friends.',
      'curriculum_python_title': 'Python',
      'curriculum_python_age': 'Ages 10+',
      'curriculum_python_desc': 'Master logic, loops, and real coding through guided challenges and practical mini-applications.',
      'curriculum_js_title': 'JavaScript',
      'curriculum_js_age': 'Ages 10+',
      'curriculum_js_desc': 'Bring interactivity to the web. Students learn programming fundamentals through games, animations, and dynamic projects.',
      'curriculum_scratch_title': 'Scratch',
      'curriculum_scratch_age': 'Ages 6+',
      'curriculum_scratch_desc': 'Visual block-based coding for younger learners. Perfect entry point into programming through stories, games, and animations.',
      'branches_label': 'Our Reach',
      'branches_title': '10+ Branches Across Egypt',
      'branches_cairo_title': 'Cairo & Giza',
      'branch_misr': 'New Cairo (Misr El Gedida)',
      'branch_nasr': 'Nasr City',
      'branch_maadi': 'Maadi',
      'branch_5th': '5th Settlement',
      'branch_zayed': 'Sheikh Zayed',
      'branch_haram': 'Hadayek Al-Ahram',
      'branches_alex_title': 'Alexandria',
      'branch_loran': 'Loran',
      'branch_roshdy': 'Roshdy',
      'branch_agamy': 'Agamy',
      'schools_label': 'For Schools',
      'schools_title': 'Three Flexible Partnership Models',
      'schools_desc': 'We handle delivery, curriculum, and instruction. Your school promotes the program to parents — that\'s it.',
      'most_popular': 'Most Popular',
      'school_summer_title': 'Summer Programs',
      'school_summer_desc': 'We run courses on-site at your school or at our branches during summer. Your only responsibility is announcing the program to parents.',
      'school_summer_b1': 'Flexible on-site or off-site delivery',
      'school_summer_b2': 'Full curriculum and instructors included',
      'school_summer_b3': 'Zero teaching burden on your staff',
      'school_after_title': 'After-School Activities',
      'school_after_desc': 'Weekly technology sessions after school hours during the academic year. We deliver the program; your school introduces it to families.',
      'school_after_b1': 'Runs during winter and academic terms',
      'school_after_b2': 'Adds value to your extracurricular offering',
      'school_after_b3': 'Keeps students engaged on campus',
      'school_class_title': 'Integrated School Classes',
      'school_class_desc': 'Mokhtareon takes a fixed slot in the class schedule — or replaces the computer science subject entirely with our structured technology curriculum.',
      'school_class_b1': 'Seamless fit into existing timetables',
      'school_class_b2': 'Can replace or supplement computer classes',
      'school_class_b3': 'Measurable student outcomes and certificates',
      'clubs_label': 'For Clubs',
      'clubs_title': 'Grow Your Club with Technology',
      'full_partnership': 'Full Partnership',
      'club_marketing_title': 'Marketing Channel Partnership',
      'club_marketing_desc': 'We run courses at our branches while your club becomes an official partner. Members receive exclusive discounts, and your club earns a share of enrollment revenue.',
      'club_marketing_b1': 'Dedicated partner area inside your club',
      'club_marketing_b2': 'Special member pricing',
      'club_marketing_b3': 'Revenue share on every enrollment',
      'club_full_title': 'On-Site Collaboration',
      'club_full_desc': 'Provide a room at your club and we deliver the full program on-site. You announce it to all members, and we share revenue from every student enrolled.',
      'club_full_b1': 'Courses delivered inside your club',
      'club_full_b2': 'Exclusive benefit for your members',
      'club_full_b3': 'Shared revenue on all enrollments',
      'partners_label': 'Trusted By',
      'partners_title': 'Schools & Institutions We Partner With',
      'partners_desc': 'We are proud to collaborate with leading schools and organizations across Egypt.',
      'why_label': 'Why Partner With Us',
      'why_title': 'What You Gain',
      'why_b1_title': 'Zero Operational Burden',
      'why_b1_desc': 'We bring instructors, curriculum, and materials. You simply connect us with your community.',
      'why_b2_title': 'Elevate Your Brand',
      'why_b2_desc': 'Offer cutting-edge STEM education that sets your institution apart and delights parents.',
      'why_b3_title': 'Revenue Opportunities',
      'why_b3_desc': 'Earn shared revenue on enrollments while delivering real value to your members or students.',
      'why_b4_title': 'Proven Track Record',
      'why_b4_desc': 'Since 2020, trusted by families across 10+ branches with structured, certified programs.',
      'contact_badge': 'Let\'s Talk',
      'contact_title': 'Ready to Partner?',
      'contact_desc': 'Tell us about your school or club and we\'ll schedule a meeting to design the right partnership model for you.',
      'contact_phone': 'Phone',
      'contact_cta': 'Schedule a Meeting',
      'footer_tagline': 'Where the journey of discovery begins',
      'footer_copy': '© 2026 Mokhtareon Academy. All rights reserved.'
    },
    'ar': {
      'title': 'الشراكات | أكاديمية المخترعون',
      'meta_description': 'شارك مع المخترعون — أكاديمية STEM العملية في مصر للمدارس والأندية. برامج روبوتات وبرمجة وتكنولوجيا للأطفال من سن 6+.',
      'nav_about': 'من نحن',
      'nav_programs': 'البرامج',
      'nav_schools': 'للمدارس',
      'nav_clubs': 'للأندية',
      'nav_contact': 'تواصل معنا',
      'nav_home': 'الرئيسية',
      'hero_badge': 'شراكات المدارس والأندية',
      'hero_title_1': 'أضف تعلّمًا',
      'hero_title_2': 'تكنولوجيًا عمليًا',
      'hero_title_3': 'لمؤسستك',
      'hero_sub': 'شارك مع المخترعون لتقديم برامج روبوتات وبرمجة وSTEM عملية تحوّل الأطفال الفضوليين إلى مبتكرين واثقين — دون أي عبء تشغيلي على فريقك.',
      'hero_cta_primary': 'ابدأ شراكة',
      'hero_cta_whatsapp': 'تواصل عبر واتساب',
      'stat_established': 'تأسست',
      'stat_branches': 'فروع',
      'stat_programs': 'برامج أساسية',
      'stat_age': 'السن المبدئي',
      'about_label': 'من نحن',
      'about_title': 'المخترعون — حيث يبدأ المخترعون الصغار',
      'about_lead': 'المخترعون أكاديمية برمجة وروبوتات للأطفال من سن 7 وما فوق، تأسست عام 2020 على يد فريق من المهندسين يؤمنون بأن التكنولوجيا المعقدة يمكن تعليمها للأطفال — عندما تُشرح بالطريقة الصحيحة.',
      'about_p2': 'بدأنا بمسار الروبوتات وبنينا اسمنا حول مهمة بسيطة: مساعدة الأطفال على الابتكار والبناء والإبداع. اليوم ندير أكثر من 10 فروع في القاهرة والجيزة والإسكندرية، نقدّم تعلّمًا عمليًا منظمًا يثق به الأهل والمعلمون.',
      'pill_practical': 'تعلّم عملي',
      'pill_kids': 'أعمار 6–16',
      'pill_trusted': 'موثوق منذ 2020',
      'programs_label': 'مناهجنا',
      'programs_title': 'برامج مصممة للتعلّم الحقيقي',
      'programs_desc': 'كل مسار مناسب للعمر، قائم على المشاريع، ومصمم لبناء الثقة من خلال العمل — وليس المشاهدة فقط.',
      'curriculum_robotics_title': 'الروبوتات',
      'curriculum_robotics_age': 'من سن 8+',
      'curriculum_robotics_desc': 'تجميع وبرمجة روبوتات حقيقية. يتعلم الطلاب الإلكترونيات والحساسات وحل المشكلات من خلال مشاريع عملية.',
      'curriculum_web_title': 'تطوير المواقع',
      'curriculum_web_age': 'من سن 10+',
      'curriculum_web_desc': 'إنشاء مواقع حقيقية بـ HTML وCSS وJavaScript. ينشر الطلاب مشاريع يفتخرون بمشاركتها.',
      'curriculum_python_title': 'بايثون',
      'curriculum_python_age': 'من سن 10+',
      'curriculum_python_desc': 'إتقان المنطق والحلقات والبرمجة الحقيقية من خلال تحديات موجهة وتطبيقات مصغرة.',
      'curriculum_js_title': 'جافاسكريبت',
      'curriculum_js_age': 'من سن 10+',
      'curriculum_js_desc': 'إضافة التفاعل للويب. يتعلم الطلاب أساسيات البرمجة من خلال ألعاب ورسوم متحركة ومشاريع ديناميكية.',
      'curriculum_scratch_title': 'سكراتش',
      'curriculum_scratch_age': 'من سن 6+',
      'curriculum_scratch_desc': 'برمجة بصرية بالكتل للمتعلمين الصغار. نقطة انطلاق مثالية عبر القصص والألعاب والرسوم المتحركة.',
      'branches_label': 'انتشارنا',
      'branches_title': 'أكثر من 10 فروع في مصر',
      'branches_cairo_title': 'القاهرة والجيزة',
      'branch_misr': 'مصر الجديدة',
      'branch_nasr': 'مدينة نصر',
      'branch_maadi': 'المعادي',
      'branch_5th': 'التجمع الخامس',
      'branch_zayed': 'الشيخ زايد',
      'branch_haram': 'حدائق الأهرام',
      'branches_alex_title': 'الإسكندرية',
      'branch_loran': 'لوران',
      'branch_roshdy': 'رشدي',
      'branch_agamy': 'العجمي',
      'schools_label': 'للمدارس',
      'schools_title': 'ثلاثة نماذج شراكة مرنة',
      'schools_desc': 'نحن نتولى التنفيذ والمنهج والتدريس. مدرستك تُعلن البرنامج لأولياء الأمور — وهذا كل شيء.',
      'most_popular': 'الأكثر طلبًا',
      'school_summer_title': 'برامج الصيف',
      'school_summer_desc': 'نقدّم الدورات داخل مدرستك أو في فروعنا خلال الصيف. مسؤوليتكم الوحيدة الإعلان عن البرنامج لأولياء الأمور.',
      'school_summer_b1': 'تنفيذ مرن داخل أو خارج المدرسة',
      'school_summer_b2': 'منهج كامل ومدربون متخصصون',
      'school_summer_b3': 'لا عبء تدريسي على طاقمكم',
      'school_after_title': 'أنشطة ما بعد المدرسة',
      'school_after_desc': 'حصص تكنولوجيا أسبوعية بعد انتهاء الدوام خلال العام الدراسي. نحن ننفّذ البرنامج ومدرستكم تُعرّفه على الأسر.',
      'school_after_b1': 'يعمل خلال الشتاء والفصول الدراسية',
      'school_after_b2': 'يُضيف قيمة لأنشطتكم اللاصفية',
      'school_after_b3': 'يبقي الطلاب منخرطين في المدرسة',
      'school_class_title': 'حصص مدمجة في الجدول',
      'school_class_desc': 'المخترعون يحصل على حصة ثابتة في الجدول — أو يستبدل مادة الحاسب الآلي بمنهجنا التكنولوجي المنظم.',
      'school_class_b1': 'يتكامل بسلاسة مع الجداول الحالية',
      'school_class_b2': 'يمكن استبدال أو دعم حصص الحاسب',
      'school_class_b3': 'نتائج قابلة للقياس وشهادات معتمدة',
      'clubs_label': 'للأندية',
      'clubs_title': 'نمِّ ناديك بالتكنولوجيا',
      'full_partnership': 'شراكة كاملة',
      'club_marketing_title': 'شراكة قناة تسويقية',
      'club_marketing_desc': 'نقدّم الدورات في فروعنا بينما يصبح ناديك شريكًا رسميًا. يحصل الأعضاء على خصومات حصرية ويكسب النادي حصة من الإيرادات.',
      'club_marketing_b1': 'منطقة شريك مخصصة داخل النادي',
      'club_marketing_b2': 'أسعار خاصة للأعضاء',
      'club_marketing_b3': 'مشاركة في الإيرادات لكل تسجيل',
      'club_full_title': 'تعاون داخل النادي',
      'club_full_desc': 'وفّر غرفة في ناديك وننفّذ البرنامج كاملاً في الموقع. تُعلنون للأعضاء ونشارك الإيرادات من كل طالب مسجّل.',
      'club_full_b1': 'دورات تُقدَّم داخل ناديك',
      'club_full_b2': 'ميزة حصرية لأعضائك',
      'club_full_b3': 'إيرادات مشتركة على كل التسجيلات',
      'partners_label': 'يثق بنا',
      'partners_title': 'مدارس ومؤسسات نتعاون معها',
      'partners_desc': 'نفخر بالتعاون مع مدارس ومؤسسات رائدة في مصر.',
      'why_label': 'لماذا تشاركنا',
      'why_title': 'ما الذي ستكسبه',
      'why_b1_title': 'صفر عبء تشغيلي',
      'why_b1_desc': 'نحن نجلب المدربين والمنهج والمواد. أنت فقط تربطنا بمجتمعك.',
      'why_b2_title': 'ارفع مستوى علامتك',
      'why_b2_desc': 'قدّم تعليم STEM متقدم يميّز مؤسستك ويسعد أولياء الأمور.',
      'why_b3_title': 'فرص إيرادات',
      'why_b3_desc': 'اكسب إيرادات مشتركة من التسجيلات مع تقديم قيمة حقيقية لأعضائك أو طلابك.',
      'why_b4_title': 'سجل حافل مثبت',
      'why_b4_desc': 'منذ 2020، موثوق من الأسر في أكثر من 10 فروع ببرامج منظمة ومعتمدة.',
      'contact_badge': 'لنتحدث',
      'contact_title': 'مستعد للشراكة؟',
      'contact_desc': 'أخبرنا عن مدرستك أو ناديك وسنحدد موعدًا لتصميم نموذج الشراكة المناسب لك.',
      'contact_phone': 'هاتف',
      'contact_cta': 'حدد موعد اجتماع',
      'footer_tagline': 'حيث تبدأ رحلة الاكتشاف',
      'footer_copy': '© 2026 أكاديمية المخترعون. جميع الحقوق محفوظة.'
    }
  }
};

function getCurrentPage() {
  const path = window.location.pathname;
  if (path.includes('book.html')) {
    return 'book';
  }
  if (path.includes('/partnership')) {
    return 'partnership';
  }
  return 'index';
}

function getDefaultLanguage() {
  return 'en';
}

// Function to translate the page
function updateSeoMeta(lang) {
  const currentPage = getCurrentPage();
  const t = translations[currentPage] && translations[currentPage][lang];
  if (!t) return;

  if (t.title) {
    document.title = t.title;
  }
  if (t.meta_description) {
    const metaDesc = document.getElementById('meta-description');
    if (metaDesc) metaDesc.setAttribute('content', t.meta_description);

    const ogTitle = document.getElementById('og-title');
    const ogDesc = document.getElementById('og-description');
    const twTitle = document.getElementById('twitter-title');
    const twDesc = document.getElementById('twitter-description');

    if (ogTitle) ogTitle.setAttribute('content', t.title || t.meta_description);
    if (ogDesc) ogDesc.setAttribute('content', t.meta_description);
    if (twTitle) twTitle.setAttribute('content', t.title || t.meta_description);
    if (twDesc) twDesc.setAttribute('content', t.meta_description);
  }
}

function translatePage(lang) {
  console.log('Translating page to:', lang);
  const currentPage = getCurrentPage();
  console.log('Current page:', currentPage);
  
  // Store the new language in localStorage immediately
  localStorage.setItem('preferredLanguage', lang);
  
  // Update language indicator
  const langIndicator = document.getElementById('lang-indicator');
  if (langIndicator) {
    langIndicator.textContent = lang === 'ar' ? 'E' : 'AR';
  }
  
  const elements = document.querySelectorAll('[data-translate], [data-translate-placeholder]');
  console.log('Found elements to translate:', elements.length);
  
  if (!translations[currentPage] || !translations[currentPage][lang]) {
    console.error('Translation not found for page or language:', currentPage, lang);
    return;
  }

  elements.forEach(element => {
    const contentKey = element.getAttribute('data-translate');
    const placeholderKey = element.getAttribute('data-translate-placeholder');
    
    if (contentKey) {
      const translation = translations[currentPage][lang][contentKey];
      if (translation) {
        if (element.tagName === 'TITLE') {
          document.title = translation;
        } else {
          element.innerHTML = translation;
        }
      } else {
        console.warn('No translation found for content key:', contentKey);
      }
    }

    if (placeholderKey) {
      const translation = translations[currentPage][lang][placeholderKey];
      if (translation) {
        element.placeholder = translation;
      } else {
        console.warn('No translation found for placeholder key:', placeholderKey);
      }
    }
  });
  
  updateSeoMeta(lang);

  // Set direction based on language
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // Add or update the direction style
  let directionStyle = document.getElementById('direction-style');
  if (!directionStyle) {
    directionStyle = document.createElement('style');
    directionStyle.id = 'direction-style';
    document.head.appendChild(directionStyle);
  }
  directionStyle.textContent = getCurrentPage() === 'partnership'
    ? `body.partnership-page, body.partnership-page * { direction: ${lang === 'ar' ? 'rtl' : 'ltr'}; }`
    : `* { direction: ${lang === 'ar' ? 'rtl' : 'ltr'} !important; }`;
  
  // Update the language icon's data-language attribute
  const languageIcon = document.querySelector('.fa-solid.fa-language');
  if (languageIcon) {
    languageIcon.setAttribute('data-language', lang);
  }
  
  // Visual indicator that translation happened
  // const indicator = document.createElement('div');
  // indicator.textContent = 'Language changed to ' + (lang === 'ar' ? 'Arabic' : 'English');
  // indicator.style.position = 'fixed';
  // indicator.style.top = '10px';
  // indicator.style.left = '50%';
  // indicator.style.transform = 'translateX(-50%)';
  // indicator.style.backgroundColor = 'rgba(0,0,0,0.7)';
  // indicator.style.color = 'white';
  // indicator.style.padding = '10px 20px';
  // indicator.style.borderRadius = '5px';
  // indicator.style.zIndex = '9999';
  // document.body.appendChild(indicator);
  
  // setTimeout(() => {
  //   indicator.style.opacity = '0';
  //   indicator.style.transition = 'opacity 0.5s';
  //   setTimeout(() => {
  //     document.body.removeChild(indicator);
  //   }, 500);
  // }, 2000);

  // // Explicitly set the 'translated' class based on language
  const sec1Element = document.querySelector('.sec1');
  if (sec1Element) {
    const shouldTranslate = (lang === 'ar');
    sec1Element.classList.toggle('translated', shouldTranslate);
  }
}

// Make translatePage function globally available
window.translatePage = translatePage;

// Initialize language on page load and hook up the toggle button
document.addEventListener('DOMContentLoaded', () => {
  const languageIcon = document.querySelector('.fa-solid.fa-language');

  // Determine saved or default language
  const savedLanguage = localStorage.getItem('preferredLanguage') || getDefaultLanguage();
  translatePage(savedLanguage);

  if (languageIcon) {
    // Update icon attribute and styles
    languageIcon.setAttribute('data-language', savedLanguage);
    languageIcon.style.cursor = 'pointer';
    languageIcon.style.fontSize = '1.5rem';
    languageIcon.style.padding = '8px';
    languageIcon.style.color = '#007bff';

    // On-click, switch between Arabic and English
    languageIcon.addEventListener('click', () => {
      const current = document.documentElement.lang;
      const nextLang = current === 'ar' ? 'en' : 'ar';
      translatePage(nextLang);
    });
  }
});

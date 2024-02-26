import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // @see https://github.com/i18next/i18next-browser-languageDetector
    // @see https://www.i18next.com/overview/configuration-options
    //
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        returnObjects: true, // e.g. sending back spreadable input field attributes
        resources: {
            en: {
                translation: {
                    'cookie.agree':
                        'By using our site, you agree to accept cookies in accordance with our Cookie Policy.',

                    'nav.loginHeadline': 'Already have an account?',
                    'nav.items': ['First Page'],

                    'login.getStarted': `Sign up to get started`,

                    'load.errors': [
                        `There has been an error. We apologize for any inconvenience this may have caused you.`,
                        `Please reach out to our support team here:`,
                        `Let them know that the following error was seen:`,
                        `You can also try reloading this page.`,
                        `We value your trust in us and we will do everything we can to help.`
                    ],

                    'form.account.firstName': {
                        label: 'First Name',
                        helperText: 'Please type out your first name'
                    },
                    'form.account.lastName': {
                        label: 'Last Name',
                        helperText: 'Please type out your last name'
                    },
                    'form.account.email': {
                        label: 'Email',
                        helperText: 'Please type out your email address'
                    },
                    'form.account.password': {
                        label: 'Password',
                        helperText:
                            'At least 12 characters, with 1 uppercase character, 1 special character, and 1 digit'
                    },

                    'form.info.over18': {
                        label: 'Over 18?',
                        helperText: 'Are you an adult?'
                    },
                    'form.info.birthDate': {
                        label: 'Birth date',
                        helperText: 'When were you born?'
                    },

                    'dialog.forgotPassword': {
                        title: 'Reset your password',
                        text: `To recover your password, enter the email address associated with your account and we'll send you a password reset link.`
                    },
                    'dialog.logIn': {
                        title: 'Log in',
                        text: 'Welcome back! Log in to get started'
                    },

                    'form.button.signUp': 'Sign Up',
                    'form.button.logIn': 'Log In',
                    'form.button.continue': 'Continue',
                    'form.button.accept': 'Accept',
                    'form.button.learnMore': 'Learn More',
                    'form.button.cancel': 'Cancel',
                    'form.button.sendEmail': 'Send me an email',
                    'form.button.select': 'Select',

                    'footer.header.help': `Help`,
                    'footer.header.legal': `Legal`,
                    'footer.header.translate': `Translate`,
                    'footer.text.termsConditions': 'Terms and Conditions',
                    'footer.text.privacyPolicy': 'Privacy Policy'
                }
            },
            zh: {
                translation: {
                    'cookie.agree': '使用我们的网站即表示您同意根据我们的Cookie政策接受Cookie。',

                    'nav.loginHeadline': '已经有账户了吗？',
                    'nav.items': ['首页'],

                    'login.getStarted': '注册以开始',

                    'load.errors': [
                        '出现了一个错误。对于给您带来的任何不便，我们深感抱歉。',
                        '请联系我们的支持团队：',
                        '请告知他们您遇到了以下错误：',
                        '您也可以尝试重新加载此页面。',
                        '我们非常重视您对我们的信任，我们将尽一切努力来帮助您。'
                    ],

                    'form.account.firstName': {
                        label: '名字',
                        helperText: '请键入您的名字'
                    },
                    'form.account.lastName': {
                        label: '姓氏',
                        helperText: '请键入您的姓氏'
                    },
                    'form.account.email': {
                        label: '电子邮件',
                        helperText: '请键入您的电子邮件地址'
                    },
                    'form.account.password': {
                        label: '密码',
                        helperText: '至少12个字符，包括1个大写字符，1个特殊字符和1个数字'
                    },

                    'form.info.over18': {
                        label: '超过18岁了吗？',
                        helperText: '您是成年人吗？'
                    },
                    'form.info.birthDate': {
                        label: '出生日期',
                        helperText: '您是什么时候出生的？'
                    },

                    'dialog.forgotPassword': {
                        title: '重置您的密码',
                        text: '要恢复您的密码，请输入与您的账户关联的电子邮件地址，我们将向您发送密码重置链接。'
                    },
                    'dialog.logIn': {
                        title: '登录',
                        text: '欢迎回来！登录以开始'
                    },

                    'form.button.signUp': '注册',
                    'form.button.logIn': '登录',
                    'form.button.continue': '继续',
                    'form.button.accept': '接受',
                    'form.button.learnMore': '了解更多',
                    'form.button.cancel': '取消',
                    'form.button.sendEmail': '给我发送电子邮件',
                    'form.button.select': '选择',

                    'footer.header.help': '帮助',
                    'footer.header.legal': '法律',
                    'footer.header.translate': '翻译',
                    'footer.text.termsConditions': '条款和条件',
                    'footer.text.privacyPolicy': '隐私政策'
                }
            },
            ru: {
                translation: {
                    'cookie.agree':
                        'Используя наш сайт, вы соглашаетесь на использование файлов cookie в соответствии с нашей Политикой использования cookies.',

                    'nav.loginHeadline': 'Уже есть аккаунт?',
                    'nav.items': ['Главная страница'],

                    'login.getStarted': 'Зарегистрируйтесь, чтобы начать',

                    'load.errors': [
                        'Произошла ошибка. Мы приносим извинения за любые неудобства.',
                        'Пожалуйста, свяжитесь с нашей службой поддержки здесь:',
                        'Сообщите им о следующей ошибке:',
                        'Вы также можете попробовать перезагрузить эту страницу.',
                        'Мы ценим ваше доверие и сделаем все возможное, чтобы помочь вам.'
                    ],

                    'form.account.firstName': {
                        label: 'Имя',
                        helperText: 'Пожалуйста, введите ваше имя'
                    },
                    'form.account.lastName': {
                        label: 'Фамилия',
                        helperText: 'Пожалуйста, введите вашу фамилию'
                    },
                    'form.account.email': {
                        label: 'Электронная почта',
                        helperText: 'Пожалуйста, введите ваш адрес электронной почты'
                    },
                    'form.account.password': {
                        label: 'Пароль',
                        helperText: 'Минимум 12 символов, включая 1 заглавную букву, 1 специальный символ и 1 цифру'
                    },

                    'form.info.over18': {
                        label: 'Старше 18 лет?',
                        helperText: 'Вы совершеннолетний?'
                    },
                    'form.info.birthDate': {
                        label: 'Дата рождения',
                        helperText: 'Когда вы родились?'
                    },

                    'dialog.forgotPassword': {
                        title: 'Сбросить пароль',
                        text: 'Чтобы восстановить пароль, введите адрес электронной почты, связанный с вашей учетной записью, и мы отправим вам ссылку для сброса пароля.'
                    },
                    'dialog.logIn': {
                        title: 'Войти',
                        text: 'Добро пожаловать обратно! Войдите, чтобы начать'
                    },

                    'form.button.signUp': 'Зарегистрироваться',
                    'form.button.logIn': 'Войти',
                    'form.button.continue': 'Продолжить',
                    'form.button.accept': 'Принять',
                    'form.button.learnMore': 'Узнать больше',
                    'form.button.cancel': 'Отмена',
                    'form.button.sendEmail': 'Отправить мне электронное письмо',
                    'form.button.select': 'Выбрать',

                    'footer.header.help': 'Помощь',
                    'footer.header.legal': 'Юридическая информация',
                    'footer.header.translate': 'Перевести',
                    'footer.text.termsConditions': 'Условия и положения',
                    'footer.text.privacyPolicy': 'Политика конфиденциальности'
                }
            },
            fr: {
                translation: {
                    'cookie.agree':
                        "En utilisant notre site, vous acceptez d'accepter les cookies conformément à notre Politique sur les cookies.",

                    'nav.loginHeadline': 'Vous avez déjà un compte ?',
                    'nav.items': ['Première page'],

                    'login.getStarted': 'Inscrivez-vous pour commencer',

                    'load.errors': [
                        "Une erreur s'est produite. Nous nous excusons pour tout inconvénient que cela pourrait vous causer.",
                        'Veuillez contacter notre équipe de support ici :',
                        "Faites-leur savoir que l'erreur suivante a été vue :",
                        'Vous pouvez également essayer de recharger cette page.',
                        'Nous apprécions votre confiance en nous et ferons tout notre possible pour vous aider.'
                    ],

                    'form.account.firstName': {
                        label: 'Prénom',
                        helperText: 'Veuillez taper votre prénom'
                    },
                    'form.account.lastName': {
                        label: 'Nom de famille',
                        helperText: 'Veuillez taper votre nom de famille'
                    },
                    'form.account.email': {
                        label: 'Email',
                        helperText: 'Veuillez taper votre adresse e-mail'
                    },
                    'form.account.password': {
                        label: 'Mot de passe',
                        helperText: 'Au moins 12 caractères, avec 1 majuscule, 1 caractère spécial et 1 chiffre'
                    },

                    'form.info.over18': {
                        label: 'Plus de 18 ans ?',
                        helperText: 'Êtes-vous un adulte ?'
                    },
                    'form.info.birthDate': {
                        label: 'Date de naissance',
                        helperText: 'Quand êtes-vous né ?'
                    },

                    'dialog.forgotPassword': {
                        title: 'Réinitialiser votre mot de passe',
                        text: "Pour récupérer votre mot de passe, entrez l'adresse e-mail associée à votre compte et nous vous enverrons un lien de réinitialisation."
                    },
                    'dialog.logIn': {
                        title: 'Se connecter',
                        text: 'Bienvenue ! Connectez-vous pour commencer'
                    },

                    'form.button.signUp': "S'inscrire",
                    'form.button.logIn': 'Se connecter',
                    'form.button.continue': 'Continuer',
                    'form.button.accept': 'Accepter',
                    'form.button.learnMore': 'En savoir plus',
                    'form.button.cancel': 'Annuler',
                    'form.button.sendEmail': 'Envoyez-moi un e-mail',
                    'form.button.select': 'Sélectionner',

                    'footer.header.help': 'Aide',
                    'footer.header.legal': 'Légal',
                    'footer.header.translate': 'Traduire',
                    'footer.text.termsConditions': 'Termes et conditions',
                    'footer.text.privacyPolicy': 'Politique de confidentialité'
                }
            },
            it: {
                translation: {
                    'cookie.agree':
                        'Utilizzando il nostro sito, accetti di accettare i cookie in conformità con la nostra Politica sui cookie.',

                    'nav.loginHeadline': 'Hai già un account?',
                    'nav.items': ['Prima Pagina'],

                    'login.getStarted': 'Iscriviti per iniziare',

                    'load.errors': [
                        'Si è verificato un errore. Ci scusiamo per eventuali disagi causati.',
                        'Si prega di contattare il nostro team di supporto qui:',
                        'Fagli sapere che è stato visto il seguente errore:',
                        'Puoi anche provare a ricaricare questa pagina.',
                        'Apprezziamo la tua fiducia in noi e faremo tutto il possibile per aiutarti.'
                    ],

                    'form.account.firstName': {
                        label: 'Nome',
                        helperText: 'Per favore, inserisci il tuo nome'
                    },
                    'form.account.lastName': {
                        label: 'Cognome',
                        helperText: 'Per favore, inserisci il tuo cognome'
                    },
                    'form.account.email': {
                        label: 'Email',
                        helperText: 'Per favore, inserisci il tuo indirizzo email'
                    },
                    'form.account.password': {
                        label: 'Password',
                        helperText: 'Almeno 12 caratteri, con 1 maiuscola, 1 carattere speciale e 1 cifra'
                    },

                    'form.info.over18': {
                        label: 'Maggiorenne?',
                        helperText: 'Sei un adulto?'
                    },
                    'form.info.birthDate': {
                        label: 'Data di nascita',
                        helperText: 'Quando sei nato?'
                    },

                    'dialog.forgotPassword': {
                        title: 'Reimposta la tua password',
                        text: "Per recuperare la tua password, inserisci l'indirizzo email associato al tuo account e ti invieremo un link per reimpostare la password."
                    },
                    'dialog.logIn': {
                        title: 'Accedi',
                        text: 'Bentornato! Accedi per iniziare'
                    },

                    'form.button.signUp': 'Iscriviti',
                    'form.button.logIn': 'Accedi',
                    'form.button.continue': 'Continua',
                    'form.button.accept': 'Accetta',
                    'form.button.learnMore': 'Scopri di più',
                    'form.button.cancel': 'Annulla',
                    'form.button.sendEmail': 'Inviami una email',
                    'form.button.select': 'Seleziona',

                    'footer.header.help': 'Aiuto',
                    'footer.header.legal': 'Legale',
                    'footer.header.translate': 'Traduci',
                    'footer.text.termsConditions': 'Termini e condizioni',
                    'footer.text.privacyPolicy': 'Politica sulla privacy'
                }
            },
            es: {
                translation: {
                    'cookie.agree':
                        'Al utilizar nuestro sitio, aceptas aceptar cookies de acuerdo con nuestra Política de cookies.',

                    'nav.loginHeadline': '¿Ya tienes una cuenta?',
                    'nav.items': ['Primera página'],

                    'login.getStarted': 'Regístrate para empezar',

                    'load.errors': [
                        'Ha ocurrido un error. Lamentamos cualquier inconveniente que esto pueda haber causado.',
                        'Por favor, comunícate con nuestro equipo de soporte aquí:',
                        'Hazles saber que se ha visto el siguiente error:',
                        'También puedes intentar recargar esta página.',
                        'Valoramos tu confianza en nosotros y haremos todo lo posible para ayudarte.'
                    ],

                    'form.account.firstName': {
                        label: 'Nombre',
                        helperText: 'Por favor, escribe tu nombre'
                    },
                    'form.account.lastName': {
                        label: 'Apellido',
                        helperText: 'Por favor, escribe tu apellido'
                    },
                    'form.account.email': {
                        label: 'Correo electrónico',
                        helperText: 'Por favor, escribe tu dirección de correo electrónico'
                    },
                    'form.account.password': {
                        label: 'Contraseña',
                        helperText: 'Al menos 12 caracteres, con 1 mayúscula, 1 carácter especial y 1 número'
                    },

                    'form.info.over18': {
                        label: '¿Mayor de 18 años?',
                        helperText: '¿Eres un adulto?'
                    },
                    'form.info.birthDate': {
                        label: 'Fecha de nacimiento',
                        helperText: '¿Cuándo naciste?'
                    },

                    'dialog.forgotPassword': {
                        title: 'Restablecer tu contraseña',
                        text: 'Para recuperar tu contraseña, ingresa la dirección de correo electrónico asociada con tu cuenta y te enviaremos un enlace para restablecer la contraseña.'
                    },
                    'dialog.logIn': {
                        title: 'Iniciar sesión',
                        text: '¡Bienvenido de nuevo! Inicia sesión para comenzar'
                    },

                    'form.button.signUp': 'Registrarse',
                    'form.button.logIn': 'Iniciar sesión',
                    'form.button.continue': 'Continuar',
                    'form.button.accept': 'Aceptar',
                    'form.button.learnMore': 'Saber más',
                    'form.button.cancel': 'Cancelar',
                    'form.button.sendEmail': 'Envíame un correo electrónico',
                    'form.button.select': 'Seleccionar',

                    'footer.header.help': 'Ayuda',
                    'footer.header.legal': 'Legal',
                    'footer.header.translate': 'Traducir',
                    'footer.text.termsConditions': 'Términos y condiciones',
                    'footer.text.privacyPolicy': 'Política de privacidad'
                }
            },
            pt: {
                translation: {
                    'cookie.agree':
                        'Ao utilizar o nosso site, você concorda em aceitar cookies de acordo com a nossa Política de Cookies.',

                    'nav.loginHeadline': 'Já tem uma conta?',
                    'nav.items': ['Primeira Página'],

                    'login.getStarted': 'Inscreva-se para começar',

                    'load.errors': [
                        'Ocorreu um erro. Pedimos desculpa por qualquer inconveniente que isso possa ter causado.',
                        'Por favor, entre em contato com a nossa equipe de suporte aqui:',
                        'Informe-os de que o seguinte erro foi visto:',
                        'Você também pode tentar recarregar esta página.',
                        'Valorizamos a sua confiança em nós e faremos tudo o que pudermos para ajudar.'
                    ],

                    'form.account.firstName': {
                        label: 'Primeiro Nome',
                        helperText: 'Por favor, digite o seu primeiro nome'
                    },
                    'form.account.lastName': {
                        label: 'Último Nome',
                        helperText: 'Por favor, digite o seu último nome'
                    },
                    'form.account.email': {
                        label: 'Email',
                        helperText: 'Por favor, digite o seu endereço de email'
                    },
                    'form.account.password': {
                        label: 'Senha',
                        helperText: 'Pelo menos 12 caracteres, com 1 maiúscula, 1 caractere especial e 1 número'
                    },

                    'form.info.over18': {
                        label: 'Maior de 18 anos?',
                        helperText: 'Você é um adulto?'
                    },
                    'form.info.birthDate': {
                        label: 'Data de Nascimento',
                        helperText: 'Quando você nasceu?'
                    },

                    'dialog.forgotPassword': {
                        title: 'Redefinir sua senha',
                        text: 'Para recuperar sua senha, insira o endereço de email associado à sua conta e enviaremos um link para redefinir a senha.'
                    },
                    'dialog.logIn': {
                        title: 'Entrar',
                        text: 'Bem-vindo de volta! Entre para começar'
                    },

                    'form.button.signUp': 'Inscrever-se',
                    'form.button.logIn': 'Entrar',
                    'form.button.continue': 'Continuar',
                    'form.button.accept': 'Aceitar',
                    'form.button.learnMore': 'Saber Mais',
                    'form.button.cancel': 'Cancelar',
                    'form.button.sendEmail': 'Envie-me um email',
                    'form.button.select': 'Selecionar',

                    'footer.header.help': 'Ajuda',
                    'footer.header.legal': 'Legal',
                    'footer.header.translate': 'Traduzir',
                    'footer.text.termsConditions': 'Termos e Condições',
                    'footer.text.privacyPolicy': 'Política de Privacidade'
                }
            },
            hi: {
                translation: {
                    'cookie.agree':
                        'हमारी साइट का उपयोग करके, आप हमारी कुकी पॉलिसी के अनुसार कुकीज़ स्वीकार करने के लिए सहमत हैं।',

                    'nav.loginHeadline': 'पहले से ही एक खाता है?',
                    'nav.items': ['पहला पृष्ठ'],

                    'login.getStarted': 'शुरू करने के लिए साइन अप करें',

                    'load.errors': [
                        'एक त्रुटि हुई है। हम इससे हुए किसी भी असुविधा के लिए खेदी महसूस करते हैं।',
                        'कृपया हमारी सहायता टीम से यहाँ संपर्क करें:',
                        'उन्हें बताएं कि निम्नलिखित त्रुटि देखी गई थी:',
                        'आप इस पृष्ठ को फिर से लोड करने की भी कोशिश कर सकते हैं।',
                        'हम आपके हमें दिए गए विश्वास की सराहना करते हैं और हम हर संभावना से मदद करेंगे।'
                    ],

                    'form.account.firstName': {
                        label: 'पहला नाम',
                        helperText: 'कृपया अपना पहला नाम टाइप करें'
                    },
                    'form.account.lastName': {
                        label: 'अंतिम नाम',
                        helperText: 'कृपया अपना अंतिम नाम टाइप करें'
                    },
                    'form.account.email': {
                        label: 'ईमेल',
                        helperText: 'कृपया अपना ईमेल पता टाइप करें'
                    },
                    'form.account.password': {
                        label: 'पासवर्ड',
                        helperText: 'कम से कम 12 वर्ण, में 1 बड़ा अक्षर, 1 विशेष वर्ण, और 1 अंक होना चाहिए'
                    },

                    'form.info.over18': {
                        label: '18 साल से अधिक?',
                        helperText: 'क्या आप वयस्क हैं?'
                    },
                    'form.info.birthDate': {
                        label: 'जन्म तिथि',
                        helperText: 'आप कब पैदा हुए थे?'
                    },

                    'dialog.forgotPassword': {
                        title: 'अपना पासवर्ड रीसेट करें',
                        text: 'अपना पासवर्ड पुनर्प्राप्त करने के लिए, अपने खाते से संबंधित ईमेल पता दर्ज करें और हम आपको एक पासवर्ड रीसेट लिंक भेजेंगे।'
                    },
                    'dialog.logIn': {
                        title: 'लॉग इन करें',
                        text: 'वापसी पर स्वागत है! शुरू करने के लिए लॉग इन करें'
                    },

                    'form.button.signUp': 'साइन अप करें',
                    'form.button.logIn': 'लॉग इन करें',
                    'form.button.continue': 'जारी रखें',
                    'form.button.accept': 'स्वीकार करें',
                    'form.button.learnMore': 'और अधिक जानें',
                    'form.button.cancel': 'रद्द करें',
                    'form.button.sendEmail': 'मुझे एक ईमेल भेजें',
                    'form.button.select': 'चुनें',

                    'footer.header.help': 'मदद',
                    'footer.header.legal': 'कानूनी',
                    'footer.header.translate': 'अनुवाद करें',
                    'footer.text.termsConditions': 'नियम और शर्तें',
                    'footer.text.privacyPolicy': 'गोपनीयता नीति'
                }
            },
            de: {
                translation: {
                    'cookie.agree':
                        'Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies gemäß unserer Cookie-Richtlinie zu.',

                    'nav.loginHeadline': 'Haben Sie bereits ein Konto?',
                    'nav.items': ['Erste Seite'],

                    'login.getStarted': 'Melden Sie sich an, um zu beginnen',

                    'load.errors': [
                        'Es ist ein Fehler aufgetreten. Wir entschuldigen uns für etwaige Unannehmlichkeiten.',
                        'Bitte wenden Sie sich hier an unser Support-Team:',
                        'Teilen Sie ihnen mit, dass der folgende Fehler aufgetreten ist:',
                        'Sie können auch versuchen, diese Seite neu zu laden.',
                        'Wir schätzen Ihr Vertrauen in uns und werden alles tun, um Ihnen zu helfen.'
                    ],

                    'form.account.firstName': {
                        label: 'Vorname',
                        helperText: 'Bitte geben Sie Ihren Vornamen ein'
                    },
                    'form.account.lastName': {
                        label: 'Nachname',
                        helperText: 'Bitte geben Sie Ihren Nachnamen ein'
                    },
                    'form.account.email': {
                        label: 'E-mail',
                        helperText: 'Bitte geben Sie Ihre E-Mail-Adresse ein'
                    },
                    'form.account.password': {
                        label: 'Passwort',
                        helperText: 'Mindestens 12 Zeichen, darunter 1 Großbuchstabe, 1 Sonderzeichen und 1 Ziffer'
                    },

                    'form.info.over18': {
                        label: 'Über 18?',
                        helperText: 'Sind Sie volljährig?'
                    },
                    'form.info.birthDate': {
                        label: 'Geburtsdatum',
                        helperText: 'Wann sind Sie geboren?'
                    },

                    'dialog.forgotPassword': {
                        title: 'Passwort zurücksetzen',
                        text: 'Um Ihr Passwort wiederherzustellen, geben Sie die E-Mail-Adresse ein, die mit Ihrem Konto verknüpft ist, und wir senden Ihnen einen Link zum Zurücksetzen des Passworts.'
                    },
                    'dialog.logIn': {
                        title: 'Anmelden',
                        text: 'Willkommen zurück! Melden Sie sich an, um zu beginnen'
                    },

                    'form.button.signUp': 'Anmelden',
                    'form.button.logIn': 'Einloggen',
                    'form.button.continue': 'Fortfahren',
                    'form.button.accept': 'Akzeptieren',
                    'form.button.learnMore': 'Mehr erfahren',
                    'form.button.cancel': 'Abbrechen',
                    'form.button.sendEmail': 'Schicken Sie mir eine E-Mail',
                    'form.button.select': 'Auswählen',

                    'footer.header.help': 'Hilfe',
                    'footer.header.legal': 'Rechtliches',
                    'footer.header.translate': 'Übersetzen',
                    'footer.text.termsConditions': 'Allgemeine Geschäftsbedingungen',
                    'footer.text.privacyPolicy': 'Datenschutzrichtlinie'
                }
            }
        },

        interpolation: {
            escapeValue: false // Not needed for react as it escapes by default
        }
    });

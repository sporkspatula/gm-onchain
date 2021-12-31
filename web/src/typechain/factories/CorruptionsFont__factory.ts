/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CorruptionsFont,
  CorruptionsFontInterface,
} from "../CorruptionsFont";

const _abi = [
  {
    inputs: [],
    name: "font",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612c9d806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80639d37bc7c14610030575b600080fd5b61003861004e565b604051610045919061006d565b60405180910390f35b60405180612be00160405280612ba581526020016100c3612ba5913981565b600060208083528351808285015260005b8181101561009a5785810183015185820160400152820161007e565b818111156100ac576000604083870101525b50601f01601f191692909201604001939250505056fe646174613a666f6e742f6f74663b6261736536342c543152555477414a414941414177415151305a47494134354c6e73414141536341414163446b39544c7a4b594c73694941414142734141414147426a62574677545742536a7741414136674141414455614756685a42304538494d414141436b414141414e6d686f5a57454751674754414141426a4141414143526f625852344476594b6e774141414e7741414143756257463463414256554141414141436341414141426d35686257574633432f354141414345414141415a567762334e302f3459414d67414142487741414141674141425141414256414141414151414141414541414939694c6f4a66447a7a3141414d4436414141414144647974615541414141414e334b3170514141503843416c674464514141414163414167414141414141414148304146304357414141414241415a4142424146414161774231414455415041413841465141565142614144774152674177414751414d41426b414573414b414138414134414477415541416b414e77424c4141494150414134414438415741424641415141615141374142674152674170414249414f5141564144774151674255414238414751417241416f414c674175414651414e774256414534415741417341464d41505142464145734150514470414f6b414e6741654146594155674342414467424367426841444141524142454145344149774163414141414d6741414141414154674141414145414141506f2f7a674141414a594141414141414a5941414541414141414141414141414141414141414141414341415143566747514141554143414b4b416c67414141424c416f6f4357414141415634414d6744364141414141414141414141414141414141414141417741414d45414141414141414141414146564c56303441774141674a63674449503834414d67443641444951414141415141414141414239414b3841414141494141414141414144514369414145414141414141414541437741414141454141414141414149414277414c41414541414141414141514143774141414145414141414141415541474141534141454141414141414159414577417141414d414151514a414145414667413941414d414151514a414149414467425441414d414151514a41414d415041426841414d414151514a414151414667413941414d414151514a414155414d41436441414d414151514a414159414a67444e41414d414151514a414241414667413941414d414151514a414245414467425451323979636e567764476c76626e4e535a57643162474679566d567963326c76626941784c6a41774d4474475255464c615851674d53347751323979636e567764476c76626e4d74556d566e64577868636742444147384163674279414855416341423041476b416277427541484d415567426c41476341645142734147454163674178414334414d414177414441414f774256414573415677424f414473415177427641484941636742314148414164414270414738416267427a414330415567426c41476341645142734147454163674257414755416367427a41476b4162774275414341414d514175414441414d414177414473415267424641454541537742704148514149414178414334414d4142444147384163674279414855416341423041476b416277427541484d414c514253414755415a774231414777415951427941414141414141414167414141414d414141415541414d41415141414142514142414441414141414b4141674141514143414167414355414b77417641446b414f67413941443841576742634146384165674238414834416f4349534a5a4d6c6e6958492f2f38414141416741434d414b774174414441414f67413941443841515142634146344159514238414834416f4349534a5a456c6e6958492f2f2f2f34514141414238414141414741416341447741442f38482f365141412f37762f7a502f502f3248654f64724132724c616a414142414141414a67414141436741414141414141414141414141414141414941414141414141414141414141414141414141414141414141424441456b4154774247414541415241424f41456341417741414141414141502b444144494141414141414141414141414141414141414141414141414141414541424149414151454246454e76636e4a31634852706232357a4c564a6c5a33567359584941415145424a5067504150676741666768417667594250737144414f4c2b354c3437506f4a42666369442f646945617363475741534141634241516750464273694d7a3531626d6b794e546c466248527a6147466b5a584e6f5957526c5a47747a6147466b5a58567561544931517a686a62334235636d6c6e6148516762576c7a63326c755a304e76636e4a31634852706232357a41414142414145414143495a4145495a4142454a4141384141427341414341414141514141424141414430414141344141454141414630414141554141417741414b59414142344141463841414438414141594141596345414655434141454133514465415259426c514834416b304363514b544176634448774e41413349447051504442416f455041526f424c4946445156584264674748675a56426e34477a77634c427a4948557766534343414962776a624354674a6a416e7443696b4b556771554373304b2b77746e43366f4c37517851444a674d3477303844586b4e7a673333446b454f6551374444754550517739714437495141684132454949513652454645595952365248344569415369784c6e4577415447524d74457a38545668506a46414d5546525130464849556c785530465673566a525a464636515835434437584e437375717969724c71737836796a773647746f717977634b61737071327672615773734b7a4f45756a565166646a4a36797472477233497a3759452f2b2b555067752b3177562b6e7748452f2b2b675076522f6e7747452f2b2f594e58514661774830626f4652617747452f2b2b61506336616d73475256774638576f47452f2b2f595073363978775639775548452f2b2b615063365567723351525833426177373737707164476e444278502f766d6a76556772334778577439786e4e4d4171734a7a6f4b2b7a724546617a4e73456d734d4172334f6d704a52546f4b4a2f6357466650765254414b7a576b364376733639785956724d32775371777743766335616b6c6d7a576f472b786e3835425876756963472b465545724b39714267344f6f48623356745033336651426d2f6a4d412f6844393159567a667457426549472b344435554155704276742b2f5641463351624c3931594670644d5639506664425a63473876766442513644302f65573066654930784c763376655034306a6a452f6a346e766977466663682b78476d497a354968594e61487631464233626379704f78477850303978663346736e334a66634551626f386d422b504278503437715773327363612b2b6638615258336a2b4948452f546b3633623741445139595452745434325165682f3331515433676765506e724b4e747873542b4e58576454424d5632464a64522b49646d614b6442734f4f776f537a4f50337864564d315250772b46373542425567316663796967656b5a4761584d68733451584a525642395555576b782b7863612b35583346434c334e783454364f50486f71717a4834714e426663625153634867484a74685767622b787778362f645539716254744c6766754c50436e734962452f4379704961436f68384f6774566564766b5031524c623376664234784f3432794d4b45336a39555163547549616a3149692f472f655230666444393148335a4472334a6675465a452b4b684667663376304c46666a4542342b6572497965472f64627176736f2b7866374b325837482f745766334f496b6d6f66446f76563934335639336e5641666265412f596a437631512b4454562b2b48336a6666443166764439336e33334e55484471423239383356393450564166634a3367503343534d4b2f56446539383333767458377676654439394c564277352f316664777a76653131524c41342f653831567253452f6a3453666b4c466673473166633742347950425a706e57705137472f73702b79556c2b356a376a6663412b77583352783854394d2f626e713234482f66492b327449397954375677643662576544594276374855446d39316e336276485239774d66452f6973706f6d476f68384f6f4862333164583378586342783937337a7434442b463333315258373164373555446a377866764f393855342f56446539395548446f76562b4c7a56416665573367504849777042393172387650746151666830316674622b4c7a3357395548446f48562b4d6256416667753367507349777042393833372f776637494664514a307066714a3575486d644a42584f6731577663472f63723365583350422f345741634f6f486233324d76337a486342344e344439346e333242583369667659426651472b367234412f654c392b45464b7762376466764d425544337a446a39554e37333241594f69395835426e6342356437337239554435534d4b2f5644345450654d516674432b362f354267634f6f486234785063676933635378397a33304e3454755068642b4755562f4758652b564241422f73302b353446695162374f76656542543739554e7a345a67595432482f70425a4147755462322b30414670416278397a2b3734515751426734344374485a3938545a412f64592b456f5639367a38536758422b5641392f4567476c69734668675a58362f75752b456746566631513266684b426f487742593847446a734b4162766a39397a6a4137763338685837627333374a50644e39304862397862336645554b2b316c5a4d5073482b784e6e39787a334c42344f6f4862336d744833784e4d42373937336e6c554b393534486861756b6a6151623978373347736233515064412b794b322b784a53546f682f57422f652b2f5556393759486b4a36746a4b3462346564702b774837457931744c594674674a706c487737374c645852306c6c322b5276564572766a39397a6a45377937392f49564a356b33724530657130322b5a4e65414343476234325455473761326d6143654833584942587830636f5275473168716f72702f482f636c6e38333345506472476b554b486850632b316c5a4d5073482b784e6e39787a334c42344f6f486233794d76336e4e4d42373937336756554b39386a33455166334f667649426577472b303333344157346e646e47395272334a5073417650734f56454f46676c6765337676564666655742354768746f7572472b4f2f56304d72534638764877343743684c583155666539357256577434543650637137685833413048374e67654b694156327339356e375273543550636e35396a3344504d3178436930487850594b72517a734e556177634f343472693068594f7348694456397a51486a493446696f304769596f466e6d52486c7a73622b783476522f734350725263776d6766706e7170664b742b79334c456372426f4342506b6e587155644841614f6b526f4d3168586d36426a4867364c316668503930744231524b7a3161333356546a33566137564539717a4977723753395548453772334166636b42784f322f4c774845377237416b4547453762337739554745377237417669383979554745397237416458335377634f677458354433634278393733306473442b47416a43767851422f7363595654374150734455377a334968373455446a38647766374c4e3942397a6e33482b6654397a34652b476348446f76792b4f6c33415a6e3430415033777649562b316e3436515577427665452f56414637416233662f6c51425467472b314c383651554f692f63623932333346506477647747612b4d344439304833585255382b496346504162334166315142643847335065766c7441466a67615652397a3773415865427663412b56414651515a422f49574652775747426e6e565276656a42556b475166756c665551466841594f4f4171662b4d514439342f332b425837652f763442656747397a54336a365739706c6e334d667550426577472b336e332f2f6476392b55464c7762374b6675426331787975767367393445464a77594f4f4172336c393444393566336f4258376f4e37336f5166336a666844425449472b3166373767574b42767463392b34464b67594f69395834764e55427776682b41384c574655443466745838495166344966693742646238666b48344877634f677335527a506336795063707a684c5733666545316b5059453772334150686846615252425a79327736444847784f3834366c6f2b77392b482f74627166735058767362476a504956653770764d47706e78365142684e386c454135436f657069617573476f376842524e366a4b694d707151613557336d2b787847506e3171556836382b39555645337a6738614433486e4d655251635476474e37584655384730527773626366446f504f2b42624f3977334f416544593937376541343070437437383751643271744a3433687633512b33703930443350554c672b79644c556e4a6661422b47393555472f50734539336f4833714b3775747362394c5537496673685256416858462b566d327766446e2f572b412f524163666539377a54412f684c2b4473564c4e50334877654d6a67576759464b674b4276374b4349312b3054374c4e2f3741766449397748577571657348326a464257686a5448524d472f734e50394c334350635a7973623346363676673443714877352f7a6c544d2b41334e3978484f457350653937725a542f63654537723338536b4b42784f38332f736942706c5866593554472f73734a444c375076744830446e334b3966497362366f4834384745337956506a6b4b68716546764b67612b4b55482f416a385678583347637a4839736573676e656f4876743842784f384e33706459546f622b77566d332f63434877352f30666448306663667a524c4b33546e6739387655452f543470636f56624d5146635734395a3063622b7742467876634d482f675842704c3342584c5159625149733246526c314d622b7967694e6674452b7a62694a2f637a34642b7174373066452b7a384566654946664f573071376a47397a4157444f5348773479437663667a6e6566457550335754335a45396a6a4676676f7a6759543150746a2b414c335938373759775954354f366c732b4f6d7134683872683454314a334d425a746a62493966472f734e5231623745523976427850592b7774494268505539777638416759543250734c42673737614e48334673373446733442304e333375396b442b4b42794666694c42357862565a67345441716b74366f666a314d47496d4a6c2b775a5454364b676378356c524156797473523532687633474f2f4a397845662f416e337078583346637a4a397343306848326f48767542427a5234586d4936472f73455a647a334268384f6f486234556337334463344233746a3373396b446a796b4b3276304e325066534239576230734454472f576855667347482f756c32666530422f644855726a374654705863467869486f62336d67594f4d677262397851533935443347434c62452b6a30467667387a76732b2b4558376b6b6a33517677432b304947452f44334a2f6a5453677237614e58347a383762397851533937723347444862452b6a333550684646667843427a4e73566a746157364b6d5a783571536756376f4e4667307876334464544d397873662b4a5437316b6748452f44335850646c5367714c7a76637a782f6471642f63747a674833416467446f796b4b3450304e32506432776766336176743242664c4f536762375376645939334833675155744276745a2b326f46565067794267352b30666a557a6748334d746b4430536b4b342f786c422f736177567a7675386d69723751655a3841466347746966475962566d2b7033422f347141634f6f4862345474462f64784b30312f636c79453758397958584642345475766561392b45562b2b454845376258392b4947453962516d367579756875316b317855482f766f312f6635422b7434786a5165453970496132785862422f4867317569596874476557746963422b4842684f36664d6746562f7949312f6673426850617735757274626762754a4a625468384f6f4862345238784f31424c6f3250657032524f343650665a4666765a3250664f423879647a4d6651472b7170552f7344482f756b3266657a422f644853376e374544784c58567876486f59474539694333415837476c594b446e2f4f2b42724f4163546539395864413854336a6858374a396a37422f6336397a4469386663303979524139777237505073774e4362374e52376546766356774d333239776d334b5372374646564949507348587572764867373752336233554d3734454d784f31424c723250652b33685073362f665a466679683250646d4233753070595843472f637738765033504238543350644851395437497a74566146786e486f5947452b7942305158374756594b3250754346666434427850637835504f79396b623837524b2b77583747305a45494539716c3539754877373752336233554d3734467334427839373375746b442b4a6637584258354f516561613047625045774b6f37657148342f376c41623775766857466663597a4d623276375347664b67652b3455484f487062595477622b77526c3366634648773479436c4451457664643250646b305250597a5262344b4d37375650653742684f346f5a7241784e30626f5a7142643551666b336550624741613059774639773136306a492b56576c695868364742685059653877462b30394939787638417673624267352f7a6667637a5148793266655632515034537663624656465164454d2f514c43726178356a5367566d74654e71337876334a64544f352b453973444b64487a4f634f35713847734c466f637259756e427a747836727967576b5930656f4c68736c4b32416d4e64707235486b6634586e6365553461446e374f2b412f4f4166637132514f712b4967565350634c2b3477482b78336c547662507a36537775683578786756775a3242775478737a57726e73482f654139352f4f2b352f33445163396451556f4277352f7a6c544d2b41544f4575665a3935585a54736b546450662f2b49675653416354654d76376c77595475456477566c684747793139782f6347482f656a2b7956497a767477422f7443766c6a3344747a4573385375486f38474533694f4e6a6b4b4533534871596d71724272333651634f692b7a344a33634274766957412f6643374258374f2f676e42533847393276386941586a4276646e2b4967464e4162374d66776e4251364c39774c3741766345397a6a334276634364784b562b4e67546550666e2b426f56527759547543723772415746426a72344767552b42684e343950794942655147372f656f42593447362f756f4265514737666949425549475250775942595147447142322b49683341626e346b4150336b6665554666746a2b355146356762334e766468397a5037595158724276746839356a3356666545425445472b796a375550736b393141464a77594f2b32485a397850592b44743341626e346b415033793967562b3050344f7755784276646d2f4967467a67593265576c68575274795835715866423976517756356e623938715276334d5a2f334e2b696f482f63662b4655464f6762374550773742513479436748662b45514433383456535068457a767671422f66712b4149467a7678455350666e4277352f7a766a697a6748433376665933515043392f49562b3276502b796633525063383250636139336a3365307233462f74482b7a772b2b787237654237654676645a747533334339653158554f694876752b2b364946694b694a717177616f50732b4666653939364d466a32754e615767612b3174644b2f734a516c2b3831335165446f76542b516833416665773241503345394d56512f6759302f73752b516854422f74772b7a477955766330397751462f4b4948446f76542b4d375241666736325150346950696646666349537454374554744a65474250487131554261717a755a765447392b31576a7339544338374f4238314d6b745a57466f49512f6851302f7630422f646b393058334476637239773861446e2f513936624e3933765441666846325150336a4d5156554632576d32676664305546664c5337674d386239796233444e72334a6663464d395037445239374276645a39337346302f7766512f652f422f745a2b34304657387348397748525a793830506c44374142384f6f486233627333344e4863422b41505a412f6a59393234567a6673622b44524a422f766a2f447746556666582b32375a393234482b386e4e46666437393763462b376348446e2f5239384c4f39313354416663693176646e325150336c4d55565131326b6d48516661306f466561445763744d6239795833417472334c50635a4d4e62374b42395a69515833582f6567302f76722b2b3048365a4146397776555743736952466b6d4877352f7a7665347a76652b647748493266665333515034722f646e4666634f4e397a37497a784c5a57563048703733492f6347397962335061423979786a37626e62374c2f74652b354d612b7976724c50636c3979336639774433427837384a4a67566e6765516a4a4f4d6c4236326f73657931527633414c35594c6a6c4c53544c37424662693352384f6f486235434e4d423050684f412f635146743047393858354477584d2f453544392f3048446e2f4f2b4f4c4f4574625954746e336d74684e3268506b3176632b465376574e66636a39797a62345063453556433750624d65452b6a6676362f4b31787269514e4c3745783454315073564e55496d4c38526931574d66452b5170576c704b4f6872596c425738734d6672756837645939706d50526f35526d41394c4666457a683454314a7a332f68572f774c2f644868506f7a63686953564e6f5830526348785055504b382b73646361447052323937374f39376e4e41636a6439394c5a41386a3466525837452f4d2f39773367744a71347452357a2b7a45692b777a37516e6d6154426a33617037334d2f63773937346139796b31386673722b7a4d354a2f7350487432544665724477657633434c30734c4235344234574b67347143486d68305558452f4779744d752b7366446e2f334767483366666361412f6439776b734b446e2f334776655839786f42393333334767503366666855537772384851526b70572b7a7471536e73725a796f32426a63584e674867352f39776a347274455339326a334343724f3979446545396a33665064464663304732722b35783759657837612b774f4d61336b6e762b794437427a466f52464d65766c3046734c5041754f41623977657a50463148576d42565a4239545931745a505271414234654c683479494868506f642f735846576968644b36766f714b75723353685a3268316457636544766431792f6358797747702b4b3844392b72336452566b2b7a734630416179397a7346357761627977557542717233467758724270764c425370504376736c54776f73426e314c42656b4762507358425367476655734637515a6b2b7a734630416179397a73466d737356717663584266636c426d7a374677554f2b5678334165483451415034562f6c63466677422f637a4b622f67422b63774644766c63647748642b4567442b4a72374178583842666e4c53472f344276334d425137336a39554239785833366750334666665a465548333674554844767468305148442b487744772f736246555834664e45484476744864767038647748336e733844393537352b42582b39732f363967634f66395034312f633145752f65323739587a31652f354e3454367665626678557a7a2b6348397757657874487a477663474e4c30327478373369776644694b3641706e366a3052686f6d3253565234344934306377422f73426646564c4b78723743397866335749652b364948534935656d58436263454959726e6a466639534b4344763475785737704c66536b783454357674764231536f59717a454768507939786a386352583368776641634c3971534270475832644f6742344f39384c544166656330774f372b416f56512f64732b33485439334833624e503762506478512f74784277373377744d427a2f686b41382f34436856442b47545442773733634e506f307748502b4751447a2f6864465550345a4e4d482f475437675258345a4e50385a41594f39376e5465744d53326668504536445a392f3056725538464532437574717958716873546f4d7978564e5962724c4f58727234666163674663477878676e49624532424f5738492f473252646646395348773735573363427276696f412f65362b5673562b3566384c6758654276645039386a3353507649426430472b346a344c67554f69387054647665327971334b39326e4b4571665239776a5271744833434e45546634436e2b4c49562b784c4b594d7a4d7972623345766355544c564b536b78612b7730657a66796d46635278392f443555314b6f426676732b3051567335476e6c3573656d70615a6b356f62714b68304e7a56756432353966704f626678392b6d6f576e736872336266774a46524f2f67507353796d444d7a4d713239784c3346457931536b704d5776734e487445573261536f724b696f64446379626e7075665836546d33386566707146703749614476742f2b765153692f6641692f6641453844376677543377506a572b384147393841574536443377506979426850412b384147446b634b4162323976623239766232397662323976514e58436c6e39707a384b39396330437538314376636550417233486a514b377a554b39783438437663654e416f4f52776f53693732395577713976597539452f2f396f46634b4a2f34444e677233317a344b452f2f376f43774b452f2f376f43774b4c777136495172334867517643726f68437663654243384b7569454b397834454c77713549516f542f2f7567766636374e677233486c514b75566b47766636374e677233486c514b75566b47766636374652502f2f5743397569454b39783544437663644242502f2f5743397579454b397831444368502f2f5743394e517233486a774b3978342b4368502f2f5a41734368502f2f5a4173436a454b7569454b397834454d517136495172334867517843726f68437663654244454b7553454b4476742f6c6f4479586b6b4b75524b4c5577714c766232396937324c76524f662f61543475766d7446626b4845352f396f72323542684f662f71543837507365526772374856454b577a634b2b7831474376736542684f2f2f61533958466d412b4f774745312f396f764a5a42316b4b75776354582f3269766663644d7771374c51723348544d4b7569304b3978347a43726f74437663654d7771364c5172334867623875763478466275395777645a393030714369554b756231644230414b2f6451457537316242316e3354536f4b4a517135765630482f6f304575676354762f3345765677475766644e4662713958416367437271395841645a3930777143763355424c7369436c73474b416f67436b674b4b416f6743726f69436c77474b416f6743726f69436c77474b416f6743726f69436c77474b416f3943763355424c736e436c736d4372734845372f396c4c31624a6771364a7770634a6771364a7770634a6771364a7770634a6771354a7770644276364e424c7139584164454369344b5766644d466273484a41713957775975436b514b2f6451457579494b5777596b4369414b53416f6b4369414b7569494b5841596b4369414b7569494b5841596b4369414b7569494b5841596b436a304b4470523241646e3455515033762f6a7046584a646131746c5746684759565a715a72394c716d535566724a5871312b6b5a706c326c6e6d556571533572734334787348547372796b705168507a694c33486c4475434135376d2f69496d2f644d6d392b62427674736d7763656f44662f44416d4c4441763437425434387857724577413641674142414159414467415641426b414867416e414338414e4141354144304153514259414741415a774273414849416541422b4149514169514356414a6f416f51436f414b384174674338414d494179414453414e6f413441447a415034424251456141534542514146524156634258514630415963426d674771416251427567484741637742307748644165634236774831416638434341495241685a5a39303056437759542f2f32675751594c42784f2f2f615339432f6c5146517354762f326f4379414b757231634279414b43775954762f326b49416f4c4279344b76517354762f334543794d4b53417356753731624279554b757231634277745a42766364424c3237575162334851524f436775397579454b3978304543775954582f326976517354762f32554378502f2b364339437763542f33356f4378502f2f5a43394334764f2b414c4f43775a5a436c6b4c554172762f727356516771364b776f4c2f674d2f43677442437232374b776f4c42684f662f71525a433642322b5642334151734639786e4d5341594c4268502f6632414c66395834314e554c424c32365751594c4941713549677064426b414b4331414b7666363751516f4c466232374b776f4c2f6f3045757231634279554b7572316342316e3354436f4b4378564343726f724372332b4178554c5467723348675339437751542f2f316776626f68437663654242502f2f5743397569454b4330304b4c67704e4367763362306e33492f74502b7a38372b7862376642376a467664597665663342666356722f73622b79304c555170634e777237486759546e2f326b76567733436776375272704a43677537496770624267753475376936754c753475726936754c7534757269367562713475726d354378566f706e43777371696d727139757157526d6347316e486734565a4b56767337616b70374b3263714e675933467a5942344c472f74484d445037502f744830446e334c4e65344379414b7567636b43723163426774594372705a4267734773666379425559475a6673794251734576626c5a4267734745352f39704c304c2b775547452f2b2f595073364337324c766232397662324c7651734557416f4c347750762b556b562f556e654330724f427042786a6c4678476775392b564556584c323642777539756c6b473978344576517354582f326b43774141a264697066735822122022a9f82aaa95c61f44aae2d7005c277c2b6d9c0e9951eb4e6f23b3fd2536991a64736f6c63430008090033";

export class CorruptionsFont__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CorruptionsFont> {
    return super.deploy(overrides || {}) as Promise<CorruptionsFont>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CorruptionsFont {
    return super.attach(address) as CorruptionsFont;
  }
  connect(signer: Signer): CorruptionsFont__factory {
    return super.connect(signer) as CorruptionsFont__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CorruptionsFontInterface {
    return new utils.Interface(_abi) as CorruptionsFontInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CorruptionsFont {
    return new Contract(address, _abi, signerOrProvider) as CorruptionsFont;
  }
}

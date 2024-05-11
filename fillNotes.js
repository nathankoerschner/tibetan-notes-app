const firestore = require("@react-native-firebase/firestore");
const wordList = `ཀ་ཀུ་སྟ་a river
ཀ་གཅིག་པ་having one pillar
ཀ་གཟུ་capital of a pillar
ཀ་གཟུ་གདུང་beam of the pillar
ཀ་ཏ་མ་ཀ་kind of bird
ཀ་ཏ་ཝ་name of a locality
ཀ་ཏ་ར་a flower
ཀ་ཏན་cotton cloth
ཀ་ཏམ་བྷ་an insect
ཀ་ཏཡའི་བུ་son of katya
ཀ་ཏི་ཤེལ་kati crystal
ཀ་ཏུ་ཀ་fabulous city
ཀ་ཐོག་monastery in kham
ཀ་དམ་པ་ཅན་cloud
ཀ་ན་ཀ་gold
ཀ་ནེ་རུ་ཀ་bones of the limbs
ཀ་པི་ཏ་gum resin
ཀ་པིན་ད་a kind of bird
ཀ་ཕ་a tree
ཀ་ཕིབས་corridor
ཀ་བ་ཤུལ་ཅན་grooved pillar
ཀ་བུ་ལོ་a gandharva raja
ཀ་བེད་gourd
ཀ་མ་ཏ་lotus
ཀ་མ་ལ་ཤི་buddhist philosophy
ཀ་མ་ལི་very sharp sword
ཀ་མགོ་capital of a pillar
ཀ་མང་མ་having many pillars
ཀ་ཙ་རུ་ཙ་ཀ་a kind of bird
ཀ་ཙ་རྐེད་ཉག་rusty and crooked
ཀ་ཙང་ཀ་ལ་a buddhist nun
ཀ་ཙི་ལི་བན་the kachili forest
ཀ་ཚལ་place east of lhasa
ཀ་ཝ་ཅན་channeled pillar
ཀ་ར་དོག་གཅིག་lump of sugar
ཀ་ར་ན་ཇུས་fine chinese satin
ཀ་ར་ནང་food of pigs
ཀ་ར་རུ་བེ་ཀ་a bird
ཀ་ར་ཧ་རི་sugar
ཀ་རས་benares muslin
ཀ་རིའུ་བུ་uma
ཀ་རྩ་ག་ལ་sea
ཀ་རྩ་མ་species of wild oats
ཀ་རྩེ་capital of a pillar
ཀ་ལ་བུ་a king
ཀ་ལན་ཏ་ཀ་species of bird
ཀ་ལན་ཛ་རི་ཀ་flower plant
ཀ་ལེ་saddlecloth
ཀ་ཤི་ཀ་ཕྲ་benares muslin
ཀ་ཤི་ཀ་ཕྲ་མོ་fine flax
ཀ་ཤི་ཀའི་འབྲུ་linseed oil
ཀ་ཤིས་cotton cloth
ཀ་སུལ་fluting in a column
ཀ་སྡེར་porcelain dish
ཀ་སྦྱོར་བཟུང་keep them unified
ཀ་ཨུ་ནི་elbow
ཀག་གིས་suddenly
ཀག་གིས་ལངས་fleeing from harm
ཀང་དང་ཀིང་a dakini
ཀང་ཚ་རང་ག་place in bengal
ཀའི་ཐོག་པ་old school lineage
ཀའུ་watermelon
ཀར་ཀ་ཏ་cancer constellation
ཀར་ཀར་ཟུག་ལངས་aching pain
ཀར་རྒྱལ་a naga
ཀར་ས་kind of brick tea
ཀས་བླངས་has been promised
ཀི་related to
ཀི་ཀིའི་སྒྲ་cry of the peacock
ཀི་ཙི་tickling
ཀི་ཙི་བྱེད་པ་to tickle
ཀི་ར་ན་flower
ཀི་སྒྲ་scream
ཀི་སྒྲ་རྒྱབ་པ་scream
ཀིལ་slowly
ཀུ་ཀུ་རི་པ་indian buddhist sage
ཀུ་ཀུར་ཏ་པ་ད་hill in magadha
ཀུ་ཅོ་ཆལ་རྩོལ་bawl out
ཀུ་ཅོར་place in tibet
ཀུ་ཆོར་place in tibet
ཀུ་ཐེར་heavenly breeze
ཀུ་ནི་elbow
ཀུ་མད་ཚལ་fascinating
ཀུ་མུ་ད་ཚལ་grove of lilies
ཀུ་མུད་གྲོགས་moonbeams
ཀུ་མུད་དགྲ་sun
ཀུ་རུ་ཁ་cross
ཀུ་རེ་ཅན་playful
ཀུ་རེ་བྱེད་པ་jest
ཀུ་ཤ་ཆེན་པོ་a chakravarti raja
ཀུ་ཤ་ན་a flower
ཀུ་ཤུ་ཤིང་apple tree
ཀུག་ཀུག་altogether crooked
ཀུག་པ་ཉིད་crookedness
ཀུག་རྩེ་cuckoo
ཀུང་ཀུ་མ་saffron
ཀུང་ཁྲེང་ཧྲི་engineer
ཀུང་སི་company
ཀུང་ཧྲེcommune
ཀུང་ཧྲེ་commune
ཀུན་ཀྱི་བླ་མ་the supreme teacher
ཀུན་གཏུམ་very fierce
ཀུན་གཏོང་give away all
ཀུན་གཏོང་བ་giving away all
ཀུན་གྲུབ་the month of october
ཀུན་ཏུ་དོར་perfect abandonment
ཀུན་ཏུ་བཏགས་པ་conceptual
ཀུན་ཏུ་འབྱིན་issue forth
ཀུན་ཏུ་རྒྱུ་ascetic sage
ཀུན་ཐི་ར་a bird
ཀུན་དགའ་ར་བ་pleasure grove
ཀུན་དགའི་སྒྲ་sound of joy
ཀུན་དང་བྲལ་beyond all
ཀུན་དང་འཁོན་པ་quarrelling with all
ཀུན་དབང་total power
ཀུན་དུ་ལ་cat
ཀུན་དོང་onion
ཀུན་དྲིལ་བ་all taken together
ཀུན་ནས་འགྲོ་communion
ཀུན་ནས་རྒོད་laugh out
ཀུན་བདག་lord of all
ཀུན་བརྟག་པ་imaginaries
ཀུན་བྲལ་beyond all
ཀུན་འགྲོ་འབད་be assiduous
ཀུན་འདར་མ་avadhuti
ཀུན་འདས་to transcend
ཀུན་འདྲི་question
ཀུན་འཛོམ་where all meet
ཀུན་རྟོག་རླབས་waves of thoughts
ཀུན་རྫོགས་པ་perfect in totality
ཀུན་རྫོབ་ཏུ་conventionally
ཀུན་ལ་བདེ་happiness to all
ཀུན་ལས་དམན་པ་retard
ཀུན་སྐྱེ་grows everywhere
ཀུན་སྒྲིབ་serious hindrance
ཀུན་སྙིང་taranatha
ཀུན་སྤོང་attitude
ཀུན་སྦྱོར་thorough enwrapment
ཀུམ་ཀུམ་very contracted
ཀུམ་པ་ཉིད་contraction
ཀུམ་བི་ར་a srin po
ཀུར་ཏི་hasten
ཀེ་ཀེ་vertical
ཀེ་ཀེ་རུ་white precious stone
ཀེ་ཁོར་ལ་thereabouts
ཀེ་ཡ་wickedness
ཀེ་རྩེ་བ་a bon teacher
ཀེ་ལ་a tribal clan
ཀེ་ལ་ཀ་ginger
ཀེ་ཤ་ར་mane
ཀེང་རུས་skeleton
ཀེའུ་ལེའི་རྒྱ་customary seal
ཀེར་གྱིས་suddenly
ཀེར་ལངས་suddenly stood up
ཀོ་ཀི་ལཀ་ཤ་a tree
ཀོ་ཀྱ་pure
ཀོ་གཞོང་basin made of hide
ཀོ་གྲུ་leather boat
ཀོ་ཉ་place in tibet
ཀོ་ཏན་blood
ཀོ་ཏམ་པ་mountain
ཀོ་ཏམ་པའི་གོས་jute cloth
ཀོ་ཐ་kind of leprosy
ཀོ་ཐུམས་packed up in hide
ཀོ་ན་པི་ཝང་a kind of guitar
ཀོ་ཕུབ་leather buckler
ཀོ་བ་མཉེད་པ་tan hides
ཀོ་བ་མཉེད་མཁན་tanner
ཀོ་བ་མཉེད་རྩལ་tanning
ཀོ་བ་མཐུག་པོ་thick hide
ཀོ་བི་ད་ར་ཀ་an abode of the gods
ཀོ་བུབས་entire skin
ཀོ་བོ་a country
ཀོ་མ་a bird
ཀོ་འབོ་itch scab
ཀོ་ར་cup for drinking
ཀོ་རུལ་rotten hide
ཀོ་རེ་cup for drinking
ཀོ་ལའི་འདབ་plantain leaf
ཀོ་ལོང་བསྡོམ་become irritated
ཀོ་ལྷམ་leather shoes
ཀོ་སྐོ་འདེགས་raise the neck
ཀོ་སྒམ་leather trunk
ཀོག་བ་hard covering
ཀོག་ཙེ་net
ཀོང་ཁྲུ་kind of yellow satin
ཀོང་པ་ཉིད་concavity
ཀོང་འོག་earlier and later
ཀོང་སྤྲེལ་ape from kong po
ཀོད་boiled
ཀོམ་པ་to tan a skin
ཀོར་ཀོར་coiled
ཀོར་ནི་རུ་པ་a great lama
ཀོལ་བའི་ལམ་bad road
ཀྭ་ཙི་melon seeds
ཀྱ་གེ་ཀྱོག་གེ་zigzag
ཀྱ་ཨན་large fort in tibet
ཀྱག་ཀྱག་deliberate
ཀྱག་པ་ཉིད་thickness
ཀྱི་གློང་elbow
ཀྱིག་རྩེ་unburnt brick
ཀྱིན་གདའ་it seems
ཀྱིར་བ་ཉིད་roundness
ཀྱེ་ག་magpie
ཀྱེ་རེ་བ་upright
ཀྱེ་ལགས་oh sir
ཀྱེད་དག་you two
ཀྱེར་upright
ཀྱོག་པ་curve
ཀྱོང་ཁ་quarrel
ཀྱོང་བུ་small shovel
ཀྱོམ་པ་soft and tough
ཀྲ་ཉ་ཅ་mountain crane
ཀྲ་ཏན་bomb
ཀྲག་signifying rock
ཀྲང་ངེ་standing
ཀྲང་ངེ་བ་upright posture
ཀྲང་ངེ་བ་ཉིད་upright posture
ཀྲང་མཁྲིས་feverish chill
ཀྲང་སྡོད་པ་stand
ཀྲད་ལྷན་patch for shoe
ཀྲན་མ་peas
ཀྲམ་cabbage
ཀྲི་ཀ་ལ་ཤ་small lizard
ཀྲི་ཧ་ཕུ་uniform
ཀྲིག་གི་straight
ཀྲིན་ནད་colic
ཀྲུང་ཀྲུང་crane
ཀྲུང་དབྱང་central authorities
ཀྲུམས་meat
ཀྲེ་ཉག་place in kham
ཀྲེ་ནག་spout of a kettle
ཀྲེ་བོ་place in kham
ཀྲེན་town
ཀྲོ་མ་ཀྲོ་tomato
ཀྲོང་ངེ་erect
ཀྲོང་ལང་erection
ཀྲོམ་མདའ་pistol
ཀླ་ཀློ་barbarian
ཀླ་ཀློ་ཁ་copper
ཀླ་ཀློ་རྣམས་barbarians
ཀླ་ཀློའི་ཆོས་religion on the lips
ཀླ་ཀློའི་འཕེལ་a turuska king
ཀླ་ཀློའི་སྤོས་garlic
ཀླ་ཐེབས་coming out of snakes
ཀླ་རྩི་musk
ཀླག་ཅོར་ཆུང་བ་less noisy
ཀླགས་མི་ཁུགས་not incarnated
ཀླགས་མི་སྙེད་not incarnated
ཀླད་ཆུང་cerebellum
ཀླད་ནས་from the first
ཀླད་པ་brain
ཀླད་པའི་རྩ་veins of the brain
ཀླལ་བ་yawning
ཀླས་པ་bordering on
ཀླུ་གནས་abode of the klu
ཀླུ་དུག་ཅན་poisonous snakes
ཀླུ་བཙན་ས་བདག་btsan and sa bdag
ཀླུ་བུམ་vase of the klu
ཀླུ་བྱང་epithet of nagarjuna
ཀླུ་མེས་a lama
ཀླུ་ཡི་གཞི་earth
ཀླུ་ཡི་སྐད་language of the klu
ཀླུ་རྩི་musk
ཀླུ་སྐྱེས་tree
ཀླུ་སྨན་a medicine
ཀླུང་river
ཀླུང་གི་ལྷ་deities of fortune
ཀླུང་མ་river
ཀླུང་ཚག་yak of the valley
ཀླུའི་མཚན་tree
ཀླུའི་མེ་ཏོག་tree
ཀློག་ཁོམས་time to read
ཀློག་གྱུར་བྱས་made secret
ཀློག་གྲྭ་reading school
ཀློག་དཀའ་difficult to read
ཀློག་དེབ་textbook
ཀློག་དེབ་ཀྱི་textual
ཀློག་པ་པོ་reader
ཀློག་པར་བྱེད་is reading
ཀློག་བཞིན་པ་reading
ཀློག་བྱ་anything to be read
ཀློག་མཁན་reader
ཀློག་མི་ཐུབ་པ་illegible
ཀློག་འདོན་read aloud
ཀློག་ཡིག་read
ཀློག་རུང་བ་legible readable
ཀློགས་ཤིག་do read
ཀློང་གྲུམ་badger
ཀློང་ཉིད་primordial dimension
ཀློང་དུ་གྱུར་fathoming
ཀློང་མ་primordial dimension
ཀློང་ལྔ་five vast spaces
ཀློངས་རག་place in tibet
ཀློལ་བ་simmer
ཁ་ཁར་quietly
ཁ་ཁུ་སིམ་པོར་silently
ཁ་ག་པོ་difficult
ཁ་གང་དགར་སྨྲ་speak at pleasure
ཁ་གང་བ་square
ཁ་གཅུས་པ་maneuver
ཁ་གཏད་opposite
ཁ་གཏམ་oral tradition
ཁ་གཏུགས་པ་kiss
ཁ་གཏོར་བ་disintegrate
ཁ་གདང་ནས་agape
ཁ་གདང་བ་gape
ཁ་གདོང་face
ཁ་གཟེ་པ་coolie
ཁ་གཟེ་མོ་conspicuous progress
ཁ་གཡེལ་wide mouth
ཁ་གཤགས་རྒྱག་པ་dispute
ཁ་གསབ་པ་reply
ཁ་གསར་པ་fresh
ཁ་གསོས་replenish
ཁ་གོང་snow ball
ཁ་གྱེན་བསྟན་facing upwards
ཁ་གྲངས་enumeration
ཁ་གྲངས་ཀྱི་ཐོ་statistics
ཁ་གླིང་a border country
ཁ་ངོམས་to ge quenched
ཁ་ཅིག་ཏུ་in some
ཁ་ཅིག་ཙམ་few rare cases
ཁ་ཆད་ཡོད་པ་promise
ཁ་ཆུ་འདོན་པ་salivate
ཁ་ཆེ་གུར་གུམ་kashmir saffron
ཁ་ཆེམས་འཇོག་པ་make a will
ཁ་ཆེའི་ལྷ་ཁང་mosque
ཁ་ཉན་པ་obey
ཁ་ཉན་པོ་obedient
ཁ་ཉེ་གཏོང་བ་blame
ཁ་ཉེན་པོ་poor servant
ཁ་ཏ་བྱེད་པ་give advice
ཁ་ཏིག་ཁ་བ་bitter
ཁ་ཏིག་བཟོ་བ་embitter
ཁ་ཏོན་གྱིས་དང་and read loudly
ཁ་ཏོན་དུ་in recitation
ཁ་ཏོན་དུ་བྱ་recite
ཁ་ཏོན་བྱེད་པ་perform recitation
ཁ་ཐད་ལང་མཁན་defiant
ཁ་ཐུག་སྐོང་བ་fill to the brim
ཁ་ཐུར་chopsticks
ཁ་ཐུར་བསྟན་facing downwards
ཁ་དབང་eloquent
ཁ་དིག་stammer
ཁ་དོག་color
ཁ་དོག་ཁོ་རང་color itself
ཁ་དོག་ཆེན་པོ་gold
ཁ་དོག་མཐུན་པ་one uniform color
ཁ་དོག་འགྱུར་the color changes
ཁ་དོག་སེར་པོ་yellow color
ཁ་དོག་སྒྱུར་བ་change color
ཁ་ནང་དུ་within
ཁ་ནད་mouth disease
ཁ་ནས་དོན་པ་ejaculated
ཁ་ནས་ཟེར་བ་speak colloquially
ཁ་ནིང་last year
ཁ་ནིམ་of cotton cloth
ཁ་ནུབ་last evening
ཁ་པར་ཁང་telephone office
ཁ་པར་གཏོང་བ་telephone
ཁ་པོ་speech
ཁ་པོ་ཆེ་talking much
ཁ་ཕན་advantage
ཁ་ཕུ་བ་turned upside down
ཁ་ཕོ་boasting
ཁ་ཕོ་ཆེ་one who boasts much
ཁ་ཕོག་verbal reproof
ཁ་ཕྱི་outer edge
ཁ་ཕྱིར་ལྟ་བ་look back or forth
ཁ་ཕྱིས་napkin
ཁ་ཕྱེས་ཏེ་ajar
ཁ་ཕྱོགས་སུ་towards
ཁ་ཕྱོར་བ་speaking vainly
ཁ་བ་bitter
ཁ་བ་ཅ་ད་ཀ་swallow
ཁ་བ་ཅན་གྱི་snowy country
ཁ་བ་བབ་པ་snow
ཁ་བཀག་པ་gag
ཁ་བཀྲམ་པ་decentralize
ཁ་བགྲད་པ་gape
ཁ་བདགས་silk scarves
ཁ་བདན་bed sheet
ཁ་བདེ་པོ་voluble
ཁ་བཙུམ་པ་mum silence
ཁ་བཙུམ་སྟེ་silently
ཁ་བཙུམས་ནས་mute
ཁ་བའི་གོང་རིལ་snow ball
ཁ་བའི་རོ་bitter taste
ཁ་བའི་རྟུལ་lumps of snow
ཁ་བའི་ལྷུན་པོ་himalaya mountains
ཁ་བརྡའ་verbal utterance
ཁ་བརྡུང་verbal abuse
ཁ་བཤལ་washing the mouth
ཁ་བསག་talkative
ཁ་བསྒོས་advice
ཁ་བསླང་turned upwards
ཁ་བུ་turned downwards
ཁ་བུབ་པ་turned downwards
ཁ་བྱང་བ་intelligent
ཁ་བྱེ་བ་to blossom
ཁ་མ་ཆར་sleet
ཁ་མ་ཐུན་པ་accede
ཁ་མ་འཆམ་discordant
ཁ་མང་པོ་talking much
ཁ་མངར་bitter and sweet
ཁ་མཆུ་case
ཁ་མཆུ་འཛུགས་པ་to file a case
ཁ་མཐོ་བ་uplifted
ཁ་མི་མཐུན་discordant
ཁ་ཚ་པོ་spicy
ཁ་ཚུབ་snow storm
ཁ་ཚོ་boasting
ཁ་ཚོད་weighing
ཁ་ཞག་foam
ཁ་ཞན་པོ་defenseless
ཁ་ཞེ་mouth and mind
ཁ་ཞེ་མི་མཚུངས་hypocrite
ཁ་ཞེད་ཅན་eloquent
ཁ་ཟས་ངན་ཆེས་very bad food
ཁ་ཟས་ཞིམ་པོ་delicious food
ཁ་ཟུར་the date fruit
ཁ་ཟེར་བ་loquacious
ཁ་འཁོར་བ་surround
ཁ་འགག་mouth
ཁ་འགགས་appetite is gone
ཁ་འགྲམ་close to
ཁ་འཆ་བྱེད་he prattles
ཁ་འཆུས་the mouth distorted
ཁ་འཇལ་བ་measure
ཁ་འཐུར་དུ་ལྟ་turned downwards
ཁ་འཐོར་བ་scattered
ཁ་འདྲི་བྱེད་པ་alibi
ཁ་འཕྱོར་བ་speak deliriously
ཁ་འཕྲལ་partition
ཁ་འབྱེ་to blossom
ཁ་འཚོག་abuse
ཁ་འཛིན་cuckoo
ཁ་འཛིན་རྒྱག་པ་quarrel
ཁ་འཛུམ་པ་shut the mouth
ཁ་ཡང་གིས་སོམ་it is my opinion
ཁ་ཡན་དུ་ཀློད་given free rein
ཁ་ཡོ་mouth crooked
ཁ་ཡོག་false charge
ཁ་རག་place in tibet
ཁ་རུ་ཚ་black salt
ཁ་རེ་སྐྱེངས་be ashamed
ཁ་རྒན་privilege of old age
ཁ་རྒྱག་པ་talking much
ཁ་རྒྱབ་པ་seal
ཁ་རྒྱལ་བ་win a dispute
ཁ་རྡབ་པ་stumble
ཁ་རྩོད་པ་haggle
ཁ་རྩོད་རྒྱག་པ་quarrel
ཁ་རྩོད་རྒྱབ་པ་wrangle
ཁ་ལ་ཉན་པ་obey
ཁ་ལ་ཉན་མཁན་one who is obedient
ཁ་ལ་མ་ཉན་མཁན་disobedient
ཁ་ལ་འོ་གཏུགས་kiss
ཁ་ལ་འོ་བྱེད་kiss the mouth
ཁ་ལ་འོ་བྱེད་པ་kiss
ཁ་ལ་སྒྱུར་བ་charioteer
ཁ་ལག་food
ཁ་ལག་བཟོ་བ་cook
ཁ་ལན་ཟ་བ་dine
ཁ་ལིན་པ་place in tibet
ཁ་ལུད་sputum
ཁ་ལུད་གཏོར་བ་spit out
ཁ་ལེ་མོན་place in mongolia
ཁ་ལོ་བསྒྱུར་govern
ཁ་ལོ་སྒྱུར་guide
ཁ་ལྐུག་པ་dumb
ཁ་ལྔ་པ་lion
ཁ་ལྟ་points
ཁ་ལྡིག་stammer
ཁ་ལྡིག་པ་stammer
ཁ་ལྡིག་མཁན་stammerer
ཁ་ལྡིབ་པ་stammering
ཁ་ལྷག་remnant of a meal
ཁ་ཤ་spotted deer
ཁ་ཤ་སྐྱུར་པོ་olive
ཁ་ཤང་པོ་frank
ཁ་ཤས་ཤིག་please give me some
ཁ་ཤུགས་ཅན་eloquent
ཁ་ས་yesterday
ཁ་སོ་ལ་འཕང་ངོ་flung to the border
ཁ་སྐོམ་པ་thirst
ཁ་སྐོམ་པོ་thirsty
ཁ་སྐོས་to give orders
ཁ་སྐྱལ་བ་kiss
ཁ་སྐྱུར་པོ་olive
ཁ་སྐྱེངས་པ་be ashamed
ཁ་སྐྱེལ་བ་kiss
ཁ་སྒོར་shoulder bone
ཁ་སྒྱེར་lip circle
ཁ་སྙོགས་པ་implore
ཁ་སྡམས་advice
ཁ་སྤོས་move over
ཁ་སྤྲོད་opposite
ཁ་སྦུག་སློག་པ་capsize
ཁ་སྦུབ་ཉལ་life face down
ཁ་སྦྱང་ངོ་eloquent
ཁ་སྦྱོར་བ་kiss
ཁ་སྲལ་ཆུང་ངུ་deaf
ཁག་ཁ་ཆགས་པ་decompose
ཁག་ཁག་silent
ཁག་ཁག་ལ་silently
ཁག་ཁར་apart
ཁག་ཁྱག་bail
ཁག་ཆེན་important
ཁག་ཐེག་bail
ཁག་པོ་ཆེ་བ་suffer from want
ཁག་པོ་བཟོ་བ་demur
ཁག་པོ་བྱུང་difficulties arose
ཁག་པོར་hardly
ཁག་མེད་without means
ཁག་འཁུར་བ་assume charge of
ཁག་འགེལ་བ་place in charge
ཁག་ཤག་པ་dissect
ཁང་གཉེར་མ་mistress
ཁང་གསར་new house
ཁང་གླའི་ཐོག་rental
ཁང་ཆུང་གོབ་ཏོ་shack
ཁང་པ་གཡར་བ་rent
ཁང་པ་གཡོ་roof of a house
ཁང་པ་དང་རིང་བ་far from the house
ཁང་པ་དོག་small narrow house
ཁང་པ་ནག་ཁུང་dungeon
ཁང་པ་བཀྲ་བ་painted house
ཁང་པ་བཤིག་པ་dismantle a house
ཁང་པ་རྒྱག་to build a house
ཁང་པ་རྡིབ་པ་house breaks down
ཁང་པའི་བྱ་གདབ་balcony
ཁང་པའི་མཁོ་ཆས་household
ཁང་པའི་ཚོམས་courtyard of a house
ཁང་པའི་འཁྱམ་ར་balcony
ཁང་པོའི་ནང་indoor
ཁང་བ་building
ཁང་བཞིས་estate
ཁང་བྱིའུ་sparrow
ཁང་བྱེ་house sparrow
ཁང་རྩེ་house top
ཁང་ལྟག་སྐོར་top of a house
ཁང་སྟོང་empty house
ཁད་ཀྱིས་བཟློ་speak of privately
ཁད་དུ་as far as
ཁན་མན་modest
ཁན་སྦྱར་vest
ཁབ་གཟེར་pin
ཁབ་ཆེན་མ་first wife
ཁབ་ཏུ་བཞེས་get married
ཁབ་ཏུ་བཞེས་པ་take for a wife
ཁབ་ཕྲ་small fine needle
ཁབ་མིག་eye of a needle
ཁབ་རལ་needle case
ཁབ་རྩེ་point of a needle
ཁབ་ལེ་difficult
ཁབ་ལེན་magnet
ཁབ་སྦོམ་large needle
ཁབས་a disease
ཁམ་ཁམ་pale yellow
ཁམ་གང་bit
ཁམ་གཅིག་bit
ཁམ་ཆུང་morsel
ཁམ་ནག་dark brown
ཁམ་བཙུན་མ་married lady
ཁམ་བུ་ཞིག་peach
ཁམ་བུ་རག་ཤ་prunus persica
ཁམ་ཟན་porridge
ཁམས་ཀུན་all worlds
ཁམས་ཀྱི་ཟས་material food
ཁམས་གཙང་refine
ཁམས་གཙང་མ་tidy
ཁམས་གཞན་other constituents
ཁམས་གསུམ་དག་ལ་in the three realms
ཁམས་གསུམ་པོ་all three realms
ཁམས་གསེང་refresh oneself
ཁམས་གསོས་པར་repair broken health
ཁམས་གོང་མ་upper realm
ཁམས་དངས་པོ་debonair
ཁམས་དངས་མ་clear essence
ཁམས་དྭངས་limpid condition
ཁམས་བདེ་པོ་well
ཁམས་བཟང་healthy
ཁམས་བསངས་clear mind
ཁམས་བསེང་refresh oneself
ཁམས་ཟས་རག་པ་meat and drink
ཁའི་ཉིན་day before yesterday
ཁའི་མ་ལེ་lower jaw
ཁའི་ཡ་ལེ་upper jaw
ཁའི་སྤུ་beard
ཁར་གསིལ་gong
ཁར་ཐུག་མིན་པ་devious
ཁར་ཐུག་ལ་directly
ཁར་ཚུད་approach
ཁར་རྩང་yesterday forenoon
ཁལ་རྒྱབ་a load
ཁལ་རྟ་pack horse
ཁལ་སྒ་pack saddle
ཁས་ཁྱག་bail
ཁས་ཆེ་promise
ཁས་མ་ལེན་པའི་negative
ཁས་མཚར་པོ་strange
ཁས་མི་ལེན་པའི་denial
ཁས་ཞན་པ་humble
ཁས་འཆེ་བ་claim
ཁི་བི་ཛ་ལ་city near shambhala
ཁུ་གུ་uncle
ཁུ་དཔོན་uncle and nephew
ཁུ་དབོན་nephew
ཁུ་བ་གཙག་པ་distil
ཁུ་བ་བཏོན་པ་decoction
ཁུ་བ་འབྱིན་པ་emit semen
ཁུ་བེ་place west of lhasa
ཁུ་བྱུག་cuckoo
ཁུ་ཚན་uncle and nephew
ཁུ་ཚུར་fist
ཁུ་འཕྲིག་entertain doubts
ཁུ་འོད་བཟའ་mother of brom ston
ཁུ་ལུགས་chief of horchen
ཁུ་སིམ་བྱེད་པ་hush
ཁུག་ཀྱོག་corner nook
ཁུག་པ་གཅིག་ཏུ་reckoned as one unit
ཁུག་ཕྱིན་པ་to fall asleep
ཁུག་སྣ་mist
ཁུང་པ་large hole
ཁུང་པོ་large hole
ཁུང་ཕུའུ་ཙི་confucius
ཁུངས་གཏོགས་constitute
ཁུངས་དག་legitimate
ཁུངས་དག་པ་good quality
ཁུངས་བརྟན་baseless
ཁུངས་སུ་in their own places
ཁུར་ཁྱེར་carry the burden
ཁུར་པོ་བ་porter
ཁུར་བླངས་པ་take over charge
ཁུར་མང་dandelion
ཁུར་མངས་dandelion
ཁུར་མི་coolie
ཁུར་ཚོད་dandelion
ཁུར་ཟིན་པ་bore
ཁུར་རྩ་baggage
ཁུར་ལེན་the charge of
ཁུར་ཤོག་bring hither
ཁེ་གན་རྩེ་monastery in china
ཁེ་གསུམ་place in tibet
ཁེ་ཕན་ཅན་profitable
ཁེ་ཕན་བྱུང་བ་benefit
ཁེ་བ་win
ཁེ་བཟང་ཅན་gainful
ཁེ་བརྒྱབ་པ་make a good bargain
ཁེ་བྲག་མདོ་place in kong po
ཁེ་མེད་unprofitable
ཁེ་རུ་འགྲོ་བ་fall in price
ཁེ་རྐྱང་naked
ཁེ་སང་ཅན་lucrative
ཁེག་kind of riddle
ཁེང་statute labor
ཁེང་པ་arrogance
ཁེང་པོ་stale
ཁེངས་ཆུང་modest
ཁེངས་དཀའ་བ་hard to fill up
ཁེད་kind of riddle
ཁེན་འདྲ་kind of cotton cloth
ཁེབ་survey
ཁེབ་རིམ་layer
ཁེབས་གཡོགས་པ་enshroud
ཁེབས་གཤུ་བ་uncover
ཁེབས་མ་covering
ཁེབས་ལྡན་covered realm
ཁེབས་སང་བ་take a covering off
ཁེབས་སེད་པ་bald
ཁེམ་པ་a brief period
ཁེམ་བུ་spoon
ཁེར་མ་naked
ཁེལ་བར་བྱུང་will be fulfilled
ཁོ་གཡུ་thrashing process
ཁོ་ཅག་we
ཁོ་ཅག་ལ་ཡོད་they have
ཁོ་ཏི་tea kettle
ཁོ་ན་གཙོ་བོ་exclusive emphasis
ཁོ་ན་འདྲ་བ་just like a
ཁོ་པོ་tribal name in tibet
ཁོ་བོ་ཅག་we
ཁོ་བོ་ཅག་ལ་to us
ཁོ་བོ་ལ་གཟིགས་looked at me
ཁོ་མཐིང་ལྷ་ཁང་monastery in lhobrag
ཁོ་ཡིན་he is
ཁོ་རང་ཁོམ་མེད་he is not at leisure
ཁོ་རང་ག་ལ་ཡོད་where is he
ཁོ་རང་ཚོ་རང་themselves
ཁོ་རང་ལ་himself
ཁོ་རྩེ་chopstick
ཁོ་ལ་him
ཁོ་ལ་ཡོད་he has
ཁོག་པ་རྒྱངས་པ་instigate
ཁོག་ཚིལ་suet
ཁོག་རུལ་rotten
ཁོག་ལྡིར་teapot
ཁོག་སོབ་hollow tree
ཁོག་སྟིར་kettle
ཁོག་སྡིར་teapot
ཁོགས་ཤིག་do read
ཁོང་ཁྲོ་anger
ཁོང་ཁྲོ་བ་anger
ཁོང་ཁྲོ་ཟ་to get angry
ཁོང་གི་ཐུགས་ལ་in his thoughts
ཁོང་ཉིད་he
ཁོང་དང་ང་he and myself
ཁོང་དུ་སོང་བ་gone within
ཁོང་ནས་from within
ཁོང་ནས་ཕྱུང་was taken out
ཁོང་ནས་སྨྲ་བ་repeat from memory
ཁོང་ཙིལ་suet
ཁོང་ཚོ་ཡིན་they are
ཁོང་ཚོ་ལ་ཡོད་they have
ཁོང་ཚོའི་their
ཁོང་ཟུར་གསུམ་triangular room
ཁོང་འཚུད་པ་comprehend
ཁོང་ཡིན་he is
ཁོང་རུལ་rotten at the core
ཁོང་རྒྱུད་drone
ཁོང་སོབ་hollow tree
ཁོང་སྟོང་མེད་not empty inside
ཁོང་སྤུན་claustrophobia
ཁོང་སྲིན་intestinal worm
ཁོངས་ན་in the midst
ཁོངས་རིལ་crippled
ཁོངས་སུ་གཏོགས་included within
ཁོད་ཁོད་གྲངས་average number
ཁོད་ཚད་level
ཁོད་སྙོམས་པ་smooth
ཁོན་enmity
ཁོན་སྙོམ་of even temper
ཁོམ་འབོགས་leather trunk
ཁོམས་ཡོད་ཙམ་པ་enough time
ཁོའི་ཙེ་chopsticks
ཁོའུ་ཆིན་harmonica
ཁོར་to him
ཁོར་ཡུག་surrounding area
ཁོར་ལོ་wheel
ཁོལ་དུ་ཕྱུང་adapted
ཁོལ་པོ་servant
ཁོལ་བ་boil
ཁོལ་བའི་ebullient
ཁོལ་བྲན་slave
ཁོལ་མཆུ་mouth of a bellows
ཁོས་ཆུང་unresourceful
ཁྭ་raven
ཁྭ་ཏ་magpie
ཁྱ་ལེ་handful
ཁྱག་to be cold
ཁྱག་ཐོག་ཁར་on the ice
ཁྱག་པར་འཁོར་བ་frost has formed
ཁྱག་སྲན་ཅན་hardened by frost
ཁྱགས་པ་ཆགས་ice formed on water
ཁྱགས་ཟིལ་frost
ཁྱགས་ཟིལ་ཅན་frosty
ཁྱགས་རི་iceberg
ཁྱགས་སྡོང་icicle
ཁྱད་ཁྱུད་a number
ཁྱད་པར་གྱི་ལམ་special path
ཁྱད་པར་ཆེ་great difference
ཁྱད་པར་ཕྱིན་པ་vary
ཁྱད་བརྗོད་specification
ཁྱད་བསད་ནས་completely scorned
ཁྱད་མཚར་amazing
ཁྱད་འཕགས་ཀྱི་excellence
ཁྱབ་ཆེ་ཤོས་most widespread
ཁྱབ་ཆེར་pervasive
ཁྱབ་ཆེས་པ་too broad
ཁྱབ་ཕྱིན་པ་diffuse
ཁྱབ་བདལ་to entirely pervade
ཁྱབ་བྱེད་pervader
ཁྱབ་མཆི་that will do
ཁྱབ་འབྲེལ་related pervasion
ཁྱབ་འཛིན་to envelope
ཁྱམས་ཆེན་huge hall
ཁྱམས་སྟོད་upper courtyard
ཁྱམས་སྨད་lower courtyard
ཁྱལ་གྱབ་མཁན་swimmer
ཁྱས་འཆེ་བ་pretend
ཁྱི་dog
ཁྱི་ཁང་dog kennel
ཁྱི་ངན་cur
ཁྱི་ཐག་leash
ཁྱི་པལ་ཇོར་blitum virgatam
ཁྱི་བཏགས་པ་chained the dog
ཁྱི་མདུད་པ་pairing of dogs
ཁྱི་ཟུག་པ་distemper in dogs
ཁྱི་འཁྱར་stray dog
ཁྱི་ཡན་པ་dog without a master
ཁྱི་ར་hunt
ཁྱི་རིགས་ཤིག་bulldog
ཁྱི་རྨུག་ཡོང་the dog will bite
ཁྱི་རྫི་dog feeder
ཁྱི་ལྟར་ཟུག་པ་yap
ཁྱི་ཤིག་flea
ཁྱི་སོ་རྒྱབ་པ་bite of a dog
ཁྱི་སྐད་barking of a dog
ཁྱི་སྦྱང་jackal
ཁྱི་སྨྱོན་པ་mad dog
ཁྱིམ་གསར་bride
ཁྱིམ་ཆ་household prospects
ཁྱིམ་ཆས་furniture
ཁྱིམ་དུ་at home
ཁྱིམ་དུ་ཉལ་swallow
ཁྱིམ་དུ་ཚུད་locked in the home
ཁྱིམ་ན་at home
ཁྱིམ་ན་ལྷོད་relaxing at home
ཁྱིམ་པ་householder
ཁྱིམ་བདག་མ་housewife
ཁྱིམ་བྱ་house bird
ཁྱིམ་བྱ་ཕོ་rooster
ཁྱིམ་མཚེས་པ་male neighbor
ཁྱིམ་མཚེས་མ་female neighbor
ཁྱིམ་ཚང་གི་domestic
ཁྱིམ་ཟླ་zodiacal month
ཁྱིམ་ལྟག་back of a house
ཁྱིམ་ལྡན་lizard
ཁྱིམ་ས་sweepings
ཁྱིམ་སོ་homesick
ཁྱིམ་སྤོ་བ་move house
ཁྱིའི་ཟླ་pack of dogs
ཁྱིར་བ་hunter
ཁྱུ་རྒྱུག་stampede
ཁྱུ་ལྡན་tamarisk
ཁྱུག་ཁྱུག་flashing
ཁྱུག་གྱུག་flash of lightning
ཁྱུག་ཙམ་རིང་momentary
ཁྱུགས་shimmering
ཁྱུགས་ཙམ་for a short time
ཁྱུགས་སེ་བ་dazzling
ཁྱུང་ཆེན་text
ཁྱུང་ཐུར་ཅན་coat of mail
ཁྱུང་ཕྲུག་eaglet
ཁྱུང་མོ་female eagle
ཁྱུས་wall side
ཁྱེ་པ་wide
ཁྱེ་བོ་children
ཁྱེ་མ་a disease
ཁྱེད་ཀྱི་དཔལ་your glory
ཁྱེད་ཀྱི་མཚན་your name
ཁྱེད་གཉིས་you two
ཁྱེད་ཅག་you
ཁྱེད་ཉིད་you
ཁྱེད་ཚོ་you
ཁྱེད་རང་རང་yourself
ཁྱེད་རང་ལ་དབང་you are the owner
ཁྱེད་རྣམས་all of you
ཁྱེད་ལ་in you
ཁྱེད་ལ་འབུལ་to give to you
ཁྱེམ་གང་handful
ཁྱེམ་གྱི་ཡུ་བ་handle of a shovel
ཁྱེམ་བུ་spoon
ཁྱེའུ་བྱེ་བ་delivery of a child
ཁྱེའུ་མཐོན་པ་delivery of a child
ཁྱེལ་འདུག་loose posture
ཁྱོ་ག་པོ་hero
ཁྱོ་ཕོ་husband
ཁྱོ་བོ་husband
ཁྱོ་མེད་པ་widow
ཁྱོ་འདམ་མ་bride
ཁྱོད་གསན་དང་listen to me
ཁྱོད་ཅག་ཡིན་you are
ཁྱོད་ཅག་ལ་ཡོད་you have
ཁྱོད་ཅན་you or one like you
ཁྱོད་མ་བློ་ན་if you cannot
ཁྱོད་ཡིན་you are
ཁྱོད་ར་you
ཁྱོད་ལ་ཡོད་you have
ཁྱོན་ཀུན་whole extent
ཁྱོན་ཚད་amount
ཁྱོར་བ་གང་handful of anything
ཁྲ་sparrow hawk
ཁྲ་གླག་eagle
ཁྲ་ཆེམ་ཆེམ་a flight of birds
ཁྲ་ཆོལ་ལེ་colored array
ཁྲ་པ་falconer
ཁྲ་ཚུབ་བེ་variegated colors
ཁྲ་ཟུར་species of eagle
ཁྲ་ཡི་ཟླ་hawk month
ཁྲ་རིང་striped long scarf
ཁྲ་རྒྱ་variegated color
ཁྲ་ལམ་མེར་གསལ་appear vividly
ཁྲ་ཤིག་ཤིག་in dazzling array
ཁྲ་སེམས་ཤེས་a bird
ཁྲག་blood
ཁྲག་གཅོད་པ་stop bleeding
ཁྲག་ཆགས་རྟ་blood bred horse
ཁྲག་ཐིག་bloodstain
ཁྲག་དྲོན་མོ་warm blood
ཁྲག་པོ་hard
ཁྲག་ཝ་bloody goitre
ཁྲག་ཟག་bleed
ཁྲག་འཐུང་drinking blood
ཁྲག་འཐུང་མཁན་vampire
ཁྲག་འདོན་པ་bleed
ཁྲག་འཛག་པ་flowing of the blood
ཁྲག་རོ་clotted blood
ཁྲག་རྒྱུན་circulation of blood
ཁྲག་རྣག་blood and pus
ཁྲག་ལིང་clot of blood
ཁྲག་ལྡག་པ་lick blood
ཁྲག་ལྦ་blood goiter
ཁྲག་ཤས་ཆེ་བ་plethoric
ཁྲག་ཤུགས་blood pressure
ཁྲག་སྐེམ་medicinal vegetable
ཁྲང་ཀྲང་factory director
ཁྲད་པ་stretched out
ཁྲབ་སྟོན་show
ཁྲབ་སྟོན་ཁང་theater
ཁྲམ་པ་བྱེད་པ་feign
ཁྲམ་ལྡན་tiger
ཁྲལ་ཁྲུག་very large number
ཁྲལ་གསར་levying of a new tax
ཁྲལ་པ་taxpayers
ཁྲལ་བཀལ་བ་levy taxes
ཁྲལ་འཁྲི་བ་tied by taxes
ཁྲལ་འགེལ་taxation
ཁྲལ་འཇལ་pay rent or tax
ཁྲལ་འབུལ་བ་payment of revenue
ཁྲལ་རྒྱབ་པ་levy tax
ཁྲལ་སྡུ་བ་collect taxes
ཁྲལ་སྤྲོད་པ་payment of revenue
ཁྲི་ཁ་on the chair
ཁྲི་ཁ་ན་on the chair
ཁྲི་གདུགས་sun
ཁྲི་དཔོན་myriarchs
ཁྲི་ཕྲག་thousands
ཁྲི་བྱེ་བ་ten millions
ཁྲི་འདོན་enthronement
ཁྲི་འུར་a bird
ཁྲི་རྐང་khatvanga
ཁྲི་ལ་བཀོད་པ་enthrone
ཁྲི་ལེ་བ་fear
ཁྲི་སྐོར་myriarchies
ཁྲི་སྟེགས་throne
ཁྲིག་སྦྱོར་coitus
ཁྲིགས་སེ་ཁྲིག་draw up in formation
ཁྲིགས་སེ་གང་quite well
ཁྲིད་གདམས་instructions
ཁྲིད་བཀའ་guides
ཁྲིད་བསླབ་པ་instruction
ཁྲིད་མཁས་to skillfully guide
ཁྲིད་ཟབ་པོ་thorough instruction
ཁྲིབ་ཁྲིབ་a large number
ཁྲིམས་གཏོང་བ་condemn
ཁྲིམས་གནས་པ་law being in force
ཁྲིམས་ཐོག་གི་statutory
ཁྲིམས་དྲག་པ་severe punishment
ཁྲིམས་བཟོ་legislation
ཁྲིམས་བཤིག་པ་infringe justice
ཁྲིམས་མཐུན་legal
ཁྲིམས་འདྲལ་break law
ཁྲིམས་རྩོད་པ་lawyer
ཁྲིམས་ལྡན་endowed with ethics
ཁྲིའི་ཁ་on the chair
ཁྲིའི་སྟེང་on the chair
ཁྲིའུ་ཤིང་chair
ཁྲིས་འཇགས་time of prosperity
ཁྲུ་གང་one cubit
ཁྲུ་གང་པ་measuring one cubit
ཁྲུ་རློག་tilling the ground
ཁྲུང་ཁྲུང་crane
ཁྲུན་ཕང་སྲིད་height and breadth
ཁྲུམས་a constellation
ཁྲུལ་ཚུལ་arising of delusion
ཁྲུས་ཀྱི་རྩ་ku sha grass
ཁྲུས་ཀྱི་རྫིང་bathing tank
ཁྲུས་ཆབ་ablution water
ཁྲུས་བུམ་washing pot or jug
ཁྲེ་millet
ཁྲེ་གད་scornful laughter
ཁྲེ་རྒོད་wild millet
ཁྲེ་རྩེ་chinese vermicelli
ཁྲེགས་hardness
ཁྲེང་ལོང་food steamer
ཁྲེལ་གདོང་bashful face
ཁྲེལ་ནས་scornfully
ཁྲེལ་པོ་shameful
ཁྲེལ་འཛེམ་modesty
ཁྲེལ་ཡོད་པ་embarrasment
ཁྲོ་belligerence
ཁྲོ་གཉེར་frown
ཁྲོ་གཏུམ་པ་furious with rage
ཁྲོ་གཏུམ་པོ་furious with rage
ཁྲོ་ཆགས་intensely passionate
ཁྲོ་བ་མ་a goddess
ཁྲོ་བར་བྱེད་པ་grow angry
ཁྲོ་བོ་wrathful
ཁྲོ་བོའི་སྐུ་wrathful body
ཁྲོ་བྱེད་frightful
ཁྲོ་མོན་prison
ཁྲོ་འཇོམས་པ་suppress anger
ཁྲོ་ལ་སྐྱེན་པ་swift to wrath
ཁྲོ་སེམས་resentment
ཁྲོད་ནས་from the midst of
ཁྲོད་རྔམས་wrathful
ཁྲོན་པ་གཅིག་a well
ཁྲོན་པའི་ཆུ་well water
ཁྲོན་སྐྱོགས་ladle used at a well
ཁྲོམ་ཆེན་great crowd
ཁྲོམ་པོ་པ་inhabitant of khrom
ཁྲོམ་བསྐོར་paraded
ཁྲོལ་གྱིས་སོང་slide making a sound
ཁྲོལ་ཚོགས་sieve
ཁྲོལ་ལེ་བ་freely flowing
ཁྲོས་angry
ཁྲོས་ཚིག་angry words
ག་ག་title of honor
ག་ག་ཚིལ་tickling
ག་གཟི་squinting
ག་གི་ཡིན་ནའང་whichever
ག་དུས་ཡིན་ཡང་always
ག་པར་ཡོད་མིན་whereabouts
ག་པུར་camphor
ག་པུར་འཐུལ་smell of camphor
ག་བ་ཏ་བ་a flower
ག་བ་ཏ་བ་རི་ནི་small cardamom
ག་བཙོན་eruption of the skin
ག་བུར་འཛིན་moon
ག་བུར་འཛིན་པ་moon
ག་བྱེད་to try to do
ག་མཐའ་a final ga
ག་མོ་བྱེ་ལ་species of wild cat
ག་ཟུག་how
ག་འགྲིག་saddle
ག་འདྲ་ཞིག་what kind
ག་འདྲ་སེ་how
ག་ར་ཁ་ཏན་root of plant
ག་རི་dejected
ག་རེ་བྱས་ནས་why
ག་རེ་བྱེད་མཁན་what for
ག་རེའི་དོན་དུ་why
ག་ལ་གང་ཙམ་considerable
ག་ལ་ཞིག་not only
ག་ལེར་ག་ལེར་gradually
ག་ལེར་ཕེབས་adieu
ག་ལོག་squinting
ག་ཤ་སྒྲོག་loud laughter
ག་ཤར་བཅུག་cause laughter
ག་ཤེད་གཅིག་ལ་it is somewhere
ག་ས་ག་ལ་ཡོད་པ་ubiquity
ག་སུབ་cover
གག་ཚེ་water fowl
གགས་obstructed
གང་ག་ganges river
གང་གནས་where it dwells
གང་གནས་པ་whoever remains
གང་གཟབ་as good as possible
གང་གིས་ཀྱང་totally
གང་གིས་ཤེ་ན་why
གང་ཅིའང་རུང་any and all
གང་ཅིའི་of all kinds
གང་ཐུབ་as far as possible
གང་དག་ཉིད་whichever
གང་དགའ་གྱིས་just let it go
གང་དགར་ཐོང་be carefree
གང་དགོས་whatever is needed
གང་དུ་ཀྱང་རུང་whithersoever
གང་དུ་གཟུང་ཡང་some thing
གང་དུ་འདུག་where to sit
གང་དུ་ཡང་everywhere
གང་དུ་ཡང་སྣང་permeate everywhere
གང་དུས་when
གང་དེ་ཡོད་ན་in this case
གང་ནའང་མེད་nowhere
གང་ནའང་རུང་wheresoever
གང་ནས་ཀྱང་anywhere
གང་ནས་བྱུང་ཆ་out of nowhere
གང་ནུས་as far as possible
གང་བ་མེད་པ་not full
གང་བར་འགྱུར་will fill
གང་བྱས་གང་ལྟར་however
གང་བྱུང་དུ་random
གང་མགོ་bowl of tobacco pipe
གང་མེད་not full
གང་ཙམ་ནས་after some time
གང་ཙམ་ཞིག་much
གང་ཚང་དུ་fully
གང་ཚུན་up to the point of
གང་ཚེ་ཚེ་when
གང་ཞིག་ཀྱང་any
གང་ཟག་གི་བདག་self of persons
གང་ཟག་ཙམ་mere person
གང་ཟག་ཤས་ཆེ་བ་most people
གང་འདུག་exactly as it is
གང་འདོད་བཞིན་ad libitum
གང་འཚམ་ཞིག་some
གང་ཡ་very large figure
གང་ཡང་མ་རྙེད་not find anything
གང་ཡང་མིན་nothing at all
གང་ཡང་མིན་པ་nothing
གང་ཡང་མེད་མཁན་dispossessed
གང་ཡང་རུང་ཅི་whatsoever it may be
གང་ཡང་རུང་བའི་of any
གང་ཡིན་ཅེ་ན་why construction
གང་ཡིན་པ་དེ་that which is
གང་ཡིན་མ་ངེས་unknown place
གང་ཡོད་རྣམས་whichever they were
གང་རུའང་somewhere
གང་ལ་ཡང་anything
གང་ལས་བྱུང་where it comes from
གང་ལྟར་ནའང་regardless
གང་ལྟར་བཞག་in any circumstance
གང་ལྟར་ཡང་in any case
གང་ས་གང་དུ་everywhere
གང་སུ་དག་whichever of those
གངས་snow
གངས་ཀྱིས་གང་བ་snowy
གངས་གཟིགས་snow leopard
གངས་ཅན་ཞིང་tibet
གངས་ཅན་ཤིང་རྟ་tsong khapa
གངས་ཆར་sleet
གངས་དཀར་snowy mountains
གངས་པ་ཤེའུ་a kadampa lama
གངས་བབ་པ་snow
གངས་ཚན་water from snow
གངས་འཆར་འབབ་པ་sleet
གངས་ར་snowy area
གངས་རི་དབང་himalaya mountains
གངས་རུད་avalanche
གངས་རྒན་glacier
གངས་རྒྱབ་པ་snow
གངས་རླབས་avalanche
གངས་ལྗོངས་ཡུལ་tibet
གངས་ལྟར་དཀར་བ་snow white
གངས་ལྡན་himalaya mountains
གཅག་གཏོར་smash
གཅག་པ་crack
གཅན་གཟན་carnivorous animal
གཅན་གཟན་ཁང་zoo
གཅམ་བུའི་ཚིག་servile speech
གཅམ་ཡས་number
གཅལ་དུ་བཀྲམ་པ་having laid out
གཅིག་གི་ཀློང་single dimension
གཅིག་ཅར་simultaneous
གཅིག་ཅིག་at a certain time
གཅིག་ཏུ་བསྡུས་united
གཅིག་ཏུ་འདྲེས་form a unit
གཅིག་ཏུ་སེམས་faith
གཅིག་ཏུ་སོང་བ་to become one with
གཅིག་ཐོག་one state
གཅིག་དུ་བྲལ་neither one nor many
གཅིག་པ་བཟོ་བ་equalize
གཅིག་པ་རང་just like
གཅིག་པར་at once
གཅིག་པུ་གནས་ས་solitude
གཅིག་བཞེད་པ་sole intent
གཅིག་བུ་unitary
གཅིག་བྱས་only
གཅིག་མཚུངས་tantamount
གཅིག་མིན་except one
གཅིག་ཚད་unit
གཅིག་ཚིག་singular number
གཅིག་འདྲ་identical
གཅིག་འདྲ་བ་consistent
གཅིག་འདྲིལ་བ་combined
གཅིག་རང་monotonous
གཅིག་ལྕོགས་combined
གཅིག་སྒྲིལ་unification
གཅིན་urine
གཅིན་གཅི་བ་make water
གཅིན་གཅིད་པ་make water
གཅིན་པ་གཏོང་ག་piss
གཅིན་པ་གཏོང་བ་urinate
གཅིན་པ་གཏོང་ས་urinal
གཅིའི་སྨན་clyster
གཅུ་གལ་importance
གཅུ་དོང་screw box
གཅུ་སྐོར་screw
གཅུང་པོ་younger brother
གཅུས་གཟེར་screw
གཅུས་ཟིན་པ་wrung
གཅེན་གཅུང་brothers
གཅེའུ་ཁ་མང་flageolet
གཅེར་བུ་naked
གཅེར་བུར་ཞོག་rest in nakedness
གཅེར་ལྟོས་look nakedly
གཅེས་ཉོག་ཅན་fondling anything
གཅེས་དངོས་pet
གཅེས་ཕྲུག་our darling child
གཅེས་བཏུས་choice extracts
གཅེས་འཛིན་self cherishing
གཅེས་སྤྲས་to value
གཅོག་འཐེན་deduction
གཅོང་དགུ་nine melodies
གཅོང་བརྒྱད་eight melodies
གཅོང་མེད་without illness
གཅོད་གཏུབ་cutting
གཅོད་བཞིན་པ་cutting
གཅོད་བྱེད་eliminator
གཉགས་place in tibet
གཉན་ཁྲོད་haunted grounds
གཉན་གཟེར་ཚ་བ་a disease
གཉན་དུག་པ་corydalis meifolia
གཉན་པོ་sacred
གཉན་འབུར་boil
གཉན་ཡོད་sravasti
གཉན་ས་rugged country
གཉའ་དྲག་འཁོར་evil spirit
གཉའ་ཚིགས་spinal joints
གཉལ་པ་native of gnyal
གཉི་ག་both
གཉི་ཟེར་sunbeam
གཉིད་ཁུ་ཟིན་པ་slept
གཉིད་ཁུག་to fall asleep
གཉིད་ཁུག་གྲབ་drowsy
གཉིད་ཁུག་པ་sleep
གཉིད་ཁུགས་པ་get asleep
གཉིད་ཆེ་deep sleep
གཉིད་ཉལ་sleeping
གཉིད་ཉལ་བ་sleep
གཉིད་ཐུང་ཐུང་catnap
གཉིད་དཀྲོག་པ་wake
གཉིད་དུ་asleep
གཉིད་དུ་ཉལ་བ་go to sleep
གཉིད་དུ་སོང་has gone to sleep
གཉིད་བྲོ་པོ་sleepy
གཉིད་མ་ཁུག་པ་not asleep
གཉིད་མ་ཐོབ་be sleepless
གཉིད་འཐུག་པ་deep sleep
གཉིད་འཐུག་པོ་sound sleep
གཉིད་འདོད་wishing to sleep
གཉིད་ཡེར་suffer from insomnia
གཉིད་རྡོལ་somnambulism
གཉིད་ལ་ཤོར་to fall asleep
གཉིད་ལམ་dream
གཉིད་ལོག་པ་to sleep
གཉིད་སད་ཙ་ན་when he awoke
གཉིད་སད་ཟིན་པ་woke
གཉིས་two
གཉིས་ཀ་both
གཉིས་ཀ་རྒྱུད་ubhayatantra
གཉིས་ཀའི་ཆ་second part
གཉིས་ཀྱི་dual
གཉིས་ག་both
གཉིས་གཉིས་two each
གཉིས་ཆ་half
གཉིས་པ་ཅན་the second only
གཉིས་པ་རྣམས་all the second ones
གཉིས་པ་ལྟར་ན་in the second case
གཉིས་བརྒྱུད་copper
གཉིས་བསྡུས་samsara and nirvana
གཉིས་བསྣན་ཏེ་adding two on
གཉིས་བྲལ་free from duality
གཉིས་འཐུང་elephant
གཉིས་རྩེག་dual
གཉིས་སུ་སྣང་བ་dualistic appearance
གཉིས་སྣང་dualistic appearance
གཉུག་natural condition
གཉུག་མ་fundamental
གཉུག་མའི་གཤིས་natural state
གཉུག་མའི་དོན་genuinely real thing
གཉུག་རླུང་fundamental wind
གཉུང་དཀར་rape seed
གཉེད་torpor
གཉེན་ཅན་polite for gnyen
གཉེན་ཉེ་relative
གཉེན་དུ་གཟིར་to gaze upwards
གཉེན་དུ་ལུས་པ་remain uppermost
གཉེན་པོ་ཉིད་antidotal
གཉེན་པོ་ཡིན་པ་antidotal
གཉེན་རིང་པོ་distant relation
གཉེན་ལྡན་befriended realm
གཉེན་སྒྲིག་གི་wedding
གཉེན་སྒྲིག་པ་mate
གཉེན་སྡེ་relatives
གཉེན་སྲིད་relatives
གཉེར་དུ་བཅོལ་was entrusted to
གཉེར་དུ་བཟུང་held in entrustment
གཉེར་མ་ཁྱམས་པ་object unfulfilled
གཉེར་མ་ཅན་wrinkled
གཉེར་མ་དངས་defined wrinkles
གཉེར་མ་མང་with many wrinkles
གཉེར་མེད་uncared for
གཉོད་ཅན་strong
གཉོད་མེད་weak
གཏག་གཏོང་disperse
གཏད་གཉེར་entrust a thing
གཏད་པ་ཙམ་བྱ་direct attention
གཏད་པའི་གཏའ་pledge objects
གཏད་ར་plans
གཏད་སོ་མེད་aimless
གཏན་ཁྲིམས་established law
གཏན་གྱི་བདེ་བ་final happiness
གཏན་གྱི་སྐྱིད་abiding happiness
གཏན་དུ་བ་continual
གཏན་ནས་utterly
གཏན་ནས་མེད་utterly none
གཏན་ནས་ཞི་བ་cease to operate
གཏན་པ་door bar
གཏན་བདེན་certain
གཏན་བདེན་རང་certainly
གཏན་འཁྱིལ་permanently staying
གཏན་ཡུལ་homeland
གཏན་ཡུལ་བྱེད་take up abode
གཏན་ལ་ཕེབས་will be established
གཏན་ལ་མ་ཕེབས་not established
གཏན་སྙོམས་པར་indifferently
གཏབ་ལ་འབེབས་པ་frame of reference
གཏབས་པ་hang
གཏམ་གྲགས་fame
གཏམ་ངག་evil talk
གཏམ་ཅན་crow
གཏམ་ཆ་འདྲི་བ་ask any news
གཏམ་དྲིས་པ་make inquiry
གཏམ་པས་རྐུ་བ་rob by speech
གཏམ་བརྗོད་drama
གཏམ་བཤགས་པ་make confession
གཏམ་རྒྱལ་བ་win in discussion
གཏམ་རྗེས་to follow talks
གཏམ་ཤོད་describe it
གཏམ་སྒྲོས་way of speaking
གཏམ་སྨྲ་བ་converse
གཏའ་མར་བཞག་པ་hypothecate
གཏར་bloodletting
གཏར་ཀ་རྒྱབ་པ་bleed
གཏི་ཁེ་kind of louse
གཏི་མུག་ཤས་ཆེ་stupidity
གཏིང་depth
གཏིང་ཐུང་བ་shallow
གཏིང་དཔག་དཀའ་deep water
གཏིང་དམའ་པོ་shallow
གཏིང་དུ་ནུབ་པ་sink to the bottom
གཏིང་དོན་deep state
གཏིང་ནད་spite
གཏིང་མཐའ་depth
གཏིང་ཚུག་deeply rooted
གཏིང་འུར་deep roar
གཏིང་རིང་པོ་deep
གཏིང་སྐྱེས་district of tibet
གཏིང་སྡིབ་socket
གཏིབ་པ་be gathering
གཏིབས་པ་be gathering
གཏུགས་གྱུར་become ended
གཏུགས་པ་touch
གཏུང་བྱེད་water
གཏུན་པོ་mortar
གཏུན་བུ་pestle
གཏུན་ཤིང་ཅན་evil spirit
གཏུབ་བཞིན་པ་cutting
གཏུབ་སྤྱད་chopper
གཏུམ་wrath
གཏུམ་པའི་ཅ་ལག་enclosure
གཏུམ་པའི་འོད་sun
གཏུམ་པོ་རྗེ་a fierce bon deity
གཏུམ་བ་fold
གཏུམ་རས་wrapper
གཏུམ་རྔམས་awesome wrath
གཏུམ་ཤོག་wrapper
གཏུམ་སྲས་a female bon deity
གཏུམས་པ་extinction
གཏེམ་to press
གཏེར་ཆོས་revealed teaching
གཏེར་དང་འདྲ་བ་like a treasure
གཏེར་ཕྲན་minor tertons
གཏེར་མཛོད་treasure
གཏེར་ཚབ་substitute for terma
གཏེར་རྫས་terma objects
གཏེར་རྫུན་false termas
གཏེར་ལུང་prophetic terma text
གཏེར་ལེན་པ་discovery of termas
གཏེར་སྐོར་treasure cycle
གཏེར་སྒྲོམ་gter casket
གཏེར་སྲུང་terma protectors
གཏོ་ཁྲ་བོ་multicolored rites
གཏོ་དཀར་པོ་white rites
གཏོ་དམར་པོ་red rites
གཏོ་ནག་པོ་black rites
གཏོགས་to include
གཏོགས་པ་to include
གཏོང་ཕོད་generosity
གཏོང་བཞིན་པ་sending
གཏོང་མཁན་consignor
གཏོར་བཤིག་པ་saboteur
གཏོར་བཤིགས་havoc
གཏོར་མ་ཟ་crow
གཏོར་རྒྱུ་ingredients of torma
གཏོལ་division of time
གཏོལ་མ་མཆིས་it is uncertain
གཏོས་ཆེ་བ་great magnitude
གད་མོ་དིང་དིང་laughing aloud
གད་མོ་བགད་cause laughter
གད་མོ་བགད་སོང་he has laughed
གད་མོ་རྒོད་laugh
གད་མོའི་གནས་object of laughter
གད་འོག་ditch
གད་རྒྱབ་པ་sweep
གད་རྒྱབ་མཁན་sweeper
གད་རྒྱབ་ཟིན་པ་swept
གད་རྒྱུངས་ཅན་loud laughter
གད་སྣོད་dustpan
གདང་ཡས་a number
གདངས་ཀྱིས་with the sounding of
གདངས་གསུངས་sounded
གདངས་བྱེད་པ་make music
གདངས་འགག་མེད་unobstructed nature
གདངས་རིང་long tone
གདན་དོན་matter
གདན་ཕེབས་arrived
གདན་བཏིང་བ་spread a rug
གདན་བཞི་four stages
གདན་བརྡབ་rug folded
གདན་ལ་on the ground
གདན་ལ་བཞུགས་seated on the rug
གདན་ལ་བརྟན་put on the ground
གདན་ལ་འཁོད་sit down
གདབ་མ་petal
གདབ་ཡས་number
གདམ་ཀ་ཡིན་པ་optional
གདམ་ཀ་རྒྱབ་པ་prefer
གདམས་ཁ་advice
གདམས་ངག་ཟབ་མོ་profound teaching
གདམས་པ་ཞིག་ཞུ་we pray give advice
གདམས་པ་ཟབ་མོ་profound upadesha
གདའ་can do
གདལ་expands into
གདིངས་confidence
གདུག་ཅན་evil doers
གདུག་པའི་ང་རོ་wild hideous screams
གདུག་པའི་ལྷ་mischievous god
གདུག་མ་fierce woman
གདུག་སྤྱོད་bad behavior
གདུགས་umbrella
གདུགས་ཀྱི་གུད་ribs of an umbrella
གདུགས་ཁེབས་birch tree
གདུགས་ཕུབ་umbrella
གདུགས་བསྐོར་spinning parasol
གདུང་གང་tomb
གདུང་བ་ཞི་desire subsides
གདུང་བའི་ལས་karma of torment
གདུང་བརྒྱུད་descendants
གདུང་བྱ་water
གདུང་ཚན་relative
གདུང་འདེགས་supporting rafter
གདུང་འདེབས་pedestal
གདུང་འབོད་intensive invocation
གདུང་འཚོབ་པ་successor
གདུང་སྐྱོབ་umbrella
གདུབ་སྐོར་finger ring
གདུལ་discipline
གདུལ་བའི་ཁམས་realm of discipline
གདུལ་བར་བྱ་བ་trainee
གདེང་ཆུད་པ་deep understanding
གདེངས་ཀ་འཛིན་hooded snake
གདེངས་ཀ་ལྡན་hooded snake
གདེངས་ཐོབ་པ་to achieve certainty
གདེངས་དང་ལྡན་to achieve certainty
གདོང་face
གདོང་ཁེབས་veil
གདོང་གཏུག་པ་conflict with
གདོང་གཞི་complexion
གདོང་གཡོགས་blindfold
གདོང་གི་facial
གདོང་གི་ཕྱོགས་the cheek
གདོང་ཆེན་བཞི་four animal heads
གདོང་ཐུག་to the brim
གདོང་ཐུག་པ་personal interview
གདོང་དར་blindfold
གདོང་དར་བཅིང་tie the blindfold
གདོང་ནག་sullen
གདོང་ནག་པོ་glum
གདོང་ཞི་brahma
གདོང་རིང་long face
གདོང་སྐྱ་pale face
གདོང་སྟད་just opposite
གདོང་སྟོན་facing
གདོང་སྤུ་face hair
གདོད་ནས་primoridally
གདོད་ནས་བཟང་བ་basic goodness
གདོད་པོ་tart
གདོད་མའི་གཞི་primordial base
གདོད་མའི་ངང་primordial state
གདོད་མའི་མགོན་primordial lord
གདོན་ཆེན་major gdon
གདོན་ཕྲན་minor gdon
གདོན་ཚོགས་hostile hosts
གདོན་འདྲེ་ghost
གདོལ་མ་outcast
གདོལ་རབས་fisherman class
གདོས་ཐག་ཆོད་cuts the ties
གན་ཐི་པར་ན་medicinal plant
གན་དའི་ཏོག་medicinal plant
གན་མཛོད་storeroom
གན་རྒྱ་འཇོག་to sign an agreement
གནག་cattle
གནག་གི་ཁྱུ་herd of cattle
གནག་པ་black
གནག་སྣུམ་shiny black
གནག་སྦག་sooty
གནང་བ་མཛད་grant permission
གནང་བ་ཞུ་བ་to ask permission
གནང་བཀག་rules of the vinaya
གནང་སྟེ་འོང་he will assent to it
གནངས་ལོ་the year after next
གནད་ཀུན་all the main points
གནད་ཅིག་this factor
གནད་ཆེན་པོ་important
གནད་ཆེན་བྱུ་very important
གནད་དམ་པ་real practice
གནད་དུ་ཐེབས་པ་to precisely perfect
གནད་བསྡུས་essential points
གནད་འཁེལ་པོ་accurate
གནད་འགག་emphasis
གནད་འགག་ཆེ་བ་important
གནད་ཡོད་མི་star
གནད་སྒྲིམ་efficacy
གནད་སྦྱོར་pith practices
གནན་མགོ་mountain in nepal
གནམ་sky
གནམ་གདོང་པོ་place in tibet
གནམ་གཤེད་a sa bdag deity
གནམ་གྱི་ཀ་བ་pillar of heaven
གནམ་གྱི་ཟླ་བ་heavenly moon
གནམ་གྲུ་airplane
གནམ་གྲུ་བཞག་ས་hangar
གནམ་གྲུ་བཟོ་ས་aerodrome
གནམ་ཆོད་པ་good
གནམ་ཐང་airport
གནམ་བབ་པ་rain
གནམ་བརྐོས་heavenly appointed
གནམ་མཆོངས་གུར་parachute
གནམ་མཛོད་sa bdag deity
གནམ་འཁྲིག་thick sky
གནམ་ཡས་castle in tibet
གནམ་རིག་astronomy
གནམ་རྒྱན་an evil spirit
གནམ་རྡོ་hail
གནམ་ལ་ལྡིང་བ་soar
གནམ་ལྕགས་སྒྲ་thunder
གནམ་སོ་straight
གནམ་སྟོང་new moon day
གནའ་large wild sheep
གནའ་དུས་སུ་in the past
གནའ་ནབས་ཀྱི་primitive
གནའ་ནས་མ་མཐོང་never seen before
གནའ་བ་burrhel sheep
གནའ་མི་man of ancient time
གནའ་རབས་ཀྱི་ancient
གནས་ཀྱི་ཏིག་ཏ་species of gentian
གནས་ཀྱི་རྒྱུ་cause of abiding
གནས་གྱུར་པ་transform
གནས་ངན་bad state
གནས་ཆ་factor of stability
གནས་ཆ་རྙེད་པ་acquired calm
གནས་ཏ་ལ་place in tibet
གནས་ཐོག་very stillness
གནས་དབང་རྟེན་sense organ
གནས་ནས་སྐྲོད་expel from a place
གནས་པ་དང་ས་abode and ground
གནས་པ་དུས་མཉམ་abiding at the same
གནས་པ་པོ་abider
གནས་པ་མ་ཡིན་nowhere
གནས་པ་མ་ཡིན་པ་not abide
གནས་པ་འཐུག་པོ་dense type of calm
གནས་པ་ཡིན་continued like that
གནས་པའི་ཐབས་method of abiding
གནས་པའི་རྒྱུ་cause of abiding
གནས་པར་for the calm state
གནས་བཅའ་རུང་བ་hospitable
གནས་བབ་situation
གནས་བཞིན་པ་living
གནས་བཟང་good and happy world
གནས་བརྟན་སྡེ་school of the elders
གནས་བསྐལ་aeon of abiding
གནས་བསྐོར་pilgrimage
གནས་བྲལ་free from abiding
གནས་མ་ཡིན་not be an object of
གནས་མཇལ་པ་pilgrim
གནས་མི་habitant
གནས་ཚ་པོ་བྱུང་it has become hot
གནས་ཚང་བཅའ་བ་lodge
གནས་ཚུལ་ཇི་ལྟ་nature
གནས་ཚུལ་བསྟན་show life
གནས་ཚེའུ་tank
གནས་ཞིག་ནས་from somewhere
གནས་འགྱུར་transformed state
གནས་འཕྲོ་still or diffusing
གནས་འབྱུང་source places
གནས་འབྱེད་set out for
གནས་འབྲེལ་pilgrimage
གནས་ཡོད་པ་existent
གནས་རིགས་classes of gods
གནས་རིམ་grade
གནས་རྒྱུན་tenure
གནས་རྣམས་ཐ་དད་different abodes
གནས་ལ་དགའ་delight in an abode
གནས་ཤིག་ཏུ་in a place
གནས་ས་གུ་དོག་narrow place
གནས་སུ་གྱུར་པ་being the abode of
གནས་སུ་དག་པ་to perfect
གནས་སུ་བྱ་བ་object to realize
གནས་སུ་མ་ཡིན་cannot be located
གནས་སུ་འཁོད་པ་settled at a place
གནས་སུ་འཇོག་པ་station
གནས་སུ་སྐྱེས་aromatic plant
གནས་སྐོར་pilgrimage
གནས་སྡོད་living in a place
གནས་སྣང་phenomenal realm
གནས་སྤར་promotion
གནས་སྤོས་transfer
གནས་སྲུང་local guardian
གནས་སྲུང་པོ་epithet of rnam sras
གནོང་ashamed
གནོང་མེད་shameless
གནོད་ཅན་obnoxious
གནོད་པ་བྱེད་པ་harmer
གནོད་པ་མེད་པ་unimpaired
གནོད་པ་ཞི་བ་pacify harmers
གནོད་པར་སེམས་harmful mind
གནོད་པོ་noxious
གནོད་བྱ་object harmed
གནོད་བྱེད་པ་damnify
གནོད་འགལ་ཅན་harmful
གནོད་རྐྱེན་harmful influence
གནོད་སྐྱེལ་disservice
གནོད་སྤྱིན་type of lha
གནོད་སྦྱིན་ཆང་alcoholic spirit
གནོན་པོ་those that suppress
གནོན་ཤུགས་pressure
གབ་to hide
གབ་ནས་ཕྱིན་པ་crept
གབ་ནས་འགྲོ་བ་creep
གབ་ཕྱུང་name of a doctrine
གབ་ཡོད་པ་latent
གབ་ས་hiding place
གབ་སྒྲ་belch
གམ་གུམ་a number
གམ་པ་dejected
གམ་ཡོ་attendant
གཙང་དག་ཏུ་wholly
གཙང་པོ་river
གཙང་བཙོག་cleanliness and dirt
གཙང་བའི་ཟས་clean and pure food
གཙང་བར་གནས་ascetic
གཙང་བར་གནས་པ་sage
གཙང་མཐོ་ཐོག་pure summit
གཙང་མའི་ཆོས་flawless message
གཙང་འཁྲུས་purification
གཙང་སྦྲ་ཅན་smart
གཙང་སྨྲེ་purity and impurity
གཙིགས་སུ་ཆེ་very important
གཙུག་ཏོར་crown protrusion
གཙུག་ཐོར་turban
གཙུག་ན་ནོར་བུ་a mythological king
གཙུག་ན་མེ་འབར་a yaksha
གཙུག་ཕུད་འཛིན་peacock
གཙུག་ཕུད་ལྔ་པ་lion
གཙུག་འཁྱིལ་whorl
གཙུག་ལྡན་peacock
གཙུབ་པ་rub
གཙུབས་པ་churn
གཙེར་སྒྲ་ཅན་creaky
གཙོ་གཉེར་chief guest
གཙོ་ཆེ་main
གཙོ་བོའི་འབངས་chief servant
གཙོ་མོ་མཛད་པ་be mistress
གཙོ་སེམས་main mind
གཞག་ས་ནོར་བ་misplace
གཞང་anus
གཞང་ཁང་བདག་པོ་pimp
གཞན་another
གཞན་ཀུན་all others
གཞན་ཁ་ཤས་a few others
གཞན་གྱི་ཕྱིར་because of others
གཞན་གྱིས་བྱས་done by others
གཞན་གྲགས་other approved
གཞན་དང་མཉམ་པ་abreast
གཞན་དབང་སོང་vassal
གཞན་དུ་otherwise
གཞན་དུ་ན་otherwise
གཞན་དུ་བརྫངས་sent elsewhere
གཞན་དུ་ཚོལ་བ་to seek elsewhere
གཞན་དུ་འཛིན་fasten to another
གཞན་དུ་སྤགས་remove elsewhere
གཞན་དུ་སྤོ་བ་go elsewhere
གཞན་དོན་བྱེད་helping others
གཞན་ནས་བཙལ་བ་to seek outside
གཞན་པས་than the others
གཞན་པས་ལྷག་པར་more than the other
གཞན་ཕན་philanthropy
གཞན་ཕན་པ་philanthropist
གཞན་ཕྱོགས་other quarters
གཞན་བྱ་བ་other activity
གཞན་མི་the other men
གཞན་ཞིག་ཏུ་elsewhere
གཞན་ཞེ་འདོད་another aim
གཞན་ཡུལ་གྱི་alien
གཞན་རྗེས་འཛིན་accepting others
གཞན་རྟེན་ཅན་having another basis
གཞན་རྟེན་འབུ་parasite
གཞན་ལ་རག་ལ་dependent
གཞན་ལ་སྟོན་པ་teaching others
གཞན་ཤས་a few others
གཞན་སེམས་ཀྱི་humanitarian
གཞན་སྡུག་evil to others
གཞའ་མ་kind of helmet
གཞའ་ཚོན་rainbow
གཞར་བ་scrape
གཞར་ཡང་མི་never
གཞལ་གཞི་a number
གཞལ་ཐག་a number
གཞལ་ཐིམ་a number
གཞལ་ནས་through logic
གཞལ་ཕུལ་a number
གཞལ་བར་བྱ་must be examined
གཞལ་བར་ལང་བ་repay
གཞལ་བྱ་རྟོག་པ་projection
གཞལ་ཚད་ཞིག་litre
གཞལ་འཁོར་a number
གཞལ་འཕྱོས་a number
གཞལ་ཡལ་a number
གཞལ་ལད་a number
གཞལ་ལུགས་existential mode
གཞལ་སངས་a number
གཞས་ཁྲབ་པ་dance
གཞས་ཁྲབ་མཁན་dancer
གཞས་གཏོང་བ་sing
གཞས་བཏང་ཟིན་པ་sung
གཞས་མ་singer
གཞི་ཀ་རྩེ་town in gtsang
གཞི་གཅིག་one common base
གཞི་གཉེར་estate manager
གཞི་གདན་foundation
གཞི་གཞག་basic condition
གཞི་གོང་folio
གཞི་གྲོལ་natural freedom
གཞི་ཆེས་very important
གཞི་ཆོས་ཉིད་fundamental noumenon
གཞི་དག་པ་pure basis
གཞི་དངོས་པོ་being in itself
གཞི་དེབ་principal register
གཞི་བ་dweller
གཞི་བཅའ་lay the basis
གཞི་བོ་basis
གཞི་བྱེད་possessed of capital
གཞི་མ་གྲུ་བཞི་square floor
གཞི་མཆོག་supreme basis
གཞི་མཐུན་common locus
གཞི་མཐུན་པ་common locus
གཞི་འཇམ་gentle
གཞི་འདུན་པ་motivation
གཞི་འཛིན་ས་basis
གཞི་རང་དབང་fundamental mastery
གཞི་རྩ་ཆོད་པ་absolute conviction
གཞི་རྩའི་radical
གཞི་སེམས་ཉིད་cause
གཞིག་break down
གཞིག་འགྲེལ་investigations
གཞིགས་ནས་according to
གཞིབ་འཐུང་new born child
གཞིའི་མཚན་མ་cause of the basis
གཞིར་on the basis of
གཞིར་གྱུར་པ་is the common basis
གཞིར་བཟུང་ནས་according to
གཞིས་གཉེར་manager of a farm
གཞིས་གྲོང་colony
གཞིས་ཆགས་པ་settle
གཞིས་ཆགས་མཁན་settler
གཞུ་ཅན་bow man
གཞུ་ཐོག་arch of a bridge
གཞུ་དབྱིབས་arch
གཞུ་བཀུག་པ་bent the bow
གཞུ་བཅོས་constructed a bow
གཞུ་བདུངས་bent the bow
གཞུ་མཁན་bow maker
གཞུ་མཆོག་bow end
གཞུ་འགུགས་པ་unbend a bow
གཞུ་འགེང་བ་bend a bow
གཞུ་འཐེན་པ་unbend a bow
གཞུ་རུ་place in tibet
གཞུ་རྒྱུད་bow string
གཞུ་རྡུང་བ་bend the bow
གཞུ་ལྡན་furnished with a bow
གཞུག་མ་tail of a bird
གཞུག་ལ་འགྲོ་བ་follow
གཞུགས་གནས་dwelling place
གཞུགས་སྟངས་manner of sitting
གཞུང་ཁུངས་ཐུབ་reliable source
གཞུང་ཁྲག་healthy blood
གཞུང་ཁྲིད་textual instruction
གཞུང་གསེར་crown gold
གཞུང་ཆ་ཚང་whole text
གཞུང་ཉིད་original texts
གཞུང་དོན་official business
གཞུང་ནས་in a direct way
གཞུང་བཞེས་confiscation
གཞུང་བརྒྱ་ལྡན་a hundred texts
གཞུང་ཚབ་པ་ambassador
གཞུང་ཚིག་textual learning
གཞུང་ཞབས་government official
གཞུང་འབྲུ་government grain
གཞུང་འཛུགས་set up bureaucracy
གཞུང་རྣམས་literature
གཞུང་རྫོགས་པ་the whole tradition
གཞུང་ལ་ངོ་ལོག་treason
གཞུང་ལམ་highway
གཞུངས་པ་heedful
གཞུན་པོ་best of its kind
གཞུན་བསླངས་to promote
གཞུར་འགྲོ་བ་flow
གཞུས་པ་hit
གཞེ་ར་parsley
གཞེབ་མ་wicker chest
གཞེས་ཉིན་three days from now
གཞེས་ནིང་the year before last
གཞེས་ནིང་ལོ་the year before last
གཞོ་present
གཞོགས་གཡས་right side of body
གཞོགས་གཡོན་left side of body
གཞོགས་སུ་sideways
གཞོན་ནུ་young
གཞོན་ནུས་maiden
གཞོན་པ་young
གཞོན་མེ་continuous
གཞོན་ཤ་ཆགས་པ་adult
གཞོན་སྐབས་ཀྱི་juvenile
གཞོམ་destruction
གཞོམ་པ་destruction
གཟད་district in lhokha
གཟན་ཁང་hay storage room
གཟན་ཁྲ་multicolored shawl
གཟན་གོས་upper garment
གཟན་ངར་beasts of prey
གཟན་བརྟག་lottery
གཟན་རྩྭ་hay and straw
གཟབ་གཟབ་ངང་cautiously
གཟབ་གཟབ་མེད་པ་careless
གཟབ་གོས་holiday clothes
གཟབ་འཆོས་པ་to dress
གཟའ་ནད་epilepsy
གཟའ་པ་སངས་friday
གཟའ་ཕོག་epilepsy
གཟའ་ཟིན་eclipse
གཟའ་ཟླ་བ་monday
གཟའ་འཁོར་week
གཟའ་ཡིས་ཟིན་པ་eclipse
གཟའ་ལྔ་five planets
གཟའ་ལྷག་པ་wednesday
གཟའ་ལྷགས་པ་wednesday
གཟའ་སྐར་པ་སངས་venus
གཟའ་སྐར་ལྷག་པ་mercury
གཟར་ཆེན་broad rug
གཟར་བུ་ladle
གཟར་ཟིན་པ་fell
གཟས་grazing
གཟི་བཀྲག་luminosity
གཟི་བྱིད་splendor
གཟི་ལྡན་brilliance
གཟིག་leopard
གཟིག་མཇུག་a sa bdag monster
གཟིག་མོང་porcupine
གཟིགས་དང་look
གཟིགས་པར་ཞུ་please look
གཟིགས་སྐོར་tour
གཟིགས་སྟང་glance
གཟིངས་ལ་ཞོན་rode in a ship
གཟིངས་ཤིག་behold
གཟིམ་to sleep
གཟིམ་ཁེབས་quilt
གཟིམ་ཁོམ་cloak bag
གཟིམ་ཁྲི་bedstead
གཟིམ་གུར་sleeping tent
གཟིམ་གྲོགས་bedfellow
གཟིམ་པ་ལས་from sleep to waken
གཟིམ་བརྡ་summons to bed
གཟིམ་སྒོ་door
གཟིམ་སྡུམ་bed room
གཟིམས་posture
གཟིམས་ཁྲི་bedstead
གཟིམས་བཞུགས་went to bed
གཟིམས་མལ་sleeping place
གཟིམས་ས་sleeping place
གཟིར་བ་to be tormented
གཟུ་གུ་tail
གཟུ་རྔས་prop
གཟུག་གཟེར་headache
གཟུག་མོ་porcupine
གཟུགས་ཀྱི་ལྷ་form deity
གཟུགས་ཁམས་form realm
གཟུགས་ཁྲག་blood of the body
གཟུགས་ཆེན་burly
གཟུགས་དང་བ་clear form
གཟུགས་དྭང་པ་clear form
གཟུགས་དྭང་བ་clear form
གཟུགས་དྭངས་པ་clear form
གཟུགས་པོའི་physical
གཟུགས་ཕུང་aggregate of form
གཟུགས་བརྙན་reflection
གཟུགས་བྱད་figure or face
གཟུགས་མེད་ཁམས་formless realm
གཟུགས་མེད་པ་formless
གཟུགས་མོ་species of antelope
གཟུགས་ཚབ་effigy
གཟུགས་འཛིན་པ་perceiver
གཟུགས་རྣམས་phenomena
གཟུགས་རྩལ་gymnastic
གཟུགས་སྒྲ་sights and sounds
གཟུང་གཟེར་peg on a wall
གཟུང་ཆ་objectifiable part
གཟུང་ནས་having seized
གཟུང་བ་apprehended object
གཟུང་བའི་དོན་apprehended object
གཟུང་བའི་སེམས་capacious mind
གཟུང་བྱ་apprehended object
གཟུང་འབྲེལ་unity
གཟུང་འོས་agreeable
གཟུང་ལ་ཐུག་just about to seize
གཟུང་ལྕག་clip
གཟུང་ལྡན་མ་retentive
གཟུངས་ཕྱི་a number
གཟུངས་བཀོད་embodiment
གཟུངས་མཐོང་བ་sight
གཟུངས་ཡས་another number
གཟུར་གནས་witness
གཟེ་མ་ར་མགོ་thorny plant
གཟེ་རུ་little nail
གཟེག་ཆ་ཆུང་small particle
གཟེག་མོ་བྱི་hedgehog
གཟེབ་རྒྱ་cage
གཟེར་ག་རྒྱག་པ་nail
གཟེར་བཏབ་intensify
གཟེར་བཟོ་པ་goldsmith
གཟེར་བུ་little nail
གཟེར་མིག་bon text
གཟེར་མོ་hedgehog
གཟེར་འདེབས་པ་hammer nails in
གཟེར་རྒྱབ་པ་nail
གཟེར་སྲོང་བ་beat out nails
གཟོག་མ་ནས་from the first
གཟོད་ནས་དག་པ་primordial purity
གཟོད་པ་the beginning
གཟོད་མའི་དུས་earliest time
གཟོབ་གཟབ་པ་very nice
གའི་བྱེ་sands of the ganges
གཡག་yak
གཡག་གི་སྒ་saddle for a yak
གཡག་རྒོད་wild yak
གཡག་རྔ་tail of the yak
གཡག་རྔ་བ་carefully preserve
གཡང་གཟར་ཅན་precipitous
གཡང་གཟར་པོ་precipitous
གཡང་ཏི་jade
གཡང་དཀར་sheep
གཡང་འགུག་gathering of luck
གཡང་ལ་བགྱིལ་fell into the abyss
གཡང་ལྦ་lucky goiter
གཡང་ཤོད་བོང་ར་place in khams
གཡང་ཤོར་prosperity vanishes
གཡང་སྐྱུར་capital punishment
གཡང་སྤྲུའུ་jade
གཡབ་དར་silk fan
གཡམ་པང་slate
གཡའ་དག་པ་pure of dust
གཡའ་པ་rusty
གཡའ་བཟང་place in tibet
གཡའ་ཚན་water from slate
གཡའ་ཤིང་maple
གཡའ་སྒོག་itching in the body
གཡའ་སྨྱུག་lead pencil
གཡར་མོ་ཐང་པ་medicinal flower
གཡར་ཟིན་པ་credit lent
གཡར་ལེན་promise
གཡས་གྲལ་right hand row
གཡས་ངོས་the right side
གཡས་ངོས་སུ་to the right
གཡས་ན་on the right
གཡས་ནས་from the right
གཡས་བསྐུམ་right leg is bent
གཡས་ལོགས་the right side
གཡས་ལྟ་to look right
གཡས་སུ་to the right
གཡས་སྡོད་charioteer
གཡི་lynx
གཡི་སྤྱང་lynx and wolf
གཡིག་བུ་hiccup
གཡུ་ཁ་turquoise color
གཡུ་ཁྲ་spotted turquoise
གཡུ་གོང་turquoise globe
གཡུ་དུག་poison of turquoise
གཡུ་བཅལ་མ་spotted turquoise
གཡུ་བྱིལ་turquoise and coral
གཡུ་མངོན་chang
གཡུ་མདོག་turquoise blue
གཡུ་འབྲུག་thunder
གཡུ་རལ་ལྡན་snow lion
གཡུག་གཏོང་བ་jettison
གཡུག་བཞག་པ་quit
གཡུག་ཟིན་པ་flung
གཡུགས་to throw
གཡུང་དྭགས་domestic animals
གཡུང་དྲུང་ཅན་epithet of vishnu
གཡུང་དྲུང་རི་everlasting mountain
གཡེང་ཆེན་greatly distracted
གཡེང་མེད་nondistraction
གཡེང་སྤྱོན་struck
གཡེངས་བྱེད་pig
གཡེམ་sexual intercourse
གཡེར་མོ་ཐང་place in khams
གཡེར་ཤིང་པ་medicinal plant
གཡོ་ཁྲམ་deceit and cunning
གཡོ་ཐབས་བྲལ་བ་fatal
གཡོ་བ་དང་འགུལ་jerk
གཡོ་བྱུས་trick
གཡོ་མོ་low woman
གཡོ་འགུལ་vibrate
གཡོ་འགུལ་ཅན་rickety
གཡོ་འཕྲུལ་scheme
གཡོག་བཞུན་very active in work
གཡོག་རྒྱུག་པ་serve
གཡོགས་པ་covering
གཡོད་large intestine
གཡོན་left
གཡོན་གྲལ་left hand row
གཡོན་ངོས་the left side
གཡོན་ངོས་སུ་to the left
གཡོན་དུ་towards the left
གཡོན་མགུལ་ན་on the left slope
གཡོན་ལོགས་the left side
གཡོན་ལོགས་ནས་from the left side
གཡོན་ལྟ་to look left
གཡོམ་deception
གཡོར་གྲུ་sailboat
གཡོར་ཡོལ་sail
གཡོལ་ཐབས་loophole
གཡོལ་དཀའ་བ་hard to avoid
གཡོལ་ཕྱིན་པ་deviate
གཡོལ་བྲོས་evasion
གཡོལ་འགྲོ་evasion
གཡོས་ཐབ་hearth
གཡོས་པས་flow
གཡོས་བྱེད་པ་to cook
གཡོས་ས་hearth
གར་གྱིས་བརྒྱན་stage dress
གར་ཆང་strong beer
གར་དབང་majestic
གར་ནག་a medicine
གར་པོ་ཆགས་པ་coagulate
གར་བཞུགས་where he lives
གར་བྱེད་པ་to dance
གར་འཁྲབ་མཁན་actor
གར་འཆམ་ཁྲབ་པ་dance
གར་འདོད་པ་wherever wished
གར་ཡང་anywhere
གར་ཡང་མི་གནས་not abide anywhere
གར་རྒྱབ་encampment
གར་ལ་དགའ་བ་very fond of dancing
གར་ལ་བླattending a dance
གར་ལོག་mountain tribes
གར་ཤ་muscles of the thumb
གར་སོང་where she had gone
གལ་ཆེན་importance
གལ་བར་བྱེད་པ་be assiduous
གལ་ཞི་if
གལ་འགག་ཆེ་བ་very important
གལ་འཛུག་པ་set a snare
གཤག་གཅོད་incision
གཤག་གཏུབ་scission
གཤག་བཅོས་ཀྱི་surgical
གཤགས་རྒྱལ་བ་win in discussion
གཤད་expound
གཤམ་ནས་what followed
གཤམ་བུ་followed by
གཤའ་དཀར་tin
གཤལ་pavement
གཤལ་ནད་diarrhoea
གཤིག་པ་demolish
གཤིད་གཤིད་མ་funeral repast
གཤིད་ཟན་funeral repast
གཤིད་སྟོན་funeral repast
གཤིན་པར་རྨོ་བ་plough well
གཤིན་མོ་dead woman
གཤིན་རྩིས་astrology of death
གཤིབ་align
གཤིབས་align
གཤིས་basic disposition
གཤིས་རྩུབ་acrimony
གཤིས་ལ་མེད་པ་not exist at all
གཤེ་གཤེ་scolding
གཤེགས་གཏོར་offering of cakes
གཤེགས་བསྐྱེས་parting present
གཤེགས་མགྲོན་parting feast
གཤེགས་རྫོགས་farewell ceremony
གཤེགས་སུ་གསོལ་please approach
གཤེགས་སྐྱེམས་departing beverage
གཤེད་གཞུ་bow of gshed
གཤེད་གྲི་knife of gshed
གཤེད་བྲིང་thong of gshed
གཤེད་མདའ་sickle of gshed
གཤེད་ལྡན་vile one
གཤེད་སྒྲོ་sack of gshed
གཤེད་སྟ་axe of gshed
གཤེན་སྲས་bon word for arhant
གཤེར་moisture
གཤེར་དཔང་judge
གཤེར་བ་moistening
གཤེར་བཅས་cloud
གཤེར་བྱེད་maintain wetness
གཤོ་མོ་lever
གཤོག་གླིང་separate plates
གཤོག་ཆགས་winged animal
གཤོག་ཐོགས་place in tibet
གཤོག་པ་གཡོབ་པ་flutter the wings
གཤོག་སྒྲོ་wings
གཤོང་བུ་vessel for water
གཤོར་rough
གཤོར་བྲེ་measuring vessel
གཤོལ་པོ་poplar tree
གཤོལ་འཛིན་evil spirit
གཤོས་བུ་sacrificial cakes
གས་གཤོངས་chasm
གསག་ལ་traverse
གསག་སློག་ནས་transverse
གསགས་accumulate
གསང་secret
གསང་ཁང་secret room
གསང་གཏམ་secret conversation
གསང་གསུམ་three secrets
གསང་གྲོགས་consort
གསང་དབང་secret empowerment
གསང་དབྱིངས་secret expanse
གསང་དུ་recently
གསང་དོན་secret
གསང་བ་secret
གསང་བ་གྲུབ་པ་type of lha
གསང་བ་དམ་པ་མ་a yaksini princess
གསང་བ་སྨྲ་charm
གསང་བའི་private
གསང་བའི་གཏམ་secret conversation
གསང་བའི་ཐོག་secretly
གསང་བའི་འདྲེས་secret union
གསང་བརྡ་tip
གསང་བསྔགས་ཀྱི་esoteric
གསང་མདོར་at the secret place
གསང་ཡིག་code
གསང་རྒྱ་secrecy
གསང་རླིག་testicles
གསང་ཤོར་secret revealed
གསང་སྐད་slang
གསང་སྒོ་private door
གསང་སྒྲོགས་mystic association
གསང་སྔགས་secret mantra
གསང་སྔགས་ཀྱི་occult
གསང་སྟབས་ཀྱིས་secretly
གསང་སྟོན་secret preceptor
གསངས་cleanse
གསད་killing
གསད་བྱ་person killed
གསའ་snow leopard
གསའ་ཡས་a number
གསར་new
གསར་གྲོགས་new friend
གསར་དུ་བཞད་refresh
གསར་ནས་fresh or new barley
གསར་པ་new
གསར་པ་བཟོ་བ་contrive
གསར་པ་མ་ཡིན་པ་conventional
གསར་བ་རྙེད་པ་discover
གསར་བཟོ་མཁས་པ་creative
གསར་འཁྲུངས་newly born
གསར་འགྱུར་ཁང་news agency
གསར་འཛུགས་newly established
གསར་འོངས་fresh arrival
གསར་རྙེད་discovery
གསར་ཤོག་newspaper
གསར་ཤོག་ཁང་press
གསར་སྟོད་new
གསལ་གདངས་cognizant expression
གསལ་གྱུར་བ་witness
གསལ་ཆ་factor of clarity
གསལ་ཉམས་clarity experience
གསལ་ཐག་ཆོད་evident
གསལ་ནས་having clarified
གསལ་པོ་མེད་པ་dubious vague
གསལ་པོར་ཤེས་པ་understand
གསལ་པོར་སྣང་clearly visible
གསལ་བཏབ་visualize
གསལ་བའི་ཐབས་method of clarity
གསལ་བའི་མཆོག་supreme clarity
གསལ་བར་དྲན་to remember clearly
གསལ་བར་དྲན་པ་clearly remembered
གསལ་བར་བྱེད་makes clear
གསལ་བར་ཤེས་པ་to identify clearly
གསལ་བར་སྣང་to shed light
གསལ་བཤད་explanation
གསལ་བཤད་ཀྱི་explanatory
གསལ་བྱེད་consonant
གསལ་མདངས་luminous radiance
གསལ་ཙམ་pure clarity
གསལ་ཞིང་རགས་པ་clear and coarse
གསལ་ཞིང་རིག་པ་clear and knowing
གསལ་འདེབས་visualize
གསལ་འདེབས་པ་to visualize
གསལ་འདེབས་བྱས་to remind oneself
གསལ་འཚེར་brilliant
གསལ་འཛིན་a place
གསལ་ལ་དྭངས་པ་clear and bright
གསལ་ལ་མི་གསལ་unclear
གསལ་ལམ་གྱིས་vividly
གསལ་ལམ་མེར་with vivid clarity
གསལ་ལེ་clear
གསལ་ལྷམ་མེར་vividly clear
གསལ་སང་ངེ་བ་lucidly clear
གསལ་སྣང་clear appearance
གསིལ་ཟེར་ཅན་moon
གསུང་ཀློག་པ་read the sayings
གསུང་གསལ་བ་lucid expression
གསུང་གླེང་discussion
གསུང་དྲུང་continuous
གསུང་བསྙེན་service and worship
གསུང་བྱེད་mouth
གསུང་འཚལ་i beg you to speak
གསུང་རྒྱུད་oral lineage
གསུང་རྣམས་teachings
གསུང་སྒྲོག་recitation
གསུང་སྒྲོས་sayings
གསུང་སྡོད་fulfil requests
གསུང་སྩལ་བ་speech made
གསུངས་གྱིན་teaching
གསུངས་པ་བཞིན་as is taught
གསུངས་ཚུལ་manner of speaking
གསུམ་three
གསུམ་གཉིས་two thirds
གསུམ་ཆ་གཅིག་one third
གསུམ་ཆ་གཉིས་two thirds
གསུམ་ཆར་third part
གསུམ་དུ་སྣང་བ་to appear threefold
གསུམ་པ་the third
གསུམ་པར་thirdly
གསུམ་པོ་the three
གསུམ་བསྡེབས་trio
གསུམ་ཙམ་about three
གསུམ་སྔགས་vedic meter
གསུས་ནད་dropsy of the belly
གསུས་འཕྱང་པོ་a deity
གསེག་བདར་file
གསེག་རྡར་file
གསེག་སེབ་ཅན་full of stones
གསེང་ཡབ་balcony
གསེབ་གཏོང་བ་breeding
གསེབ་ནས་from between
གསེར་ཁབ་golden needle
གསེར་གདུབ་golden bangle
གསེར་གཞུན་པོ་purest gold
གསེར་གྱི་golden
གསེར་གྱི་ཏེལ་golden cautery
གསེར་གྱི་བ་གམ་golden dome
གསེར་གྱི་མཆོག་finest gold
གསེར་གྱི་རི་mount sumeru
གསེར་གྱི་ལག་shrub
གསེར་གླིང་པ་dharmakirti
གསེར་ཆུ་གཏང་བ་gild with gold
གསེར་ཐིག་པོ་drop of gold
གསེར་དུག་poison of gold
གསེར་ཕོར་golden cup
གསེར་ཕྱེ་gold dust
གསེར་བཟོ་བ་goldsmith
གསེར་བུ་bird of golden color
གསེར་བུམ་golden pot
གསེར་བྲིས་written in gold
གསེར་མཁན་goldsmith
གསེར་མཁར་royal castle
གསེར་མགར་goldsmith
གསེར་མགོ་golden flower
གསེར་མངལ་ཅན་epithet of brahma
གསེར་མཛོད་gold treasury
གསེར་མེ་gold flower
གསེར་ཞུན་མ་melted gold
གསེར་འཕྲེང་gold chain
གསེར་འོ་མ་glomerous fig tree
གསེར་འོད་golden luster
གསེར་འོད་ཅན་lightning
གསེར་འོད་འཚེར་glittering in gold
གསེར་ཡིག་ཅན་golden letters
གསེར་ཡིག་པ་envoy
གསེར་རྡེ་ཉི་མ་white mustard
གསེར་ལྟ་བུ་like gold
གསེར་ལྷད་ཅན་alloyed gold
གསེར་ས་gold ore
གསེར་སྐུ་golden image
གསོ་ཐག་hempen cord
གསོ་དཔྱད་པ་physician
གསོ་བ་རིག་པ་science of medicine
གསོ་བར་བྱེད་པ་revitalize
གསོ་མ་hemp
གསོ་ཚུལ་method of healing
གསོ་སྐྱོང་nurture
གསོ་སྐྱོང་བ་foster
གསོ་སྐྱོད་nursing
གསོག་གསོབ་empty
གསོག་བཅོལ་deposit
གསོག་སྒྲུབ་earnings
གསོངས་ཤིག་keep it confidential
གསོད་པར་ཆས་they started killing
གསོད་པོར་sincerely
གསོད་བྱེད་པ་killer
གསོད་མཁན་killer
གསོད་ལུགས་manner of killing
གསོད་ས་place of execution
གསོན་གཤིན་living and the dead
གསོན་ནོ་he is alive
གསོན་པའི་ཚེ་ན་during life
གསོན་བ་live
གསོན་བདུད་living demons
གསོན་བསྲེག་creature burnt alive
གསོམ་pine tree
གསོར་འབིགས་པ་chisel
གསོར་སི་ལི་ལི་brandishes
གསོལ་ཁང་kitchen
གསོལ་ངན་poisoned food
གསོལ་ཇ་tea
གསོལ་ཇ་ཁྱོག་bring in the tea
གསོལ་ཏིབ་teapot
གསོལ་པ་said
གསོལ་བཏབ་invoke
གསོལ་མར་butter
གསོལ་ཚིགས་dinner
གསོལ་སྟེགས་dining table
གསོས་བུ་foster son
གསོས་བྱེད་པ་cure
གསོས་ཟིན་པ་bred
གསོས་འདེབས་nourish
གི་ལིན་fabulous animal
གི་ཤང་རྒྱ་a tibetan tribe
གིམ་soft musical tone
གིའུ་clyster pipe
གིར་མོ་indian rupee
གུ་གུལ་དཀར་པོ་frankincense
གུ་ཏི་deaf
གུ་ཐུང་pants
གུ་ཡ་ring
གུག་crook
གུག་གུ་བཤན་oblation cup
གུག་པོ་bent
གུག་སྲང་weight of gold
གུང་ཁྲན་ཏང་communist party
གུང་ང་ལ་ཕུག་carrot
གུང་དམར་ལ་ཕུག་carrot
གུང་བྲན་communist
གུང་བྲན་ཏང་the communist party
གུང་མོ་middle finger
གུང་ཟས་lunch
གུང་འཛུག་middle finger
གུང་ལ་in the middle
གུང་ལོན་take a walk at noon
གུད་ནག་quite deaf
གུམ་པར་deadly
གུར་ཀུམ་saffron crocus
གུར་གཞོལ་walls of a tent
གུར་གུམ་saffron
གུར་ཐག་tent robes
གུར་ནག་black tent mongols
གུར་བེར་tent poles
གུར་མཁན་tent maker
གུར་མཆོག་magnificent tent
གུར་འདེབས་པ་pitch a tent
གུར་འཕུབ་པ་pitch a tent
གུར་འབིབ་པ་tent
གུར་འབུབས་པ་pitch a tent
གུར་ཡོལ་ceiling of tent
གུར་ཤིང་tent poles
གུས་ཉིན་three days ago
གུས་པའི་ལུས་respectful person
གུས་པར་བྱེད་faith
གུས་པས་ཞུ་བ་solicit
གུས་བཀུར་ཅན་humility
གུས་བརྩེ་respect and love
གུས་བྱས་having respected
གུས་ཞབས་མེད་པ་impolite
གུས་ལྡན་faith
གེ་ར་a country
གེ་སར་དམར་པོ་tree
གེགས་ཆེ་བ་strong obstacle
གེགས་རྣམས་ཀུན་all obstacles
གེན་དར་པ་king of birds
གོ་ཁང་arsenal
གོ་གཅིག་same place
གོ་གནས་གཅིག་པ་coordinate
གོ་གནས་འབུད་པ་depose
གོ་གནས་སྤང་བ་abdicate
གོ་གནས་སྤར་བ་promote
གོ་ཅན་intelligent
གོ་ཆ་armor
གོ་ཆ་གྲོལ་blossoming
གོ་ཆ་དང་བཅས་with a ball
གོ་ཆ་བགོས་ཤིང་put on armor
གོ་ཆ་འཐུག་པ་thick armor
གོ་ཆའི་ཁང་པ་arsenal
གོ་ཐོས་བྱུང་བ་heard
གོ་དམ་བ་a drug
གོ་དུབ་བ་a medicine
གོ་དུམ་པ་a medicine
གོ་དོན་གསལ་བ་define
གོ་དོན་ཡོད་པ་sensible
གོ་ནོར་ཐེབས་པ་misunderstand
གོ་པོ་a kind of vulture
གོ་བ་understanding
གོ་བ་བརྟན་པོ་stable understanding
གོ་བ་ལེན་པ་comprehend
གོ་བ་སྟོན་པ་decode
གོ་བགོས་པ་put on armor
གོ་བདེ་པོ་lucid
གོ་བར་སླ་easy to understand
གོ་མ་འགག་པ་unconfined
གོ་མཚམས་མེད་པ་continuous
གོ་ཟུ་black silk dress
གོ་འདུག་business
གོ་ཡུ་areca nut
གོ་ར་ལ་ཆུད་པ་caught in a trap
གོ་རིམ་ལྟར་orderly
གོ་རྒྱུ་མེད་པ་inaudible
གོ་རྒྱུ་ཡོད་པ་audible
གོ་ལུགས་comprehension
གོ་ལེ་slowly
གོ་ལྡོག་ཏུ་in reverse order
གོ་ས་དམའ་བ་subordinate
གོ་ས་མཐོ་བ་superior
གོ་སྒྲུབ་achieving armor
གོ་སྙོད་ཕྱེ་མ་anise seed powder
གོ་སླ་easy to understand
གོ་སླ་པོ་བཟོ་simplify
གོང་ཆུང་ཆུང་valueless
གོང་ཆེན་greatly high
གོང་ཆེན་པོ་expensive
གོང་དང་མཐུན་similar to the above
གོང་དུ་བཤད་པ་explained above
གོང་དུ་བསྟན་པ་explained above
གོང་དུ་མོས་པ་the above mentioned
གོང་དུ་འཁྱུད་to firmly encircle
གོང་དུ་ཡོད་པ་existing above
གོང་ནས་from above
གོང་བཞིན་བྱ་continue as before
གོང་བརྒྱབ་པ་fix a price
གོང་བུ་བསྒངས་made a ball of
གོང་བུ་སོ་སོ་catarrh or cold
གོང་མ་ཆེ་the most high
གོང་མ་ཆེན་པོ་the most high
གོང་མ་ས་high ground
གོང་མཚུངས་similar to the above
གོང་མའི་supreme
གོང་མོ་grouse
གོང་འཁོད་stated above
གོང་འཕར་increase the price
གོང་སྒྲིག་པ་fix a price bargain
གོད་ཁའི་ངོ་losses
གོད་བཀྲོལ་parole
གོད་འགྱུར་བ་suffer loss
གོན་ནས་གནོན་lording over
གོན་ལྷམ་shoes to put on
གོམ་step
གོམ་གསུམ་པ་one with three steps
གོམ་པ་བྱེད་to walk
གོམ་པ་རྒྱག་to walk
གོམ་ཚད་pace
གོམ་སྤོས་walking
གོམ་སྤོས་བཞིན་astride
གོམས་ཆེན་yogins
གོམས་འདྲིས་accustomed
གོམས་རྟགས་signs of familiarity
གོམས་སྟོབས་capacity
གོམས་སྲོལ་གྱི་traditional
གོར་གོར་circle
གོར་མ་ཆག་པར་without a doubt
གོར་ཤི་ཤ་kind of sandal wood
གོལ་བར་གྱུར་པ་to move away from
གོལ་ཤོར་errors
གོས་ཀྱི་རླུབས་pocket in a robe
གོས་ཀྱི་ཧྭ་collar of a coat
གོས་གསར་new clothes
གོས་ཆེན་གྱི་silken
གོས་དཀའ་difficult to cure
གོས་དཀར་white dress
གོས་དང་བཅས་སུ་having clothes on
གོས་དྲི་མ་ཅན་dirty clothes
གོས་དྲི་མེད་clean cloth
གོས་བཏེག་པ་tuck up
གོས་བཙེམས་sewed the clothes
གོས་བཟོ་trade of a tailor
གོས་བརྙིངས་worn clothes
གོས་བསྐོན་ཏོ་be dressed
གོས་བུབས་cotton cloth
གོས་བེམ་པོ་old coat or dress
གོས་མུག་clothes moth
གོས་ཙམ་satin
གོས་ཚགས་coat and cap
གོས་འཁྲུ་མཁན་washer man
གོས་འཐེབ་supernumerary dress
གོས་འདུག་bathing cloth
གོས་འབུད་པ་take off dress
གོས་འཚེམ་པ་sew or make a robe
གོས་རིང་long dress
གོས་རྙིང་old coat or dress
གོས་ལྗང་ཁུ་dressed in green
གོས་སོ་མོ་new or fresh cloth
གོས་སྐྱིན་loan of clothes
གོས་སྣམ་english broadcloth
གོས་སྲབ་light clothes
གོས་ཧུལ་tatter
གོས་ཧྲུལ་rag
གྱ་གྱུར་flickering vision
གྱ་དོ་breast plate
གྱ་ནོམ་sublime
གྱ་ནོམ་སྣང་བ་excellent appearance
གྱ་ནོམས་པ་auspiciousness
གྱ་མོ་brick
གྱ་སྐད་chuck
གྱང་འཁུར་བ་be reduced to want
གྱང་སྒྲོམ་pise mould
གྱི་བསྡུས་ཚིག་shall not
གྱི་འཕྱོ་large number
གྱི་ལིང་ཆུ་རྟ་probably mercury
གྱི་ལྗང་a place in tibet
གྱིག་ཤིང་caoutchouc tree
གྱིག་སྡོང་caoutchouc tree
གྱིན་འདའ་natural
གྱིམ་བག་amalgam
གྱུབ་གསེར་golden paint
གྱུར་སོང་began to
གྱེ་གོར་bon po deity
གྱེ་མགོ་clay vessel
གྱེན་upward
གྱེན་གཟར་པོ་steep ascent
གྱེན་དུ་upwards
གྱེན་དུ་གཟེང་remain uplifted
གྱེན་དུ་དགྱེད་bend upwards
གྱེན་དུ་བསྟན་facing upwards
གྱེན་དུ་བསླངས་lifted up
གྱེན་དུ་བླ་བ་look upwards
གྱེན་དུ་འཕུལ་to be pushed upwards
གྱེན་དུ་འཛེགསclimb up
གྱེན་དུ་ལངས་stood up
གྱེན་དུ་ལངས་པ་to stand up
གྱེན་དུ་ལུས་པ་keep above water
གྱེན་ཕྱོགས་སུ་upward
གྱེན་བཟློག་པ་vomit
གྱེན་འཛེགས་to climb up
གྱེན་ལ་བླས་བ་be uplifted
གྱེར་བ་strayed
གྱེར་བསྒོམ་bonpo meditation
གྱེས་spread out
གྱེས་སོ་juncture
གྱོ་dissimulation
གྱོ་མོ་འཇམ་པོ་smooth brick
གྱོང་གུན་loss
གྱོང་འཁེལ་བ་suffer losses
གྱོང་རུ་བ་rough
གྱོད་ཤོད་པ་pretend
གྱོན་ལྷམ་shoes to put on
གྲ་གསར་novice
གྲ་མ་ཆེ་king of ancient time
གྲ་མ་ཉམས་unchanging
གྲ་རྒྱས་པོ་sumptuous
གྲ་སྒྲིག་ཏུ་readily
གྲག་hearing
གྲག་སྟོང་echo
གྲགས་ཆེ་བ་very famous
གྲགས་པ་ཆེ་བ་reputation
གྲགས་པ་ཙམ་merely renowned
གྲགས་པ་འདྲ་sound like
གྲགས་སྦྱིན་a sugata
གྲང་གི་འདུག་he feels cold
གྲང་ངར་cold
གྲང་ངོ་it is cold
གྲང་བའི་གནས་cool place
གྲང་བའི་དུས་cold season
གྲང་མོ་བཟོས་པ་chilled
གྲང་ཚལ་salad
གྲངས་ཀ་billion number
གྲངས་ཀ་རྒྱབ་པ་count
གྲངས་ཉུང་minority
གྲངས་ནི་regarding quantity
གྲངས་པ་counting
གྲངས་བརྡ་symbolical numbers
གྲངས་བས་འདར་བ་shiver with cold
གྲངས་བོན་bon calculators
གྲངས་མང་ཆ་repeated four times
གྲངས་མང་དུ་བྱ་repeat many times
གྲངས་མཉམ་པ་equal number
གྲངས་མེད་གཅིག་the numberless one
གྲངས་མེད་ཅན་supreme
གྲངས་སུ་ཡང་even in number
གྲབས་བྱས་to make preparations
གྲབས་མཐུན་be in harmony with
གྲབས་སུ་ཚུད་prepared
གྲམ་གཅལ་sit
གྲལ་གཞུག་end of a row
གྲལ་གྱི་ཐོག་མ་upper end of a row
གྲལ་དུ་བཅུག་པ་admit
གྲལ་དུ་འཁོད་པ་seated in order
གྲལ་བསྒྲིབས་past of gral sgrig
གྲལ་ཡན་untilled fields
གྲལ་སྐྱོང་བ་shadow
གྲས་རྣམས་group
གྲི་ཁ་edge of a knife
གྲི་གི་ཆུང་small knife
གྲི་གུ་ཆུང་small knife
གྲི་ཆུང་small knife
གྲི་ཆེན་dagger
གྲི་དཔའ་གཏམ་dagger
གྲི་ནོན་a disease
གྲི་བོ་murderers
གྲི་ཡ་handle of a knife
གྲི་ཡི་སོ་edge of a knife
གྲི་ཡུ་haft of a knife
གྲི་རིང་པོ་sword
གྲི་རྡར་བ་sharpen a knife
གྲི་རྩེ་point of a knife
གྲི་རྩེད་fencing
གྲི་ལྟག་པ་back of a knife
གྲི་ཤུབས་knife sheath
གྲིབ་གཟུགས་shadow
གྲིབ་ནད་epileptic fits
གྲིབ་པ་shade
གྲིབ་བསིལ་དུ་in the cool shade
གྲིབ་མ་shadow
གྲིབ་ལྷགས་cool shade
གྲིམ་གྱིས་scrupulously
གྲིམ་རྩེ་pair of scissors
གྲིའི་ཁ་blade of a knife
གྲིའུ་small knife
གྲིར་བསོད་པ་kill with a knife
གྲིར་འགུམ་པ་kill with a knife
གྲིར་རྔམ་པ་kill with a knife
གྲིལ་ཁ་བྱེད་པ་make up a parcel
གྲུ་ཁྱེམ་oar
གྲུ་གཏོང་བ་row
གྲུ་གཟིངས་helm of ship
གྲུ་གཟིངས་ཀྱི་shipping
གྲུ་གཡས་right elbow
གྲུ་གཡེལ་oblique angle
གྲུ་དཀར་kind of turquoise
གྲུ་དྲང་right angle
གྲུ་ནང་ཕྱིན་པ་sail
གྲུ་པ་ferryman
གྲུ་བཞི་ནར་ནར་rectangular
གྲུ་བོ་ship
གྲུ་མོ་elbow
གྲུ་ཟུར་corners
གྲུ་ཟོག་shipment
གྲུ་འདྲེན་boat passenger
གྲུ་ཡི་རབ་ship
གྲུ་ཡིས་སྒྲོལ་navigator
གྲུ་ཡོན་oblique angle
གྲུ་རྫིངས་ship
གྲུ་ལ་ཞོན་boat passenger
གྲུ་ལ་ཞོན་པ་to go on a boat
གྲུ་སྐྱ་oar
གྲུག་པའི་འབྲས་bruised rice
གྲུགས་བུ་something broken
གྲུབ་ཆུ་miraculous water
གྲུབ་ཐབས་means of achievement
གྲུབ་ཐོབ་ཆེན་mahasiddhas
གྲུབ་དབང་lord of siddhas
གྲུབ་པ་ཐོབ་པ་mahasiddha
གྲུབ་པར་བྱས་པ་give rise to
གྲུབ་བསལ་confirmed or refuted
གྲུབ་མ་ཐག་just after
གྲུབ་མཆོག་great saint
གྲུབ་མཆོག་མ་female saint
གྲུབ་རྗེ་mahasiddha
གྲུབ་རྗེས་after finished
གྲུབ་རྗེས་སུ་when finished
གྲུབ་ཤི་སོང་all are dead
གྲུམ་དཀར་variety of smallpox
གྲུམ་ནག་variety of smallpox
གྲུམ་པ་badger
གྲུའི་སྐྱ་བ་paddle
གྲུས་མ་female yak
གྲེ་ག་sheet of paper
གྲེ་ཆམ་bronchial catarrh
གྲེ་བ་ངར་བ་hoarse throat
གྲེ་བ་དར་བ་stertorous voice
གྲེ་བ་བདེ་མོ་good voice
གྲེ་བོ་species of demons
གྲེ་མོ་ghost spirit
གྲོ་ག་birch
གྲོ་ཕྱེ་flour
གྲོ་བ་reddish grey
གྲོ་མོ་reddish grey
གྲོ་ལུང་village in lho kha
གྲོ་སྐམ་dry wheat
གྲོག་མ་དཀར་པོ་termite
གྲོག་རོག་ravine
གྲོག་ལྡན་the side of a ravine
གྲོག་སྦུ་ant
གྲོགས་ངན་bad friend
གྲོགས་དང་བཅས་together with
གྲོགས་མཆེད་clerical brothers
གྲོགས་འདྲིས་mutual friendship
གྲོགས་ལྷ་deities of gain
གྲོགས་སུ་འཆར་appear as friends
གྲོང་ཁྱེར་གྱི་urban
གྲོང་གསེབ་ཀྱི་rural
གྲོང་གསེབ་ཁུལ་countryside
གྲོང་གསེབ་པ་villager
གྲོང་གི་བདག་headman of a village
གྲོང་དཔོན་chief of a town
གྲོང་དུ་འདྲེན་donkey
གྲོང་པའི་ཆོས་sexual union
གྲོང་བ་cold
གྲོང་མི་ཚོ་townsmen
གྲོང་ཚིག་provincialism
གྲོང་སྡེ་colony town
གྲོང་སྡེའི་municipal
གྲོད་ཁོག་གི་abdominal
གྲོད་པ་འགེངས་bellyful
གྲོད་ཚིལ་lard
གྲོད་ལུགས་paunch
གྲོན་ཆེ་very noxious
གྲོལ་ཕུག་myth
གྲོལ་བ་དྲུག་six liberations
གྲོལ་བར་བྱ་must be overcome
གྲོལ་བྱེད་liberating
གྲོལ་ཚད་liberation
གྲོལ་འགྱུར་liberation occurs
གྲོལ་ལུགས་modes of liberation
གྲོས་གཞི་agenda
གྲོས་ངན་conspiracy
གྲོས་མཐུན་agreement
གྲོས་འདེབས་པ་give advice
གྲོས་རྩོད་debate
གྲོས་སྡུར་discussion
གྲྭ་པ་monk
གྲྭ་པའི་monastic
གྲྭ་ཕྲུག་little boy who reads
གྲྭ་ལོག་apostate monk
གྲྭ་ས་monastery
གྲྭ་སྐོར་academic tour
གྲྭུ་ཟུར་corners
གླ་གནས་principal place
གླ་གཡུ་forehead turquoise
གླ་གོར་ཞོ་ཤ་a fruit
གླ་ཆ་སྤྲོད་པ་remunerate
གླ་བ་musk deer
གླ་རྩི་ཅན་musk deer
གླ་ལྟོ་food and wages
གླ་ཤ་beef
གླག་པ་ལམ་place in tibet
གླག་མ་འཁེལ་བ་impregnable
གླགས་འཚོལ་བ་seek an opportunity
གླང་bull
གླང་ཆེན་elephant
གླང་ཆེན་ཁ་འབབ་ganges river
གླང་ཏོ་indian bull
གླང་ཐུག་bull
གླང་དམར་stallion ox
གླང་དོར་a yoke of oxen
གླང་པོ་elephant
གླང་པོ་ཆེ་elephant
གླང་པོའི་རྣ་བ་castor oil plant
གླང་ཕྲན་young elephant
གླང་མདུན་proper name
གླང་འཁོར་bullock
གླང་འོག་ཅན་bull
གླང་རིགས་ཤིག་bison
གླང་རྒྱབ་ནང་interior
གླང་རྩེད་bullfight
གླང་ལྕག་ox whip
གླད་རྒྱ་veins of the brain
གླན་བརྒྱབ་པ་sew on a patch
གླལ་བ་yawn
གླས་past of gla
གླིང་ཁ་park
གླིང་ཆེན་spacious continent
གླིང་དར་kind of cloud
གླིང་ཕྲན་island continent
གླིང་བུ་བ་trombone blower
གླིང་བུ་མཁན་flute player
གླིང་ལག་tongue of land
གླིང་ལྡན་མ་lake with islands
གླུ་song
གླུ་གར་song and dance
གླུ་གར་མཁས་པ་artiste
གླུ་དབྱངས་song
གླུ་མཁན་མ་songstress
གླུ་ཝ་singer
གླུ་རེས་alternate songs
གླུ་ལེན་མ་songstress
གླུ་ཤིང་naga brksa
གླུ་སྒྲ་time in singing
གླུ་སྙན་ལེན་པ་sing a sweet song
གླུད་གཟུགས་substitute effigy
གླུད་གོས་ransom attire
གླུད་པ་release
གླུད་རྫས་ransom objects
གླེགས་book
གླེགས་ཐག་thong
གླེང་གཞི་introduction
གླེང་ཕྱོགས་public opinion
གླེང་བ་པོ་story teller
གླེང་བྲལ་ineffable
གླེང་མོད་considered to be
གླེན་dunce
གླེན་པ་stupid
གློ་ཆམ་catarrh in the lungs
གློ་དོང་wind pipe
གློ་ནད་tuberculosis
གློ་བཀྲ་country in tibet
གློ་བུར་དུ་དར་burst out
གློ་འགོག་པ་cough
གློ་འགྲམས་a disease
གློ་རྒྱབ་པ་cough
གློ་རྡོག་sudden
གློ་སྐར་small door or window
གློ་སྤིར་kind of shield
གློ་སྦུབ་wind pipe
གློག་lightning
གློག་གཏོང་བ་electrify
གློག་གི་electric
གློག་གི་མེ་battery
གློག་འཁོར་tram car
གློག་འཁྱུགས་lightning
གློག་འཁྱུགས་པ་lightning
གློག་འཁྱུད་པ་electrocution
གློག་འཕྲིན་ཁང་radio station
གློག་ཤུགས་voltage
གློག་ཤུགས་ཚད་volt
གློག་སྤར་ས་switch
གློག་སྤྱོད་electricity use
གློག་སྨན་battery
གློད་ཆ་relaxed quality
གློད་དཀྲོལ་delivery
གློད་དྲགས་པ་intense relaxation
གློད་ལ་འཇོག་པ་relax
གློད་སྤང་parting
ང་my words
ང་ཅག་we
ང་ཅག་ཡིན་we are
ང་ཅག་ལ་ཡོད་we have
ང་ཅན་my
ང་དག་we two
ང་ཕོད་district in kong po
ང་མཁྱེན་recognize me
ང་མོ་camel
ང་ཚའི་our
ང་ཚོ་we
ང་ཚོའི་our
ང་ཡི་བ་mine
ང་ཡི་ཡིན་it is mine
ང་ཡི་རང་བཞིན་my reality
ང་ཡིན་པ་independence
ང་ཡིར་མེད་want of selfishness
ང་ཡིས་བྱས་པ་manifesting from me
ང་ར་ཐང་place in tibet
ང་རང་གཅིག་པུ་myself alone
ང་རང་གཉིས་we two
ང་རང་གི་ཡིན་was mine
ང་རང་ཚོ་we ourself
ང་རང་རེ་གཉིས་either of us
ང་རོ་roar
ང་རྒྱལ་དང་བྲལ་free of pride
ང་རྒྱལ་ལས་ཀྱང་supreme pride
ང་རྣམས་we
ང་ལྟ་བུ་དག་my equals
ང་སྐྱེས་born from speech
ངག་speech
ངག་ཀྱལ་པ་idle talk
ངག་གནད་key point of speech
ངག་གི་ཐ་སྙད་verbal convention
ངག་གི་དངོས་པོ་verbal thing
ངག་ཏུ་སྨྲ་བ་verbally formulate
ངག་ཐོག་ནས་verbally
ངག་དབང་a title of learning
ངག་དབྱངས་voice
ངག་བཅད་པ་silence
ངག་བཙན་firm promise
ངག་བསྡམས་པ་sage
ངག་བྱེད་speaker
ངག་མ་speech itself
ངག་ཚད་མ་valid speech
ངག་འགྲོས་manner of speaking
ངག་འཆལ་senseless chatter
ངག་རྩལ་elocution
ངག་ལ་གཟུང་བ་memorize
ངག་ལྡན་eloquent
ངག་ལྷ་མོ་goddess of speech
ངག་སྐྱོར་recitation
ངག་སྡོམ་པ་silence
ངག་སྨྲ་speak
ངང་གིས་དལ་བ་to relax naturally
ངང་གིས་བསྡངས་controlled naturally
ངང་གིས་འགོ་make way for
ངང་གིས་འཆར་comes by itself
ངང་ཉིད་དེ་ལས་from this condition
ངང་ཉིད་རྣལ་མ་authentic condition
ངང་དཀར་goose
ངང་དུ་ལུས་to be stranded in
ངང་དེ་ཉིད་that state itself
ངང་པ་པོ་drake
ངང་པའི་ཚོགས་flock of wild geese
ངང་པའི་སྐད་quack
ངང་བག་ཡོད་naturally modest
ངང་མོ་goose
ངང་རྐང་that which waddles
ངང་རྒྱུད་རིང་very patient
ངང་རྒྱུན་continuous state
ངང་ལ་བཞག་གིན་to rest naturally
ངང་ལ་བཞག་པ་remain in the state
ངང་སྐྱ་grey teal
ངང་སྐྱོང་བ་continuity
ངང་སྒྲོ་quill of the goose
ངད་strong aroma
ངད་བཟང་good smell
ངན་bad
ངན་གྲགས་ཅན་notorious
ངན་ཅིང་དབུལ་བ་weak and miserable
ངན་ཐག་opium
ངན་ན་བ་the bad
ངན་པ་བརྗོད་པ་blaspheme
ངན་པར་འགྱུར་བ་to be inferior
ངན་པར་འཕྱོ་wallowed
ངན་པར་སྨྲ་བ་speak ill of others
ངན་བདུད་evil devil
ངན་བཟོས་མ་བྱས་made useless
ངན་བྱེད་black magic
ངན་ཚིག་accusation
ངན་འགྲོའི་ལམ་scorpion
ངན་འཐུང་scorpion
ངན་རིམས་epidemic
ངན་རུང་feeble
ངན་རུལ་rotten
ངན་རྟོག་negative thought
ངན་ལང་ཤོར་བ་indulge
ངན་ལན་སློག་to respond to evil
ངན་ལན་སློག་པ་retort
ངན་ལྟས་bad sign
ངན་ཤགས་bad joke
ངན་སེམས་ཅན་malevolent
ངན་སྐྱུགས་vomit
ངམ་རུ་a disease
ངའི་ཉེ་ཁོར་around me
ངའི་དང་ག་འགག་my appetite is gone
ངའི་དྲུང་my presence
ངའི་དྲུང་དུ་in front of me
ངའི་ཕྱོགས་སུ་towards me
ངའི་བུ་སྡུག་my dear son
ངའི་མདུན་དེར་in front of me
ངའི་མིག་my eye
ངའི་མིག་སྔར་in front of my eyes
ངའི་མིང་my name
ངའི་འདི་this my
ངའི་རྗེ་བཙུན་my venerable master
ངའི་ལྷན་དུ་with me
ངའི་སྣང་བ་my vision
ངར་གཅོག་པ་enfeeble
ངར་ངར་ཁུན་སྒྲ་hoarse groaning
ངར་ཐུང་intense
ངར་དང་བཅས་པ་feisty
ངར་དང་སྟོབས་more vigorous
ངར་པ་stalk of plants
ངར་བཏང་བ་temper steel
ངར་བརྡུང་tempered
ངར་བསྐྱེད་invigorate
ངར་བླུད་པ་temper steel
ངར་མི་substitute effigy
ངར་འགྲོས་charge
ངར་འབོལ་strong in quality
ངར་ལྕགས་steel magnet
ངར་ལྡུད་པ་to temper steel
ངར་ལྷུང་tempered
ངར་ཤུགས་ཀྱིས་vehemently
ངར་ཤུགས་ཅན་vehement
ངར་ཤུགས་ཉམས་པ་enervate
ངར་སེམས་པ་ego idea
ངར་སྐད་རྒྱབ་པ་snarl
ངར་སྐྱེད་excitement
ངར་སྣབས་mucus of the nose
ངར་སློང་stimulation
ངལ་བ་མང་with much weariness
ངལ་བསོས་refreshed
ངལ་ཞིང་དུབ་ནས་being fatigued
ངལ་འཚོ་refreshment
ངལ་རྩོལ་པ་laborer
ངས་by me
ངུ་ངུ་teal
ངུ་བ་པོ་weeper
ངུ་མཁན་weeper
ངུ་རུ་འཇུག་པ་cause to weep
ངུ་སྐད་ཆེན་པོ་wail
ངུ་སྐད་རྒྱབ་པ་sob
ངུ་སྙིང་འདོད་to feel like crying
ངུད་མོ་sob
ངུར་པ་duck
ངུར་སྨྲིག་saffron
ངེ་བ་cry
ངེད་གཉིས་we two
ངེད་ཅག་we
ངེད་ཅག་ཀུན་we all
ངེད་དག་we
ངེད་ཚོ་we
ངེད་རྣམས་we
ངེད་རྣམས་ཀྱི་our
ངེས་ཁ་རག་place in tibet
ངེས་གཏན་sure
ངེས་གསང་definitive secret
ངེས་གསལ་resplendent
ངེས་ཅན་ཅིག་definitely
ངེས་ཆ་ascertainment factor
ངེས་ཐུབ་པ་we can understand
ངེས་ཐོབ་real or certain gain
ངེས་པ་བྱུང་to retain
ངེས་པ་ཞིག་བྱ་something definite
ངེས་པའི་ལམ་absolute path
ངེས་པར་གཞོལ་བ་definitely flowing
ངེས་པར་བྱས་to achieve certainty
ངེས་པར་མཐོང་བ་right understanding
ངེས་པར་འཇུག་པ་establish firmly
ངེས་པར་ཤེས་intelligent
ངེས་པར་སྐྱོན་serious mistake
ངེས་པར་སྤངས་པ་perfect renunciation
ངེས་བཟུང་emphasis
ངེས་འགྲོ་transmigration
ངེས་འབབ་veritable event
ངེས་ཡམ་ཤུང་place in tibet
ངེས་ལྡན་intelligent
ངེས་ཤེས་མེད་པ་merely conjectural
ངེས་ཤེས་སྐྱེ་become confident
ངེས་སྒྲ་real sound
ངེས་སྤེལ་real progress
ངེས་སྨོད་curse
ངོ་གཡོག་master and servant
ངོ་ཆེན་person of influence
ངོ་ཆེན་བྱེད་པ་intercede
ངོ་ཐག་ཆོད་པ་spot
ངོ་དཀར་པོ་cheerful face
ངོ་དམའ་shame
ངོ་བཤེས་acquaintance
ངོ་བོ་embodiment
ངོ་བོ་གཉུག་མ་original essence
ངོ་བོ་གྲུབ་having an identity
ངོ་བོ་རྫས་substantial essence
ངོ་བོ་སོ་སོ་separate entities
ངོ་བོ་སྟོང་empty essence
ངོ་བོ་སྟོན་པ་designate
ངོ་བོའི་essential
ངོ་བོའི་གཤིས་ultimate being
ངོ་བོར་གྱུར་བ་constitute
ངོ་བོས་by its own nature
ངོ་མ་ཐག་ཆོད་definitively
ངོ་མ་རང་really
ངོ་མཁྱེན་to recognize
ངོ་མཚར་གྱི་wonderful
ངོ་མཚར་རྨད་དུ་be surprised at
ངོ་མར་actually
ངོ་མི་ཆུང་not unimportant
ངོ་མི་བསྲུང་shameless
ངོ་མིག་boldness
ངོ་ཚ་ཆེན་པོ་demure
ངོ་ཚ་པོ་བཟོ་embarrass
ངོ་ཚ་པོ་བཟོ་བ་disgrace
ངོ་ཚ་བ་shame
ངོ་ཚ་ཡོད་པ་shamefulness
ངོ་ཚ་རུ་འཇུག་put to shame
ངོ་ཚ་ཤེས་shame
ངོ་ཚ་ཤེས་པ་shame
ངོ་ཚ་ཤེས་པར་blush
ངོ་ཚབ་པ་agent
ངོ་ཞལ་ལྟ་see face to face
ངོ་འཕྲད་པ་to be introduced to
ངོ་འཕྲོད་པ་to recognize
ངོ་འཛུམ་smile
ངོ་ལྟོས་master and servant
ངོ་ཤེས་གཏོང་བ་acquaint
ངོ་ཤེས་ཉེ་པོ་intimate
ངོ་ཤེས་ཐུབ་able to recognize
ངོ་སྐལ་corresponding
ངོ་སྤྲད་པ་directly introduced
ངོ་སྤྲོད་པས་having discovered
ངོག་place in tibet
ངོག་ཏུ་amidst
ངོགས་ཐོབ་number
ངོམས་to show off
ངོས་ཀྱི་བྲག་rocky face
ངོས་གཅིག་one side
ངོས་བཟུང་ཡོད་being identifiable
ངོས་མ་ཟིན་not recognize
ངོས་མི་ལེན་པ་deny
ངོས་ཟིན་recognized
ངོས་འབྱོར་acknowledgement
ངོས་ཡངས་breadth
ངོས་རྒྱུད་personally
ངོས་ལེན་acceptance
ངོས་ལེན་པ་admit
ངོས་སུ་བསྟན་པ་facing
ངོས་སྐལ་corresponding
ཅ་ཅིར་bark
ཅ་བོ་thing
ཅ་འདོར་བ་discharge excrements
ཅ་རི་bug
ཅ་ལག་ཁྱད་མཚར་contraption
ཅ་ལག་གི་material
ཅ་ལག་ཕན་མེད་junk
ཅ་ལག་སོབ་སོབ་sponge
ཅ་ལེ་ཅོ་ལེ་irregular
ཅག་plural marker
ཅག་ག་take care of
ཅག་ག་བྱེད་པ་take care of
ཅག་ཙེ་wicker basket
ཅག་ཡག་iron hoe
ཅག་རྡོ་quartz
ཅང་ཅང་ཏེའུ་hand drum
ཅང་ཅུན་general
ཅང་ཏེའུ་damaru
ཅང་ཕིང་name of commune
ཅང་མི་སྨྲ་བ་to say nothing
ཅང་མེད་absolute nothingness
ཅང་ཧེའུ་hand drum
ཅན་ཏེའུ་hand drum
ཅན་དུ་with
ཅབ་ཅོབ་སྨྲ་བ་talk nonsense
ཅབ་མ་valve
ཅམ་པ་ཏ་ལོ་mallow
ཅམ་བཞག་tranquil state
ཅམ་མེ་བཞག་པ་place quietly
ཅའོ་ཧྲོའུ་professor
ཅལ་noise
ཅལ་ཅལ་noise
ཅལ་སྒྲོགས་chatter
ཅི་གནས་as long as one can
ཅི་ཐུབ་ཀྱི་བར་as long as possible
ཅི་དང་ཅི་འདྲ་of whatever kind
ཅི་དང་ཅིར་whatever
ཅི་ནས་ཇི་ལྟ་henceforth
ཅི་ནས་ཇི་ལྟ་བ་as for instance
ཅི་བདེར་freely
ཅི་བདེར་ཡན་to roam freely
ཅི་བྱ་མེད་པ་not know what to do
ཅི་བྱུང་whatever occurs
ཅི་ཞིག་what
ཅི་ཞིག་བྱེད་what is the use
ཅི་ཞུ་reply
ཅི་ཟེར་བ་what does he say
ཅི་འགྲོ་whatever is the case
ཅི་འདུག་བལྟ་see whether there is
ཅི་འདྲ་འདུག་how it is
ཅི་ཡང་མེད་nothingness
ཅི་ཡིན་རུང་though it may be
ཅི་རིགས་སྦྱར་either is affixed
ཅི་རྒོད་wild millet
ཅི་རྩེ་kind of millet
ཅི་ལ་གནས་having what basis
ཅི་ལ་ཟེར་ན་why construction
ཅི་ལས་from what
ཅི་ལྟ་བུ་what is
ཅི་ཤེས་what do you know
ཅིག་ཅར་བ་simultaneous
ཅིག་ཆར་པ་instantaneous type
ཅིག་པར་at once
ཅིག་རྐྱང་only one
ཅིང་ལི་manager
ཅིའང་མེད་པ་nothingness
ཅིའི་ཆེད་དུ་why
ཅིའི་ཡུའུ་ཉ་crucian carp
ཅིའི་རྒྱུས་why
ཅིའུ་རི་female demon
ཅིར་ཡང་གསལ་total clarity
ཅིར་ཡང་མ་བཙལ་not seeking anything
ཅིར་ཡང་མེད་nowhere
ཅིས་by any
ཅིས་ཤེ་ན་why construction
ཅུང་མི་འོང་not enough
ཅུང་ཙམ་ན་a short time later
ཅུང་ཞིག་ན་after a short while
ཅུང་ཟད་ཁྲོ་བ་a little angry
ཅུང་ཟད་ངལ་གསོ་take a short break
ཅུང་ཟད་པ་epithet of nagaraja
ཅུང་ཟད་བཟུང་hold a little
ཅུང་ཟད་མིན་is not correct
ཅུང་ཟད་ཙམ་ན་after a little while
ཅུང་ཟད་རེ་every once in awhile
ཅུང་ཟད་རྒོད་a little smiling
ཅུང་ཟད་སྨད་slightly lessen
ཅུང་ཟད་ཧ་ལས་a little surprised
ཅུང་འགག་brass plate or dish
ཅུང་ཡོ་བ་little slanting
ཅུན་army
ཅུན་ཀྲང་army commander
ཅུར་མིད་པ་devour it all up
ཅུས་ཀྲང་director of a bureau
ཅེ་ན་if it is asked
ཅེ་ཙེ་རྒོད་wild millet
ཅེ་སྤྱད་jackal
ཅེམ་ཙེ་scissors
ཅེམ་རྩེ་scissor
ཅེའོ་certain
ཅེར་ལྟོས་look directly into
ཅེས་ཟེར་thus she spoke
ཅོ་hair
ཅོ་གྲས་colt one year old
ཅོ་ཅོ་brother
ཅོ་ནི་district in amdo
ཅོ་འདྲི་what does he say
ཅོ་རོང་ass
ཅོ་ལགས་mister
ཅོག་ཅིག་ཅར་altogether
ཅོག་པ་have leisure
ཅོག་པུ་sit
ཅོག་བརྩེགས་small dining table
ཅོག་བུ་small quare tent
ཅོག་རོ་place in tsang dkar
ཅོག་རྩེ་table
ཅོང་ཅི་small bowl or dish
ཅོང་རོང་kind of thistle
ཅོང་རོང་ཚེར་མ་kind of thistle
ཅོད་པན་crown
ཅོལ་little sense
ཆ་ཁ་thing
ཆ་ཁ་ཤས་some parts
ཆ་ག་མེད་པ་robe with plain edge
ཆ་གྲུམ་square rug
ཆ་ཅི་རིགས་པ་all aspects
ཆ་ཆས་བསལ་བ་to split up
ཆ་པ་རུ་ཟུར་name of a family
ཆ་ཕྲ་miser
ཆ་ཕྲ་མོ་minute particle
ཆ་བཞག་reckon up
ཆ་བར་going
ཆ་མ་ཚང་བ་deficient
ཆ་མཆིས་is definitely
ཆ་མཉམ་equal
ཆ་མཐུན་partial concordance
ཆ་མཚུངས་analogous
ཆ་མེད་གཉིས་irreducible duality
ཆ་ཚང་བ་གཅིག་entirety
ཆ་ཟུར་fraction
ཆ་འགྲིགས་suit
ཆ་འགྲིགས་པ་set
ཆ་འཇོག་abiding by
ཆ་འདིང་planning
ཆ་འདྲ་ditto
ཆ་ཡི་རྩེ་sublime
ཆ་ར་himalayan oak
ཆ་རགས་general
ཆ་རི་སི་steelyard
ཆ་རུ་tent rope peg
ཆ་རྒྱུས་familiarity
ཆ་ལང་pair of symbols
ཆ་ལྷག་མ་residue
ཆ་ཤས་གྲུབ་species of tree
ཆ་ཤས་བྱེད་particles
ཆ་ཤས་མེད་without parts
ཆ་ཤས་མེད་པ་partless
ཆ་ཤས་འཕྲོག་པ་sharer
ཆ་ཤས་ཤིག་part
ཆ་ཤས་སྦྱང་པ་gold
ཆ་སྙོམས་to fix on
ཆ་ཧར་a mongol tribe
ཆག་གང་breadth of a fist
ཆག་ཆག་བྱེད་པ་sprinkle
ཆག་ཆག་འདེབས་པ་sprinkle
ཆག་ཆོག་ཆོག་delicate
ཆག་ནག་སྲིད་པ་the black waters
ཆག་པོ་broken vessel
ཆག་ཕེབས་welcome
ཆག་བུ་little bunch
ཆག་བྲོམ་ice
ཆག་མདོག་ཁ་པོ་rickety
ཆག་མེད་without a break
ཆག་མོ་bunch
ཆག་ཙེ་small grain
ཆག་ཙེ་ཅན་granulous
ཆག་ཚད་right measure
ཆག་ཡང་གཏོང་བ་exempt
ཆག་རོ་wreckage
ཆག་རོ་བུག་རོ་debris
ཆག་རྒྱག་པ་doubt
ཆག་ལོ་celebrated lama
ཆག་སྐྱོན་crash
ཆག་སྒོ་འཕྲད་to meet misfortune
ཆག་སྒོ་ཡོང་བ་have bad luck
ཆག་སླ་པོ་fragile
ཆག་ཧྲུག་wreckage
ཆགས་ཆེ་strong attachments
ཆགས་ཆོག་ཆོག་tenuous
ཆགས་དང་བྲལ་free of attachment
ཆགས་དྲུམ་passion
ཆགས་པ་attachment
ཆགས་པ་སྤྱོད་པ་copulate
ཆགས་པའི་མདངས་glowing with passion
ཆགས་པའི་ཡིད་attached mind
ཆགས་པར་བྱེད་པ་attachment
ཆགས་བྱེད་epithet of the moon
ཆགས་ཞན་love
ཆགས་ཟིན་པ་became
ཆགས་ཡུལ་object of attachment
ཆགས་ཡོད་it was
ཆགས་ལྡན་མ་lustful woman
ཆགས་སྒོ་extenuation of fault
ཆགས་སྣང་obsess
ཆགས་སློང་sexy
ཆང་beer
ཆང་ཁྲིམས་drinking rule
ཆང་གི་ཀླུམ་wet malt
ཆང་གི་ཉིང་ཁུ་spirit
ཆང་གིས་མྱོས་པ་intoxication
ཆང་ཆུ་སྲེ་བ་mix beer with water
ཆང་ཆེམ་ཅན་intoxicated person
ཆང་དྲེགས་intoxication
ཆང་ཕོག་allowance in beer
ཆང་བཀུ་wine
ཆང་བཀོལ་བ་brew
ཆང་བཟང་good wine
ཆང་བཟའ་marriage
ཆང་བསྙལ་intoxicated
ཆང་བྱེད་མ་barmaid
ཆང་མང་པོ་འཐུང་passion for drinking
ཆང་ཚང་grog shop
ཆང་ཟུང་handle
ཆང་འདོན་wine glass or cup
ཆང་ཡིག་contract
ཆང་རག་བཟོ་ཁང་brewery
ཆང་རག་ཞིག་beer
ཆང་རྐྱན་vessel for wine
ཆང་རྒན་old beer or wine
ཆང་རྫ་beer jug
ཆང་ཤིང་shrub
ཆང་ས་དངོས་གཞི་marriage ceremony
ཆང་ས་མ་རྒྱབ་maid
ཆང་ས་མ་རྒྱབ་པ་bachelor
ཆང་སར་མ་དགའ་བ་misogamy
ཆངས་བུ་pinch of food
ཆད་ཐོ་enjoining offering
ཆད་པ་ཕོག་པ་to punish
ཆད་པའི་སྟོང་པ་vacuum
ཆད་མཁན་failure
ཆད་མདོ་བཙན་powerful command
ཆད་མེད་uninterrupted
ཆད་ཡིག་written contract
ཆད་ལུས་deficiency
ཆན་གྲི་pair of scissors
ཆན་ཝ་kilowatts
ཆབ་water
ཆབ་ཀྱིས་བསིལ་to bathe in water
ཆབ་ཁང་སྒོ་bathroom door
ཆབ་གསང་urine
ཆབ་གསང་ཕྱིན་པ་urinate
ཆབ་གསང་བཏང་བ་make water
ཆབ་གསིལ་piss
ཆབ་གླུག་water pot
ཆབ་བྲོམ་ice
ཆབ་རིག་pervading awareness
ཆབ་ལེན་take purifying water
ཆབ་སྐྱ་whey
ཆབ་སྒོ་door
ཆབ་སྒོ་བ་door keeper
ཆམ་དུ་འབེབས་པ་pouring continually
ཆམ་པོ་བྱེད་པ་cooperate
ཆམ་བཞག་tranquil state
ཆམ་མེ་བ་serene
ཆམ་མེར་བཞག་པ་letting go
ཆམས་པ་common cold
ཆམས་པོ་harmonious
ཆམས་རིམས་influenza
ཆར་ཆུ་ཆེན་པོ་deluge
ཆར་ཆུ་མེད་པ་drought
ཆར་ཆེན་བབས་heavy rain
ཆར་ཐིགས་rain drops
ཆར་དྲག་heavy rain
ཆར་པ་rain
ཆར་པ་ཅན་rainy
ཆར་པ་ཆེན་པོ་downpour
ཆར་པ་བབ་པ་rain
ཆར་པ་རྒྱབ་པ་rain
ཆར་པས་སྦངས་wet with rain
ཆར་ཕོབས་cause rain
ཆར་ཞོད་ཆེ་very heavy rain
ཆར་ཟིལ་གཏོང་བ་drizzle
ཆར་འབྲུ་raindrop
ཆར་རྒྱས་པར་widespread
ཆར་ལྡན་rainy
ཆར་སྐྱིབ་shelter from rain
ཆར་སྟོན་swallow
ཆར་སྤྲིན་rainclouds
ཆལ་རྡབ་པ་slip and stumble
ཆས་ཅན་attire
ཆས་ནས་as regards
ཆས་བཟོ་full suit of clothes
ཆས་མཛེས་beautifully attired
ཆས་སུ་བྱ་སྟེ་appearing as
ཆི་ཡིའུ་gasoline
ཆིག་ཁྲི་myriad
ཆིག་དྲིལ་དུ་concise
ཆིག་བཅུ་ten
ཆིང་ཏན་hydrogen bomb
ཆིང་ཚལ་green vegetable
ཆིང་རླངས་hydrogen
ཆིངས་དངུལ་indemnity
ཆིན་stringed instrument
ཆིབ་སྒ་saddle
ཆིབ་སྒ་བསྟད་པ་lay the saddle on
ཆིབས་པ་ride a horse
ཆིབས་འཐུར་halter
ཆིབས་ལ་བཅིབས་rode on a horse
ཆིབས་ལྕག་whip
ཆིབས་སྒ་saddle
ཆིར་chintz
ཆུ་ཀ་ལ་tap
ཆུ་ཀྱོང་པོ་hard water
ཆུ་ཀླུང་མགོན་lord of rivers
ཆུ་ཁ་སྙི་urinate
ཆུ་ཁྱེམ་oar
ཆུ་གཏིང་depths
ཆུ་གཏིང་ཐུང་བ་shallow water
ཆུ་གཏིང་ཟག་པ་deep water
ཆུ་གཏེར་ཟུར་creek of the sea
ཆུ་གཏོང་བ་water
ཆུ་གཙང་བ་pure water
ཆུ་གཙང་མ་water
ཆུ་གཞུང་middle of a river
ཆུ་གཞོང་sink
ཆུ་གཟར་large ladle
ཆུ་གཤོ་བ་pour out water
ཆུ་གོས་bathing cloth
ཆུ་གླིང་islet in a river
ཆུ་གློག་hydroelectric
ཆུ་ངད་aqueous vapor
ཆུ་ཆུ་rhubarb
ཆུ་ཉལ་tank
ཆུ་ཉུང་swallow
ཆུ་ཉོག་tank
ཆུ་ཉོག་མ་muddy or foul water
ཆུ་ཐགས་water mill
ཆུ་ཐོགས་པ་bathe in water
ཆུ་ཐོར་blister
ཆུ་དཀྱིལ་middle of a river
ཆུ་དག་medicinal drug
ཆུ་དྭངས་པ་sparkling water
ཆུ་དྲངས་བྱེད་water strainer
ཆུ་དྲོན་hot or warm water
ཆུ་དྲོན་མ་hot or warm water
ཆུ་ནང་འགྲོ་བ་paddle
ཆུ་ནིང་years ago
ཆུ་པ་water carrier
ཆུ་བཅུད་table salt
ཆུ་བདག་སྐྱེས་alcohol
ཆུ་བཤོ་བ་pour out water
ཆུ་བསྐྱམས་water dried up
ཆུ་བུམ་jug
ཆུ་བེན་water pot
ཆུ་བོ་རྒྱུན་flowing river
ཆུ་བྱ་དཀར་པོ་swan
ཆུ་བྱིན་མ་ganges river
ཆུ་མགྲིན་ཅན་crocodile
ཆུ་མཐོངས་space
ཆུ་མདོང་water pipe
ཆུ་མཚོ་lakes
ཆུ་མེད་waterless
ཆུ་ཚོད་ཆེན་པོ་clock
ཆུ་ཚྭ་salt from water
ཆུ་ཞག་watering of the eyes
ཆུ་ཞིང་very vast
ཆུ་ཞེང་མཐའ་circumference
ཆུ་ཟིལ་spray
ཆུ་ཟུར་margin of a river
ཆུ་ཟེམ་water tub
ཆུ་ཟོམ་པ་portable water cask
ཆུ་འཁུར་cloud
ཆུ་འཁོལ་to be boiled
ཆུ་འཁྱགས་frozen water
ཆུ་འཁྱགས་པ་ice
ཆུ་འཁྲི་ཤིང་wave
ཆུ་འགྲོ་drainage
ཆུ་འཐག་mill
ཆུ་འཐེན་པ་drain
ཆུ་འཐོར་བ་sprinkle
ཆུ་འདྲ་liquid
ཆུ་འབབ་waterfall
ཆུ་འབབ་སྒྲ་sound of a torrent
ཆུ་འབྱུང་a number
ཆུ་འབྱེད་swan
ཆུ་འབྲུབ་flow over
ཆུ་ཡི་ཀ་བ་pillar of water
ཆུ་ཡི་དུས་period of water
ཆུ་ཡི་བཅུད་table salt
ཆུ་ཡི་བཞོན་པ་cloud
ཆུ་ཡི་ཟེར་raindrops
ཆུ་ཡི་འཁོར་ལོ་whirlpool
ཆུ་ཡི་རོ་salt
ཆུ་ཡི་ལང་ཚོ་lotus
ཆུ་ཡི་ཤུགས་velocity of water
ཆུ་ཡོས་ལོ་water hare year
ཆུ་རགས་bulwark
ཆུ་རས་underpants
ཆུ་རི་billow
ཆུ་རྐ་gutter
ཆུ་རྒལ་ford in a river
ཆུ་རྒུན་འབྲུམ་grape
ཆུ་རྒྱབ་པ་water
ཆུ་རྔམས་wave
ཆུ་རྙོག་མེད་pure water
ཆུ་རྟ་hippopotamus
ཆུ་རྟགས་sign of water
ཆུ་རྫར་རྫར་sloppy
ཆུ་ལ་ཐར་བ་get through water
ཆུ་ལ་མཆོང་བ་dive
ཆུ་ལ་སྐྱུར་བ་throw into the water
ཆུ་ལས་འབྱུང་བ་leech
ཆུ་ལུང་སྦྱར་irrigates the field
ཆུ་ལྟར་བཟོ་བ་liquefy
ཆུ་ལྡན་aqueous
ཆུ་ལྡན་མགོ་wood apple tree
ཆུ་ལྦག་bubbles
ཆུ་ལྷག་kind of tree
ཆུ་ཤུར་district in tibet
ཆུ་ཤེང་གབ་mandala
ཆུ་ཤེལ་དབང་གི་moon
ཆུ་སྐྱ་whey
ཆུ་སྐྱར་ཅན་cadamba tree
ཆུ་སྐྱིལ་བ་bank up water
ཆུ་སྐྱེས་དཀར་white lotus
ཆུ་སྐྱེས་མངལ་great brahma
ཆུ་སྐྱོད་neck
ཆུ་སྐྱོམ་པ་stir the water
ཆུ་སྐྱོར་handful of water
ཆུ་སྒྲ་murmur of a stream
ཆུ་སྟེང་སྦྱིན་water lily
ཆུ་སྟོད་སྐྱེས་planet mars
ཆུ་སྤྲིན་པ་cloud
ཆུ་སྦུག་water pipe
ཆུ་སྦྱིན་offerings of water
ཆུ་སྦྲུལ་harmless water snake
ཆུ་སྨན་medicines from water
ཆུ་སྲམ་otter
ཆུ་སྲིན་གཤེད་shell
ཆུ་སྲིན་བདག་sea
ཆུ་སྲིབ་gonorrhea
ཆུ་སྲེལ་ocean
ཆུགས་པ་torpor
ཆུང་small
ཆུང་གནང་underestimate
ཆུང་གྲི་small knife
ཆུང་ངུ་small
ཆུང་ངུ་སྐོར་lesser cycles
ཆུང་ཆེས་པ་a little more
ཆུང་དུ་ཕྱིན་པ་decrease
ཆུང་དུ་འགྲོ་བ་decrease
ཆུང་ནས་from infancy
ཆུང་བ་small
ཆུང་བར་small
ཆུང་མ་wife
ཆུང་མ་གནང་not underestimate
ཆུང་མ་ལེན་བ་marry
ཆུང་མར་འཛིན་པ་take as wife
ཆུང་ཟད་ཐེབས་པ་slightly affected
ཆུང་འཇུག་kind of tea
ཆུང་ལུག་lamb
ཆུང་སུག་limbs of a lamb
ཆུང་སྐབས་minority
ཆུད་to enter into
ཆུད་གཟན་waste
ཆུད་གཟོན་wastes
ཆུད་པ་to enter into
ཆུད་པར་འགྱུར་will enter into
ཆུད་མི་གཟོམ་cause to be wasted
ཆུད་མི་ཟ་not wasting
ཆུད་ཟ་to waste
ཆུད་ཟ་བ་to waste
ཆུད་ཟོས་པ་to  waste
ཆུན་པོ་ཅན་wreathed
ཆུན་ཙེ་skirt
ཆུའི་aqueous
ཆུའི་ཀླུང་river
ཆུའི་གཉེར་མ་ripple
ཆུའི་དྲ་བ་jujube tree
ཆུའི་བྱིད་པ་kind of cuttle fish
ཆུའི་ཟེར་མ་spray
ཆུའི་འདྲེ་ལོག་waves
ཆུའི་འབབ་གཟར་torrent
ཆུའི་འོབས་water ditch
ཆུའི་ཡུར་བ་gutter
ཆུའི་རྐ་gutter
ཆུའི་རྡོ་བ་a plant
ཆུའི་རྦ་རླབས་wave
ཆུའི་རྩྭ་water moss
ཆུའི་ལོ་མ་ripples in water
ཆུའི་ས་བོན་rain
ཆུའི་སྐྱེ་བོ་water creature
ཆུའི་སྒྲོན་མ་water lamp
ཆུར་ཁུ་whey
ཆུར་གན་དུ་hard by the water
ཆུར་གྱུར་བ་deliquesce
ཆུར་ཉལ་metaphor for fish
ཆུར་མི་འབྱིང་not sink in water
ཆུར་མི་ལྷུང་magic tree
ཆུར་འཇུག་sprinkle
ཆུར་འདྲེས་buffalo
ཆུལ་ལ་འབོགས་པ་wade through water
ཆུས་ནིང་four years ago
ཆུས་མི་ཉམས་པ་thunder bolt
ཆུས་མི་འཚུབ་fish
ཆུས་འདེབས་པ་sprinkle water
ཆུས་སྦང་བ་saturate
ཆེ་གཡག་པོ་big strong person
ཆེ་གེ་མོ་ཁྱོད་such as you are
ཆེ་ཅེ་very biggest
ཆེ་དང་ཆེ་of course it is
ཆེ་དཔང་པོ་witness in chief
ཆེ་ནས་middling barley
ཆེ་ཕྲ་coarse or subtle
ཆེ་བ་ཉིད་greatness
ཆེ་བཞི་witness
ཆེ་བའི་ང་རྒྱལ་pride of greatness
ཆེ་བསྟོད་honor
ཆེ་མཐོ་supremacy
ཆེ་མཐོའི་supreme
ཆེ་ཙམ་a little bigger
ཆེ་ཙི་eggplant
ཆེ་ཚད་magnitude
ཆེ་ཚུག་maturity
ཆེ་འདོད་ཅན་ambitious
ཆེ་རིགས་larger type
ཆེ་རུ་ཕྱིན་པ་dilate
ཆེ་རྒྱུ་great
ཆེད་ཆེར་more and more
ཆེད་ཆེར་བྱེད་increase
ཆེད་དུ་བཟུང་regard as special
ཆེད་དུ་རྩོལ་deliberate effort
ཆེད་པ་spread over
ཆེད་བསྐུལ་special appeal
ཆེད་འཛིན་deliberate
ཆེན་པོ་ཆེན་པོ་very biggest
ཆེན་པོ་ཉིད་greatness
ཆེན་པོ་སྐོར་greater cycles
ཆེན་པོའི་monstrous
ཆེན་པོར་བགྱིད་make great
ཆེན་མོ་great
ཆེམ་པ་thunder forth
ཆེམ་ཙེ་small scissors
ཆེར་བཏང་to deepen
ཆེར་བལྟས་look nakedly at
ཆེར་སོང་to intensify
ཆེས་གསང་total secrecy
ཆེས་ཆུང་བ་much less
ཆེས་ཉུང་བ་it is very rare
ཆེས་ཕྲ་subtler and subtler
ཆེས་མཁས་very learned
ཆེས་འཐུང་བ་drink much
ཆེས་འདྲ་བ་very similar to
ཆེས་འཕགས་པ་far superior to
ཆེས་འབྱོངས་completely mastered
ཆེས་རིང་དུ་very far
ཆེས་ལྕི་བ་very heavy
ཆོ་ག་ཅན་cinnamon
ཆོ་ག་མཁན་ritual specialist
ཆོ་ག་རྣམ་པ་creative acts
ཆོ་གའི་ritual
ཆོ་གའི་རབས་history of the rite
ཆོ་གའི་རིམ་liturgical procedure
ཆོ་གར་བྱེད་performing rituals
ཆོ་ངེ་lamentable
ཆོ་ངེ་དིར་loud lamentations
ཆོ་མེད་པ་nonsense
ཆོ་འབྲང་lineage
ཆོ་ལ་མཁན་dice player
ཆོ་ལོ་མཁན་dice player
ཆོ་ལོ་རྩེ་བ་play at dice
ཆོག་གེ་suspension
ཆོག་གྱུར་sublime
ཆོག་པ་མེད་པ་appetite
ཆོག་སྲིད་it might be enough
ཆོད་གཏམ་thesis
ཆོད་ཆེ་བ་most effective
ཆོད་དུས་མེད་difficult to dross
ཆོད་པར་to be cut off
ཆོད་པར་འགྱུར་will be blocked
ཆོན་ཐག་tent rope
ཆོན་ཕུར་tent peg
ཆོམ་པོ་robber
ཆོམས་robbery
ཆོམས་པ་uproot
ཆོམས་པོ་robber
ཆོལ་ཁའི་provincial
ཆོལ་བཟང་good custom
ཆོས་ཀུན་all phenomena
ཆོས་ཀྱི་གཏན་delineate doctrine
ཆོས་ཀྱི་གནད་essence of religion
ཆོས་ཀྱི་ཆར་rain of doctrine
ཆོས་ཀྱི་ཕྱོགས་onesidedness
ཆོས་ཀྱི་བདག་self of phenomena
ཆོས་ཀྱི་བྱ་བ་religious works
ཆོས་ཀྱི་མཛོད་treasury of doctrine
ཆོས་ཀྱི་མིག་eye of doctrine
ཆོས་ཀྱི་ཚིག་verbal expression
ཆོས་ཀྱི་རིག་པ་theology
ཆོས་ཀྱི་རོ་taste of doctrine
ཆོས་ཀྱི་རྒྱུན་stream of doctrine
ཆོས་ཀྱི་ལས་spiritual work
ཆོས་ཀྱི་སྒོ་door of doctrine
ཆོས་ཀྱི་སྤྱན་eye of doctrine
ཆོས་ཁང་chapel
ཆོས་ཁམས་དགེ་བ་virtuous nature
ཆོས་གསུང་བ་preach
ཆོས་གསུམ་three practices
ཆོས་གྲན་dharma assembly
ཆོས་གྲུབ་མཐའ་sectarian
ཆོས་ཅན་རིང་donkey
ཆོས་ཉིད་དུ་naturally
ཆོས་ཉིད་ཕྱིར་in reality
ཆོས་ཉིད་ཟབ་མོ་profound reality
ཆོས་ཉིད་ལམ་way of dharmata
ཆོས་ཐམས་ཅད་all phenomena
ཆོས་ཐོབ་པ་be religious
ཆོས་ཐོས་པ་hearing doctrine
ཆོས་དགེ་guru
ཆོས་དང་ཅན་pious
ཆོས་དང་དོན་doctrine and meaning
ཆོས་དང་མེད་པ་impious
ཆོས་དང་རང་དབང་freedom of religion
ཆོས་དད་ཀྱི་piety
ཆོས་དད་རང་མོས་freedom of religion
ཆོས་དུང་religious conch
ཆོས་བྱ་བ་མོ་female pole
ཆོས་བྱས་པ་religious person
ཆོས་མ་buddhist nun
ཆོས་མ་གཏོགས་other than dharma
ཆོས་མཚུངས་comparability
ཆོས་མཛོད་treasury of doctrine
ཆོས་མིན་བྱ་བ་acting improperly
ཆོས་ཚུལ་the way of doctrine
ཆོས་ཚོགས་church
ཆོས་ཚོང་བ་trade in religion
ཆོས་ཞོག་priest craft
ཆོས་ཟོག་priest craft
ཆོས་འཁོར་གནས་place in tibet
ཆོས་འཁོར་སྒང་place in tibet
ཆོས་འདི་existence
ཆོས་འདོད་desire doctrine
ཆོས་འདོད་པ་desire doctrine
ཆོས་འབངས་personal name
ཆོས་འབྲེལ་religious
ཆོས་ར་debating courtyard
ཆོས་རྒྱགས་religious provisions
ཆོས་རྒྱུན་stream of doctrine
ཆོས་རྗེ་lord of dharma
ཆོས་རྟོལ་pith of a doctrine
ཆོས་རྡོར་disciple of marpa
ཆོས་ལ་གུས་པ་respect for doctrine
ཆོས་ལ་དགའ་joy in doctrine
ཆོས་ལ་དགའ་བ་joy in doctrine
ཆོས་ལ་མཁས་པ་versed in religion
ཆོས་ལ་ཞུགས་པ་enter into doctrine
ཆོས་ལུགས་order
ཆོས་ལྔ་five topics
ཆོས་སུ་སྣང་བ་phenomenal existence
ཆོས་སུ་སྲིད་is produced
ཆོས་སྐད་doctrinal language
ཆོས་སྐུ་དངོས་true dharmakaya
ཆོས་སྐོར་cycle of teachings
ཆོས་སྒྲོགས་པ་preach
ཆོས་སྟོང་པ་empty
ཆོས་སྤེལ་བ་propagating religion
ཆོས་སྤེལ་ལམ་mission
ཆོས་སྨན་holy medicines
ཇ་tea
ཇ་ཐང་plain tea
ཇ་པ་ཏི་black tea
ཇ་བོ་teapot
ཇ་མགྲོན་tea party
ཇ་མཆོད་libation of tea
ཇ་ཡ་ཇུ་kind of tea
ཇ་ཡུ་kind of tea
ཇ་ཤིང་tea plant
ཇ་སེར་yellow tea from amdo
ཇ་སྟེགས་dining table
ཇ་སྲུབ་མ་buttered tea
ཇག་པ་དང་ཐུག་པ་fall in with robbers
ཇག་རྒྱག་པ་commit robbery
ཇལ་place in tibet
ཇི་བཞིན་ཉིད་thusness
ཇི་བཞིན་རྟོགས་precisely discovers
ཇི་ཞིག་seldom
ཇི་ཞིག་ལྟར་seldom
ཇི་འདྲར་how
ཇི་ལྟ་བུ་འདུག་how it is
ཇི་ལྟ་བུར་གནས་how it remains
ཇི་ལྟར་གྲགས་however designated
ཇི་ལྟར་བ་in a precise way
ཇི་ལྟར་བར་exactly
ཇི་ལྟར་བསྟན་པ་what had been taught
ཇི་ལྟར་བྱུང་བ་history
ཇི་ལྟར་མཚུངས་how they are similar
ཇི་སྐད་བསྟན་terminology
ཇི་སྲིད་པ་as long as
ཇིན་ཚལ་celery
ཇུ་རུ་ཇ་kind of tea
ཇུ་ཤེས་kind of satin
ཇུན་ཝང་celebrated chief
ཇུབ་ཕབ་kind of tea
ཇུས་ཅན་subtle
ཇུས་བདེ་sincere
ཇེ་ཁ་deed
ཇེ་ཆེར་bigger
ཇེ་ཆེར་ཕྱིན་པ་increased
ཇེ་ཇེ་a little at a time
ཇེ་ཉུང་ཇེ་ཉུང་decrease
ཇེ་དང་པོ་the very first
ཇེ་དམའ་ཇེ་དམར་lower and lower
ཇེ་མང་more
ཇེ་མཐོ་ཇེ་མཐོ་higher and higher
ཇེ་ཞིག་ནས་at a certain point
ཇེམ་ཙེ་scissors
ཇོ་བོ་སྔགས་པ་lords and tantrikas
ཇོ་མོ་གངས་lady of glaciers
ཇོ་ལོག་apostate nun
ཇོ་སྲས་prince
ཉ་fish
ཉ་ཀུག་fish hook
ཉ་ཁྲབ་ཅན་carp
ཉ་ཁྲབ་ཆེན་sturgeon
ཉ་ཁྲར་kind of brick tea
ཉ་གང་full moon
ཉ་གང་ཟླ་བ་full moon
ཉ་གདོལ་པ་fisherman
ཉ་གཤོག་fin of a fish
ཉ་གཤོར་བ་to fish
ཉ་གསོད་to kill fish
ཉ་ཆེན་ཞི་shark
ཉ་ཆེན་ཞིག་whale
ཉ་དོལ་fishing net
ཉ་དོལ་པ་fisherman
ཉ་དོས་load of fish
ཉ་པ་རྣམས་fishermen
ཉ་བཟུང་མ་bride
ཉ་བེ་ཉོ་བེ་slack
ཉ་མཁྲིས་fish bile
ཉ་མིད་ཆེན་པོ་sea monster
ཉ་མོ་female fish
ཉ་ཚེར་fish bones
ཉ་ཟེར་number
ཉ་འཆོར་བ་fish
ཉ་འདྲ་བ་fishy
ཉ་འབིགས་fishing hook
ཉ་ར་care
ཉ་རེ་ཉོ་རེ་flabby sluggish
ཉ་རྐྱལ་bladder of a fish
ཉ་རྒྱ་fishing net
ཉ་ལེ་ཉོ་ལེ་slack
ཉ་ལྷོག་a disease
ཉ་ཤ་fish meat
ཉ་སྐྱོགས་gills
ཉ་སྤྱིན་fish glue
ཉ་སྦྲིད་mountain shrub
ཉག་གཅིག་པ་they are one
ཉག་ཉག་ཅན་notch
ཉག་མ་single
ཉག་མཐིལ་steel yard scale
ཉག་མོ་woman
ཉག་རོང་place in kham
ཉག་རྡོ་steel yard weight
ཉག་ལེ་place in tibet
ཉག་ཤིང་steel yard beam
ཉང་district of tsang
ཉང་ཀ་currant
ཉང་ནོན་espionage
ཉང་རྩི་བྲག་yellow fibrous root
ཉན་དད་ཆེ་བ་credulous
ཉན་པ་to hear
ཉན་པ་མོ་female listener
ཉན་པར་འདོད་wish to listen
ཉན་བཞིན་པ་hearing
ཉན་བྱ་object of hearing
ཉན་བྱེད་ear
ཉན་ཟིན་have heard
ཉན་འདོད་པ་desire to hear
ཉན་རིགས་པ་worthwhile to listen
ཉན་རྣ་པ་overhear
ཉན་ཤེས་aural cognition
ཉམ་ང་བ་fear
ཉམ་ང་བ་ཉུང་beset with danger
ཉམ་ང་བ་ཉུང་བ་less risky
ཉམ་ང་བ་མེད་པ་fearless sound
ཉམ་ཐག་ཅན་humility
ཉམ་པའི་ལམ་bad dangerous road
ཉམ་ཡོས་locust
ཉམ་རེ་ཐག་terribly exhausted
ཉམ་རྒུད་wane
ཉམས་ཀུན་all experiences
ཉམས་ཀྱི་གཤིས་state of experiences
ཉམས་ཅན་expression
ཉམས་ཆག་violation
ཉམས་ཆེན་པོ་pride
ཉམས་དགའ་pleasing
ཉམས་དགའ་པོ་delectable
ཉམས་དང་བ་bright appearance
ཉམས་དམས་degenerated
ཉམས་པ་གསོས་པ་fill to the brim
ཉམས་པའི་སྣང་experiential vision
ཉམས་པར་alike
ཉམས་བཞག་confess failures
ཉམས་བླང་practice
ཉམས་བླངས་practice
ཉམས་མཐའ་དག་all experiences
ཉམས་མཚར་amazing
ཉམས་ཚོད་temptation
ཉམས་ཚོད་ལེན་པ་tempt
ཉམས་ཞིབ་པ་scholar
ཉམས་འགྲོ་བ་decayed
ཉམས་འདུས་male organ
ཉམས་འཕར་spiritual experience
ཉམས་ཡོད་པ་be in possession of
ཉམས་རེ་དགའ་weird
ཉམས་རྟོགས་signs of experience
ཉམས་ལེན་practice
ཉམས་ལེན་དགེ་propitious practice
ཉམས་ལོངས་practice
ཉམས་སུ་བླང་practice
ཉམས་སུ་བླང་བ་practice
ཉམས་སུ་བླང་བྱ་object of practice
ཉམས་སུ་བླངས་པ་practice
ཉམས་སུ་མྱོང་experience
ཉམས་སུ་མྱོང་བ་experience
ཉམས་སུ་ལེན་པ་practice
ཉམས་སུ་ལོངས་practice
ཉམས་སྟོབས་strength
ཉམས་སྨད་suppression
ཉའི་གཤོག་པ་fin
ཉའི་ཚིར་large fish
ཉའི་རྣ་བ་gills
ཉར་ཉར་oblong
ཉར་མཁན་keeper
ཉར་ཚགས་preservation
ཉར་ཚགས་བྱེད་པ་retain
ཉར་སྲུང་storage
ཉལ་ཁུག་sleeping bag
ཉལ་ཁྲི་bed
ཉལ་གདན་mattress
ཉལ་གཟན་blanket
ཉལ་གུར་mosquito net
ཉལ་གྱི་ཡོད་i am lying down
ཉལ་ཉིལ་unclean
ཉལ་ཏེ་lying
ཉལ་དུ་བཞག་པ་lay or put down
ཉལ་དུ་སོང་gone to sleep
ཉལ་དུས་bedtime
ཉལ་ནས་asleep
ཉལ་བ་ནང་བཞིན་dormant
ཉལ་བའི་ཕྱི་མ་last going to bed
ཉལ་བར་འདོད་wishing to sleep
ཉལ་མཁན་sleeper
ཉལ་ཟན་quilt
ཉལ་འདུག་གོ་he slept
ཉལ་སའི་ཁག་མིག་bedroom
ཉལ་སར་in bed
ཉལ་སྡོད་པ་lie down
ཉི་ཁུད་lake in nepal
ཉི་གཟེར་sunbeam
ཉི་དཀྱིལ་disk of the sun
ཉི་མ་གཉིས་two days
ཉི་མ་ཐང་place west of lhasa
ཉི་མ་དྲོ་པོ་sunny
ཉི་མ་ནག་ཆུང་name of demigod
ཉི་མ་ནག་ཆེན་name of demigod
ཉི་མ་ནུབ་sun is setting
ཉི་མ་ཕྱི་དྲོ་afternoon
ཉི་མ་ཕྱི་མ་future day
ཉི་མ་མེ་ཏོག་sunflower
ཉི་མ་འཆར་sun is rising
ཉི་མ་རེ་རེ་every day
ཉི་མ་རྒས་sun is setting
ཉི་མ་ལ་སྲོ་བ་make hot in the sun
ཉི་མ་ལྡེ་བ་be warmed in the sun
ཉི་མ་ཤར་བ་sunrise
ཉི་མ་སྔ་དྲོ་early morning
ཉི་མའི་solar
ཉི་མའི་ཁྱིམ་sun sphere
ཉི་མའི་རྒྱུ་བ་solar breathing
ཉི་མའི་ལྷ་type of lha
ཉི་མའི་ལྷ་མོ་wife of the sun god
ཉི་མས་བཞད་lotus
ཉི་ཞལ་sun face
ཉི་ཟླ་དབང་པོ་a dakini
ཉི་འཆར་ཁ་རུ་moment of sunrise
ཉི་འོག་པ་bactria
ཉི་ལི་ལི་shrills
ཉི་ལྡོག་solstice
ཉི་ཤ་fresh meat
ཉི་ཤར་བར་until sunrise
ཉི་ཤུ་twenty
ཉི་ཤུ་ཅན་score
ཉི་ཤུ་ཐམ་པ་the twenty
ཉི་ཤུ་ཙམ་about twenty
ཉི་སེ་twice the length
ཉིང་གཡོག་servants of oneself
ཉིང་མཚམས་gap between lives
ཉིང་ཤ་ཉིང་གིས་ruining oneself
ཉིད་འགྲུལ་very low caste
ཉིད་རང་you
ཉིན་day
ཉིན་གཅིག་one day
ཉིན་གུང་ཁ་ལག་lunch
ཉིན་གུང་ན་at midday
ཉིན་གུང་རྒྱབ་afternoon
ཉིན་གུང་སྔོན་forenoon
ཉིན་དཀར་white lucky day
ཉིན་དགུང་noon
ཉིན་དགུང་ལ་at midday
ཉིན་དུས་daytime
ཉིན་དེབ་diary
ཉིན་ཕོག་daily wages
ཉིན་མཐར་བྱེད་darkness
ཉིན་མཚན་དུ་day and night
ཉིན་མཚན་མཉམ་པ་time of the equinox
ཉིན་མའི་གུང་daylight
ཉིན་མོའི་གུང་noon
ཉིན་མོར་བྱེད་shine like the sun
ཉིན་ཞག་འགའ་several days
ཉིན་ཞིག་one day
ཉིན་འདིར་during the day
ཉིན་རངས་པར་early in the morning
ཉིན་སྟར་every day
ཉིན་སྣང་ཤས་daytime experience
ཉིན་སྲིབ་ཅན་sporadic
ཉིས་འགྱུར་double
ཉིས་རིམ་double
ཉིས་ལྡན་dvaparayuga
ཉུ་གུ་སྤང་ལེབ་kind of worm
ཉུ་ཏི་pear
ཉུག་རྩ་མེ་ཏོག་carthusian pink
ཉུང་གཞི་turnip root or seeds
ཉུང་ངེ་སྨྲ་བ་speak little
ཉུང་ཆད་shortage
ཉུང་ཉུང་བཟོ་བ་curtail
ཉུང་དུ་བཏང་བ་detract
ཉུང་དྲག་པ་short
ཉུང་མ་turnip
ཉུང་མཐར་ཡང་at least
ཉུང་རེ་a little at a time
ཉུང་རློན་fresh turnip
ཉུང་ཤས་ལས་fewer
ཉུང་ཤས་ཤིག་very few
ཉུང་ཤོས་བཟོ་བ་minimize
ཉུང་སྐྱོན་slight defect
ཉུལ་spy
ཉུལ་མི་detective
ཉེ་གྷེ་tribal name in tibet
ཉེ་ཆར་དུ་lately
ཉེ་དག་relations
ཉེ་དགའ་king of the naga
ཉེ་དབང་name of vishnu
ཉེ་བའི་subsidiary
ཉེ་བའི་གནས་neighboring regions
ཉེ་བའི་གནས་སུ་at a place nearby
ཉེ་བའི་སྲས་disciple
ཉེ་བར་གཞག་པ་establishment
ཉེ་བར་ཐོབ་པ་full attainment
ཉེ་བར་བཞག་པ་establishment
ཉེ་བར་བརྒལ་བ་pass over
ཉེ་བར་བརྟག་པ་spectator
ཉེ་བར་བསྒྲུབ་establish
ཉེ་བར་མཆེད་པ་full increase
ཉེ་བར་མཚོན་starting with
ཉེ་བར་ཞི་pacify
ཉེ་བར་ཞི་བ་pacify
ཉེ་བར་ཞི་བྱེད་thorough pacifying
ཉེ་བར་འཁྱུད་devotee
ཉེ་བར་འཇུག་པ་close setting
ཉེ་བར་འཇོག་པ་close setting
ཉེ་བར་རྟག་པ་spectator
ཉེ་བར་སྒྲུབ་establish
ཉེ་བར་སྒྲུབ་པ་establish
ཉེ་བར་སྤྱོད་supplication
ཉེ་བར་སྤྱོད་པ་enjoy
ཉེ་བར་སྨོས་desire to be close
ཉེ་བར་སྲེག་པར་burn
ཉེ་མོ་ནས་from near
ཉེ་མོར་near
ཉེ་ཚེ་བ་provincial
ཉེ་ཟུངས་copulation
ཉེ་འཁོར་གྱི་of the surroundings
ཉེ་འཁོར་རྣམས་surroundings
ཉེ་འགྲམ་གྱི་adjacent
ཉེ་རིགས་near relation
ཉེ་རིང་ཆེས་very partial
ཉེ་རིང་མ་བྱེད་do not be biased
ཉེ་རིང་མེད་impartial
ཉེ་རིང་མེད་པ་impartial
ཉེ་རྒྱུ་secondary cause
ཉེ་ཤོས་immediate
ཉེ་སྐོར་དུ་around
ཉེ་སྐྱོན་fault of partiality
ཉེ་སྙིང་quintessence
ཉེད་དཀའ་rare
ཉེན་ཀོར་near
ཉེན་ཁ་ཅན་precarious
ཉེན་ཁ་ཆེན་པོར་breakneck
ཉེན་ཁ་བཟོ་བ་endanger
ཉེན་ཁ་མེད་པ་safe
ཉེན་ཁའི་དུས་crisis
ཉེན་ཅན་dangerous
ཉེན་ཆེན་great risk
ཉེན་པའི་ལམ་dangerous road
ཉེན་བརྡ་warning
ཉེན་སྐོར་relative
ཉེན་སྲུང་insurance
ཉེའི་སྐབས་when about to
ཉེར་དགའ་delight
ཉེར་བཏུད་bow down
ཉེར་བཞག་establishment
ཉེར་བསྐྱོད་suitability
ཉེར་བསྒྱུར་unlucky accident
ཉེར་བྱུང་origination
ཉེར་བྱེད་tree
ཉེར་མ་red pepper
ཉེར་ཚད་personal danger
ཉེར་འཁོད་near
ཉེར་འབྲས་substantial effect
ཉེར་འཚེ་བར་interruptions
ཉེར་ལེན་པ་original cause
ཉེར་ལྡོག་preliminary
ཉེར་སྤྱད་sensations
ཉེས་གྱུར་corrupted
ཉེས་ཆད་གཅོད་to punish
ཉེས་ཆད་གཅོད་པ་punish
ཉེས་ཆད་གཏོང་བ་penalize
ཉེས་ཆེ་great danger
ཉེས་དམིགས་པ་fault
ཉེས་པ་གཏོང་བ་punish
ཉེས་པ་གསུམ་three faults
ཉེས་པ་གསོ་བ་removing faults
ཉེས་པ་བརྒྱད་eight faults
ཉེས་པ་བྱེད་པ་to do evil
ཉེས་པ་མཐོང་བ་viewing faults
ཉེས་པ་མེད་faultless
ཉེས་པ་འགྱོད་པ་feel remorse
ཉེས་པ་ལྕི་བ་the heavier fault
ཉེས་པ་སྡོམ་པ་neutralize an evil
ཉེས་བབས་པ་fault
ཉེས་བརྡུང་beating
ཉེས་བྱས་misdeed
ཉེས་མེད་free of hazards
ཉེས་ཚོགས་collection of faults
ཉེས་འགལ་default
ཉེས་རྡུང་beating
ཉེས་སྐྱོན་faults and defects
ཉེས་སྒྲིབ་defects
ཉོ་ཅ་རྒྱབ་པ་shop
ཉོ་ཅའི་ཐོ་shopping list
ཉོ་ཆ་shopping
ཉོ་ཏི་pear
ཉོ་བའི་ཆེད་for buying
ཉོ་བྱད་articles for sale
ཉོ་ཚོང་business
ཉོག་sluggish
ཉོགས་བྱིང་too soft
ཉོད་པ་food
ཉོན་affliction
ཉོན་མོངས་ཅན་afflicted
ཉོན་མོངས་པ་ཅན་afflicted
ཉོན་མོངས་བདུད་devils of passion
ཉོན་མོངས་ཚིག་words of idleness
ཉོན་ཡིད་afflicted mind
ཉོབ་པ་sleepy
ཉོས་to buy
ཏ་ཀ་རི་weighing scales
ཏ་གསེབ་stallion
ཏ་ཇ་chinese tea
ཏ་དབྱི་overcoat
ཏ་ན་ག་ན་uninhibited
ཏ་པོ་ཐ་chorten in china
ཏ་བག་plate
ཏ་མ་ལའི་ལོ་མ་leaf of tamala tree
ཏ་མིང་ming dynasty
ཏ་ཚྭ་chinese tea
ཏ་ཚྭང་chinese tea
ཏ་ཟུང་a flower
ཏ་ཡས་number in astrology
ཏ་ཡིག་the letter ta
ཏ་རུ་ཀ་turkistan
ཏ་ལའི་ཕྲེང་བ་fabulous mountain
ཏ་ལའི་འདབ་palm leaf
ཏ་ལི་ཀ་a goddess
ཏ་སི་གི་ས་satin
ཏ་ཧུན་red chinese satin
ཏག་ཏག་རང་exactly
ཏག་སེ་playing cards
ཏང་མི་party member
ཏཐཱཏཱ་thusness
ཏན་ཏན་བཟོ་བ་ensure
ཏན་ཏན་རང་surely
ཏན་ཏིག་བཟོ་བ་ratify
ཏན་ཏིག་བྱེད་པ་fix
ཏན་ཧྲི་television
ཏལ་པ་moment
ཏལ་པར་གཅོད་པ་cut quite through
ཏལ་མ་moment
ཏི་ཏི་podoces humilis hume
ཏི་ཏི་ར་partridge
ཏི་ར་corpse
ཏི་རུག་indian rupee
ཏི་ལ་གྱི་འབྲུ་sesame seed
ཏི་སེ་ཁྱུང་garuda of tise
ཏི་སྐག་indian myna bird
ཏིག་གང་one tig measure
ཏིག་ཅིག་མིན་ན་but for a little
ཏིག་ཚ་ཡང་ཟེར་zinc
ཏིང་གིས་completely
ཏིང་ངེ་clearly
ཏིང་ངེ་བ་occurs
ཏིང་ངེར་quietly
ཏིང་ཏི་ལིང་snipe
ཏིང་ཏིང་མ་small bird
ཏིབ་རིལ་teapot
ཏིམ་པོམ་owl
ཏིམ་བི་funnel
ཏིར་ཧུ་ཏ་modern tirhut
ཏིལ་གྱི་ཕྱེ་powdered sesamum
ཏིལ་ཅན་palm tree
ཏིལ་དཀར་white sesamum
ཏིལ་ནག་black sesamum
ཏིལ་མ་sesame oil
ཏིལ་སྣུམ་sesame oil
ཏུ་རུ་ཀ་turkistan
ཏུའུ་degree
ཏུར་ཕོག་པ་slightly affected
ཏུར་བ་darn
ཏུལ་བ་laugh
ཏེ་གྱེར་place in upper tibet
ཏེ་པོར་དྲག་པ་really good
ཏེའུ་table
ཏེའུ་ཤིང་ཁྲི་square table
ཏེལ་གྱི་མེ་cauterization
ཏོག་ཙམ་གཞུ་བ་tip
ཏོག་ཙམ་སོང་ནས་later
ཏོག་ཡུ་handle of a hoe
ཏོག་ལྕགས་iron of the hoe
ཏོབ་ཅི་button
ཏོབ་ཏོབ་སྨྲ་བ་talk confusedly
ཏོམ་འཇུག་vague involvement
ཏོའུ་ལོ་polecat
ཏོའུ་ཧ་ཕུ་bean curd
ཏྲ་ape
ཏྲི་ཤུ་ལ་trident
ཏྲེ་བ་ཅན་colored
ཐ་ཁབ་large needle
ཐ་ཁུག་pipe
ཐ་ག་ན་a name
ཐ་གུ་བཅག་པ་broken rope
ཐ་གུའི་ལྟོ་ཅན་epithet of vishnu
ཐ་ཐོར་a few here and there
ཐ་དད་དུ་མེད་པ་not separate
ཐ་དད་པར་differently
ཐ་དད་འདབ་species of tree
ཐ་དད་རིགས་different lineage
ཐ་བག་plate
ཐ་མ་ཁ་tobacco
ཐ་མ་ཚོང་མཁན་tobacco salesperson
ཐ་མག་cigarette
ཐ་མག་འཐེན་to smoke
ཐ་མག་འཐེན་མཁན་smoker
ཐ་མའི་སེམས་final mind
ཐ་མར་དགེ་བ་final virtue
ཐ་མལ་ordinary
ཐ་མལ་གྱི་སེམས་ordinary mind
ཐ་མལ་པའི་སེམས་ordinary mind
ཐ་མལ་པར་vulgarly
ཐ་མི་ཁ་cigarette
ཐ་ཚིགས་samaya
ཐ་རམས་full
ཐ་རུ་utmost limit
ཐ་རེ་ཐོར་རེ་sporadic
ཐ་ལོང་red cloth
ཐ་ཤལ་བ་the worst
ཐ་སྐར་གྱི་ཟླ་october
ཐ་སྙད་གཞན་other expressions
ཐ་སྙད་དབྱེ་writer
ཐ་སྙད་བཏགས་པ་common parlance
ཐ་སྙད་རིག་པ་terminology
ཐག་distance
ཐག་གཅོད་ནོར་བ་misjudge
ཐག་གཅོད་མཁན་arbitrator
ཐག་ཅི་ཙམ་how far
ཐག་ཆོད་ནས་having resolved this
ཐག་ཆོད་པོ་decisive
ཐག་ཉེ་པོ་near
ཐག་ཉེ་བའི་ལམ་shorter road
ཐག་པ་rope
ཐག་པ་ཕྲ་པོ་cord
ཐག་པ་འཐེན་པ་pull a rope
ཐག་པ་སྦོམ་པོ་cable
ཐག་པས་འཐེན་པ་tow
ཐག་པས་སྡམ་པ་bound with a rope
ཐག་པས་སྦྱིག་པ་tie with a rope
ཐག་བཟོ་rope making
ཐག་མ་ཆོད་པ་pending
ཐག་མི་རིང་བ་not far
ཐག་མིག་mesh of a net
ཐག་ཟོ་rope work
ཐག་རིང་གི་remote
ཐག་རིང་ཐུང་distance in general
ཐག་རིས་ཀྱི་རས་tapestry
ཐག་རྒྱང་rope
ཐག་སྐུ་woven image
ཐག་སྒྲ་clapping sound
ཐག་སྣེ་end of a rope
ཐགས་གཞི་texture
ཐགས་གྲུ་བུ་balls of thread
ཐགས་ཐོགས་impediments
ཐགས་འཐག་མཁན་weaver
ཐགས་སེ་ཐག་flapping
ཐང་ཁུག་small skin ban
ཐང་གི་ཙི་ཙི་field shrew
ཐང་ཆད་བཅུག་པ་fag
ཐང་ཆད་མདོག་weary
ཐང་ཆུང་གཙང་པོ་river in tibet
ཐང་ཆེན་square
ཐང་དུ་ལྷུག་instantly relaxed
ཐང་པ་plains dwellers
ཐང་མར་བརྡལ་extensive
ཐང་ཙམ་little while
ཐང་ཞིང་fields on level land
ཐང་འགའ་འཕྲད་པ་momentary
ཐང་འབྲུ་ceder nuts
ཐང་ཡང་decoction
ཐང་ཡངས་པ་wide field
ཐང་ཡངས་པོ་square
ཐང་ཡིག་chronicle
ཐང་ལ་spread
ཐང་སག་district in phan yul
ཐང་སྐུ་picture of deity
ཐང་སྐྱ་place near lhasa
ཐང་སྟོང་desert plain
ཐད་ཀར་animal
ཐད་ཀར་གཏད་gaze directly ahead
ཐད་ཀར་དུ་directly
ཐད་ཀར་བརྐྱངས་stretch out straight
ཐད་ཀར་མ་ཡིན་པ་indirect
ཐད་ཀར་འཕྲད་to stretch apart
ཐད་དགུ་a number
ཐད་དུ་འདོང་བ་going directly
ཐད་དྲང་directly in front
ཐད་དྲང་ན་directly ahead
ཐད་བསྒྱུར་change the direction
ཐན་ཀྭ་musk melon
ཐན་ཁེ་tank
ཐན་ཐུན་a little
ཐན་བསྐུར་send a reply
ཐན་ཙི་blanket
ཐན་འགོག་drought prevention
ཐན་སྐྱོན་drought damage
ཐབ་ཀ་པ་cook
ཐབ་ཁ་པ་cook
ཐབ་ཆི་button
ཐབ་ཐབ་flapping noise
ཐབ་ཐིབ་large number
ཐབ་ཚང་སྒོ་kitchen door
ཐབ་ལས་cuisine
ཐབ་ལྷ་སེ་ཤར་a hearth god
ཐབ་ཤོར་མེད་པ་stalemate
ཐབས་ཀྱི་ཆ་factor of method
ཐབས་གཅིག་ཏུ་together
ཐབས་ཅིག་together
ཐབས་ཆེན་great method
ཐབས་ཆེན་པོ་great method
ཐབས་ཇུས་ཀྱི་tactical
ཐབས་དག་abruptly
ཐབས་དང་རྩ་པ་root of method
ཐབས་བྱུང་result from method
ཐབས་མ་ཡིན་without method
ཐབས་མ་ཡིན་པ་without method
ཐབས་མཁས་skill in means
ཐབས་མཁས་པ་skill in means
ཐབས་མིན་without method
ཐབས་རིག་knowledge of method
ཐབས་རྩོལ་attempt
ཐབས་སུ་རུང་suitable as method
ཐབས་སྐྱོ་པོ་shanty
ཐབས་སྡུག་ཅན་piteous
ཐམ་ཁ་seal
ཐམ་ཁ་རྒྱབ་པ་seal
ཐམ་ཐུམ་sleep
ཐམ་ལན་instruction
ཐམས་ཅད་པ་all
ཐམས་ཅད་ཕྱིར་for the sake of all
ཐམས་ཅད་བྱང་བ་purify everything
ཐམས་ཅད་རྟོགས་epithet of buddha
ཐམས་ཅད་ལ་everywhere
ཐམས་ཅད་སྣང་བ་everything manifests
ཐམས་ཅད་སྤངས་པ་giving up everything
ཐམས་སེ་ཐམ་menaces
ཐར་གྲོལ་freedom
ཐར་ཆགས་gradual
ཐར་ཆུང་པ་small well
ཐར་ཐར་very freely
ཐར་ཐར་དུ་continuously
ཐར་ཐར་དུ་མཆེད་spread very freely
ཐར་པར་བྱེད་liberation
ཐར་བར་འགྱུར་བ་become free
ཐར་མེད་no escape
ཐར་རེ་ཐོར་རེར་sparsely
ཐར་ས་མི་འདུག་there is no escape
ཐལ་ཀ་རྡོ་རྗེ་medicinal fruit
ཐལ་གྲོལ་unhindered
ཐལ་ངག་indirect argument
ཐལ་ཆེ་བ་too
ཐལ་ཐག་bread baked in ashes
ཐལ་ཐལ་particular number
ཐལ་ཐལ་དུ་continuously
ཐལ་ཐོལ་དུ་exactly
ཐལ་དྲེས་སྨན་medicinal plant
ཐལ་བ་འགམ་པ་lick the dirt
ཐལ་བརྡབ་པ་clap with the hands
ཐལ་བྲེས་སྨན་a vegetable medicine
ཐལ་མ་through and through
ཐལ་མོ་བརྡབ་folded the palms
ཐལ་མོ་བརྡབས་clap hands
ཐལ་མོ་རྡོབ་clapper
ཐལ་ཚྭ་burnt salt
ཐལ་འཚུབ་dust storm
ཐལ་ཡས་a number
ཐལ་ལ་ཚལ་place in nyag rong
ཐལ་ལྕག་slap
ཐལ་སྒྲོ་sack full of ashes
ཐལ་སྦྱར་hands joined
ཐིག་line
ཐིག་གདབས་line
ཐིག་གུ་lesser cords
ཐིག་དྲུང་proportions
ཐིག་པ་drop
ཐིག་པ་ཆུང་ཆུང་driblet
ཐིག་པ་རྒྱག་པ་leak
ཐིག་ཕྲན་small thigles
ཐིག་མཁན་sawyer
ཐིག་ཚད་བྱེད་པ་to proportion
ཐིག་ཚད་འཇལ་བ་taking measurement
ཐིག་ཚོན་lines and colors
ཐིག་འདེབས་པ་draw a line
ཐིག་རྩིས་geometry
ཐིག་ལེ་གཅིག་single sphere
ཐིག་ལེ་དཀར་པོ་white sphere
ཐིག་ལེར་inside a thigle
ཐིགས་གཟར་dropping
ཐིགས་པ་drop
ཐིགས་པ་འཛག་པ་trickle
ཐིགས་པ་རྒྱག་to drip
ཐིང་ཤིང་a dye
ཐིད་ཡུག་a number
ཐིམ་ཐིམ་a number
ཐིར་bell
ཐིལ་ཆུང་place in tibet
ཐུ་རེ་vibrantly
ཐུ་ལུ་ནག་པོ་withered flower
ཐུ་ལུ་འདེབས་པ་spit
ཐུག་ཆད་agreement
ཐུག་པ་གདུ་བ་make up into a broth
ཐུག་པ་མེད་པ་infinite regress
ཐུག་མེད་endless
ཐུག་ཚད་capacity
ཐུག་ཚོམ་flagstaff with flag
ཐུག་འཆོམས་great noise
ཐུག་འཕྲད་དུ་directly
ཐུག་སྒྲ་great noise
ཐུག་སྣོད་cauldron
ཐུགས་ཀར་at the heart
ཐུགས་ཀྱི་རུས་effort
ཐུགས་ཀྱི་སྲས་spiritual son
ཐུགས་ཁྲལ་worry
ཐུགས་ཁྲེལ་disgust
ཐུགས་ཁྲོས་པ་enraged
ཐུགས་གཏེར་mind treasure
ཐུགས་གཞོལ་བ་intend to practice
ཐུགས་གཟུ་བོ་honest mind
ཐུགས་གསོ་བ་console
ཐུགས་དགྱེས་པ་the heart cheered
ཐུགས་དཔག་མེད་infinite grace
ཐུགས་དམ་བསྐངས་fill to the brim
ཐུགས་དམ་མཛོད་please bless me
ཐུགས་ཕྱག་མཚན་mood
ཐུགས་ཕྱུང་discouraged
ཐུགས་ཕྲད་immediately
ཐུགས་བཅུད་heart nectar
ཐུགས་མཉེལ་བ་tired mentally
ཐུགས་མཛངས་had in mind
ཐུགས་མུག་despair
ཐུགས་འགན་responsibility
ཐུགས་འཕྲེང་worry
ཐུགས་འཕྲོག་captivate the mind
ཐུགས་རུས་effort
ཐུགས་རྗེ་compassion
ཐུགས་རྗེ་ཅན་compassionate
ཐུགས་རྗེས་with compassion
ཐུགས་ལ་བཏགས་accept
ཐུགས་ལ་འདོན་པ་read silently
ཐུགས་སུན་ཕྱུང་irritate
ཐུགས་སྤྲུལ་པ་mental emanation
ཐུང་ངུ་འགྲོ་བ་become shorter
ཐུང་དུ་གཏོང་བ་shorten
ཐུང་མཐའ་smallest
ཐུང་མདའི་ཤུབས་holster
ཐུང་སྨན་liquid medicine
ཐུད་ཐུད་a number
ཐུད་ལེབ་milk cheese cake
ཐུན་བར་དུ་inbetween sessions
ཐུན་མཚམས་རྣམས་break in a retreat
ཐུན་མཚམས་སུ་during the breaks
ཐུན་མིན་uncommon
ཐུན་ཚོད་hour
ཐུན་རྫས་mustard seeds
ཐུན་ལོང་common
ཐུབ་ཆེན་great might ones
ཐུབ་ཆོད་courage
ཐུབ་པ་ཉིད་sage
ཐུབ་པ་བཟོ་བ་enable
ཐུབ་པ་བྱུང་succeeded in
ཐུབ་པ་མེད་པ་not subdue
ཐུབ་པ་ཡིན་we can
ཐུབ་པའི་གནས་hermitage
ཐུབ་པའི་བསྟན་buddhism
ཐུབ་པར་དཀའ་བ་difficult to subdue
ཐུབ་བསྟན་doctrine of buddha
ཐུབ་མཁན་capable
ཐུབ་མཚན་mood
ཐུབ་མིན་aptitude
ཐུབ་ཚད་capability
ཐུར་ཐག་halter rope
ཐུར་ཐུར་down
ཐུར་དུ་གུག་པ་declination
ཐུར་དུ་དགུག་push down
ཐུར་དུ་མནན་to push down
ཐུར་དུ་འགྲོ་བ་descend
ཐུར་པོ་lowest part
ཐུར་བགྲོད་water
ཐུར་བརྗོད་མ་grouse
ཐུར་མ་བརྒྱ་པ་umbrella
ཐུར་མགོ་ཙམ་spoon measure
ཐུར་མཐའ་end of halter rope
ཐུར་མའི་དཔྱད་acupuncture
ཐུར་ཞོ་pair of scales
ཐུར་ལ་རྒྱབ་པ་cast down into
ཐུར་ཤིང་pole
ཐུར་སྲང་ounce of silver
ཐུལ་གོག་ragged blanket
ཐུལ་གྱིས་བྱོན་arrived suddenly
ཐུལ་ཅིག་restrain
ཐུལ་པོ་fur coat
ཐུལ་ལེ་impressive
ཐུས་མི་assemblage of men
ཐེ་ཆུང་smallest toe
ཐེ་ཇུས་interference
ཐེ་པེད་shuttlecock
ཐེ་བཞུ་black silk hat
ཐེ་བོ་thumb
ཐེ་མཁན་belonging to a thing
ཐེ་ཚོམ་གཅོད་པ་cut off doubt
ཐེ་ཚོམ་གཅོམ་པ་cut off doubt
ཐེ་ཚོམ་ཆུང་very few doubts
ཐེ་ཚོམ་མེད་no doubts
ཐེ་ཚོམ་མེད་པ་no doubts
ཐེ་ཚོམ་མེད་པར་undoubtedly
ཐེ་ཚོམ་ཟ་བ་doubting
ཐེ་ཚོམ་སྤོང་བ་abandon doubt
ཐེ་འན་heaven
ཐེ་འན་ནུ་lord of heaven
ཐེག་vehicle
ཐེག་པ་གཅིག་one vehicle
ཐེག་པ་གཉིས་two vehicles
ཐེག་པ་གཞན་other vehicle
ཐེག་པ་དྲུག་six vehicles
ཐེག་པ་མཆོག་highest vehicle
ཐེག་པ་ལ་ཞོན་པ་mount a carriage
ཐེག་པའི་མཆོག་the supreme vehicle
ཐེག་མཆོག་གླིང་a monastery in lhasa
ཐེངས་ཁ་ཤས་སུ་a few times
ཐེངས་གཅིག་once
ཐེངས་གཉིས་ཙམ་for the second time
ཐེངས་གསུམ་thrice
ཐེངས་འགར་a few more times
ཐེངས་འདིར་this time
ཐེན་པའི་མིང་word for drawing
ཐེབ་ཆུང་little finger
ཐེབ་ཆེན་thumb
ཐེབ་མོ་thumb
ཐེབས་ངེས་precise capacity
ཐེབས་པ་ན་when it is present
ཐེབས་པར་བྱ་must be applied
ཐེབས་རང་class of demon
ཐེམ་pegs
ཐེམ་པ་བརྒལ་བ་cross the threshold
ཐེམ་ཟུར་threshold
ཐེམས་ཡིག་memorial
ཐེའུ་ཆུང་little finger
ཐེའུ་ཙེ་seal
ཐེར་གཟུགས་tightly
ཐེར་ཟུག་དུས་forever
ཐེར་སྦག་coarse kind of serge
ཐེལ་མ་leather strap
ཐོ་ཅོར་སྨྲས་པ་babble forth
ཐོ་ཆོས་dharma cairns
ཐོ་ཐོར་ཚུགས་curling individually
ཐོ་དེབ་register
ཐོ་བ་hammer
ཐོ་བ་སྤུད་པ་hammer and bellows
ཐོ་བ་སྦུད་པ་hammer and bellows
ཐོ་བརྩོམ་proselytize
ཐོ་འགོད་པ་register
ཐོ་རང་early morning
ཐོ་རངས་dawn
ཐོ་རངས་སྣང་བ་tomorrow
ཐོ་རེ་tomorrow
ཐོ་རེངས་ཤིག་one early morning
ཐོ་རྡོ་stone boundary
ཐོ་ལེ་འདེབས་པ་spit
ཐོ་ཤོ་ལེགས་tribe in tibet
ཐོག་ཁ་upstairs
ཐོག་ཁེབས་roof
ཐོག་ཏུ་གྲོལ་liberated directly
ཐོག་ཏུ་ཕོག་པ་relevant
ཐོག་ཏུ་བཅའ་to directly continue
ཐོག་ཏུ་བཅའ་བ་gaining
ཐོག་ཏུ་བྲིས་པ་written on top of
ཐོག་ཏུ་ཤོར་བ་straying into
ཐོག་དྲངས་headed
ཐོག་བབས་thunder
ཐོག་བརྩེག་storey of house
ཐོག་བུར་upper bolt
ཐོག་མ་ཁ་ནར་first of all
ཐོག་མ་མེད་unobstructed
ཐོག་མཐའ་གཉིས་beginning and end
ཐོག་མའི་གཞི་primordial basis
ཐོག་མའི་མགོན་primordial lord
ཐོག་མེད་beginningless
ཐོག་མེད་དུས་beginningless time
ཐོག་ཚད་story of a house
ཐོག་ཟེར་thunderbolt
ཐོག་འབབ་པ་lightning descending
ཐོག་འབུབས་པ་construct a roof
ཐོག་རྒྱག་པ་thunder
ཐོག་རྡིབ་པ་roof gives way
ཐོག་རྩེག་story
ཐོག་རྫིས་stamping
ཐོག་ས་storey of house
ཐོག་ས་གཉིས་པ་second floor
ཐོག་སོ་story of a house
ཐོག་སྐོར་retinue
ཐོགས་པ་མེད་པར་unobstructedly
ཐོགས་མ་མཆིས་པ་unobstructed
ཐོང་ཀ་breast
ཐོང་པའི་ལོ་juvenile years
ཐོང་པོ་plough
ཐོང་ཞིག་let him send
ཐོང་ཞིག་འཛིན་yokes the plow
ཐོང་སྤུ་mane of the camel
ཐོངས་འཛིན་receipt
ཐོད་གཙུགས་topknot
ཐོད་ཅོག་topknot
ཐོད་དཀྲིས་turban
ཐོད་པ་skull
ཐོད་མོ་ཁོར་conch shell species
ཐོད་འཕྲེང་རྩལ་name of guru pema
ཐོད་རས་turban
ཐོད་རྒྱན་head ornament
ཐོད་རྒྱལ་leap over
ཐོད་རྩ་vena frontalis
ཐོད་རློན་fresh skull
ཐོད་ལ་atop
ཐོད་སྐམ་dry skull
ཐོད་སྒྱེད་hearth of skulls
ཐོན་ཀྲང་regimental commander
ཐོན་པའི་emersion
ཐོན་འབྲས་product
ཐོན་ཡོན་league member
ཐོན་སྐོར་income
ཐོན་སྐྱོད་departure
ཐོབ་ཅི་button
ཐོབ་ཅེས་so gaining
ཐོབ་ཆུ་button
ཐོབ་ཐ་མག་immediately
ཐོབ་ཐང་གཤོད་པ་claim
ཐོབ་ཐང་ཐོག་ནས་rightful
ཐོབ་ཐང་ཞུ་མཁན་claimant
ཐོབ་ཐང་ཤོར་བ་forfeit
ཐོབ་དཀའ་difficult to obtain
ཐོབ་དབང་sovereignty
ཐོབ་པ་གསུམ་threefold attainment
ཐོབ་པའི་ལམ་path of attainment
ཐོབ་པར་བྱ་object of attainment
ཐོབ་པར་འདོད་པ་desire to obtain
ཐོབ་བྱ་object of attainment
ཐོབ་མ་སྐྱེས་elder brother
ཐོབ་མཁན་recipient
ཐོབ་མྱོང་received
ཐོབ་འཇལ་solicit
ཐོབ་འོས་པ་deserve
ཐོབ་ཤོར་winning and losing
ཐོར་ཁོད་a mongol tribe
ཐོར་ཅོག་མ་plaited tuft of hair
ཐོར་ཏོ་top point of hair
ཐོར་པ་ཆུང་ཆུང་rash
ཐོར་པའི་ན་ཚ་acne
ཐོལ་པ་additional
ཐོལ་རེ་ལྡང་rises and swirls
ཐོས་པ་དགའ་a name of milaraspa
ཐོས་པ་པོ་hearer
ཐོས་པ་བཞིན་as reported
ཐོས་པ་མང་བ་much hearing
ཐོས་པ་ཙམ་mere hearing
ཐོས་པའི་སྒོ་organ of hearing
ཐོས་པར་བརྗོད་express intelligibly
ཐོས་པས་ཉུང་བ་little hearing
ཐོས་བྱུང་arisen from hearing
ཐོས་མྱོང་བ་have heard before
ཐོས་འཛིན་རྒྱན་ear ornament
ཐོས་ལ་སོགས་པ་hearing and so forth
ཐོས་ཤུགས་audition
ཐོས་སྟོབས་power of hearing
ད་ཀོ་ཤ་sandalwood island
ད་ཁ་རྒྱབ་པ་to shoe a horse
ད་ག་that same
ད་ག་སེ་accidental
ད་ག་སེ་བྱུང་བ་fluke
ད་གང་now what
ད་གིན་ནས་already
ད་ཆུ་mercury
ད་ཐུག་until now
ད་དགྲ་present enemy
ད་དུང་ཐོང་give still more
ད་དུང་ཡང་again yet
ད་དྷ་ཕ་ལ་kapettha tree
ད་ནང་བཀླགས་read just now
ད་ནས་hence
ད་ནས་བཟུང་henceforth
ད་ནུ་ཀ་རི་a flower
ད་ཕྲུག་orphan
ད་བྱིད་lizard
ད་མ་རུ་small hand drum
ད་ཙུག་now what
ད་ཙེ་orphan
ད་ཚུར་alum
ད་རང་this morning
ད་རང་གི་ཤེས་པ་present wakefulness
ད་རངས་this morning
ད་རན་this time
ད་རིང་today
ད་རུང་ཡང་again and again
ད་རྟག་permanence
ད་ལ་རིང་བ་slow and long
ད་ལན་this time
ད་ལེན་there
ད་ལོངས་get up now
ད་ལྟ་ཕན་ཆད་up till now
ད་ལྟ་མན་ཆད་hereafter from now
ད་ལྟ་འཆད་it is now explained
ད་ལྟ་ཡང་even now
ད་ལྟ་ལམ་སང་at once
ད་ལྟའི་དགྲ་present enemy
ད་ལྟར་གྱི་ཚིག་present tense
དཀན་གཉེར་cleft palate
དཀན་གྱི་ཡི་གེ་palatal letters
དཀའ་གནད་controversial issue
དཀའ་ངལ་ཚ་པོ་irksome tortuous
དཀའ་ཉེན་hazard
དཀའ་ཉེན་ཅན་hazardous
དཀའ་ཐུབ་ཀྱི་austere
དཀའ་དཔྱད་trial
དཀའ་བ་ཉིད་difficulty
དཀའ་བ་སྤྱོད་undergo hardship
དཀའ་རྙོག་trouble
དཀའ་རྙོག་ཅན་cumbersome
དཀའ་རྙོག་ཚ་པོ་troublesome
དཀའ་ལས་ཁ་བ་breathless
དཀའ་ལས་ཆེ་བ་very difficult
དཀའ་ལས་རྒྱག་པ་tired
དཀའ་སྤྱད་པ་austere life
དཀར་ཆ་light
དཀར་ཆུང་ལྷ་ཁང་a monastery in tibet
དཀར་ཐག་string of a bow
དཀར་དཀར་བ་ཉིད་whiteness
དཀར་དུ་གཏོང་བ་whiten
དཀར་དྲོ་milk and curd
དཀར་པོ་བཟོ་བ་whiten
དཀར་པོ་འབར་white lustre
དཀར་མདོག་ཅན་whitish
དཀར་མཛོད་dispensary
དཀར་མི་བྱེད་པ་plead innocence
དཀར་ཞལ་courtyard
དཀར་འཛིན་female breast
དཀར་ཡེར་ན་pure white
དཀར་ཡོ་ལ་cup
དཀར་ཡོལ་གང་one cup
དཀར་རྩེར་བ་very white or fair
དཀར་ཤམ་pure
དཀར་སངས་pure white
དཀར་སེང་ངེ་བ་very white
དཀར་སྔོ་light blue
དཀར་སྟིང་ཆ་ངམ་a place in kham
དཀར་སྨུག་brown sugar
དཀུ་གཡས་on the right side
དཀུ་ནད་kidney disease
དཀུ་བརྟོལ་བ་open the side
དཀོན་པ་ཉིད་rarity
དཀོན་པོར་hardly
དཀོན་བུ་wreath
དཀོར་ཟན་devourer of gifts
དཀོར་འདྲེ་wealth spirits
དཀྱིལ་གནས་median
དཀྱིལ་དབུས་སུ་at the center of
དཀྱིལ་སྨད་lower half
དཀྱུ་སར་དཀྱུས་running a race
དཀྱུད་པ་forget
དཀྱུས་ཐག་woof in weaving
དཀྱེལ་པོ་ཆེ་universe
དཀྱེས་པ་སྐོང་fulfill
དཀྲི་ཐག་coil
དཀྲི་བ་པོ་one who wraps up
དཀྲིག་personally
དཀྲིས་ཕྲག་a large number
དཀྲིས་ཟིན་པ་woven
དཀྲུགས་པ་པོ་confounder
དཀྲུམ་པ་brittle
དཀྲོགས་shook awake
དཀྲོགས་པ་པོ་one who churns
དཀྲོལ་རྒྱབ་པ་carve
དག་གུ་powder
དག་གྱུར་པ་become pure
དག་ཅིག་some
དག་ཆ་spelling
དག་ཆ་ནོར་བ་misspell
དག་ཆ་སྐྱོར་བ་spell
དག་ཐེར་བ་make clean
དག་པ་གཉིས་ལྡན་twofold purity
དག་པ་ཅན་possessing purity
དག་པ་ཆེན་པོ་great purity
དག་པ་འཇུག་པ་enter into purity
དག་པ་རབ་འབྱམས་endless purity
དག་པ་རིག་པ་pure consciousness
དག་པ་ས་གསུམ་three pure levels
དག་པའི་སེམས་pristine mind
དག་པར་འཁྲུ་བ་wash clean
དག་བསང་to purify
དག་མཉམ་equalness
དག་འགྲོ་བ་purge
དག་ར་species of garlic
དག་རྫས་soap
དག་ཤ་ལེན་པ་avenge
དག་ས་pure ground
དགག་གཞི་basis of negation
དགག་པ་མིན་པ་undeniably due to
དགག་པ་རྒྱག་པ་criticize
དགག་སྒྲ་adverbs
དགག་སྒྲའི་negative
དགང་དཀའ་བ་hard to fill up
དགའ་དགུ་བ་great joy
དགའ་དགུ་རང་བ་great joy
དགའ་དགོད་glee
དགའ་དོད་enthusiasm
དགའ་པོ་བཟོ་བ་appease
དགའ་པོ་བྱུང་བ་please
དགའ་པོ་བྱེད་པ་admire
དགའ་བ་མ་ཡིན་པ་be displeased
དགའ་བ་ཡིན་པ་be pleased
དགའ་བའི་བཞིན་place
དགའ་བའི་བུ་ག་female organ
དགའ་བའི་རོ་taste of joy
དགའ་བའི་རྒྱུ་cause of joy
དགའ་བའི་ཤིང་cadamba tree
དགའ་བའི་ས་གཞི་female organ
དགའ་བར་བྱེད་པ་take delight
དགའ་བསུ་བྱེད་to greet
དགའ་བོ་nanda
དགའ་བོ་ཉེ་བོ་intimate
དགའ་བྱེད་make happy
དགའ་བྱེད་པ་make happy
དགའ་བྱེད་མ་damsel of mara
དགའ་མཁན་admirer
དགའ་མགུར་arbitrarily
དགའ་མཆོངས་jumping for joy
དགའ་མོས་preference
དགའ་འགད་ཤོར་བ་beam
དགའ་འདོད་liking
དགའ་འཚོར་gusto
དགའ་ཡ་ལེ་glowed with bliss
དགའ་རིས་dejected
དགའ་རྩེད་romance
དགའ་ཤོས་favorite
དགའ་སྟོན་གྱི་festive
དགའ་སྤྱོད་མ་damsel of mara
དགའ་སྤྲོ་ཆེ་བ་excited
དགར་རྒྱ་ཅོ་ཅེ་store up
དགས་པ་cracked
དགུ་ནིང་three years ago
དགུ་པ་ninth
དགུ་པར་ninthly
དགུ་བྱེད་doing everything
དགུ་ཡོངས་all
དགུ་རྒྱུད་nine secret caves
དགུ་རྩེགས་a yellow flower
དགུག་གཞུག་urgent call
དགུག་བྱང་urgent call
དགུག་ཤུགས་urgent call
དགུང་ཁག་division of time
དགུང་གསེབ་middle of the sky
དགུང་གྲངས་age
དགུང་ཆར་rain
དགུང་ཇ་lunch
དགུང་ཐིག་meridian line
དགུང་དཀྱིལ་middle of the sky
དགུང་མཁའ་midnight sky
དགུན་ཀ་winter
དགུན་ཉི་ལྡོག་the winter solstice
དགུན་དུས་wintertime
དགུན་བྱུང་winter
དགུན་ཚིགས་winter time
དགུན་ཞྭ་winter cap
དགུན་འབྲུམ་winter grapes
དགུན་ས་winter residence
དགུར་མོ་crooked woman
དགུས་four days hence
དགེ་ངལ་བ་novice monk
དགེ་ཆུ་sacred water
དགེ་ཆུབ་parittasubha god
དགེ་ཆོས་virtuous doctrine
དགེ་བ་ཁོ་ན་piety alone
དགེ་བ་གཉིས་two virtues
དགེ་བ་ཅན་intelligent
དགེ་བ་བསགས་པ་virtue accumulated
དགེ་བ་ཞན་པ་weak virtue
དགེ་བ་འཕེལ་བ་increasing virtue
དགེ་བ་འབའ་ཞིག་virtue alone
དགེ་བ་ཤ་སྟག་virtue alone
དགེ་བ་སྒྲུབ་practice virtue
དགེ་བ་སྦྱོང་religious ascetic
དགེ་བའི་ཚོགས་collection of virtue
དགེ་བའི་ལམ་path of virtue
དགེ་བའི་སེམས་virtuous mind
དགེ་བར་བྱ་བ་acting virtuously
དགེ་བཤོས་monastery overseer
དགེ་བསྔོ་dedicate the merit
དགེ་བྱེད་པ་making virtue
དགེ་མཚན་ཅན་bearing lucky marks
དགེ་མཚན་ཆེ་བ་more beneficial
དགེ་ཚུལ་novice monastic
དགེ་འདུན་འཕེལ་a buddhist saint
དགེ་རྒན་teacher
དགེ་ལེགས་virtue and goodness
དགེ་ལྡན་པ་a dge lugs pa sect
དགེ་སྤྱོད་religious acts
དགེ་སློང་མ་nun
དགེ་སློབ་མ་female novice
དགེར་བ་parch or fry food
དགོ་བ་antelope
དགོག་པ་abstraction
དགོང་night
དགོང་ཁ་price
དགོང་དག་night
དགོང་དེར་that night
དགོང་དྲོ་evening
དགོང་ཞོག་evening and morning
དགོང་ཟས་supper
དགོང་རྒྱུ་opinion
དགོངས་ཁྲོལ་permission
དགོངས་པ་གནང་བ་permit
དགོངས་པ་ཉིད་identity
དགོངས་པ་བཞི་four thoughts
དགོངས་པ་མཇལ་to meet the state
དགོངས་པ་ཞུ་བ་ask for leave excuse
དགོངས་མཛོད་treasure
དགོངས་མལ་night quarters
དགོངས་འབྲེལ་commentary
དགོངས་ཡངས་pardon
དགོངས་སུ་གསོལ་please pay heed
དགོངས་སྤྱོད་state
དགོད་བྲོ་ལོ་comedy
དགོད་ཡས་very large number
དགོད་སྒྲ་sound of laughing
དགོན་hermitage
དགོན་གཉེར་monastery steward
དགོན་པ་ཁ་ཤས་some monasteries
དགོན་པའི་monastic
དགོན་ལག་affiliate monastery
དགོན་ཧྲུལ་ruins of a monastery
དགོས་ཆེད་need
དགོས་དགོས་needed
དགོས་དོན་significance
དགོས་ནུས་མེད་unnecessariness
དགོས་པ་ཡོད་this will
དགོས་བྱེད་useful requisite
དགོས་མཁོ་ཆེ་བ་necessary
དགོས་མཁོ་སྐོང་to fill a need
དགོས་རྒྱུ་ཆུང་few wants
དགོས་ལབ་པ་demand
དགོས་ཨང་really want to
དགྱེ་བོ་bent man
དགྱེད་པ་curved
དགྱེས་flattered
དགྱེས་ཉམས་joyful expression
དགྱེས་པ་ཆེ་greatly pleased
དགྱེས་པར་རོལ་enjoy
དགྱེས་ཞལ་cheerful countenance
དགྲ་གཤེད་enemy relation
དགྲ་དཔུང་hostile army
དགྲ་དཔོན་warlords
དགྲ་བརླག་killed the enemy
དགྲ་བོའི་hostile
དགྲ་འདུལ་བ་subdue an enemy
དགྲ་ཡ་equal enemy
དགྲ་ལ་བདོ་བ་hurt an enemy
དགྲ་ལན་vengeance
དགྲ་ས་enemy
དགྲ་སྟ་ཅན་frightful
དགྲད་པ་spread
དགྲམ་ཕྱིས་པ་pervade
དགྲར་ལྡོག་པ་renew the war
དགྲོང་པ་die
དང་ཁ་appetite
དང་ཁྱད་པར་different from
དང་ག་appetite
དང་ག་བདེ་བ་good appetite
དང་ག་མི་བདེ་want of appetite
དང་ཐབས་ཅིག་གོ་all together
དང་དུ་བླང་བྱ་voluntarily assume
དང་དུ་ལེན་voluntarily assume
དང་པོ་first
དང་པོ་གཉིས་the two first
དང་པོ་ཉིད་ནས་from the very first
དང་པོ་དང་འོག་first and second
དང་པོ་པའི་ས་ground of a beginner
དང་པོ་བ་beginner
དང་པོ་ལྔ་the first five
དང་པོ་སྦྱོར་བ་initial joining
དང་པོའི་initial
དང་པོའི་རྒྱུ་original cause
དང་པོར་སྐྱེ་བ་originally produced
དང་བ་དག་inner purity
དང་བ་འདྲེན་uplift
དང་བཅས་པ་together with
དང་བཅས་པར་together with
དང་བའི་སེམས་sincere heart
དང་བླངས་ཐོག་voluntary
དང་བླངས་དམག་volunteers
དང་བླངས་པ་volunteer
དང་མཚུངས་ལྡན་accompanies
དང་མི་འདྲ་བ་dissimilar to
དང་འདོད་ཚ་པོ་flair
དང་འདྲ་བ་similar
དང་འདྲ་བའི་which is similar
དང་འཕྲལ་བ་divided from
དང་འབྲལ་བ་separated from
དང་འབྲལ་མེད་never separate from
དང་ར་stable for cattle
དང་ལེན་ཞུ་བ་accept
དང་ལྷན་རྒྱས་together with
དང་སྦྱར་are connected with
དངར་རོ་sweet taste
དངས་purifying
དངས་ག་appetite
དངས་པོར་brightly
དངས་འཚབ་panic
དངས་སེང་ངེ་clear
དངུལ་ཁ་འདོན་པ་work a silver mine
དངུལ་གཉེར་treasurer
དངུལ་དུ་ལ་མ་silver ink
དངུལ་དུག་poison of silver
དངུལ་པར་ཁང་mint
དངུལ་བཟོ་silversmith
དངུལ་བཟོ་པ་silver smith
དངུལ་འབོར་sum
དངུལ་འཛིན་draft
དངུལ་རྐྱང་cash
དངུལ་རྨིག་bar of silver
དངུལ་རྩིས་finance
དངུལ་རྩིས་ཀྱི་financial
དངུལ་ལོར་note
དངུལ་ས་silver ore
དངུལ་སྐམ་oxide of mercury
དངུལ་སྐུད་silver wire
དངུལ་སྐྱོགས་silver cup
དངུལ་སྤྲོད་remittance
དངུལ་སྤྲོད་པ་pay
དངུལ་སྲང་ounce of silver
དངུལ་ཧྲོབ་silver bit
དངོས་ཁམས་physics
དངོས་གནས་ཀྱི་factual
དངོས་ཆས་articles
དངོས་ཉམས་སུ་in reality
དངོས་དོན་དུ་in actual fact
དངོས་དྲན་bona fide
དངོས་པ་substance
དངོས་པོ་དག་པ་pure thing
དངོས་པོ་མཚན་experience
དངོས་བརྒྱུད་personally
དངོས་མ་མཆིས་insubstantial
དངོས་མིང་actual name
དངོས་འབྲས་direct effect
དངོས་ཡོད་པ་personally present
དངོས་རྙིང་པ་antique
དངོས་རྟོགས་explicit realization
དངོས་ལ་གནས་པ་abiding in fact
དངོས་སུ་འཕྲད་directly touch
དངོས་སུ་ཡོད་པ་tangible
དངོས་སྐྱེས་personal present
དད་གུས་ཅན་devoted
དད་གུས་བྱེད་པ་devote
དད་ཅིང་བསུང་པ་sweet and fragrant
དད་ཆགས་ཅན་faith
དད་པ་ཅན་faith
དད་པ་ཐོབ་པ་obtain faith
དད་པ་ཐོབ་སོང་they obtained faith
དད་པ་བྱེད་པ་believe in
དད་པ་མང་བ་much faith
དད་པ་འབུལ་བ་offer of faith
དད་པ་སྐྱེས་པ་believe
དད་པའི་དབང་པོ་faculty of faith
དད་པའི་ཤུགས་energy of faith
དད་པའི་ས་ground of faith
དད་པར་faithful
དད་པར་གྱུར་པ་have faith
དད་པར་འགྱུར་have faith
དད་བཞིན་དུ་in faith
དད་སློབ་faithful disciple
དན་ད་medicinal herb
དན་ད་ཨུ་ཏ་པ་ལ་medicinal plant
དན་དི་མ་musical instrument
དཔག་གཞི་basis of inference
དཔག་ཏུ་ཡོད་པ་measurable
དཔག་བྱས་measurable
དཔག་ཚོད་presumption
དཔག་ཤོད་village in khams
དཔང་དམའ་བ་low
དཔང་པོར་བཞག་to take as witness
དཔང་བསྟོད་take witness
དཔང་མཐོ་བ་high
དཔང་འཕེར་བ་become witness
དཔངས་སུ་in height
དཔའ་ཆེན་heroic
དཔའ་དམ་sword
དཔའ་པ་medicinal plant
དཔའ་པོ་heroic
དཔའ་པོ་དུལ་epithet of bhimasena
དཔའ་པོ་བརྟན་པ་saffron
དཔའ་བཀོང་བ་humiliated
དཔའ་བོ་ཆེན་པོ་aconite
དཔའ་བོ་དཔའ་མོ་dakas and dakinis
དཔའ་བོ་བརྒྱུད་epithet of vishnu
དཔའ་བོ་བརྟན་པ་saffron
དཔའ་བོས་ashvaghosa
དཔའ་བྱེད་hero
དཔའ་འཁོངས་disheartened
དཔའ་རབ་a country
དཔའ་རྒོད་brave
དཔའ་རྩལ་bravery
དཔའ་རླབས་waves
དཔའ་ལྡན་brave
དཔའ་སྟོབས་bravery
དཔར་ཐོན་ཨང་edition
དཔལ་གཏེར་epithet of rnam sras
དཔལ་གཙོ་bolder
དཔལ་གྱི་བདག་epithet of vishnu
དཔལ་གྱི་བུ་horse
དཔལ་གྱི་ལག་པ་epithet of vishnu
དཔལ་གྲོ་མོན་ལ་town in bhutan
དཔལ་དུ་ཤར་appear as glory
དཔལ་མགོན་glorious lord
དཔལ་མགྲིན་epithet of vishnu
དཔལ་ཡུལ་པ་old school lineage
དཔལ་ལ་intrepidity
དཔལ་སྟུག་majestic
དཔལ་སྟེར་epithet of rnam sras
དཔལ་སྦྱིན་kuvera
དཔུང་གནོན་reinforcement
དཔུང་གི་ཚོགས་army
དཔུང་དམག་army
དཔུང་པ་རྐང་shoulder blade
དཔུང་པ་རྗེ་ངར་small shoulders
དཔུང་པའི་བུ་arms
དཔུང་པའི་འོག་shoulder
དཔུང་བ་shoulder
དཔུང་བུ་ཆུང་infantry
དཔུང་འཁྱུད་clasp the arms
དཔུང་འགོ་shoulder
དཔུང་འཇུམ་པ་contract the arm
དཔུང་རོགས་allies
དཔུང་རྒྱུད་shoulder
དཔུང་རྒྱུས་biceps
དཔུང་ལྡན་mountain
དཔུང་སིག་shrug
དཔེ་example
དཔེ་ཀ་little book
དཔེ་ཁྲིད་textual instruction
དཔེ་ཁྲོམ་book market
དཔེ་གཞན་other example
དཔེ་གཤོད་པ་cite
དཔེ་ཆ་བལྟས་པ་have read the book
དཔེ་ཆ་མགོ་ཚོན་bound book
དཔེ་ཐོ་list of books
དཔེ་དེབ་books
དཔེ་དོན་example and meaning
དཔེ་བཞུས་copied a book
དཔེ་བཟང་model
དཔེ་བརྒྱུད་example lineage
དཔེ་བཤུ་བ་copy a book
དཔེ་བཤུས་copied manuscript
དཔེ་བསགས་འདུག་oh my goodness
དཔེ་བྲལ་beyond analogy
དཔེ་མཁྱུད་fist
དཔེ་མཇལ་བ་to find a copy
དཔེ་མཇུག་end of a book
དཔེ་མཚོན་གྱི་exemplary
དཔེ་མཚོན་པ་illustrate
དཔེ་མཛོད་library
དཔེ་ཙམ་simile
དཔེ་ཙམ་གྱིས་by a mere example
དཔེ་ཚད་exemplar
དཔེ་ཚོང་ཁང་bookstore
དཔེ་ཟླ་comparison
དཔེ་ཟླ་བྱ་བ་example
དཔེ་འཁྱར་པོ་defective simile
དཔེ་འཇོག་པ་for instance
དཔེ་འཚོམ་པ་stitch a book
དཔེ་ཡང་དག་valid example
དཔེ་ཡས་a number
དཔེ་རྒྱུག་book lesson
དཔེ་རྒྱུགས་book lesson
དཔེ་རྣམ་analogy
དཔེ་ལེན་པ་for example
དཔེ་ལྟར་བཟོ་བ་model
དཔེ་ཤུབས་book cover
དཔེ་སྐྲུན་publication
དཔེ་སྐྲུན་ཁང་publishing house
དཔེ་སྒྲ་speech
དཔེ་སྒྲོམ་bookshelf
དཔེ་སྙིང་ancient manuscript
དཔེ་སྟོན་specification
དཔེར་for example
དཔེར་བཞག་པ་setting example
དཔེར་བརྗོད་illustrations
དཔེར་མཚོན་setting example
དཔེར་འབེབས་པ་transcribing
དཔེར་འོས་worthy of emulation
དཔེར་ཡང་even comparison
དཔེས་སྟོན་པ་exemplifiers
དཔོག་fathom
དཔོག་འགྲོ་cross a river
དཔོད་བྲིས་dictation
དཔོད་རྩོམ་elegant composition
དཔོན་ཁག་principality
དཔོན་གསས་ལྷ་divine master
དཔོན་ངན་bureaucrat
དཔོན་དམག་officers and men
དཔོན་པོའི་བཀའ་order of the chief
དཔོན་མགོ་chief
དཔོན་མེད་free
དཔོར་པ་dictate
དཔོར་བ་dictate
དཔོར་འདྲེན་transportation
དཔྱ་འཇལ་བ་payment of revenue
དཔྱ་འཕྲེང་dangerous passages
དཔྱང་བའི་suspense
དཔྱང་འགེལ་suspension
དཔྱངས་ཟིན་པ་slung
དཔྱད་གཞིག་investigation
དཔྱད་ཐབས་therapeutic methods
དཔྱད་མ་on examination
དཔྱད་རྟགས་tick
དཔྱས་འདོགས་པ་blame
དཔྱི་གཉིས་hips
དཔྱི་མགོ་hip
དཔྱི་ཟུར་hip bone
དཔྱི་རུས་hip bone
དཔྱིད་spring
དཔྱིད་ཀ་spring
དཔྱིད་བྱུང་spring
དཔྱིད་མགོ་plum
དཔྱིད་ཟླ་months of spring
དཔྱིད་འདེབས་spring planting
དཔྱོ་བ་change
དཔྱོངས་བ་hang
དཔྱོད་ལ་a tibetan minister
དཔྲལ་པ་forehead
དཔྲལ་བ་ངན་པ་luckless person
དཔྲལ་བར་at the forehead
དབག་ས་covered
དབང་ཁམ་དཀར་པོ་semen virile
དབང་གཏད་grant power
དབང་གཞུ་rainbow
དབང་གསང་hidden initiation
དབང་གིས་by the power of
དབང་གྱུར་པ་conditioned by
དབང་ཆ་ཁྱབ་ཡུལ་jurisdiction
དབང་ཆེན་མཚན་the great ocean
དབང་ཆེས་པས་being very powerful
དབང་ཆོག་supreme initiations
དབང་ཐང་ཆེ་བ་authority
དབང་དུ་to be subjected to
དབང་དུ་འདུས་conquest
དབང་དུང་brass tube trumpet
དབང་པ་conquering
དབང་པོ་གསོ་བ་revive the senses
དབང་པོ་ཆེ་master
དབང་པོ་ཉམས་པ་inferior faculties
དབང་པོ་ཐ་ཤལ་inferior capacity
དབང་པོ་དྲུག་six sense objects
དབང་པོ་ནུས་པ་sensory capacities
དབང་པོ་བཀྲ་བ་name of a medicine
དབང་པོ་མ་ཚང་བ་incomplete faculties
དབང་པོ་མཆོག་best capacity
དབང་པོ་ཞན་weakened capacity
དབང་པོ་འབྲིང་middling faculties
དབང་པོ་རྣོ་sharp faculties
དབང་པོ་ལྔ་five sense powers
དབང་པོའི་གནས་female genitals
དབང་པོའི་ཡུལ་sense object
དབང་པོར་འགྲོ་semen virile
དབང་བརྟན་firm strength
དབང་བསྐུར་རི་hill east of lhasa
དབང་བསྒྱུར་བ་having mastery over
དབང་བུམ་vase of power
དབང་བྱེད་govern
དབང་མཆོག་supreme capacity
དབང་མེད་powerless
དབང་ཚད་jurisdiction
དབང་ཚད་ཆེ་ཤོས་dominant
དབང་ཟ་བ་presumptuous
དབང་འདུས་a district in tsang
དབང་འབྱོར་བ་lordship
དབང་ཡོད་ཀྱིས་by force
དབང་ཡོད་བཤད་violence
དབང་ཡོད་ཤོད་པ་coerce
དབང་ཡོན་initiation price
དབང་རྟུལ་dull faculties
དབང་རྣམ་པ་བཞི་four types of power
དབང་རྣོན་sharp faculties
དབང་རྩ་nerve
དབང་རྩའི་ནད་neuropathy
དབང་ལེན་receive empowerment
དབང་སྔོན་sapphire
དབང་སྡུད་magnetizes
དབང་སྣོན་perceptive
དབབ་པ་devotedness
དབའ་རླབས་waves
དབལ་གཡག་yaks of the dbal
དབལ་གསས་རྔམ་པ་a male deity
དབལ་གྱི་མི་ཕོ་red dbal man
དབལ་ངར་cutting potency
དབལ་ནས་dbal barley
དབལ་བྲག་dbal rocks
དབལ་མཚོ་dbal lake
དབལ་མེ་dbal flames
དབལ་རི་dbal mountains
དབུ་གུར་sleeping tent
དབུ་ཆོས་chief instructor
དབུ་དྲངས་at the beginning
དབུ་ནས་from the beginning
དབུ་པན་conical lama hat
དབུ་ཕྱོགས་སུ་at the beginning
དབུ་ཕྲེང་bubbles on water
དབུ་མ་འཇུག་པ་madhyamakavatara
དབུ་འཕངས་helmet
དབུ་རིལ་shaved head
དབུ་རུ་lhasa district
དབུ་རྔས་pillow
དབུ་རྩེ་pinnacle of temple
དབུ་ཤོག་title page of a book
དབུགས་breath
དབུགས་གཏོང་བ་breathe
དབུགས་ཆེན་great encouragement
དབུགས་ཐག་stamina
དབུགས་ཐུང་short breath
དབུགས་ཕྱུང་relax
དབུགས་བྲལ་breath is stopped
དབུགས་བྲལ་གདན་corpse seat
དབུགས་འཐེན་པ་inhale
དབུགས་འདྲེན་confidence
དབུགས་འབྱུང་forgive
དབུགས་འབྱུང་བ་exhalation
དབུགས་རིང་sighing
དབུགས་རྔུབ་to inhale
དབུགས་རྔུབ་པ་inhalation
དབུགས་རྡོས་པ་to pant
དབུགས་སུབ་suffocation
དབུགས་ཧལ་to sigh
དབུར་ལྟིར་iron
དབུལ་པོ་poor
དབུལ་པོར་གྱུར་poor
དབུལ་བ་སེལ་བ་relieve want
དབུལ་མོ་beggar
དབུས་middle
དབུས་ཀྱི་central
དབུས་ཐིག་ལེ་center point
དབུས་དུ་སྟོད་upper dbu
དབུས་ནས་འཛག་crystal gem
དབུས་སྣམ་woollen cloth
དབེན་པའི་གནས་solitary places
དབེན་ཞིང་isolated place
དབོན་མ་grand daughter
དབྱང་རླངས་oxygen
དབྱངས་ཅན་vowel
དབྱངས་ཟིན་པ་hung
དབྱངས་འཐེན་པ་singing to keep time
དབྱངས་ཡིག་vowel
དབྱར་གྱི་དཔལ་the glory of summer
དབྱར་ཆར་summer rain
དབྱར་ཉི་ལྡོག་summer solstice
དབྱར་བྱུང་summer
དབྱར་ཞྭ་summer hat
དབྱར་སྐྱེས་summer born
དབྱར་སྐྱེས་རྔ་thunder
དབྱལ་བ་hell being
དབྱི་གུ་small stick
དབྱི་དམར་red lynx
དབྱི་ནག་black lynx
དབྱི་ཕྲུག་young lynx
དབྱི་མོ་female lynx
དབྱི་ཙེ་chair
དབྱི་ཚང་lair of the lynx
དབྱི་ལྤགས་skin of lynx
དབྱིག་གཉེན་vasubandhu
དབྱིག་གི་ཁུ་བ་name of sita river
དབྱིག་གུ་hiccough
དབྱིག་པ་clubs
དབྱིག་བཤེས་vasumitra
དབྱིག་མང་much wealth
དབྱིག་མཛོད་safe for valuables
དབྱིག་མེད་poor
དབྱིངས་རྣམ་དག་pure space
དབྱིངས་སྟོང་empty space
དབྱིད་རྡོ་རྗེ་name of he ba dzra
དབྱིན་ཇིའི་མི་british
དབྱིབས་shape
དབྱིབས་ཁ་དོག་shape and color
དབྱིབས་ཅན་symmetrical
དབྱིབས་འགྱུར་transformation
དབྱིབས་ལ་ཟེར་diamond
དབྱིབས་ལེབ་tabulate
དབྱིབས་སུ་situation
དབྱུག་mace
དབྱུག་གུ་གསུམ་three poles
དབྱུག་ཏོ་ཅན་wielding a stick
དབྱུག་ཐོ་mace
དབྱུག་འཛིན་epithet of vishnu
དབྱུག་རྡོ་sling
དབྱེ་གཞི་basis of division
དབྱེ་དཀར་white lynx
དབྱེ་དུ་in extent
དབྱེ་བྱེད་cheat
དབྱེན་བྱེད་cheat
དབྱེན་སེལ་exorcism of discords
དབྲ་tibetan tribe
དམ་ཁ་seal
དམ་དུ་tightly
དམ་དུ་འཁྱུད་clasp tightly
དམ་དུ་འཛིན་to hold as supreme
དམ་དེ་འདྲ་such a thing as
དམ་པ་གསུམ་three excellences
དམ་པ་ཆོས་holy doctrine
དམ་པ་མི་ལྡན་unholy
དམ་པ་ཡིན་པ་excellence
དམ་པའི་ཚུལ་noble intention
དམ་པའི་ལུགས་holy tradition
དམ་པོ་གཟུང་བ་clench
དམ་པོ་བཅིང་བ་fasten
དམ་པོ་བཟོ་བ་tighten
དམ་པོ་ཟིན་པ་grip
དམ་བཅའ་ཕུལ་vowed
དམ་བཅའ་བཞག་པ་vow
དམ་བཅའ་འཇོག་to take an oath
དམ་བཞིན་according to samaya
དམ་བསྒྲགས་restriction
དམ་ཚིག་མེད་པ་faithless
དམ་ཚིག་འདྲལ་བ་break a promise
དམ་ཚིག་ལྡན་པར་faithfully
དམ་ལྡན་དུ་faithfully
དམ་སྲག་རྫོང་place in tibet
དམ་སྲི་gnome spirit
དམག་army
དམག་ཁྱུ་troop of soldiers
དམག་གསེབ་army
དམག་གི་ཚོགས་army
དམག་གི་རུ་brigade
དམག་གི་ས་གཞི་battlefield
དམག་གུར་military tent
དམག་གྲུ་warship
དམག་བསྐུལ་military recruitment
དམག་བློན་military officer
དམག་མི་soldiers
དམག་མི་ལེན་པ་civilian
དམག་འགོ་commander of an army
དམག་རུ་troop
དམག་རུམ་darkness
དམག་རྒྱབ་པ་war
དམག་ལིངས་general chase
དམག་ཤུགས་military force
དམག་ས་battlefield
དམག་སྒར་ཆེ་བ་regiment
དམག་སྒར་འཆའ་བ་pitch a camp
དམག་སྡེ་platoon
དམག་སྤྱི་ཁང་army headquarters
དམག་སྦྱོང་བ་drill
དམངས་ཕལ་པ་vulgar common people
དམངས་མིང་ཅན་common people
དམངས་མོ་woman of low caste
དམན་གནས་lower abodes
དམན་ཆུང་young girl
དམན་པའི་སེམས་inferior mind
དམན་མཛེས་མ་beautiful woman
དམན་ས་བཟུང་བ་modest
དམའ་ཆགས་པ་crestfallen
དམའ་པོ་low
དམའ་བརྗོད་slander
དམའ་འབེབ་blasphemy
དམའ་འབེབས་ཀྱི་defamatory
དམའ་རུ་གཏོང་བ་lower
དམའ་རུ་ཕྱིན་པ་abate
དམའ་རུ་སོང་བ་degenerated
དམར་red
དམར་ཁྲ་red stripes
དམར་གསལ་clear red
དམར་ཆ་red element
དམར་ཆུང་small profit
དམར་ཐོར་measles
དམར་ནག་dark red
དམར་པོ་red
དམར་པོ་རྭ་ཅན་donkey
དམར་པོའི་ལྟ་བ་communism
དམར་བའི་སྤྱན་red eyes
དམར་ཙ་མཚལ་ཁ་ruddy speckled bull
དམར་ཚུར་red paint
དམར་ཞད་reddish
དམར་ཡོལ་red chinaware
དམར་རྐྱང་crimson
དམར་ལམ་པ་reddish
དམར་ལྗང་greenish red
དམར་ཤོག་communist
དམར་སེལ་red exorcism
དམར་སྨུག་dark red
དམར་ཧྲང་བཟོ་བ་denude
དམས་བྱེད་scorpion
དམིག་བུ་kind of worm
དམིགས་ཀྱི་གསལ་clear to the mind
དམིགས་གསལ་clear to the mind
དམིགས་པ་དག་པ་pure perception
དམིགས་བསལ་exception
དམིགས་བསལ་གྱི་particular
དམིགས་མཚན་trace
དམིགས་སུ་བཀར་detailed
དམུ་མདོ་demon of dropsy
དམུ་རྫིང་ཅན་dropsy
དམུག་པ་darkening
དམུས་ལོང་blind person
དམེ་ལག་contaminated hands
དམེ་ཤ་contaminated meat
དམོད་བོ་formula
དམྱལ་hell
དམྱལ་ཁམས་hell realms
དམྱལ་བ་པ་hell being
དམྱལ་བའི་infernal
དའུ་kind of fever
དའུ་བུ་ཚ་orphan boy
དར་གྱི་གོས་silk dress
དར་གྱི་འབུ་silkworm
དར་ཆགས་icy formation
དར་ཆགས་པ་frozen over with ice
དར་དཔྱང་silk scarf
དར་དམང་པ་raw silk
དར་པོ་adult
དར་ཕྱེད་youth
དར་ཕྲུ་pennant
དར་བབ་མ་maiden
དར་བབས་youth
དར་བུ་kind of red cloth
དར་མའི་ལུས་youthful body
དར་ཚོན་colored sand
དར་ཟམ་ice bridge
དར་འཕན་silk hangings
དར་འབུ་silkworm
དར་ཡབ་silk fan
དར་ར་whey
དར་རྡོ་grinding stone
དར་ཤམས་silk garment
དར་ཤོག་silk paper
དར་སྐུད་silk thread
དར་སྒ་walnut tree
དར་སྨན་alum
དར་སྲི་disturber of adults
དར་སྲིན་silkworm
དལ་leisure
དལ་ཁ་misfortunes
དལ་གྱིས་གཏེམ་to slowly press
དལ་གྱིས་འགྲོ་walk slowly
དལ་གྱིས་འཇུག་inhale slowly
དལ་གྱིས་ལངས་slowly got up
དལ་ཅིག་བཞུགས་remained for awhile
དལ་ཅིག་འཇོག་leave for awhile
དལ་དུ་ཆུག་let be
དལ་དུ་བཅུག་allow to be quiet
དལ་པོ་བྱེད་པ་slow
དལ་པོར་ཕྱིན་པ་crawl
དལ་བ་leisure
དལ་བའི་རྟེན་human existence
དལ་བུ་slow
དལ་བུས་བཏང་exhale gently
དལ་བུས་འགྲོ་མ་she who moves slowly
དལ་བུས་རྔུབ་gently inhale
དལ་བོན་a bon sect
དལ་བོན་ལུ་གུ་bon of epidemics
དལ་མ་dancing woman
དལ་ཞིང་གཡོ་བ་placid flow
དལ་འབྱོར་leisure and fortune
དལ་ལ་འཇམ་པའི་slow and melodious
དལ་ལ་ལྷོད་པའི་slow and relaxed
དལ་ལ་སྙོམས་པ་slowly and evenly
དལ་སྐབས་leisure
དི་ཀི་assemblage
དི་ཏི་drunk
དིག་སྙན་pigeon
དིམ་པ་sink
དིའོ་ཞེས་this is what it is
དིར་དིར་thundering noise
དུ་ཀུ་ལའི་གོས་silk cloth
དུ་ཁུག་pipe
དུ་ཁུང་chimney
དུ་གཅིག་ཅིག་at a certain time
དུ་ཐག་tobacco
དུ་བ་smoke
དུ་བ་ཅན་smoky
དུ་བ་ན་བུན་smoke and mist
དུ་བ་མི་ཟད་པ་a bon hell
དུ་བ་འཐུལ་བ་raise smoke
དུ་བ་འཚུབས་hornet
དུ་བའི་ཏོག་a comet
དུ་བའི་དྲེག་པ་soot
དུ་མའི་ངོ་བོ་many entities
དུ་མས་with many
དུ་སམ་drinks
དུ་སྐད་howl
དུ་སྨུག་brown
དུག་poison
དུག་གཉེན་antidote to poison
དུག་ཅན་poisonous
དུག་ཅན་མཚོ་ocean
དུག་ཅུ་ནས་early barley
དུག་ཆགས་mischievous
དུག་དྲག་པ་virulent poison
དུག་བཅོམ་epithet of buddha
དུག་རྩ་species of aconite
དུག་རྫས་poisonous substances
དུག་ལོ་ཅན་alstonia tree
དུག་ལོག་dress
དུག་སོ་fang
དུག་སྣ་དགུ་nine poisons
དུག་སྦྲང་mosquito
དུག་སྨན་aconite
དུང་གི་དཀར་པོ་white conch shell
དུང་དབྱི་white lynx
དུང་ཕོར་conch shell
དུང་ཕྲེང་conch necklace
དུང་བར་decently
དུང་མཆོད་conch shell
དུང་ཚང་family
དུང་འབུད་པ་blow a shell
དུང་རྣ་conch earrings
དུད་gray
དུད་ཁུང་chimney
དུད་དུད་ཀུ་ཀུ་dove
དུད་པ་འཁྱིམས་encircling fog
དུད་བལ་soot
དུད་སོལ་མ་vetali
དུབ་ཅན་fatigue
དུམ་དུམ་stub
དུམ་བུ་ཅན་fractional
དུམ་བུ་མིན་entire
དུམ་བུར་piecemeal
དུམ་རེ་ཡེངས་པ་occasional wandering
དུའང་briefly
དུར་ཁང་tomb
དུར་བ་རྩ་kusha grass
དུར་བས་འཆི་scorpion
དུར་རྐོ་བ་dig a grave
དུར་ལེན་sort of vampire
དུར་སྒམ་coffin
དུར་སྒྲོམ་coffin
དུར་སྟོད་upper dbu
དུལ་བ་བྱེད་པ་disciplining
དུལ་བ་ལེགས་good discipline
དུལ་བ་ལྷ་vinitadeva
དུལ་བའི་སེམས་disciplined mind
དུལ་བར་བྱེད་པ་disciplining
དུལ་བར་འདོད་courage
དུས་ཀུན་all times
དུས་ཀྱི་at times
དུས་ཀྱི་ཆ་ཤས་divisions of time
དུས་ཀྱི་ཐུང་བ་brief time
དུས་ཀྱི་མཐའ་ལ་in limited time
དུས་ཀྱི་ཟླ་བ་temporal month
དུས་ཀྱི་རླུང་prana of time
དུས་ཁྱད་པར་ཅན་holy day
དུས་གཅིག་in a moment
དུས་གཞན་other time
དུས་གཞན་ན་at another time
དུས་གཞན་ཞིག་ན་at some other time
དུས་ངང་པོ་bad time
དུས་ངན་crisis
དུས་ཅན་a flower
དུས་ཉིད་ན་in the very moment
དུས་ཐམས་ཅད་all times
དུས་ད་ལྟ་བ་present tense
དུས་དང་རྣམ་པ་constantly
དུས་དུས་སུ་from time to time
དུས་དེ་ཉིད་དུ་in that very time
དུས་དེ་ཙ་ན་at that time
དུས་ནམ་ཡང་all the time
དུས་ནའང་as long as
དུས་ནས་from the time of
དུས་པ་wept
དུས་པོ་ཆེ་auspicious time
དུས་ཕྱིས་later time
དུས་བཏབ་མ་passionate woman
དུས་བདེ་བ་good times
དུས་བཟང་holy day
དུས་མཉམ་གྱི་contemporary
དུས་མཉམ་པ་ཉིད་simultaneous
དུས་མཉམ་བཟོ་བ་synchronize
དུས་མཉམ་ལ་simultaneously
དུས་མཚུངས་པ་contemporary
དུས་མི་རིང་བ་shortly
དུས་མིན་འཆི་untimely death
དུས་ཚད་length of time
དུས་ཚིགས་year
དུས་ཚོད་ཏག་ཏག་sharp
དུས་ཚོད་ལྷག་མ་overtime
དུས་ཞབས་dark age
དུས་ཞིག་ལ་sometime
དུས་ཟིན་པ་cried
དུས་འཁྲུགས་time of turmoil
དུས་འགྱངས་a long time after
དུས་འདའ་wasting their time
དུས་འདེབས་པ་fix a time
དུས་འཚུབས་time of turmoil
དུས་ཡིག་ཅན་learned
དུས་རིང་a long time
དུས་རིང་དུ་more protracted
དུས་རིང་པོ་long delayed
དུས་རེ་ཞིག་at some time
དུས་རེ་ཞིག་པ་at some time
དུས་རྙིང་པའི་ancient
དུས་རྟག་ཏུ་permanently
དུས་རྣམས་seasons
དུས་ལ་ལྟོས་པ་to rely upon time
དུས་ཤེས་པ་ཉིད་cognition of time
དུས་སང་next year
དུས་སུ་འབབས་པ་timely
དུས་སུ་རུང་བ་timely
དུས་སྐད་ཅིག་moment
དུས་སྔ་ཕྱི་past and future
དུས་སྙིགས་degenerated age
དུས་སྟོན་གྱི་festive
དུས་སྤུར་བ་pass time quickly
དུས་སྦྱོར་པ་astrologer
དེ་ཀ་ཙམ་དུ་barely
དེ་ཀ་ལགས་just that
དེ་ཀ་ལྟར་just so
དེ་ཀོ་that very
དེ་ཁོ་ནར་in reality
དེ་ག་རེད་these are
དེ་གཉིས་ལས་from these two
དེ་ཉིད་ཀྱང་precisely
དེ་ཉིད་མཆོག་highest reality
དེ་དག་ཀུན་all those
དེ་དག་ཐམས་ཅད་all those
དེ་དག་མཚན་མར་signs of those
དེ་དག་རྣམས་ནི་for them
དེ་དགོང་that night
དེ་དང་by that very thing
དེ་དང་དེར་here and there
དེ་དུ་there
དེ་དེ་exactly that
དེ་དོན་for that
དེ་ནས་བྱུང་it arose from that
དེ་བཞིན་ཡིན་ན་if it is like this
དེ་བཞིན་ཤོག་let it be so
དེ་བའི་ཁར་in the hope of
དེ་བས་ཀྱང་more than that
དེ་བས་བཟུང་from that time
དེ་བྱར་acting in some way
དེ་བྱུང་ན་when this happens
དེ་མ་ཐག་པ་immediately precede
དེ་མ་ཐུག་ཏུ་abrupt
དེ་མཐའ་round that
དེ་མིན་རྣམས་those excepted
དེ་མོ་necessity
དེ་ཙམ་གྱིས་by just that
དེ་ཙོ་those
དེ་ཚུལ་in this regard
དེ་ཚེ་at that time
དེ་ཚོས་by those who
དེ་འདྲ་མ་like that
དེ་འཕྲལ་དུ་at once
དེ་འབྲེལ་connected with that
དེ་འཛིན་acceptance
དེ་ཡང་མ་རེད་neither
དེ་ཡི་ངོ་བོ་essence of that
དེ་ཡི་འདུ་ཤེས་conception of that
དེ་ཡི་འོག་ཏུ་higher than that
དེ་ཡི་རྒྱུ་cause of that
དེ་ཡིན་པས་that being so
དེ་རིང་ཉིད་ནས་today
དེ་རྗེས་སུ་subsequently
དེ་རྟིང་ལ་after that
དེ་རྟོགས་realizing this
དེ་རྣམས་those
དེ་ལ་གནས་just stay with that
དེ་ལ་བྱ་བ་acting in some way
དེ་ལས་ཀྱང་གཞན་other than that
དེ་ལས་གཞན་ཀུན་for all others
དེ་ལས་གཞན་པ་other than that
དེ་ལས་བྱུང་བ་arisen from that
དེ་ལས་ཡག་བ་better
དེ་ལས་ལྡོག་the opposite
དེ་ལྟ་བ་even now
དེ་ལྟ་ལ་although
དེ་ལྟར་འདུག་ན་if that is the case
དེ་ལྟར་ཡིན་ཏེ་it is just so
དེ་ལྡན་truth
དེ་ཤོ་a tribe in tibet
དེ་སྐད་at these words
དེ་སྐད་ཅེས་after quoted speech
དེ་སྲིད་དུ་just so long as
དེང་གི་དུས་present time or age
དེང་དུས་ཀྱི་current
དེང་ཕྱིན་ཆད་henceforth
དེང་འདིར་today
དེང་སང་མེད་པ་extinct
དེད་འདྲེན་a large number
དེབ་ཆུང་leaflet
དེབ་ཚོང་ཁང་book seller
དེབ་སྐྱེལ་registration
དེབས་ཡུ་handle of an awl
དེའི་གོང་དུ་before that
དེའི་ཉིན་པར་on that day
དེའི་དུས་ལ་at that time
དེའི་དུས་སུ་at that time
དེའི་ནང་ནས་from out of these
དེའི་ཕར་ལ་beyond
དེའི་ཕྱིར་because of that
དེའི་མཚན་མོ་in that night
དེའི་ཚུལ་that principle
དེའི་ཚེ་at that time
དེའི་འོག་ལ་under that
དེའི་རྒྱུ་མཚན་the reason is this
དེའི་རྒྱུས་because of that
དེའི་རྗེས་སུ་subsequently
དེའི་སང་the day after
དེའི་སྔོན་དུ་prior to that
དེའི་སྟེང་དུ་in addition to those
དེའུ་ཚིག་ཙམ་but for that
དེར་ཐལ་so far so good
དེར་ཕྱིན་went there
དེར་འདུས་gathering there
དེར་ཡང་moreover
དེར་ཤར་appear as them
དེར་སོང་gone thither
དེས་བ་therefore
དོ་གལ་ཆེ་བ་important
དོ་དགོང་tonight
དོ་པོ་ཁུར་མཁན་porter
དོ་པོ་ཕབ་པ་unload
དོ་པོ་བཟོ་བ་pack
དོ་ཕོག་effect
དོ་ཕྲུག་orphan
དོ་བདག་owner
དོ་བོ་load
དོ་འཁུར་concern
དོ་འཕུར་བྱས་about to fly
དོ་ཡ་pair
དོ་རེ་two each
དོ་ལོག་kind of worm
དོ་ཤི་དོ་ཆད་near to death
དོ་སྣང་མེད་པ་careless
དོགས་གསལ་བ་remove doubt
དོགས་དང་བྲལ་བ་free from doubts
དོགས་པ་ཟ་བ་suspect
དོགས་མཐའ་limit of doubt
དོགས་ཟོན་ཅན་mindful
དོང་ཁ་kind of radish
དོང་ཁའི་འབྲུ་medicinal fruit
དོང་གི་ནང་interior of a pit
དོང་ཆུ་well water
དོང་ཉལ་snake
དོང་པ་padlock
དོང་པ་འཇུག་པ་put a padlock on
དོང་བྲུབས་put in a hole
དོང་ཟེ་wasp
དོང་འདྲེ་ghost
དོང་ལ་བཅུག་པ་put in a hole
དོད་substitute
དོད་ཐུབ་possible equivalents
དོན་གང་གིས་wherefore
དོན་གཅིག་པ་synonymous
དོན་གཅོད་པ་mission
དོན་གཉིས་ཅན་ambiguous
དོན་གནད་རྣམས་real reasons
དོན་གནན་ལྡན་པ་significant
དོན་གོ་བྱེད་intelligibility
དོན་གྱི་ཆ་རགས་general meaning
དོན་གྱི་དམ་པ་highest truth
དོན་གྱི་རྣལ་མ་authentic state
དོན་གྱི་རྫོགས་fulfills all aims
དོན་གྱི་ལྟ་བ་real view
དོན་གྱིས་བསྟན་implicitly explain
དོན་གྲུབ་པ་complete
དོན་ངོ་མ་fact
དོན་ཆུང་vain
དོན་ཆེན་benefactors
དོན་ཇི་ལྟ་བ་authentic sense
དོན་ཉིད་messages
དོན་ཐམས་ཅད་all meanings
དོན་དང་ཡི་གེ་meanings and words
དོན་དམ་པའི་ལྷ་ultimate deity
དོན་དམ་ཚུལ་ultimate mode
དོན་དམ་ཤེས་པ་ultimate cognition
དོན་དུ་ངེས་པ་which means that
དོན་དུ་ཆེན་པོ་greatly meaningful
དོན་དེ་ཉིད་this condition
དོན་ཕྱིར་for the sake of
དོན་ཕྱྭ་important activities
དོན་བཟང་པོ་good meaning
དོན་བརྒྱུད་actual transmission
དོན་བསྒྱུར་alter the meaning
དོན་བྱེད་perform a function
དོན་བྱེད་པ་perform a function
དོན་མ་ནོར་true meaning
དོན་མཐུན་པ་factually concordant
དོན་མཚོན་represent
དོན་མཛད་to bring benefits
དོན་མི་འདུག་it has no sense
དོན་མིན་there is no point in
དོན་མེད་པ་ཉིད་meaninglessness
དོན་མེད་པར་meaninglessly
དོན་མེད་ལས་useless actions
དོན་ཙམ་mere haeceity
དོན་ཟབ་profound meaning
དོན་ཟབ་པ་of deep meaning
དོན་འགྲེལ་description
དོན་འཆུགས་པ་mistaken aim
དོན་འདྲ་mean the same thing
དོན་འབྲས་effect
དོན་ཡོད་meaningful
དོན་ཡོད་པ་meaningful
དོན་ཡོད་པ་ཉིད་meaningfulness
དོན་རང་མཚན་ontological objects
དོན་རྟོགས་comprehended
དོན་ལྟར་in the sense that
དོན་སྙིང་པོ་gist
དོན་སྤྱི་ཙམ་general idea
དོན་སྨེས་wisdom
དོབ་cannon
དོམ་bear
དོམ་འདྲ་པོ་bearish
དོམ་ཤ་རྒྱ་བོ་speckled bear
དོམས་མེད་insatiable
དོར་བར་བྱ་བ་should discard
དོར་རིང་long drawers
དོར་ལེ་a demon
དོལ་པ་native of dol
དོལ་བོན་sect of bon
དོས་བུ་རྒྱབ་པ་bundle
དོས་འབོགས་པ་unload
དྭ་ལི་pulse
དྭང་ག་appetite
དྭངས་ཆེན་པོ་very glittering
དྭངས་པའི་འོད་pure lights
དྭངས་པོ་very clear
དྭངས་མ་clear
དྭངས་མི་འདུག་it has no brightness
དྭངས་ཞེན་ཅན་amateur
དྭངས་ཤེལ་clear crystal
དྭངས་སང་limpidity
དྭངས་སེང་ངེ་utterly fresh
དྭངས་སྨན་maiden
དྭའུ་བུ་ཚ་orphan
དྭོགས་པ་doubt
དྭོགས་པ་ཅན་suspicious
དྭོགས་པ་ཟ་བ་suspect
དྭོགས་མེད་doubtless
དྲ་ཀྱ་saucer
དྲ་གཞན་exalted and common
དྲ་ཅི་flat basket
དྲ་བའི་གཞི་field of garlands
དྲ་སྤྱད་scissors
དྲག་གཅོད་violence
དྲག་གནོན་onslaught
དྲག་གིས་firmly
དྲག་གིས་དད་believe firmly
དྲག་ཆས་སྤྲས་armed with
དྲག་ཏུ་ཕྱིན་པ་ameliorate
དྲག་ཏུ་ཕྱོར་བ་strongly billowing
དྲག་ནད་serious illness
དྲག་པའི་ལས་fierce activities
དྲག་པར་stronger
དྲག་པར་བྱེད་པ་raise to nobility
དྲག་པོའི་violent
དྲག་པོའི་ཐོད་ganges river
དྲག་པོའི་ལས་fierce activities
དྲག་བབ་heavy rain
དྲག་བསྡམ་strongly tighten up
དྲག་ཤུགས་impetuous
དྲག་ཤུལ་ferocity
དྲག་ཤེད་group of fierce gods
དྲག་སྐྱེད་ཀྱི་recuperative
དྲགས་རིམ་sufficient
དྲང་གཏམ་plain language
དྲང་གཞག་fair
དྲང་ཅི་flat basket
དྲང་པུར་གྱིས་do it straight
དྲང་པོ་straight
དྲང་པོ་འགྲེངས་to stand upright
དྲང་པོར་བསྲང་straighten up
དྲང་པོར་སྲོང་make straight
དྲང་བའི་ཕྱིར་in order to lead
དྲང་མོ་fair
དྲང་སྲོང་མཆོག་exalted seer
དྲན་གསོས་to remember
དྲན་གསོས་ཐུབ་able to remember
དྲན་གསོས་པ་to recollect
དྲན་ཐོ་རགས་ཙམ་brief notes
དྲན་པ་གཙོ་བོ་main mindfulness
དྲན་པ་གསོ་བ་refresher course
དྲན་པས་གཟུང་to keep presence of
དྲན་མ་བཟང་good memory
དྲན་མཆོག་རྗེ་dearest sir
དྲན་མེད་པ་unconscious
དྲན་ཙམ་བྱ་remain aware
དྲན་འདོད་urge to be mindful
དྲན་འཛིན་fixated mindfulness
དྲན་རུང་བ་memorable
དྲན་རྒྱ་ཅན་scheming
དྲལ་ཏེ་གཤེགས་die and rot
དྲི་ང་བ་bad smell
དྲི་ང་བ་མེད་free from bad smell
དྲི་ང་བ་མེད་པ་odorless
དྲི་ངན་ཁ་བ་stink
དྲི་ཅན་ལྟེ་བ་pod of musk
དྲི་ཆུའི་སྣོད་bladder
དྲི་དྲི་བཟང་perfume water
དྲི་བ་དྲིས་པ་asked
དྲི་བ་འདྲི་བ་ask a question
དྲི་བ་འདྲིས་པ་interview
དྲི་བགོས་པ་saffron
དྲི་བཟང་ཁང་པ་lotus flower
དྲི་བཟང་པོ་sweet smell
དྲི་བསྣོམས་པ་to smell the scent
དྲི་བླང་བ་smell
དྲི་མ་ཁ་ཟིན་པ་stank
དྲི་མ་ངན་པོ་stink
དྲི་མ་དཀུ་bad smell
དྲི་མ་མེད་stainless
དྲི་མ་ལྡན་མ་voluptuous woman
དྲི་མ་སྤངས་པ་abandon defilements
དྲི་མཉམ་པ་equal odor
དྲི་མནམ་པ་bad smelling
དྲི་མི་མཉམ་པ་unequal odor
དྲི་མི་ཞིམ་པ་unfragrant odor
དྲི་མེད་གནས་stainless place
དྲི་མེད་ཆུ་water
དྲི་མེད་མིག་undefiled eye
དྲི་ཞོན་wind
དྲི་ཟའི་ལག་པ་castor oil plant
དྲི་འགྱུར་sal tree
དྲི་རྩད་query
དྲིན་གཟོ་ཅན་grateful
དྲིན་གསོབ་པ་return a kindness
དྲིན་ཆེན་བླ་མ་gracious guru
དྲིན་མི་གཟོ་བ་ingratitude
དྲིན་ལན་གསབ་return kindness
དྲིན་ལན་པ་be grateful
དྲིན་ལན་འཇལ་བ་show gratitude
དྲིན་ལན་ལོན་return kindness
དྲིལ་involvement
དྲིལ་ཆུང་small bell
དྲིལ་ཆེན་gong
དྲིལ་བ་ལ་in a nutshell
དྲིལ་བསྒྲགས་proclamation
དྲིལ་བུ་bell
དྲིལ་སྒྲ་sound of a bell
དྲིལ་སྟེགས་bell stand
དྲིས་ནས་having asked
དྲུག་six
དྲུག་ཅུ་sixty
དྲུག་ཆ་གཅིག་one sixth
དྲུག་པ་sixth
དྲུག་པར་sixthly
དྲུག་པོ་sixth one
དྲུག་པོ་ས་sixth ground
དྲུག་མདོ་བ་follower
དྲུག་སྒྲ་genitive case
དྲུང་ཆ་ཐོན་brighten up
དྲུང་ཆེན་high official
དྲུང་དུ་near to
དྲུང་དུ་བསྟན་to show to
དྲུང་ནས་འབྱིན་drawn from near
དྲུང་ཕུངས་chop the roots
དྲུང་འཚོ་བ་private physician
དྲུང་སོང་ངེ་brighten up
དྲུད་དྲུད་pelican
དྲུབ་པ་sewn
དྲུབས་པ་sewn
དྲེ་mule
དྲེ་ཕོ་mule
དྲེ་བོ་elbow
དྲེག་ནད་gout
དྲེག་པ་ཅན་dirty
དྲེགས་haughtiness
དྲེགས་བྱེད་devil
དྲེད་yellow bear
དྲེད་ཅན་unfeeling
དྲེད་ལྤགས་bear skin
དྲེས་མ་གེ་ཤར་filaments of dres ma
དྲེས་འབྲུ་seeds of grass
དྲེས་འབྲུམ་seeds of grass
དྲོ་པོ་warm
དྲོ་བཏབ་པ་lunch
དྲོ་བར་གྱུར་པ་heat
དྲོ་བར་གྱུར་བ་heat
དྲོ་ཟས་breakfast
དྲོ་ས་warm place
དྲོང་པོ་erect
དྲོང་པོར་aright
དྲོང་ལང་erection
དྲོད་heat
དྲོད་ཡལ་བ་vanishing of warmth
དྲོད་སྨན་stimulant
དྲོན་མ་gentle warmth
དྲོན་མོ་gentle warmth
དྲོས་ཇ་lunch
དྲྭ་བ་གཅོད་པ་to cut the net
དྲྭ་བར་གཞུག་to leave in the net
ན་ཀ་a buddhist sage
ན་ག་ཕ་ནི་a medicinal plant
ན་གི་medicinal seed
ན་གུ་ལེ་plant vatica robusta
ན་ངེས་རིགས་dubious family
ན་ཏི་ཀ་place in india
ན་ད་sound
ན་དགའ་it would be better
ན་དང་མི་ན་disease and health
ན་བ་ཙ་ཏི་young sparrow
ན་བ་ཙ་ཏི་ཀ་a bird
ན་བཟའ་དཀར་པོ་white garment
ན་བཟའ་མནབ་པ་put on clothes
ན་བར་བྱེད་པ་sicken
ན་བུན་བཞིན་like mist
ན་བུན་བུ་མོ་a worm
ན་བུན་འཁྱིམས་encircling fog
ན་མཉམ་མ་female friend
ན་མར་down in
ན་ཚ་ཚབས་ཆེན་serious illness
ན་ཚ་ཡུན་རིང་chronic
ན་ཚ་རྙིང་པ་chronic disease
ན་ཚོད་གནས་པ་a youth
ན་ཚོད་མཉམ་པ་of the same age
ན་ཟུག་གི་སྐད་groan
ན་ཟུག་ཆེན་པོ་excruciating
ན་ཡ་ཀོ་ཏ་village in nepal
ན་ར་place in india
ན་རི་ཀི་ལ་cocoa nut
ན་རི་ཀྲོ་ར་a delicious fruit
ན་རོ་ཆོས་དྲུག་six yogas of naropa
ན་རྫ་sprinkled
ན་ལ་ཀ་bones of the legs
ན་ལ་ད་a sage
ན་ལེ་ཤག་acrid medicine
ན་ལེ་ཤམ་pepper
ན་ལེན་དྲ་monastery in magadha
ན་ལོ་last year
ན་སོ་རྒས་པ་old
ན་སྐད་རྒྱབ་པ་moan
ནག་ཁུང་dark
ནག་ཁུང་ཆགས་པ་blackout
ནག་ཁུང་ནང་darkling
ནག་ཉིལ་blackish liquid
ནག་ཉེས་ཅན་culprit
ནག་ཉེས་ཐོན་པ་found guilty
ནག་ཉེས་པ་convict
ནག་ཉེས་བཟོ་བ་denigrate
ནག་ཉེས་མེད་པ་innocent
ནག་ཐི་black line
ནག་ཐིགས་speck
ནག་ཐུམ་jet black
ནག་ཐོམ་jet black
ནག་ནོག་touching smudge
ནག་ནོག་བཟོ་བ་smudge
ནག་པང་blackboard
ནག་པའི་ཚོགས་variegated
ནག་པོ་black
ནག་པོ་དྲི་ལྡན་black sulphur
ནག་པོ་མགོན་པོ་black spirit
ནག་པོ་སྐབས་krsnapada
ནག་པོ་སྤྱོད་པ་a mahasiddha
ནག་བོན་black bon
ནག་མ་vegetable medicine
ནག་མོ་ལྔ་ལེན་a name of draupadi
ནག་མོའི་ཁོལ་poet kalidasa
ནག་མོའི་འབངས་poet kalidasa
ནག་ཚོང་smuggling
ནག་འཁྲིགས་པ་becoming dark
ནག་ཡོར་deep black
ནག་རྡོག་dot speck
ནག་ལྕེ་poisonous tongue
ནག་སྐྱ་gray
ནག་སྤང་blackboard
ནག་ཧུ་རེ་jet black
ནགས་forest
ནགས་ཀྱི་ཧི་ར་wild boar
ནགས་ཉེ་བ་grove
ནགས་དམན་པ་tree without fruit
ནགས་ན་in the wood
ནགས་ན་དགའ་བ་cuckoo
ནགས་མཐའ་jungle
ནགས་མཐར་solitude of forests
ནགས་མའི་ཀླུང་forest
ནགས་འཐུག་dense forest
ནགས་འདབས་ན་in the wood
ནགས་ལྗོངས་woody district
ནགས་ལྡན་peacock
ནང་ཁོང་སྐེམས་consumption
ནང་ཁོངས་inside
ནང་ཁྲལ་excise
ནང་གཅིག་ཏུ་in one house
ནང་གསུམ་inner precepts
ནང་གསེས་specification
ནང་གི་internal
ནང་གི་ཁམས་internal essence
ནང་གི་འཛིན་ཆས་furniture
ནང་གི་རླུང་breath
ནང་གི་ཨ་མ་housewife
ནང་གུ་གཏོང་བ་admit
ནང་ཆ་intestines
ནང་ཇ་breakfast
ནང་ཐོག་ceiling
ནང་དང་ཕྱི་inner and outer
ནང་དབྱིང་inner mental space
ནང་དབྱིངས་internal expanse
ནང་དུ་གནས་པ་abide inside
ནང་དུ་དྲངས་invite into a house
ནང་དུ་བཟུང་to keep inside
ནང་དུ་བླཏས་པ་looked inside
ནང་དུ་བླུག་པ་enclose
ནང་དུ་འབོད་calls indoors
ནང་དུ་འཛིན་པ་holding inside
ནང་དུ་རབ་གནས་abide internally
ནང་དོ་གི་རིག་buddhist philosophy
ནང་ན་ལྕི་བ་becomes heavier
ནང་ནས་ཕྱུང་was taken out
ནང་པའི་ཆོས་buddhist religion
ནང་པའི་ནང་གཙང་buddhist pure inside
ནང་པའི་བསྟན་པ་buddhist doctrine
ནང་པའི་ལུགས་inner system
ནང་པའི་ལྟ་བ་buddhist philosophy
ནང་པའི་སྟོན་པ་buddhist teacher
ནང་ཕྱོགས་inward
ནང་མཐུན་intimacy
ནང་མི་མཐུན་domestic strife
ནང་མེད་ལ་suddenly
ནང་མོལ་བྱེད་པ་brew
ནང་ཚང་whole family
ནང་ཚུན་within
ནང་ཟབ་མོ་བརྡ་profound inner signs
ནང་འཁྲུགས་civil war
ནང་འགྲོ་entry
ནང་འཛིན་པ་inner fixation
ནང་འཛོམ་པ་combination
ནང་རིག་པ་internal awareness
ནང་རྟོག་internal thoughts
ནང་རྫས་ingredient
ནང་ལ་འགྲོ་ཆོག་you may go inside
ནང་ལ་སོང་go home
ནང་ལས་from among
ནང་ལོགས་སུ་inward
ནང་ཤ་lining
ནང་སོབ་hollow tree
ནང་སྒོ་inner door
ནང་སྟོང་པ་ཉིད་inner emptiness
ནང་སྦྱོང་tuition
ནངས་day after tomorrow
ནད་ཀྱི་རྐྱེན་cause of disease
ནད་ཀྱི་རྟགས་symptom
ནད་ཀྱི་སྨན་remedy for illness
ནད་ཁྲག་diseased blood
ནད་གོ་seat of disease
ནད་ཅན་མ་pregnant woman
ནད་ཉུང་བ་little illness
ནད་དྲག་པོ་plague
ནད་པ་བཟོ་བ་sicken
ནད་པོ་a sick person
ནད་བུ་ཅན་sickly
ནད་མོད་plenty of diseases
ནད་ཚུལ་species of disease
ནད་འགོ་བ་infect
ནད་འགོས་པ་infect
ནད་ཡམས་contagious disease
ནད་རྐྱེན་བྱེད་causes of illness
ནད་ལོག་རྒྱབ་པ་relapse
ནད་སེལ་བ་cure a disease
ནད་སྐྱོན་ཅན་diseased
ནད་སྤང་beyond illness
ནན་ཀྭ་pumpkin
ནན་གྱིས་certainly
ནན་གྱིས་འཚེར་press hard
ནན་ཏང་ཏུ་earnestly
ནན་ཏན་དུ་བསླབ་to engage diligently
ནན་ཏན་བྱ་exert oneself
ནན་དགུག་conjure
ནན་པང་ཕྱི་རས་eraser
ནན་བསྐུལ་insist
ནན་སྐུལ་urge
ནབ་ནུབ་a great number
ནམ་གང་new moon
ནམ་གུང་midnight
ནམ་གྱི་འབྲུག་thunder
ནམ་གྲོལ་ལམ་path of release
ནམ་ཐོ་རེངས་at dawn
ནམ་དགུང་midnight
ནམ་དུས་season
ནམ་དུས་ཀྱི་seasonal
ནམ་ནས་at daybreak
ནམ་པར་especially
ནམ་ཕུགས་future
ནམ་ཕྱེད་ཙམ་ན་about midnight
ནམ་ཕྱེད་ཡོལ་བ་has gone by midnight
ནམ་མཁའ་གཏེར་sky treasure
ནམ་མཁའ་གླིང་cloud
ནམ་མཁའ་མཇལ་sunlight
ནམ་མཁའ་མཐོང་see space
ནམ་མཁའ་ལ་འཕེན་fling into the air
ནམ་མཁའ་སྟོང་པ་void space
ནམ་མཁའི་spatial
ནམ་མཁའི་ཁྱིམ་heavenly mansion
ནམ་མཁའི་ངང་sphere of void space
ནམ་མཁའི་ཆོས་phenomena of space
ནམ་མཁའི་ཏ་མ་ལ་cloud
ནམ་མཁའི་ཐོ་བ་thunder
ནམ་མཁའི་དཀྱིལ་vault of the sky
ནམ་མཁའི་མཐའ་infinite space
ནམ་མཁར་གནས་པ་abide in space
ནམ་ཞིག་ན་at a certain time
ནམ་ཟིན་whenever
ནམ་འཕང་སྤྱོད་vulture
ནམ་ཡང་མེད་never
ནམ་ཡང་འདའ་མེད་never move away from
ནམ་ཡང་ལངས་dawn
ནམ་ཡང་ལངས་ཉེར་almost dawn
ནམ་ཡིན་ཡང་at all times
ནམ་ཡིན་རུང་whenever
ནམ་རིང་long night
ནམ་རྟགས་argument
ནམ་ལང་day break
ནམ་ལངས་ཐང་གསལ་dawn and a clear day
ནམ་སྲོད་ལ་early in the night
ནའི་ལྗོངས་place in tibet
ནར་ནར་པོ་oblong
ནར་ནར་རིང་པོ་projection
ནར་པོ་dung heap
ནར་མོ་oblong
ནར་རྒྱུ་ཡོད་པ་elastic
ནལ་བ་place in tibet
ནལ་བྱ་bird of incest
ནལ་མཚེ་incest
ནལ་ལུ་bastard child
ནལ་ལེ་bastard child
ནས་ཀྱི་སོ་བ་barley cake
ནས་ཆང་བསྙལ་བ་to brew barley beer
ནས་ཆན་barley pap
ནས་ཕྱེ་barley flour
ནས་བསྔོད་པ་reap barley
ནས་འབྲས་བཟང་medicinal millet
ནས་འབྲུ་barley grain
ནས་རྔ་བ་cut barley
ནས་རྗེན་raw unparched barley
ནི་ཡ་མ་a tree
ནིམ་པ་plant
ནིའུ་ལི་weasel
ནུ་བ་suck
ནུ་བ་པོ་suckling
ནུ་མ་གཉིས་མ་women in general
ནུ་མ་བསྣུན་give suck
ནུ་མ་མཐོ་བ་heaving breast
ནུ་མ་ཟུང་pair of breasts
ནུ་མོ་younger sister
ནུ་ཞོ་སྣུན་པ་suckle
ནུ་འབུར་nipple
ནུ་འབོར་nipple
ནུ་འོ་སྟེར་བ་suckle
ནུ་རིན་price of milk
ནུ་རྒྱས་མ་cow
ནུ་ཤ་thoracic muscle
ནུ་སོར་nipple
ནུད་པ་suckle
ནུབ་ཀྱི་རི་western mountain
ནུབ་ཇ་supper
ནུབ་ཏུ་གནས་resident of the west
ནུབ་ནས་འོངས་come from the west
ནུབ་པོ་disappearance
ནུབ་ཕྱོགས་ཀྱི་western
ནུབ་བ་sink
ནུབ་བཞིན་setting
ནུབ་བྱང་northwest
ནུབ་རི་western mountain
ནུར་ནུར་oblong lump
ནུས་ཁྱད་པར་ཅན་a special capacity
ནུས་པ་ཐོན་to be effective
ནུས་པ་དྲག་པོ་wrathful energy
ནུས་པ་ཚོགས་པ་collective force
ནུས་པ་རང་ཆས་intrinsic power
ནུས་བཅུད་nourishing power
ནུས་བྱེད་able
ནུས་ཚད་capacity
ནུས་རུང་ཙམ་mere capability
ནུས་ཤུགས་ཅན་dynamic potent
ནེ་ཙོ་parrot
ནེ་རྩ་མ་པ་place sw of dignaga
ནེ་ལ་kite
ནེམ་softly
ནེམ་ཙམ་ཉིད་ནས་starting very softly
ནེའུ་small fish
ནེའུ་གསེང་grassy valley
ནེའུ་སྲེང་field of moss
ནོ་ཀྲོ་གོང་small town in assam
ནོ་མོ་chos for mongols
ནོ་ཡོན་ཧུ་ཐུག་incarnate lama
ནོག་བཤུས་carbon copy
ནོག་བསྟན་show
ནོགས་ཟིན་to identify
ནོངས་death
ནོན་treat
ནོམ་chos for mongols
ནོར་གཉེར་treasurer
ནོར་གསག་པ་hoard up riches
ནོར་གསང་བ་conceal treasures
ནོར་གྱི་ཉ་བ་security for money
ནོར་ཆར་འབབས་a gem of indra
ནོར་དབྱིག་wealth
ནོར་ནད་murrain
ནོར་བ་ཙམ་mere error
ནོར་བག་ཙམ་རེ་each a little money
ནོར་བགོ་བ་divide property
ནོར་བཅལ་estimated wealth
ནོར་བདག་པོ་heir
ནོར་བཤུགས་exchange property
ནོར་བསྲིས་savings
ནོར་བུ་jewel
ནོར་བུ་ཆུ་ཤེལ་water crystal jewel
ནོར་བུ་དཀར་པོ་crystal gem
ནོར་བུ་ཕ་ལམ་diamond
ནོར་བུ་མཁན་jeweller
ནོར་བུ་མེ་ཤེས་fire crystal jewel
ནོར་བུ་ལྗང་emerald
ནོར་བུམ་vase of wealth
ནོར་བུའི་འོད་a mountain
ནོར་མ་སྲིད་པ་infallible
ནོར་མི་ཉན་པ་useless things
ནོར་མེད་without mistake
ནོར་མེད་པ་poor
ནོར་ཝིའི་ཡུལ་norway
ནོར་ཟས་པ་spendthrift
ནོར་འཁྲིག་པ་pairing of cattle
ནོར་འཁྲུལ་གྱི་wrongful
ནོར་འཆོར་money has fled
ནོར་འདུས་gathering of taxes
ནོར་འཕེལ་prosperity
ནོར་འཕྲོད་presents
ནོར་ལ་བསྲི་economy in riches
ནོར་ལས་འདས་extravagant
ནོར་ལས་རྒྱལ་epithet of arjuna
ནོར་ཤ་beef
ནོར་སོ་mistake
ནོར་སོ་ཅན་blundering
ནོར་སྐྱི་བ་borrow money
ནོར་སྦྱིན་kuvera
པ་father
པ་གོར་place is snyan mo
པ་ཏ་cross
པ་ཏ་ཧ་kind of drum
པ་ཏུ་ཤ་a tree
པ་ད་just
པ་ཕ་father
པ་མ་ལེ་པང་place in tibet
པ་ཡིན་past complement
པ་ར་two
པ་ར་ཁ་cross
པ་རི་ད་kshatriya race
པ་རི་ཛ་ཏི་flower of paradise
པ་རེད་past complement
པ་རྣི་desmodium gangeticum
པ་ཤུ་wild animal
པ་ཤུ་ལི་ཀ་house
པ་སངས་friday
པ་སེ་ticket
པ་སྤ་ལི་long pepper
པག་barley dough
པག་པ་ཅན་skinny
པག་པུ་མཁན་mason
པག་ཕོར་barley flour bowl
པག་ཟན་barley meal
པག་རྩིར་burnt brick
པག་ཤི་teacher
པགས་པ་ཅན་birch tree
པགས་པ་མཉེད་པ་tan hides
པགས་པ་འཐུག་པོ་thick skin
པགས་པའི་ནད་skin disease
པགས་པའི་རིམ་པ་layer
པགས་ཤུན་bark
པགས་ཤོག་parchment
པང་lap
པང་ཀ་crutch
པང་ཁེབ་napkin
པང་ཁེབས་apron
པང་གཅལ་floor
པང་ཆོས་སེམས་a buddhist nun
པང་པར་on the bosom
པད་lotus
པད་ཀོག་forehead
པད་གངས་black mustard
པད་དཀར་མ་celestial courtesan
པད་མ་དམར་པོ་red lotus flower
པད་མ་མཁའ་འགྲོ་padmadakini
པད་མ་འཕྲིལ་བ་swinging lotus
པད་མ་འོད་འབར་name of an opera
པད་མ་རབ་བཟང་མ་tibetan female saint
པད་མའི་གཉེན་sun
པད་མའི་གདན་lotus seat
པད་མའི་གདན་ཅན་indra
པད་མའི་ཆ་ལག་lotus fiber
པད་མའི་དགངས་dang energy of padma
པད་མའི་དགྲ་moon
པད་མའི་བདག་པོ་sun
པད་མའི་མེ་ཏོག་lotus
པད་མའི་ར་ག་ruby
པད་ཚལ་lettuce
པད་འདབ་lotus leaf
པད་རྩ་lotus root
པདྨ་རལ་ruby
པན་ཀྲང་squad leader
པན་ཙི་ཀ་noijin chief
པའམ་or particle
པའི་དབང་གིས་causal connective
པའི་དུས་སུ་when connective
པའི་རིང་ལ་when connective
པའི་རེ་བ་hope construction
པའི་རྗེས་སུ་temporal connective
པའི་སྐབས་སུ་when connective
པའུ་brick
པའུ་རྩེ་kind of tea
པར་ཁང་printing office
པར་གཞི་printing boards
པར་ཅན་pictorial
པར་ཆས་camera
པར་དུ་སྐྲུན་པ་publish
པར་བརྟེན་causal connective
པར་མཁན་printer
པར་མཛུབ་middle finger
པར་ཙ་སོ་ཏི་kind of cotton cloth
པར་འགྲེམས་པ་publisher
པར་འདེབས་པ་print
པར་རྐོ་པ་cutter of type
པར་རྐོ་བ་cut types on boards
པར་རྐོ་མཁན་cutter of type
པར་རྒྱབ་text
པར་རྗེས་impression
པར་ཤིག་a flower
པར་ཤིང་woodblock print
པར་ཤོག་printing paper
པར་སྐྲུན་printing
པར་སྣག་printing ink
པས་ན་because connective
པས་ན་རེད་because construction
པས་ནའོ་because construction
པས་རེད་because construction
པི་cemetery
པི་ཀ་ལི་book shelf
པི་ཆི་water chestnut
པི་ཙུ་ལ་ལ་a gem
པི་ཝང་རྒྱུད་musician
པི་ལིང་demigods
པི་ལིང་འཕར་མ་demigods
པི་ལིན་དའི་བུ་son of pilinda
པིག་པ་མི་གསལ་fool
པིང་ཁྱུ་མ་kite
པིན་ཏ་ར་ཏ་a commentary
པིབ་པ་ལ་peepul tree
པིར་ཁ་བསྣུན་draw out a stroke
པུ་ཏ་ན་a city
པུ་ཏི་book
པུ་ཏོ་པོ་a learned lama
པུ་ན་ཀ་a flower
པུ་བ་press
པུ་རུ་རུ་fluttering
པུ་རུ་ཤ་officer in tibet
པུ་ལི་སི་police
པུ་ལུ་hut built of stones
པུ་ལོ་མའི་དགྲ་epithet of indra
པུ་ཤུའི་སྟེངས་top of a building
པུག་མ་collar bone
པུའུ་ཀྲང་minister
པུར་པུར་fidget
པུར་བ་too intensely
པུས་knee
པུས་གཡས་right knee
པུས་གོང་knees
པུས་མོའི་གནས་knee joint
པུས་ཚིགས་knee joint
པུས་འཁྱུད་meditation belt
པེ་ཙེ་white cabbage
པེ་ཚེ་white cabbage
པེ་ར་flat basket
པེ་སྒང་place in tibet
པེན་པ་pincers
པོ་བོ་grandfather
པོ་མེད་པ་base
པོ་ཚལ་spinach
པོ་ལི་ball
པོ་སོ་ཆ་sesbana grandiflora
པོར་འཛོད་tribe in tibet
པོལ་sort of fever
པྲ་ངན་པ་bad sign
པྲ་ཆལ་སློང་བ་cause merriment
པྲ་པ་ཏ་boat
པྲ་ཚིལ་beeswax
པྲ་རྟགས་omens
པྲ་ལྟས་མོ་divinatory methods
པྲི་ཡ་ཀ་saffron
པྲོག་crest of a cock
པྲོག་ཞུ་ornamental helmet
ཕ་ག་the opposite side
ཕ་གསོད་པ་patricide
ཕ་གི་that
ཕ་གི་ལོངས་stand there
ཕ་གིའི་རི་དེ་that mountain yonder
ཕ་གེར་over there
ཕ་གླང་bull
ཕ་ཇོ་venerable father
ཕ་ཏིང་sweet dried apricots
ཕ་ཐར་སྒྲོལ་boat
ཕ་ཕག་boar
ཕ་བ་fathers
ཕ་བིའོ་fabio
ཕ་བོན་bon fathers
ཕ་བྱེད་པ་sire
ཕ་མ་parents
ཕ་མ་ཆད་fiasco
ཕ་མ་ལ་གུས་པ་respect to parents
ཕ་མཆོར་པོ་handsome man
ཕ་མེས་གོང་མ་ancestor
ཕ་མེས་ནགས་any cemetery
ཕ་མྱེས་ancestors
ཕ་ཚབ་མ་ཚབ་foster parent
ཕ་ཚོ་those
ཕ་ཝམ་boulder
ཕ་འབུན་ancestral
ཕ་རོལ་གྱི་ཆ་far part
ཕ་རོལ་གྱི་དུས་time after death
ཕ་རོལ་གྱི་སྡེ་hostile tribes
ཕ་རོལ་ཏུ་ཕྱིན་perfect
ཕ་རོལ་ཕྱིན་perfection
ཕ་རོལ་བརྟེན་excellent refuge
ཕ་རོལ་བརྣོགས་hidden adversary
ཕ་རོལ་མི་མངོན་ocean
ཕ་རོལ་འཁོར་further bank or side
ཕ་རོལ་འགྲོ་go to the other side
ཕ་རོལ་འགྲོ་བ་go to the other side
ཕ་རོལ་ལྔ་བའི་death
ཕ་རྒན་old father
ཕ་རྒྱུད་ཀྱི་paternal
ཕ་རྟ་stallion
ཕ་ལྷ་གོང་མ་ancestral sovereigns
ཕག་ཀྲུམ་pork
ཕག་ཁྱུ་herd of swine
ཕག་གུང་district in tibet
ཕག་གྲུ་district in lhokha
ཕག་ཉན་བྱེད་པ་eavesdrop
ཕག་ཏོ་རྒྱག་པ་brush
ཕག་པ་pig
ཕག་མཆུ་hog
ཕག་ཚང་sty
ཕག་ཚོན་པོ་plump pig
ཕག་ཟན་pork eater
ཕག་ཟེས་འཕྱག་པ་whisk
ཕག་རི་fort in tibet
ཕག་རྒོད་wild boar
ཕག་ལམ་secret path
ཕག་ཤ་pork
ཕག་སུག་bribe
ཕག་སུག་མ་small dining table
ཕགས་འདབ་cinnamon
ཕང་གསིར་བ་whirl a spindle
ཕང་བུ་spindle
ཕང་ལོ་wheel
ཕང་སེ་མ་ཡིན་པ་infrequent
ཕང་སེམས་careful disposition
ཕང་སེམས་མེད་པ་lavish
ཕངས་སེམས་regret
ཕད་བུ་small handbag
ཕད་མཐིལ་bottom of a sack
ཕད་ཙེ་yak hair sack
ཕད་སྟོང་empty sack
ཕད་སྣམ་sacking
ཕན་ཆད་from here on
ཕན་ཆད་དུ་from here on
ཕན་ཆུང་small cooking vessel
ཕན་ཐུབ་པ་be useful
ཕན་ཐོགས་ཅན་favorable
ཕན་ཐོགས་ཆེ་བ་salient
ཕན་ནུས་ཡོད་པ་effective
ཕན་པ་ཞིག་སྲིད་healing is possible
ཕན་པ་ཡིན་པ་useful
ཕན་པ་ལ་འཇུག་engage in helping
ཕན་པའི་གྲོས་useful advice
ཕན་པོ་beneficial
ཕན་ཕུན་very large numeral
ཕན་མ་ཐོགས་པ་invalid
ཕན་མེད་ཆགས་པ་emaciate
ཕན་ཚུན་གཡོ་reciprocal movement
ཕན་ཚུན་ཐ་དད་mutually different
ཕན་ཚུན་བརྟན་པ་interdependent
ཕན་ཚུན་མཐུན་པ་mutual agreement
ཕན་ཚུན་རྒྱུ་mutual cause
ཕན་ཚུན་ལ་on either side
ཕན་ཚུན་ལ་འཆུས་obstinately perverse
ཕན་ཚུན་སྨྲ་བ་converse
ཕན་འཐོགས་པ་useful
ཕན་འདོགས་འདོད་desire to help
ཕན་ཡོན་ཆེ་བ་great benefit
ཕན་རོགས་subsidiary
ཕན་རོགས་ཅན་helpful
ཕན་ལ་until
ཕན་སེམས་ཅན་thrifty
ཕབས་yeast
ཕམ་ཆད་failure
ཕམ་ཉེས་failure
ཕམ་བཅུག་པ་beat defeat
ཕམ་མཐིང་པ་ཅན་a buddhist of nepal
ཕམ་ཤོར་defeat
ཕའི་གདོངས་པོ་patrimony
ཕའི་ཕ་grandfather
ཕའི་མ་grandmother
ཕར་ཆག་ཕྱིན་པ་fluctuate
ཕར་ཕར་ཕྱིན་པ་to start walking
ཕར་ཕར་འགྲོ་walk away from
ཕར་བཞུད་pray go away
ཕར་མི་མཆིའོ་i do not go away
ཕར་མི་སྣང་not manifest outside
ཕར་ཙམ་ན་on the other side of
ཕར་ཙམ་ནས་from somewhere
ཕར་ཚུར་ལྟ་བ་look around
ཕར་འཁུམ་པ་recede
ཕར་འཁྱམ་པ་roam onwards
ཕར་འགྱངས་པ་prolong
ཕར་འགྲོ་བ་go off
ཕར་འཕུལ་བ་give away in charity
ཕར་སོང་go away
ཕལ་ཀུ་ཤམ་birth
ཕལ་ཀུ་ཤི་birth
ཕལ་ཆེར་བ་most
ཕལ་པ་ordinary
ཕལ་མེད་narrow
ཕལ་ལས་འཕགས་པ་far excel others
ཕས་by the father
ཕས་ཀྱི་རྒོལ་བ་arguments by others
ཕིང་ཕང་ཆིའུ་table tennis ball
ཕིང་ཕང་སྤོ་ལོ་ping pong ball
ཕིབས་པག་roof tile
ཕིའོ་ticket
ཕིར་བ་fall down
ཕུ་ཀྲི་feet
ཕུ་ཀྲི་དྲུག་fathom
ཕུ་གྲས་elder brother
ཕུ་ཆུའི་རྒྱུན་upland stream
ཕུ་ཐག་ཆོད་solved
ཕུ་དུང་གི་ཁ་cuff
ཕུ་དུང་ཡོད་one with sleeves
ཕུ་དུང་རྩེ་sleeve edges
ཕུ་ཚུགས་སུ་fervently
ཕུ་ཡོད་one with sleeves
ཕུ་རུང་sleeves
ཕུ་རོན་pigeons
ཕུ་རྒྱག་པ་blow
ཕུ་རྒྱབ་puff
ཕུ་རྡུགས་bewildered person
ཕུ་ལུང་sleeve
ཕུ་ཤུད་hoopoe
ཕུག་གཏོར་primary gtor ma
ཕུག་ཉལ་bear
ཕུག་ཏུ་into the hollow
ཕུག་ཐག་ཆོད་པ་to resolve fully
ཕུག་པ་ཆེན་པོ་big cave
ཕུག་རགས་stack of straw
ཕུག་རྟེན་support of the home
ཕུགས་གཏུག་ལ་to the very depth
ཕུགས་གྲོགས་spouse
ཕུགས་བསམ་ideal
ཕུགས་བསམ་ཅན་provident
ཕུགས་མ་interior
ཕུགས་རེ་ideal
ཕུང་aggregate
ཕུང་གཞི་destruction
ཕུང་དཀྲུག་disturbance
ཕུང་དུང་མ་waistcoat
ཕུང་པོ་བདུད་embodiment devil
ཕུང་པོ་ལྔ་five aggregates
ཕུང་པོར་བྱས་heaped
ཕུང་བར་འགྱུར་to destroy oneself
ཕུང་ལ་འདེབས་make meaningless
ཕུད་གཏོར་མ་select portion
ཕུད་དུ་བསྐུར་best
ཕུན་ཚུན་mutual support
ཕུབ་ཤུབས་cover of a shield
ཕུབ་སྐོར་round shield
ཕུའུ་ཁེ་playing cards
ཕུར་བདར་rub
ཕུར་བུ་thursday
ཕུར་མ་powder
ཕུར་མ་གསུམ་པ་medicinal root
ཕུར་མཉེ་massage
ཕུར་མོང་medicament
ཕུར་མོང་སྒང་a place in tibet
ཕུར་ཟོར་dart
ཕུར་རྙི་mouse trap
ཕུལ་གང་handful
ཕུལ་ཏེ་having offered
ཕུལ་ཕྱིན་full development
ཕུལ་ཡང་ཏོག་peak
ཕེ་ཕེ་ཞིབ་མོ་fine powder
ཕེ་ཤ་exclamation
ཕེབས་དང་let us go
ཕེབས་པ་to attune
ཕེབས་པ་ལེགས་welcome to
ཕེབས་བསུ་ཞུ་བ་greet
ཕེབས་བྱམས་chair
ཕེབས་བྱས་palanquin
ཕེབས་རྒྱུ་should go
ཕེབས་རྡོག་just about to start
ཕེབས་ལམ་དུ་while traveling
ཕེབས་སྒུག་waiting
ཕོ་ཁྲོམ་multitude of men
ཕོ་གདོང་male figure
ཕོ་གདོན་gdon of men
ཕོ་གཞོན་young man
ཕོ་གཟེར་stomach ache
ཕོ་གཡས་right side for males
ཕོ་གཡོན་left side for males
ཕོ་གོས་male dress
ཕོ་ཆེན་gentlemen
ཕོ་ཉ་messenger
ཕོ་ཉ་བཀྱེ་despatched an envoy
ཕོ་ཉ་མུ་དྲ་mudra messengers
ཕོ་དབང་male organ
ཕོ་དྲེ་mule
ཕོ་དྲོད་digestion
ཕོ་བ་གདགས་immediate
ཕོ་བ་རིལ་black pepper
ཕོ་བ་ལྗིད་པ་clog the stomach
ཕོ་བོ་elder brother
ཕོ་མཆོར་པོ་handsome man
ཕོ་མོ་male and female
ཕོ་མོ་མེད་no sexual difference
ཕོ་མོ་ལྷན་ཅིག་live harmoniously
ཕོ་ཟོ་manly
ཕོ་ཟོ་བཀྲ་བ་masculinity
ཕོ་རོག་མིག་a medicinal herb
ཕོ་རྐྱང་male wild ass
ཕོ་རྣམས་males
ཕོ་རྨོངས་penis
ཕོ་ལིང་ག་masculine gender
ཕོ་ལོག་stomach disease
ཕོ་ལོང་jasmine
ཕོ་ལྟར་manly
ཕོ་ལྷ་བ་a family name
ཕོ་སོ་one of position
ཕོ་སྐྱེས་male
ཕོ་སྒོ་masculinity
ཕོ་ཧྲང་ང་bachelor
ཕོག་ཁེབས་quilt
ཕོག་དཔོན་paymaster
ཕོག་རྒྱར་meat allowance
ཕོགས་ཚད་ration
ཕོང་གྱུར་བ་afflicted
ཕོད་ཅན་comet
ཕོན་ཆེ་བ་majority
ཕོའི་masculine
ཕོར་ཁ་bowl
ཕོར་ཁ་ཙམ་པ་the size of a bowl
ཕོལ་བྱུང་mould
ཕྱ་གཡང་quintessence
ཕྱ་དང་གཡང་luck and blessing
ཕྱ་བཟང་ཕྱ་ངན་good and bad fortune
ཕྱ་རའི་གུར་black yak hair tent
ཕྱ་རྒྱབ་པ་cast lots
ཕྱ་ལེ་བ་level
ཕྱ་ལེགས་པ་attractive
ཕྱག་གང་breadth of a fist
ཕྱག་གདུབ་bracelet
ཕྱག་གི་symbolic
ཕྱག་གོང་back of hand
ཕྱག་ངར་wrist
ཕྱག་ཏུ་བཞེས་པ་to take out
ཕྱག་ཏུ་སྣོམ་པ་grasp with the hand
ཕྱག་དང་པོ་ལ་at the first salute
ཕྱག་དཔུང་arm
ཕྱག་དབང་hand
ཕྱག་དམ་seal
ཕྱག་དར་ཁྲོད་dust heap
ཕྱག་དེབ་book
ཕྱག་ནས་འཐེན་to take by the hand
ཕྱག་ཕུལ་prostrated
ཕྱག་ཕྱི་བ་attendants
ཕྱག་ཕྱི་ལ་be a follower
ཕྱག་བགྱི་འོས་suitable for homage
ཕྱག་བཅབས་salutation in secret
ཕྱག་བྱས་worshipped
ཕྱག་མཁར་hand staff
ཕྱག་མཐིལ་palm of the hand
ཕྱག་མཐེབ་thumb
ཕྱག་ཚང་cook
ཕྱག་འབུལ་ཞུ་བ་salute
ཕྱག་འཚལ་བསྟོད་prostrate and praise
ཕྱག་རོགས་help
ཕྱག་རོགས་གནང་to help
ཕྱག་རོགས་ཞུ་to request help
ཕྱག་རྒྱའི་ལྷ་seal deity
ཕྱག་རྡོར་ཞི་བ་peaceful vajrapani
ཕྱག་ལྟ་བུ་handful
ཕྱག་ཤུབས་glove
ཕྱག་སོར་ring
ཕྱག་སྐྱེལ་pay respects
ཕྱགས་ཁྱུ་herd
ཕྱགས་མ་broom
ཕྱང་ཕྲུལ་necklace
ཕྱབ་ལེན་practice
ཕྱམ་གདལ་equilibrium
ཕྱམ་གྱིས་ཞོག་calmly relax
ཕྱམ་ཆད་impartiality
ཕྱར་ཕྱུར་a large numeral
ཕྱལ་ཕྱེལ་large number
ཕྱལ་ཕྱོལ་bowing down
ཕྱལ་བར་འགྲོ་go
ཕྱི་གསུམ་outer precepts
ཕྱི་ཉིན་the next day
ཕྱི་ཐག་རིང་པོ་future life
ཕྱི་དང་ནང་མེད་transparent
ཕྱི་དབུགས་outer breathing
ཕྱི་ནང་སློག་པ་reverse
ཕྱི་ནད་ཚན་ཁག་surgical department
ཕྱི་ནས་བྱུང་arise from outside
ཕྱི་ནུར་མེད་པ་without fail
ཕྱི་བཞིན་after
ཕྱི་བློན་foreign minister
ཕྱི་མ་གསུམ་the last three
ཕྱི་མ་ལྟར་like the latter case
ཕྱི་མཛེས་པོ་tawdry
ཕྱི་མའི་དོན་hereafter
ཕྱི་མིག་backward look
ཕྱི་མིག་ལྟ་བ་look behind
ཕྱི་མོ་model
ཕྱི་མོ་རྣམས་those who came last
ཕྱི་མོར་late
ཕྱི་ཚུལ་surface
ཕྱི་ཚེས་day
ཕྱི་ཟླ་གཉིས་པ་february
ཕྱི་ཟླ་གསུམ་པ་march
ཕྱི་ཟླ་དགུ་པ་september
ཕྱི་ཟླ་དྲུག་པ་june
ཕྱི་ཟླ་བཅུ་པ་october
ཕྱི་ཟླ་བདུན་པ་july
ཕྱི་ཟླ་བཞི་པ་april
ཕྱི་ཟླ་ལྔ་པ་may
ཕྱི་འགྲོ་བ་walk behind
ཕྱི་འཕེལ་subsequent increase
ཕྱི་འཕྲོད་evening
ཕྱི་འབྲེལ་diplomacy
ཕྱི་ཡུལ་foreign land
ཕྱི་རིམ་outer zone
ཕྱི་རུ་ཐོན་go out from
ཕྱི་རུ་འགྱེལ་to draw back
ཕྱི་རོ་evening
ཕྱི་རོལ་ཡུལ་objectivity
ཕྱི་རྒྱལ་དུ་abroad
ཕྱི་རྒྱལ་མི་foreigner
ཕྱི་རྟིང་heel
ཕྱི་རྩི་coating
ཕྱི་ལ་ཁྱི་བཏང་let out the dog
ཕྱི་ལ་གསལ་བ་reveal
ཕྱི་ལ་སྒྲོད་པ་go outside
ཕྱི་ལིང་ཅན་european
ཕྱི་ལེབ་felt rug
ཕྱི་ལོགས་subsequent
ཕྱི་ལྕག་back hand blow
ཕྱི་སྐོགས་shell
ཕྱི་སྒྲོམ་frame
ཕྱིང་དཀར་བ་place in tibet
ཕྱིང་བ་felt
ཕྱིང་བུ་matted
ཕྱིང་སྟན་felt carpet
ཕྱིན་དགྲ་foreign enemy
ཕྱིན་པ་པ་goer
ཕྱིན་པ་ཡོད་he has gone
ཕྱིན་ཕྱོད་a numeral
ཕྱིན་ཚར་བ་ago
ཕྱིན་ཟིན་པ་gone left went
ཕྱིའི་དོན་external object
ཕྱིའི་ཕྱག་རྒྱ་external seal
ཕྱིའི་མཆོད་པ་formal worshipping
ཕྱིའི་རང་རྣམ་outer biography
ཕྱིའི་ལས་outer activities
ཕྱིའི་སྣང་བ་outer appearances
ཕྱིར་གཡུག་པ་expel
ཕྱིར་ཐོབ་པ་regain
ཕྱིར་དགྱེ་to open out
ཕྱིར་དགྱེད་bend backwards
ཕྱིར་དབྱུང་བ་turn out
ཕྱིར་པོ་take out
ཕྱིར་ཕྱོགས་པ་look back or forth
ཕྱིར་ཕྱོགས་སུ་backwards
ཕྱིར་བཀུག་པ་curb
ཕྱིར་བཀོང་བ་countermand
ཕྱིར་བཞིན་after
ཕྱིར་བསྐྲད་པ་cast out
ཕྱིར་བསྙེལ་bend backwards
ཕྱིར་བསྟན་ནས་turned inside out
ཕྱིར་བསྲིངས་sent off
ཕྱིར་མི་འོང་བ་never returner
ཕྱིར་ཞིང་further
ཕྱིར་ཞྭ་hat made of felt
ཕྱིར་ཟློག་turn away from
ཕྱིར་འགྱང་ན་if one defers it
ཕྱིར་འགྲོ་བ་exhaling
ཕྱིར་འདེང་བ་return
ཕྱིར་འདོན་emission
ཕྱིར་འཕགས་to jump backwards
ཕྱིར་འཕར་བ་repulse
ཕྱིར་འཕུལ་བ་turn out
ཕྱིར་འབབ་issue
ཕྱིར་འབུད་པ་oust
ཕྱིར་འབུར་བ་confound
ཕྱིར་འབོད་པ་recall
ཕྱིར་འབོར་བ་cast out
ཕྱིར་འབྱུང་བ་come out
ཕྱིར་རྒོལ་པ་opponent
ཕྱིར་ལེན་པ་recover
ཕྱིར་ལོག་to return
ཕྱིར་ལོག་ཏུ་aback
ཕྱིར་ལོགས་སུ་after
ཕྱིར་ཤར་manifestation
ཕྱིར་སངས་ནས་having recovered
ཕྱིར་སྐྱུར་བ་cast out
ཕྱིར་སྐྱེལ་བ་send back
ཕྱིར་སྐྲོད་drive out
ཕྱིར་སྒྲོད་drive out
ཕྱིར་སྟོན་མཁན་extrovert
ཕྱིར་སྤྲོད་payment
ཕྱིར་སྤྲོད་པ་repay
ཕྱིས་དྲགས་to be too late
ཕྱིས་པ་mop
ཕྱིས་བུ་vessel
ཕྱིས་ཤིག་ན་at a later time
ཕྱུ་པ་robe
ཕྱུ་ར་cheese
ཕྱུག་rich
ཕྱུག་དབུལ་rich and poor
ཕྱུག་པོ་བཟོ་བ་enrich
ཕྱུག་མོ་rich lady
ཕྱུགས་cow
ཕྱུགས་གཤོད་killing cows
ཕྱུགས་གླུད་ransom for livestock
ཕྱུགས་དེབ་register of cattle
ཕྱུགས་ཕྱུང་youthful maiden
ཕྱུགས་བདག་maheshvara
ཕྱུགས་རྩིས་account of cattle
ཕྱུགས་སྐྱོང་herdsman
ཕྱུགས་སྐྱོང་བ་tending to cattle
ཕྱུར་བ་cheese
ཕྱུར་བུར་clusters
ཕྱུར་བུར་བཀང་piled up
ཕྱུར་སྐམ་dried curds
ཕྱུར་སྐུམ་dried rock cheese
ཕྱེ་ནས་having distinguished
ཕྱེ་མ་བདར་ཏོ་reduced to powder
ཕྱེ་མ་ལེབ་butterfly
ཕྱེ་མའི་སྨན་medicinal powder
ཕྱེ་འགམ་པ་པོ་eater of flour
ཕྱེ་འཐག་པ་reduce to flour
ཕྱེ་ཡོད་པ་open
ཕྱེ་རྐྱལ་bag for flour
ཕྱེད་to be differentiated
ཕྱེད་ཀ་བཟོ་བ་halve
ཕྱེད་གཤགས་split in half
ཕྱེད་གྲོལ་hair half loose
ཕྱེད་གླིང་peninsula
ཕྱེད་པ་to be differentiated
ཕྱེད་མ་partner to one half
ཕྱེད་ལོག་གེ་བ་extremely vivid
ཕྱེན་ཤོར་སོང་wind has escaped
ཕྱེར་འཐག་པ་reduce to flour
ཕྱོགས་ཀུན་ཏུ་in all directions
ཕྱོགས་གཅིག་one portion
ཕྱོགས་གོར་murrain
ཕྱོགས་ཆ་directional parts
ཕྱོགས་ཆ་རེ་རེ་individual positions
ཕྱོགས་ཆར་in a limited manner
ཕྱོགས་པ་sloping towards
ཕྱོགས་བཟུང་promise
ཕྱོགས་བསྒྲིལ་corporative
ཕྱོགས་བསྡུས་combination
ཕྱོགས་བྱེད་པ་side
ཕྱོགས་མཚམས་མ་queen of the yaksha
ཕྱོགས་མེད་དུ་impartially
ཕྱོགས་ཙམ་བསྟན་give a hint
ཕྱོགས་འདྲ་བ་similar
ཕྱོགས་ལས་འདས་beyond the limits
ཕྱོགས་སྟོན་པ་hinds
ཕྱོད་ཆེ་བ་very pushing
ཕྱོད་མ་miserable
ཕྱོལ་ཡས་numerical figure
ཕྱོས་པ་distracted
ཕྱྭ་ཁུག་sack of the phywa
ཕྱྭ་ཕོར་chalice of the phywa
ཕྱྭ་མདའ་arrow of the phywa
ཕྱྭ་འབོད་to summon the phywa
ཕྱྭ་རྟེན་support of the phywa
ཕྱྭ་སྒམ་casket of the phywa
ཕྱྭའི་ལྷ་deities of the phywa
ཕྲ་དོག་envy
ཕྲ་ཕབ་པ་cast a horoscope
ཕྲ་བ་བདག་subtle ego
ཕྲ་བའི་རླུང་subtle pranas
ཕྲ་མ་divisive speech
ཕྲ་མ་ཅན་saffron
ཕྲ་མ་བྱེད་cheat
ཕྲ་མའི་ནད་a disease
ཕྲ་མར་སྨྲ་བ་slander
ཕྲ་མོ་ལ་to a certain degree
ཕྲ་ཞིག་ཅན་precise
ཕྲ་ཞིབ་ཏུ་very minutely
ཕྲ་འབུ་germ
ཕྲ་འབེབས་mirror divination
ཕྲ་རྒྱག་པ་stud with jewels
ཕྲ་སེམ་མེ་subtle
ཕྲག་ཏུ་inbetween
ཕྲག་དབྱུང་lama shawl
ཕྲག་དོག་ཅན་envious
ཕྲག་རྒྱུག་carrying pole
ཕྲང་བཙན་place in tibet
ཕྲད་meet
ཕྲད་པའི་རྒྱུ་cause of meeting
ཕྲད་པར་བྱ་བ་meeting
ཕྲན་བུར་slightly
ཕྲན་རབ་minute
ཕྲལ་ཏུ་quickly
ཕྲལ་དགོས་immediate necessity
ཕྲལ་ཕུགས་present and future
ཕྲལ་མ་divisive speech
ཕྲལ་ཡུན་present and future
ཕྲལ་རྐྱེན་immediate disaster
ཕྲིན་བཀུར་མཁན་messenger
ཕྲིལ་ཕྲིལ་vibrating
ཕྲུ་གུ་བྱིས་པ་children
ཕྲུ་གུ་ཚོ་children
ཕྲུ་ཆུང་personal belongings
ཕྲུག་གུ་children
ཕྲུལ་superficial
ཕྲུལ་མ་divisive speech
ཕྲེང་པོ་place in tibet
ཕྲེང་བ་གསར་nepalese
ཕྲེང་བ་མ་female garland maker
ཕྲེང་རྡོག་rosary bead
ཕྲེང་ལྡན་མ་cascade
ཕྲོ་ཡས་a numerical figure
ཕྲོག་ཞུ་ornamental helmet
ཕྲོད་meet
ཕྲོད་འཛིན་receipt
བ་ཀ་tree
བ་གམ་འོད་ཚོགས་glittering dome
བ་གླང་འཚོ་མཁན་cowboy
བ་ཅུ་cow
བ་ཏི་ལ་tree
བ་ད་ན་face
བ་ད་ར་jujube fruit
བ་དན་སེན་པོ་demon of naga class
བ་དི་ཡ་ལ་flax
བ་དེ་tree
བ་ནུ་mineral medicine
བ་ཕྱུག་cow
བ་ཕྱུགས་cow
བ་ཕྱུས་cow
བ་ཕྲུག་calf
བ་བྱུང་ingredients of a cow
བ་མོ་བྱིའུ་swallow
བ་ཙི་གེར་གླིང་an island
བ་ཛར་བོ་དྷི་indian buddhist
བ་རེ་ནང་place in tibet
བ་ལ་ཀ་tree sida cordifolia
བ་ལ་ཤ་tirthika king
བ་ལང་གི་ཕྲུག་young elephant
བ་ལང་མིག་cow keeper
བ་ལང་ཚོགས་cow shed
བ་ལུ་ཀ་aquatic insect
བ་ལྕི་cow dung
བ་སོ་མཁན་worker in ivory
བ་སྤུ་མེད་bald
བ་སྤུ་ལངས་པ་hair standing on end
བ་སྤུ་ལྡང་joyful
བ་ཧི་ཀ་bird
བཀག་པ་ལྟར་almost repressing
བཀག་པས་ཁེགས་པ་refutation
བཀག་བྱ་brake
བཀག་ཟིན་refute
བཀག་ཟིན་པ་stop
བཀན་ཏེ་བཞག་place facing upwards
བཀའ་ཁོལ་very important order
བཀའ་གཉན་cruel commander
བཀའ་གཏད་པ་assigned to
བཀའ་གནང་རང་exactly
བཀའ་གཤགས་court of justice
བཀའ་ཆད་punishment
བཀའ་དབང་minister
བཀའ་དམ་oath
བཀའ་དྲུང་secretary of state
བཀའ་ནན་insistent request
བཀའ་ཕྲིན་message
བཀའ་བཀྲོལ་leave of absence
བཀའ་བཙན་strict orders
བཀའ་བརྩལ་པ་command
བཀའ་བསྒོས་a sentence passed
བཀའ་བསྡུས་compiled
བཀའ་མི་ཉན་པ་disobey
བཀའ་འཁྲིད་discourse
བཀའ་འདྲི་questions
བཀའ་འདྲིན་kindness
བཀའ་འཕྲིན་letter of command
བཀའ་ཡི་གནང་བ་permission
བཀའ་ཡིས་གནང་give permission
བཀའ་རྒྱའི་mandatory
བཀའ་ལས་མི་འདའ་without dispute
བཀའ་སྒྲུབ་following orders
བཀའ་སྩོལ་give an order
བཀའ་སྲུང་མཁན་obedient
བཀའ་སློབ་advice
བཀའི་གླེགས་བུ་diploma
བཀུ་ཕྱུང་spirit extracted
བཀུ་མཉེ་massage
བཀུ་ཞིང་མཉེ་to apply massage
བཀུག་ཟིན་པ་bent
བཀུག་ཤོག་summons
བཀུད་པ་applied to
བཀུར་འོས་པ་reverend
བཀུར་རྩི་respect
བཀོག་འཐེན་extraction
བཀོད་པ་གསལ་manifested
བཀོད་པ་ལྔ་five levels
བཀོད་པའི་ཆུ་reservoir
བཀོད་རིས་sketch
བཀོད་ལུགས་order or arrangement
བཀོར་འདྲེ་kind of goblin
བཀྱལ་བ་talk nonsense
བཀྱོན་བཀྱལ་བ་chiding
བཀྲ་ཆེན་great painting
བཀྲ་བའི་རི་མོ་paintings
བཀྲ་བར་འཛིན་པ་painter
བཀྲ་བྱེད་painter
བཀྲ་མ་ཤིས་པ་inauspicious
བཀྲ་ཤིས་གླིང་place in khams
བཀྲ་ཤིས་ཅན་an incense
བཀྲ་ཤིས་ཉི་མ་suns of fortune
བཀྲ་ཤིས་ཡིན་པ་being auspicious
བཀྲག་ཆེ་very bright
བཀྲག་མདངས་glitter
བཀྲམས་past of bkram
བཀྲིན་ཅན་courteous
བཀྲུ་བོན་bon purifiers
བཀྲུ་བྱ་to be washed
བཀྲེ་place in khams
བཀྲེ་ནག་ཚང་place in khams
བཀྲེས་hunger
བཀྲེས་ནས་being hungry
བཀྲེས་སྣང་thought of hunger
བཀྲོད་པ་walk
བཀླག་པར་བྱ་is reading
བག་ཁུམ་conservative
བག་གསར་bride
བག་གྲོ་བོ་cheerful
བག་ཅན་timid
བག་ཆགས་གཉིད་habitual sleep
བག་ཆགས་ལུས་bodily tendencies
བག་ཆུ་starch
བག་དྲོན་warm porridge
བག་པོ་bridegroom
བག་ཕེབས་པ་calm atmosphere
བག་བྲུལ་crumbs of bread
བག་བྲོ་པོ་cozy
བག་བླ་officiating lama
བག་མར་བཏང་བ་given in marriage
བག་མེད་པར་immodestly
བག་ཙམ་a little
བག་ཚ་མེད་པ་fearlessness
བག་ཟོན་careful
བག་རེ་tiny bits
བག་རྔ་drum at a wedding
བག་རྩིས་nuptial astrology
བག་ལ་ཉལ་dormancies
བག་ལ་ཞ་subsided
བག་ལེབ་སྲེག་པ་bake
བག་སེབ་bun
བག་སྦྱར་paste
བག་སྲེག་kind of pancake
བགལ་རྐྱེན་obstacles
བགེགས་བསྐྲད་turn out a ghost
བགེགས་རིགས་obstacles
བགོ་གཞི་basis of infusion
བགོ་བ་clothing
བགོ་སྐལ་སྤྱོད་strict result
བགོད་པ་divide
བགོད་པ་པོ་divider
བགོད་བྱེད་divisor
བགོས་མཁན་dealer
བགྱིད་དུ་སྩལ་commanded to do
བགྲང་བ་ཡང་even counting
བགྲང་འཕྱེས་a great number
བགྲང་རྟོགས་a very large number
བགྲད་open
བགྲུས་འཁོར་roller
བགྲེས་པ་senior
བགྲོ་song
བགྲོ་གླེང་debate
བགྲོད་བྱེད་traveller
བགྲོད་ཚུལ་ways to traverse
བང་ནེ་accumulation gtor ma
བང་རྒྱུག་པ་run a race
བང་རྒྱུགས་galloping
བངས་chased
བཅག་ཐག་taking care of
བཅགས་གཅོག་breakage
བཅགས་པ་crush
བཅད་སྐྱེ་medicinal fruit
བཅའ་བྱེད་give notice
བཅའ་འགྲིག་full equipment
བཅར་འོང་to return to
བཅིང་bind
བཅིངས་bind
བཅིངས་པ་གློད་slacken binding
བཅུ་ten
བཅུ་གཅིག་eleven
བཅུ་གཉིས་twelve
བཅུ་གཉིས་ཅན་dozen
བཅུ་གལ་important
བཅུ་གསུམ་thirteen
བཅུ་ཆ་deci
བཅུ་ཆ་གཅིག་one tenth
བཅུ་ཐམ་པ་ten
བཅུ་དྲུག་sixteen
བཅུ་ཕྲག་བཞི་forty
བཅུ་ཕྲག་ལྔ་fifty
བཅུ་བདུན་seventeen
བཅུ་བཞི་fourteen
བཅུ་འགྱུར་tenfold
བཅུ་རེ་decade
བཅུགས་མཁན་cheat
བཅུད་ཆགས་པ་causing of nutrition
བཅུད་ཆེ་བ་more nutritious
བཅུད་དམ་པ་sacred pith
བཅུད་བསྡུས་collate
བཅུད་ལྔ་པ་emblic myrobalan
བཅུད་ལྡན་nutritious
བཅུད་ལྡན་ཆེ་nether world
བཅུད་སྐྱེས་agreeable taste
བཅུས་པ་twisted
བཅོ་ten
བཅོ་པ་colt one year old
བཅོ་བརྒྱད་eighteen
བཅོལ་དམ་commanded
བཅོས་བུ་artificial
བཅོས་བུའི་རས་colored cloth
བཅོས་བྱེད་པ་redress
བཅོས་མ་ཡིན་པ་fabricated
བཅོས་མའི་artificial
བཅོས་འགྱུར་rectification
བཅོས་རུང་བ་curable
བཅོས་སུ་མེད་cannot be cured
བཏག་བྱའི་རྒྱན་ornament to be worn
བཏགས་དོན་designated object
བཏགས་པའི་ཚིག་imputed word
བཏགས་མིང་imputing name
བཏགས་ཙམ་only imputed
བཏགས་ཞི་basis of imputation
བཏང་ཟིན་པ་sent
བཏང་ཡས་number
བཏང་སྙོམས་བཞག་equanimity
བཏང་སྙོམས་མཛད་practice equanimity
བཏིབས་gather
བཏུང་ཆུ་water for drinking
བཏུང་བ་drink
བཏུང་བ་འཐུང་drink any liquid
བཏུང་བ་འདོད་wishing for drink
བཏུང་ཟིན་པ་drunk
བཏུང་འདོད་thirsty
བཏུང་སྣོད་drinking glass
བཏུངས་པ་killed
བཏུལ་ནས་having disciplined
བཏུལ་སླ་པོ་vulnerable
བཏོག་པ་pluck
བད་ཀན་phlegm
བད་ཏི་ཀ་a bird
བད་ལྦ་phlem goiter
བད་ས་tribe or class
བད་སྐྲན་kind of steatite
བདག་གཞན་self or other
བདག་གཞོན་པས་as i am still young
བདག་གཟུང་possession
བདག་གི་གནས་abiding in the self
བདག་གི་བ་མེད་an epithet of buddha
བདག་གི་མ་a goddess
བདག་གི་ཡིན་it is mine
བདག་གིར་བ་independence
བདག་གིར་བྱ་ascription
བདག་ཅག་we
བདག་ཅག་རྣམས་us
བདག་ཉིད་གཅིག་one essence
བདག་ཏུ་གཟུང་cling to ego
བདག་ཏུ་ང་རྒྱལ་egotism
བདག་ཏུ་བཟུང་is owned by
བདག་དང་གཞན་self and other
བདག་དང་ཆོས་self and phenomena
བདག་དབང་ཅན་independence
བདག་དབང་མིན་vassal
བདག་པའི་རྐྱེན་empowering condition
བདག་པོ་ཉིད་sovereignty
བདག་པོ་རྐྱེན་dominant condition
བདག་བཟུང་claimed property
བདག་བྱེད་belongs to
བདག་མེད་གཉིས་twofold selflessness
བདག་མེད་ནོར་unclaimed property
བདག་མེད་པ་ཉིད་selflessness
བདག་མེད་པ་ཙམ་mere selflessness
བདག་མེད་ཕྲ་མོ་subtle selflessness
བདག་མེད་རགས་པ་coarse selflessness
བདག་མོ་lady sovereign
བདག་མོ་ཆེན་མོ་a goddess
བདག་འདྲ་similar to me
བདག་འབྲས་possessional effect
བདག་ལ་ཆགས་པ་attachment to self
བདག་ལྟ་view of a self
བདག་སོགས་me and others
བདག་སྒྲ་a possessor
བདག་སྤོབས་personal inspiration
བདག་སྤྲོད་affiliate
བདར་ཤ་membrane
བདར་ཤ་ཆོད་take to heart
བདལ་གླ་freightage
བདལ་པ་ཆེན་པོ་great vastness
བདལ་འབུམ་bon religious work
བདུ་མེད་female
བདུག་སྤས་incense
བདུད་ཀྱི་monstrous
བདུད་ཀྱི་བདག་the arch demon
བདུད་དཔུང་hosts of demons
བདུད་བློན་evil ministers
བདུད་མོ་demoness witch
བདུད་འཇོམས་glomerous fig tree
བདུད་ཡི་དམ་tutelary demon
བདུད་རྒྱལ་conqueror of mara
བདུད་རྗེ་lord of the bdud
བདུད་རྩི་འོད་moon
བདུད་རྩི་སྤྲོ་moon
བདུད་སྒྲོལ་བ་expel the devil
བདུན་seven
བདུན་གཉིས་fourteen
བདུན་ཅུ་པ་seventieth
བདུན་པ་seventh
བདུན་པར་seventhly
བདུན་པོ་seventh
བདུན་ཕྲག་གཉིས་fortnight
བདུན་རེའི་weekly
བདུན་ལྡན་perfumery
བདེ་ཁྲིལ་ལེ་vivid pleasure
བདེ་ཅན་happy
བདེ་ཆེན་great bliss
བདེ་ཆེན་སྐུ་great blissful body
བདེ་ཐབས་method of pleasure
བདེ་དང་མི་ལྡན་free from happiness
བདེ་དོན་welfare
བདེ་དྭངས་good
བདེ་བ་ཅན་གྱི་world of bliss
བདེ་བ་ཆུང་བ་little happiness
བདེ་བ་ཆེ་great happiness
བདེ་བ་དམ་པ་great happiness
བདེ་བ་མང་བ་much happiness
བདེ་བ་མྱོང་བ་enjoy
བདེ་བ་འཐོབ་attain happiness
བདེ་བ་ལ་ཆགས་པ་hedonism
བདེ་བ་སྐྱེས་པ་create happiness
བདེ་བའི་ཀུ་ཅོ་roar of bliss
བདེ་བའི་ཀློང་dimension of bliss
བདེ་བའི་ཁྲུས་water
བདེ་བའི་གཞི་seat of happiness
བདེ་བའི་དོན་gift of fortune
བདེ་བའི་མཆོག་god sambara
བདེ་བའི་ལུས་human body
བདེ་བའི་སྟན་comfortable seat
བདེ་བར་གཏོང་བ་let another be happy
བདེ་བར་གནས་སོ་abide happily
བདེ་བར་གྱུར་became easier
བདེ་བར་བྱེད་པ་make happy
བདེ་བར་ཞུ་melt into pleasure
བདེ་བར་འཆར་བ་to feel pleasant
བདེ་མེ་རེ་serenely blissful
བདེ་མོ་ཡོད་he is well
བདེ་འགྲོ་གནས་higher realms
བདེ་འཇགས་ཡོན་public security man
བདེ་འཐུང་lightning
བདེ་འདོད་desire happiness
བདེ་འབྱམས་infinite bliss
བདེ་ལམ་མེ་བ་serenely blissful
བདེ་ལྡན་heavens
བདེ་ལྷམ་མེ་བ་suffused with bliss
བདེ་ཤེས་felicitous knowledge
བདེ་སེང་ངེ་a sect
བདེ་སྐྱིད་ཀྱི་glorious
བདེ་སྐྱོང་variable delight
བདེ་སྲུང་security
བདེན་ཉིད་essence
བདེན་པ་ཉིད་truth
བདེན་པ་བདོར་give a command
བདེན་པ་བཞི་པོ་the four truths
བདེན་པ་མཐོང་བ་see the truth
བདེན་པའི་factual
བདེན་པའི་ཚིག་true words
བདེན་བཞི་the four truths
བདེན་མེད་not truly existent
བདེན་ཚུལ་validly
བདེན་རྫུན་truth or falsehood
བདེའི་རྒྱུ་cause of happiness
བདེའོ་he is happy
བདེར་abbr of bde bar
བན་ཏ་tribe in nepal
བན་ཏ་ཤ་ཀ་a bird
བན་ད་རུ་faith
བན་མ་བུན་མ་wisps and billows
བན་རྒན་old priest
བན་སྤྲང་mendicant monk
བབ་ཅོལ་ཏུ་inconsiderately
བབ་ཆ་cluster
བབ་བླ་sulphate of arsenic
བབ་ཚུལ་manner of occurrence
བབས་པ་descends
བབས་སོ་transmission
བབས་སྟེགས་place of landing
བམ་ཆག་sheaf
བམ་པའི་འབེར་བ་swollen
བཙག་ཐང་plain of red earth
བཙག་རི་hill of red earth
བཙག་ལུང་valley of red earth
བཙད་པོ་nobleman
བཙན་violent spirits
བཙན་དབང་tyranny
བཙན་དབང་ཐོག་forcibly
བཙན་དབང་པ་tyrant
བཙན་པར་མཛད་པ་enforce strictly
བཙན་པོ་བཟོ་བ་fortify
བཙན་མཁར་fortress
བཙན་འཁྲིག་rape
བཙན་འཁྲིད་abduction
བཙན་ལེན་exaction
བཙན་སྲུང་fortification
བཙབ་སྟན་chopping block
བཙའ་ཅན་rusty
བཙའ་ཆུ་rusty liquid
བཙའ་མ་རྔ་བ་harvest
བཙའ་མེད་པ་stainless
བཙའ་རྒྱབ་པ་rust
བཙལ་དུ་གསོལ་please grant
བཙལ་དུ་འཇུག་try to seek
བཙལ་ཟིན་པ་sought
བཙལ་ལགས་yes i have
བཙལ་ལས་འདས་པ་to transcend seeking
བཙས་མ་བརྔས་reaped the harvest
བཙས་མ་བརྔས་པ་reaped corn
བཙས་མ་རྔ་བ་reap
བཙས་ཟད་པ་corrode
བཙས་རྔ་པ་reap the harvest
བཙིང་to force
བཙིར་སྐད་squeal
བཙུན་མོ་དང་པོ་chief wife
བཙུན་མོ་རོལ་པ་sporting with queens
བཙེམ་པ་sew
བཙེམས་པ་sewn
བཙོ་བསྲེགས་boiled and burnt
བཙོ་བླག་མཁན་washer man
བཙོ་ལ་མཁན་dyer
བཙོ་ལག་མཁན་dyer
བཙོ་ལག་མཁན་པ་washer man
བཙོག་གུམ་kind of wild ass
བཙོག་ཆུ་sewage
བཙོག་པ་ཅན་filthy
བཙོག་པ་འགག་པ་constipation
བཙོག་པ་སྟོན་པ་excrete
བཙོངས་ཟིན་པ་sold
བཙོད་འབྲུ་seeds of btsod plant
བཙོན་ཁང་prison
བཙོན་གལ་indoor confinement
བཙོན་པ་prisoner
བཙོན་བཅུག་imprisonment
བཙོན་རྫི་jailer
བཙོན་ལ་འཇུག་པ་to imprison
བཙོན་སྲུང་jailer
བཙོལ་བ་seek
བཞག་གིན་to rest
བཞག་ཙམ་only established
བཞགས་ཙམ་merely posited
བཞད་པ་མོ་goddess
བཞད་མོ་laugh
བཞད་མོ་བཞད་པ་laugh
བཞད་ལྡན་མ་goddess
བཞན་དབང་འོག་captivity
བཞན་ལས་བརྙས་borrowed from others
བཞས་བཏང་ཟིན་པ་sang
བཞི་four
བཞི་ཅན་foursome
བཞི་ཆ་གསུམ་three quarters
བཞི་པར་fourthly
བཞི་མཉམ་intestines
བཞི་ཟུར་fourth part or share
བཞི་ལྡབ་quadruple
བཞིན་ངན་ugly face
བཞིན་སྣང་appear according to
བཞིར་as four
བཞུགས་ཁྲི་dais
བཞུགས་བྲང་residence
བཞུགས་ཚུལ་way of being present
བཞུགས་འདུག་has been seated
བཞུགས་ཡུལ་place of residence
བཞུགས་ཡོད་པ་used to dwell
བཞུགས་ཤིག་do sit
བཞུགས་སུ་གསོལ་please sit
བཞུགས་སོ་seated
བཞུར་to melt
བཞུར་རུང་བ་soluble
བཞུར་རྩི་solution
བཞེད་དགོངས་sayings and thoughts
བཞེད་དོན་object of desire
བཞེད་པའི་ལུགས་tradition
བཞེད་ཟས་food for acceptance
བཞེད་ལུགས་explanatory mode
བཞེར་wet
བཞེས་ཁྲུང་beer
བཞེས་གཉེན་ཅན་intelligent
བཞེས་གྲོ་cakes
བཞེས་ཐག་cigarette
བཞེས་པག་cake or bread
བཞེས་མོག་particular meal
བཞོ་བ་to milk
བཞོན་པ་mount
བཞོན་པའི་རྟ་a riding horse
བཞོན་བཞིན་པ་riding
བཞོན་འཁོར་vehicle
བཟང་པོ་མ་a yaksini queen
བཟང་པོར་well
བཟང་མཁན་tailor
བཟང་འབྲེལ་good connection
བཟང་ཡང་བཟང་superior
བཟང་རྟགས་good sign or token
བཟང་རྟོག་noble thoughts
བཟང་ལས་བྱོལ་scorpion
བཟང་སྒྲིག་agreement of peace
བཟང་སྤྱོད་ཀྱི་virtuous
བཟའ་གཏད་store of provisions
བཟའ་གསུམ་bigamy
བཟའ་ཆ་household business
བཟའ་ཆའི་སྐོར་household business
བཟའ་དཔོན་head of a family
བཟའ་བ་food
བཟའ་བཅའ་food and drink
བཟའ་མི་རུང་བ་inedible
བཟའ་རུང་བ་edible
བཟའ་ཤིང་fruit tree
བཟའ་ཤིང་གི་ར་grove of fruit trees
བཟར་ཐག་a kind of bee
བཟས་པ་eaten up
བཟི་སྨན་drug
བཟུ་བོའི་བློ་pure mind
བཟུང་ཐགས་string with a noose
བཟུང་དུ་གསོལ་please accept
བཟེ་pain
བཟེབ་སྣོད་elongated basket
བཟོ་ཁང་workshop
བཟོ་ཅན་selfishness
བཟོ་ཉེས་deformation
བཟོ་ཐོན་formation
བཟོ་བཞིན་པ་making
བཟོ་བསྐྲུན་creation
བཟོ་མོ་woman worker
བཟོ་ཞིང་workers and peasants
བཟོ་ཟིན་པ་made
བཟོ་འདྲ་likely
བཟོ་རིགས་crafts
བཟོ་རིས་design
བཟོ་རྟགས་brand
བཟོ་ལག་handicraft
བཟོ་ལྟ་ངན་པ་ugly
བཟོ་ལྟ་ཉེས་ཅན་deformity
བཟོ་ལྟ་བཟོ་བ་shape
བཟོ་ལྟ་བཤིག་པ་deface
བཟོ་ལྟ་སྟོན་པ་fashion mould
བཟོ་སྟངས་style
བཟོ་སྟོན་པ་teach crafts
བཟོད་དཀའ་unbearable realm
བཟོད་དཀའ་རེངས་epithet of indra
བཟོད་ནས་from the beginning
བཟོད་པ་བརྒྱད་eight forbearances
བཟོད་པ་བསྲན་unwearied patience
བཟོད་པ་སྒོམ་པ་tolerate
བཟོད་བསྲན་ཅན་patient
བཟོད་མ་the earth
བཟོད་མེད་overwhelmed
བཟོད་འོས་པ་tolerable
བཟོད་ལྡན་མ་the earth
བཟོད་སེམས་patient
བཟོད་སྒོམ་sufferance
བཟོམ་པ་portable water cask
བཟླས་བརྗོད་repetition
བཟློག་ཉིད་reversal
བཟློག་ཐབས་methods to overcome
བཟློག་དཀའ་unobstructible
བཟློག་བསྒྱུར་exorcism
བཟློག་སེལ་exorcism to repel
བའི་རེ་བ་hope construction
བར་གནམ་atmosphere
བར་གོས་waistcoat
བར་ཆད་མེད་uninterrupted
བར་ཆད་མེད་ལམ་uninterrupted path
བར་ཆད་སེལ་dispel obstacles
བར་ཆད་སེལ་བ་remove impediments
བར་ཆོད་པ་interrupted by
བར་དུ་ཐིམ་པ་seen
བར་དུ་བཙིར་བ་sandwich
བར་དུ་བཞུགས་པ་intervene
བར་དུ་མ་ཆད་པ་contiguous
བར་དུམ་གཅོད་པ་intersect
བར་དོ་intermediate state
བར་དོ་དུས་bardo state
བར་དོ་འཛིན་enter the bardo
བར་དོར་འཁྱམས་rove for no purpose
བར་ནས་from between
བར་པ་ར་ཙ་ཀ་ancient indian sect
བར་བག་ཙམ་slight space
བར་བློན་deputy ministers
བར་མ་ཆར་པར་uninterruptedly
བར་མ་པ་middle one
བར་མ་ཕུང་alternative
བར་མ་བཅད་པ་not interrupted by
བར་མ་སྲིད་པ་intermediate state
བར་མི་ཆོད་without break
བར་མིན་པ་except
བར་མེད་བསྐོར་constantly turn
བར་མེད་མཁའ་the heavens
བར་འཁྱམས་veranda
བར་ལག་barrier
བར་ཤིག་a flower
བར་ས་synonym for bar do
བར་སྐབས་སུ་in the meantime
བར་སྐྱ་wall or partition
བར་སྒོ་middle door
བར་སྟོང་gap
བར་སྣང་sky
བར་སྣང་གི་spatial
བར་སྣང་གི་ཁམས་space
བར་སྣང་དུ་in midair
བར་སྣང་དུ་གནས་suspended in midair
བར་སྣང་དུ་མཇལ་to see in space
བར་སྲིད་པ་beings in the bardo
བརྐུ་བྱ་article to be stolen
བརྐུས་ཟིན་པ་stole
བརྐོ་བྱའི་ས་ploughed land
བརྐོས་རྒྱབ་པ་engrave
བརྐྱང་extend
བརྐྱང་མ་left channel
བརྐྱངས་extend
བརྒལ་དཀའ་བ་ocean
བརྒལ་བསྐྱོད་passing
བརྒྱ་hundred
བརྒྱ་གྲོང་place of a hundred
བརྒྱ་ཆ་གཅིག་one percent
བརྒྱ་ཆ་གཉིས་two percent
བརྒྱ་ཆ་བཅུ་ten percent
བརྒྱ་ཆ་ལྔ་བཅུ་fifty percent
བརྒྱ་དཔོན་captain
བརྒྱ་འཁོར་century
བརྒྱག་ཁ་combinations
བརྒྱགས་ཐེས་provisions
བརྒྱད་eight
བརྒྱད་ཅན་eightfold
བརྒྱད་ཆ་ལྔ་five eighths
བརྒྱད་པ་eighth
བརྒྱད་པ་ས་ground of the eighth
བརྒྱད་འགྱུར་eightfold
བརྒྱན་past of rgyan
བརྒྱན་པོ་festoon
བརྒྱན་མི་ཚུགས་cannot be improved
བརྒྱལ་faint
བརྒྱལ་བ་faint
བརྒྱས་together with
བརྒྱིངས་poised toward
བརྒྱུད་གསུམ་three transmissions
བརྒྱུད་དེ་via
བརྒྱུད་ནས་through
བརྒྱུད་འབྲས་indirect effect
བརྒྱུད་ཡས་a numerical figure
བརྒྱུད་རིམ་sequence of events
བརྒྱུད་ལམ་medium
བརྒྱུས་past of rgyu
བརྔ་བ་reap
བརྔ་ཡས་number
བརྔན་to pay wages to
བརྔམས་passionate
བརྔམས་པ་crave
བརྔའ་crops
བརྔོད་བྱའི་ནས་barley to be reaped
བརྗིད་ཆགས་dignified
བརྗེ་འགྱུར་exchange
བརྗེ་འཕྲུལ་mistakenly exchanged
བརྗེ་སྒྱུར་shift
བརྗེད་ངས་forgetfulness
བརྗེད་ངེས་forgetting
བརྗེད་ངེས་པ་forgetfulness
བརྗེད་ཐོ་memorandum
བརྗེད་ཐོ་བཏགས་keeping memoranda
བརྗེད་མེད་not slipping
བརྗོད་གསལ་statement
བརྗོད་དོན་topic
བརྗོད་པ་བྱེད་expressor
བརྗོད་པའི་སྒྲ་expression
བརྗོད་པར་བྱ་བ་fit to be spoken
བརྗོད་པར་བྱའོ་should be expressed
བརྗོད་བྱ་ལྡན་child
བརྗོད་བྲལ་unpredictable
བརྗོད་ཚིག་quotation
བརྗོད་ཚུལ་definition
བརྗོད་འདོད་mere supposition
བརྗོད་ཡས་a large number
བརྗོད་སྟངས་expression
བརྙད་པ་bsnyad pa
བརྙན་པར་pictorial
བརྙན་འཕྲིན་television
བརྙལ་བཅོས་disdain
བརྙས་པ་བྱེད་པ་treat contemptuously
བརྙས་བརྐོས་པ་offend
བརྙས་སྨད་scorn and slander
བརྙེད་མཁན་founder
བརྙེད་ཟིན་པ་found
བརྙོན་མེད་དུ་undeniably
བརྟག་དུ་བཅུག་continue examining
བརྟག་ཞིབ་inspection
བརྟག་ཞིབ་ཁང་observatory
བརྟག་ཞིབ་པ་scout
བརྟག་ཡས་a number
བརྟགས་པ་ཙམ་merely imputed
བརྟགས་པས་བཟོད་after long scrutiny
བརྟད་kind of formal curse
བརྟན་པ་ཐོབ་attain stability
བརྟན་པ་བཟུང་epithet of lha min
བརྟན་པ་མེད་པ་groundless
བརྟན་པར་བྱས་stabilize
བརྟན་པར་འདྲ་seems to be stable
བརྟན་པོར་fixedly
བརྟན་པོར་གནས་to keep still
བརྟན་བཞུགས་firmly established
བརྟན་བྱེད་མ་goddess of earth
བརྟན་རྣམས་steadily cognized
བརྟན་སྲུང་defence
བརྟས་པའི་མཐུས་when they develop
བརྟས་བྱེད་པ་grown wide
བརྟུལ་བ་disciplined
བརྟུལ་མ་not blunted
བརྟུལ་མའི་བུ་heaven
བརྟུལ་མོ་not blunted
བརྟུལ་ཞུགས་མ་house wife
བརྟེན་པར་བྱས་rely upon
བརྟོགས་insight
བརྡ་ཁྲོལ་decode
བརྡ་གསང་secret language
བརྡ་གསར་new orthography
བརྡ་དང་སྒྲ་terms and sounds
བརྡ་དབང་force of terminology
བརྡ་དོན་signs and meanings
བརྡ་དོན་སྤྲད་understand clearly
བརྡ་ཕྱག་sign of salutation
བརྡ་བཀྲོལ་solve the code
བརྡ་བྱས་པ་referentiality
བརྡ་འདུམ་ཤེས་signal of danger
བརྡ་འཕྲིན་message
བརྡ་ཡི་དབང་sign empowerments
བརྡ་ཡི་བླ་མ་sign guru
བརྡ་ཡི་སྐད་symbolic sound
བརྡ་ལ་བྱང་trained in language
བརྡ་སྐྱེལ་བ་communicate
བརྡ་སྒྱུར་པ་interpreter
བརྡ་སྤྲོད་ཀྱི་grammatical
བརྡད་བ་rub
བརྡབ་གསིག་shock
བརྡབ་སྐྱོན་accident
བརྡའ་ཡིག་sign letters
བརྡའ་ཤེས་numerical figure
བརྡའ་སྐད་sign language
བརྡའི་དབང་symbolic empowerment
བརྡར་ནས་ཟད་པ་detrition
བརྡར་བཏགས་impute terminology
བརྡར་བཏགས་པ་symbolical
བརྡར་རྡོ་whetstone
བརྡས་བསྙད་པ་is called
བརྡུང་to beat
བརྡུང་བ་to beat
བརྡུངས་ཟིན་པ་smitten
བརྡུལ་dust
བརྡེག་ཆ་knife
བརྡེག་པ་beat
བརྡེག་འཆོས་slipping down
བརྡེབ་flail
བརྡོག་པ་eaten up
བརྣག་ནུས་patience
བརྣབ་སེམས་covetousness
བརྣབ་སེམས་ཅན་a covetous person
བརྩགས་པ་sin
བརྩགས་ཤད་carding comb
བརྩངས་short robe or dress
བརྩད་ཆོད་investigating
བརྩད་པའི་གཞི་basis of dispute
བརྩལ་care and assiduity
བརྩལ་བ་མེད་པ་effortlessly
བརྩི་མཐོང་esteem regard
བརྩིག་མཁན་mason
བརྩིས་མེད་without calculating
བརྩེ་གདུང་ཅན་loyal
བརྩེ་གདུང་ཞེན་loyalty
བརྩེ་དང་ལྡན་པ་merciful
བརྩེ་པོ་love
བརྩེ་བ་བྱེད་ས་beloved
བརྩེ་ལྡན་merciful
བརྩེ་སེམས་love
བརྩེགས་piled up
བརྩེགས་པ་piled up
བརྩེམས་ཟིན་པ་sewn
བརྩོད་པ་quarrel
བརྩོན་ཏེ་making effort
བརྩོན་པའི་མཐུ་force of effort
བརྩོན་པར་captivity
བརྫི་བ་མེད་པ་unchallenged
བརྫིས་བ་knead
བརྫུ་བྱས་large box or chest
བརྫུ་བྱས་པ་pompous
བརྫུན་པར་གྲགས་renowned as false
བརྫུན་སྨྲ་telling lies
བརྫུས་པ་spontaneous birth
བརྫུས་མ་བཟོ་བ་forge
བརྫུས་མ་རྣམས་impostors
བརྫུས་ཤིང་transforming
བརླ་thigh
བརླ་སྐྱེས་born of the thigh
བརླང་པ་rough
བརློན་ཏོ་made wet
བལ་dragon
བལ་གསེད་པ་assort wool
བལ་ཏམ་nepalese coin
བལ་ཐག་rope made of wool
བལ་དཀར་fleece
བལ་དང་ལྡན་པ་wooly
བལ་པ་ཛ་a bodhisattva
བལ་བཀལ་བ་load wool
བལ་བཟོས་woollen
བལ་བསིད་པ་sort wool
བལ་བསེད་carding comb
བལ་བེའུ་infinite know
བལ་མུག་wool moth
བལ་མོ་nepalese woman
བལ་ཚོན་colored wool
བལ་འཁེལ་བ་spin wool
བལ་འབྲེག་པ་shear
བལ་ཡུལ་སྐྱེས་a medicine
བལ་རྒྱབ་load or pack of wool
བལ་རྔ་nepalese drum
བལ་ལ་heavenly flowers
བལ་ལ་ཆེན་པོ་heavenly flowers
བལ་ལི་celestial flower
བལ་ལྡན་པ་woolly
བལ་ཤད་carding comb
བལ་སླེ་རྣམ་པ་piece of bal sle
བལྟ་བ་བྱའོ་you should view
བལྟ་བའི་ཆེད་for seeing
བལྟ་བར་དཀའ་difficult to view
བལྟ་མི་བཟོད་པ་horrible
བལྟ་མོ་ཁང་pavilion
བལྟ་ཚོད་test
བལྟ་ཚོད་ཀྱི་tentative
བལྟ་ཤེལ་mirror
བལྟ་སྐྱོང་favor
བལྟས་ཟིན་པ་seen
བཤང་བ་feces
བཤང་ལམ་anus
བཤངས་པ་leaky
བཤད་དགོས་པ་must explain
བཤད་པའི་ཚུལ་method of narration
བཤད་བཀའ་commentary
བཤད་མི་ཚུགས་unable to explain
བཤད་ཟིན་པ་spoke
བཤད་འདྲ་dialectics school
བཤད་ལུགས་ways of transmission
བཤད་ལུང་reading transmission
བཤད་ཤེས་know how to explain
བཤད་སྒྲོས་manner of explaining
བཤད་སྦྱང་མཛད་study
བཤད་སྲོལ་commentary maxim
བཤའ་ཚེ་tin
བཤལ་བྱེད་laxative
བཤས་ར་slaughter house
བཤིག་destroy
བཤིག་བོན་bon quarterers
བཤིགས་པར་བྱེད་undermine
བཤིད་funerary rites
བཤིན་དུ་སྦྱོར་the same applies to
བཤིབ་align
བཤིབ་པ་arrange evenly
བཤིབས་align
བཤུད་མེ་purifying fire
བཤུད་སྒྲ་whistle
བཤུར་བ་singe
བཤུལ་ཀར་on the road
བཤུལ་ཁ་road
བཤེས་friend
བཤེས་པ་friend
བཤོལ་བཏབ་པ་obstruct
བཤོལ་ལྡན་མཉེས་wine
བཤོས་ཟིན་པ་spilt
བསག་accumulate
བསགས་accumulate
བསགས་པའི་ལས་accumulated karma
བསང་གཏོར་purifying water
བསང་ཆུ་purifying water
བསང་བ་to purify
བསངས་བཏང་བ་to burn incense
བསམ་གཏན་བཞི་པ་fourth concentration
བསམ་ངན་evil thoughts
བསམ་ནག་malice
བསམ་པ་ཐག་པ་unusual attitude
བསམ་པ་དག་པ་pure thought
བསམ་པ་དམན་པ་inferior thought
བསམ་པ་མ་དག་impure thought
བསམ་པ་མཐུན་པ་concordant thought
བསམ་པ་ཙམ་གྱིས་as quick as thought
བསམ་པ་རྣམ་དག་pure thought
བསམ་པ་ལ་བརྟན་concentrate steadily
བསམ་པ་སྟོར་mind is scattered
བསམ་པའི་ཕྱིར་due to thought
བསམ་པར་བྱའོ་imagine
བསམ་པར་བྱུང་བ་occurred in the mind
བསམ་བསེའུ་seminal vesicle
བསམ་བོ་conception
བསམ་བྲལ་beyond thoughts
བསམ་བློ་གཏང་reflect
བསམ་བློ་ལྡན་པ་thoughtful
བསམ་མནོ་བ་muse upon
བསམ་མི་ཁྱབ་པ་unthinkable
བསམ་ཚོད་supposition
བསམ་ཟིན་པ་thought
བསམ་འཕེལ་མ་མ་great ocean
བསམ་ཡུལ་conceivable object
བསམ་ལས་འདས་པ་infinite
བསམ་སྤྱོད་attitude
བསམས་པ་སེམས་པ་a mind thinking
བསལ་དུ་གསོལ་pray clear up
བསིལ་cool
བསིལ་གདུགས་parasol
བསིལ་གཡབ་swinging fan
བསིལ་གྲིབ་ཅན་shady
བསིལ་བ་འཛིན་medicinal fruit
བསིལ་བ་སྟོབ་fan
བསིལ་བའི་རྫི་cool breezes
བསིལ་ཟས་cooling food
བསིལ་ཟེར་moonbeams
བསིལ་ཟེར་ཅན་moon
བསིལ་སྒྲིབ་shade
བསུ་མ་receive someone
བསུ་མི་escort
བསུ་སྐྱེལ་went to greet
བསུ་སྨན་clyster
བསུང་sweet smell
བསུང་ངེད་fragrance
བསུང་མྱོས་a fragrant flower
བསུན་གཙེར་disturbance
བསུན་པོ་troublesome
བསུབ་ཕྱིས་omission
བསུབ་བྱེད་erasure
བསུས་ཤིག་let him go to meet
བསེ་ཀོ་rhinoceros hide
བསེ་ཁ་བསྒོ་wild animal
བསེ་ཁྲབ་coats of armor
བསེ་བོན་bon carvers
བསེ་མ་ནུ་pomegranate seed
བསེ་མོ་weasel
བསེ་རག་ghosts of poverty
བསེ་རུ་rhinoceros
བསེ་རེ་wild yak
བསེ་སྒམ་leather box
བསེའི་སྒྲམ་བུ་leather box
བསེར་དུ་ཡོང་you will feel cold
བསེར་མ་wind in the stomach
བསེར་མོའི་ནད་cold
བསེལ་བ་indicate
བསེལ་རི་himalaya mountains
བསོ་ཁུང་peep hole
བསོག་accumulate
བསོགས་accumulate
བསོད་merit
བསོད་ཉམས་overindulgence
བསོད་ནམས་ཆེ་great merit
བསོད་ནམས་བསུང་magnolia
བསོད་པར་བྱེད་kill
བསོད་ཟད་unfortunate ones
བསོད་སྙོམས་alms
བསོར་བ་exchange
བསྐ་བ་astringent
བསྐང་རྫས་sacrificial ceremony
བསྐལ་དོན་supersensory object
བསྐལ་པ་ཆེན་པོ་great eon
བསྐལ་པ་མང་པོ་many eons
བསྐལ་པ་ཤེས་accountant
བསྐལ་བཟང་a religious work
བསྐལ་མཆོག་supreme eon
བསྐུ་མཉེ་བྱ་do massage
བསྐུད་པ་oblivion
བསྐུམ་འཁྲིལ་བ་drawn around
བསྐུར་མཁན་consignor
བསྐུར་མཛད་པ་that you sent
བསྐུར་ཟིན་པ་sent
བསྐུལ་བ་བཞིན་just as exhorted
བསྐོག་ཞག་designate
བསྐོན་be dressed
བསྐོར་ཀྱོག་devious
བསྐོར་ཕྱོགས་detour
བསྐོར་བསྐྱོད་circulation
བསྐོར་བྱ་བ་cop
བསྐོར་འཁྱིར་spiral
བསྐྱང་དུ་བཅུག་continue training
བསྐྱངས་ཟིན་པ་bred
བསྐྱམས་dried
བསྐྱར་ཞིབ་review
བསྐྱར་འཛུལ་reentry
བསྐྱར་འཛོམས་reunion
བསྐྱར་ལེན་resumption
བསྐྱར་ལྡབ་repetition
བསྐྱལ་གྱིན་resounding
བསྐྱལ་ཤོག་fetch it
བསྐྱིལ་to hold
བསྐྱེད་བྱེད་producer
བསྐྱེད་འབྲས་effect of production
བསྐྱོང་བ་continue in
བསྐྱོད་འཚལ་please approach
བསྐྲད་expel
བསྐྲེས་སྐོམ་hunger
བསྒངས་པ་form into
བསྒར་བ་fix
བསྒོམ་ནུས་capacity to meditate
བསྒོམ་པའི་ལམ་path of meditation
བསྒོམ་བཟླས་recital of mantra
བསྒོམ་འདོད་urge to meditate
བསྒྱུར་མེད་nothing to transform
བསྒྱུར་རྩིས་multiplication
བསྒྱུས་པ་muscle
བསྒྲག་ཕྲང་a jong in tibet
བསྒྲགས་གཏམ་manifesto
བསྒྲམ་ཟིན་པ་wound
བསྒྲལ་བསྟབ་destruction offering
བསྒྲལ་བྱ་boat
བསྒྲལ་ཡས་numerical figure
བསྒྲིབ་བྱ་that which obscures
བསྒྲིབ་བྱེད་the obscuring
བསྒྲུབ་ཏུ་མེད་cannot be realized
བསྒྲུབ་ལ་མཁས་skilled in obtaining
བསྒྲུས་blend
བསྒྲེང་raise
བསྒྲེངས་raise
བསྔགས་to praise
བསྔགས་ཀྱི་tantric
བསྔགས་གསོལ་thanksgiving
བསྔགས་པ་praise
བསྔགས་བརྗོད་praise
བསྔོ་dedicate
བསྔོ་བ་dedicate
བསྔོ་བ་ཡིན་dedicate
བསྔོ་བགྲང་review
བསྔོ་ཡིན་dedicate
བསྔོགས་པ་annoy
བསྔོས་dedicate
བསྙད་སྙོད་dispute
བསྙན་veneration
བསྙལ་ཡས་numerical figure
བསྙིལ་སྡུད་པ་waste amassed wealth
བསྙུག་པ་become full
བསྙེ་བ་lean
བསྙེན་པ་approximation
བསྙེན་པར་གྱིས་approximate
བསྙེན་པར་བྱ་approximate
བསྙེན་བསྒྲུབ་service and worship
བསྙེན་རྫོགས་ordained
བསྙེམས་པ་haughty
བསྙེར་མ་wrinkles
བསྙེལ་bend
བསྙོད་པ་give to one another
བསྙོན་བྱེད་པ་assert falsely
བསྙོན་མེད་པ་impossible to deny
བསྟན་གྱི་will teach
བསྟན་གྲུབ་པ་have transmitted
བསྟན་དཀའ་བ་hard to explicate
བསྟན་དུས་time of the teaching
བསྟན་པ་དམ་པ་supreme teaching
བསྟན་པ་སྐྱོང་protect the teaching
བསྟན་པའི་which reveals
བསྟན་པའི་སྲོག་life of the teaching
བསྟན་བཅོས་treatise
བསྟན་བཅོས་རིག་intelligent
བསྟན་བཤིག་ཅན་comical
བསྟན་བཤིགས་comedy
བསྟན་ཚིག་arguments
བསྟན་ཤེལ་biscuit
བསྟི་བ་take rest
བསྟི་བསྟང་respect
བསྟིར་supine of sti ba
བསྟུད་ན་if it is repeated
བསྟུད་ནས་ན་བ་to be always ill
བསྟུན་པོ་compliant
བསྟུམས་past of bstum
བསྟེགས་dais
བསྟོད་དབྱངས་anthem
བསྟོད་དོ་be praised
བསྟོད་པའི་གཞས་psalm
བསྟོད་པའི་ཚིག་expressions of honor
བསྟོད་མཁན་admirer
བསྟོད་ཚོགས་collections of hymns
བསྟོད་འོས་པ་praiseworthy
བསྡད་པ་sat down
བསྡད་ཟིན་པ་sat
བསྡམས་པ་གློད་slacken binding
བསྡམས་ཟིན་པ་bound
བསྡུ་གསོག་accumulation
བསྡུ་ཅ་subscription
བསྡུ་དངོས་synopsis
བསྡུ་རུབ་ཀྱི་collective
བསྡུས་པ་ཙམ་བྱ་abbreviated
བསྡུས་བསྡུས་curt
བསྡུས་ཚིག་abbreviation
བསྡུས་འགྲེལ་condensed commentary
བསྡོམ་པ་to commit oneself
བསྣར་to stretch
བསྣོམས་པ་to smell
བསྣོལ་མ་crossed
བསྣོས་པ་to accumulate
བསྩལ་དུ་གསོལ་please bestow
བསྩལ་བ་to grant
བསྲང་straighten
བསྲངས་straighten
བསྲི་ཚགས་ཅན་frugal
བསྲིས་པ་stinginess
བསྲུ་བས་པ་churn
བསྲུང་པ་royal body guard
བསྲུབ་པ་churned
བསྲུབ་བྱེད་sun
བསྲུབས་པ་churn
བསྲེ་པོ་brindled
བསྲེག་scorch
བསྲེགས་scorched
བསྲེགས་ཟིན་པ་burnt
བསླངས་པའི་prompted by
བསླད་བྱ་will be corrupted
བསླད་སྐྱོན་corruption
བསླབ་པ་མཉམ་པ་sameness of training
བསླབ་པའི་གཞི་basis of training
བསླབ་བདེ་པོ་docile
བསླབ་ཟིན་པ་taught
བསླབས་ནས་having trained
བསླུ་བའི་ཆོས་deceptive phenomenon
བསླུ་བྱ་བསླུས་ransom life
བསླུ་ཡོན་ransom money
བསློད་བྱེད་pollutants
བི་ཀྲ་མ་བུ་རི་place in east bengal
བི་ཀྲ་མ་ཤི་ལ་monastery at magadha
བི་ཆུ་moss
བི་དྲུ་མ་precious stone
བི་རི་འ་མདོ་place in amdo
བི་རྫི་shrew
བི་ཤ་poison
བི་ཤོ་དྷ་ན་purification
བི་ཧ་ར་buddhist monastery
བིང་ཆེན་sandalwood stick
བུ་ག་འཛིན་full of perforations
བུ་ག་ཧ་རེ་disordered and empty
བུ་གཅིག་བུ་the only son
བུ་གཡར་adopted child
བུ་གསོ་ཁང་nursery
བུ་གསོ་བ་rear a child
བུ་གུ་little boy
བུ་གླིང་park in lhasa
བུ་དེ་ཚེ་life
བུ་ཕོ་male
བུ་མཐོང་ལྡན་ajatasatru
བུ་མོ་ཁྱུ་bevy of girls
བུ་མོ་གཙང་མ་virgin girl
བུ་མོ་གཙོ་མོ་most beautiful girl
བུ་མོ་གསར་པ་virgin girl
བུ་མོ་གསར་མ་virgin girl
བུ་མོ་མཛེས་པོ་sweet daughter
བུ་མོ་ལ་ཆགས་པ་love a girl
བུ་ཚ་འཕེལ་increase of family
བུ་ཚས་འབྲེལ་བ་cohabit
བུ་ཚུབ་gust of wind
བུ་འབྱུང་བ་beget a child
བུ་འཛིན་མ་daughter
བུ་འོག་མ་younger brother
བུ་ཡི་བུ་great grandson
བུ་རམ་molasses
བུ་རམ་ཀ་ར་treacle
བུ་རམ་གོང་བུ་loaf sugar
བུ་རམ་དཀར་white molasses
བུ་རམ་སྐྲ་epithet of arjuna
བུ་རམ་སྒོར་བ་boil down raw sugar
བུ་ལོང་ཁྱེར་བ་contract debts
བུ་ལོང་བྱེད་པ་contract debts
བུ་ལོང་འཁྲི་བ་entangled in debt
བུ་ལོན་ཆགས་པ་owe
བུ་ལོན་པ་debtor
བུ་ལོན་འཇལ་བ་pay a debt
བུ་ཤིང་child wood
བུ་ཤེལ་ཙེ་amber
བུ་སྟོར་རོ་lost child
བུ་སྤུན་རྒན་པ་elder brother
བུ་སྨད་རྣམས་my wife and children
བུག་པ་བྱས་bored holes
བུག་པ་མེད་པ་without orifices
བུག་ལྕག་sting
བུགས་ལོང་entire carcase
བུང་བུ་discus bearer
བུངས་ཆེན་large heap
བུད་ཀྱིས་བཏབ་wrapt in dusty mist
བུད་པ་bellows
བུད་མེད་ན་སོ་marriageable girl
བུད་མེད་རྡུལ་menses
བུད་མེད་ལྟ་བུ་womanly
བུད་ཤིང་བཤག་པ་split or chop wood
བུན་ནེ་unbound
བུན་ནེར་སོང་vanished
བུན་ཛན་ཏི་very handsome
བུན་རེ་small matter
བུན་རྫན་ཏི་very handsome
བུན་ལོབ་some large number
བུབས་རིལ་བུས་whole body
བུབས་རིལ་ལུས་whole body
བུམ་ཁེབས་water pot cover
བུམ་ཆུང་small water pot
བུམ་དབང་vase initiation
བུམ་ནང་inside a vase
བུམ་ནང་མར་མེ་lamp inside a vase
བུམ་པ་བཟང་པོ་good vase
བུམ་པ་ཡིན་པ་being a pot
བུམ་པའི་རྒྱུ་cause of a pot
བུམ་བུ་small water pot
བུམ་ལྡན་species of tree
བུའི་འོད་གསལ་son clear light
བུར་ཐུང་ཁུགས་suddenly
བུར་བུར་convex
བུལ་པོ་slow
བུས་མོ་knee
བུས་མོ་གོང་མན་higher than the knee
བེ་ཅོན་staff
བེ་ཏུར་sulphate of copper
བེ་ཕུར་oak stake
བེ་མུའུ་fritillary bulb
བེ་ཞིང་oath
བེ་རི་district of chamdo
བེ་ལོག་great grandfather
བེ་ལྗང་mystic
བེ་ཤིང་oak
བེ་སྣབས་mineral substance
བེག་གེ་measles
བེད་གཅོད་use
བེན་large pitcher
བེམ་ཆག་list of contents
བེའུ་calf
བེའུ་ཅན་medicinal fruit
བེར་ཀ་branch
བེར་ཆེན་full cloak
བེར་མ་branch
བེར་མ་ལྕག་switch
བེར་སེར་ཅན་aquatic grass
བེལ་leather bag
བེས་cheek
བོ་དེ་ཉལ་བ་sleep well
བོ་ཤོག་ཐུ་province in mongolia
བོག་ཀྱང་འདོན་progress
བོག་ཏོ་མུ་ཏན་prince of mongolia
བོག་མ་lease
བོག་འབྱིན་perfecting
བོགས་enhancement
བོགས་ཁྲལ་royalty
བོགས་དབྱུང་བ་to enhance
བོགས་པ་མ་ཡིན་not be profitable
བོགས་མ་ལེན་པ་contractor
བོགས་འབྱུང་find enhancement
བོང་ཁྲ་species of falcon
བོང་ཐུང་short in stature
བོང་པ་clod
བོང་བུ་འདྲ་བ་like a donkey
བོང་བུའི་སྐད་bray
བོང་ཚོད་size
བོངས་ཆེ་ཆུང་dimension
བོངས་ཐུང་dwarf
བོད་ཀྱི་ལོ་ཐོ་tibetan calendar
བོད་ཁ་བ་tibet
བོད་ཅན་tibetan
བོད་ཆས་tibetan clothes
བོད་ཆུང་dbu and tsang
བོད་པའི་ཚིག་interjection
བོད་མི་tibetan
བོད་འབངས་tibetan subjects
བོད་ཡུལ་tibet
བོད་ཤོག་tibet paper
བོད་སྨན་tibetan medicine
བོན་པོ་practitioners of bon
བོན་སྡེ་bon community
བོས་པའི་མགྲོན་a summoned guest
བྱ་ཀ་ན་ལ་phasianus gallus
བྱ་ཀུ་ར་ར་osprey
བྱ་ཀྲི་possibly a bird
བྱ་ཁྱུང་རྡོ་blue mineral color
བྱ་ཁྲུང་crane
བྱ་ཁྲུང་ཁྲུང་crane
བྱ་གག་གི་ལོ་bird year
བྱ་གསོ་ཁང་poultry farm
བྱ་གོང་མོ་snow cock
བྱ་ངང་པ་swan
བྱ་ངུར་པ་ruddy goose
བྱ་ཅོ་བ་pilgrims
བྱ་ཏེ་སོགས་poultry
བྱ་ད་ལི་པ་a pupil of virupa
བྱ་དཀའ་difficult to do
བྱ་དཀའ་བ་difficult to do
བྱ་དཀའ་བ་མང་བ་very difficult to do
བྱ་དག་bribery
བྱ་དེའི་སྒོ་ང་egg
བྱ་ན་salted curry
བྱ་ཕོ་བྱ་མོ་fowl
བྱ་བ་གང་བཏང་whatever one does
བྱ་བ་གཞན་other activities
བྱ་བ་ངན་པ་misdeed
བྱ་བ་བཟང་པོ་merit
བྱ་བ་མི་ནུས་unable to function
བྱ་བ་མིན་not about to
བྱ་བ་མེད་པར་without acting
བྱ་བ་ཟེད་dust brush
བྱ་བ་འགྲུབ་པ་achieve activities
བྱ་བ་འཛོལ་བ་blunder in working
བྱ་བ་ལ་བརྩོན་readiness to act
བྱ་བ་ལྡན་active
བྱ་བཙལ་action and seeking
བྱ་བཙལ་འདས་beyond action
བྱ་བཞག་actions
བྱ་བའི་ཡུལ་object
བྱ་བའི་རིགས་analysis of action
བྱ་བའི་རྒྱུད་kriya tantra
བྱ་བར་རིགས་analysis of action
བྱ་བརྩལ་striving
བྱ་བསྙངས་པ་yawning
བྱ་བྱེད་ངན་bad dealings
བྱ་བྱེད་མང་many activities
བྱ་བྱེད་མེད་པ་transcending action
བྱ་བྲན་flock of birds
བྱ་བྲལ་free from activities
བྱ་མ་བྱར་སྐྱག་dandelion
བྱ་མ་བྱེལ་བུ་bat
བྱ་མ་ར་sentinel
བྱ་མཆིལ་པ་swallow
བྱ་མོ་hen
བྱ་ཚིག་been verb
བྱ་ཚུལ་the way of doing
བྱ་རོག་ཉུང་མ་medicinal plant
བྱ་རྐང་place in magadha
བྱ་རྒོད་vulture
བྱ་རྒོད་བྲུན་vulture shit
བྱ་རྡང་small tabernacles
བྱ་རླག་red vulture
བྱ་ལེ་vagina
བྱ་ལྡན་phasianus gallus
བྱ་ཤ་chicken
བྱ་ཤོ་བ་bird of prey
བྱ་སྐོན་bird trap
བྱ་སྐྱག་dropping
བྱ་སྐྱུང་ཀ་jackdaw
བྱ་སྒྲོ་ཅན་feathery
བྱ་སྤོས་a constellation
བྱག་མཁན་rope dancer
བྱང་ངོས་northern
བྱང་ཆུབ་ཆེ་great enlightenment
བྱང་ཆུབ་ཐོབ་པ་attain enlightenment
བྱང་ཆུབ་ལྷ་ཁང་sanctuary in kong po
བྱང་ནག་a medicine
བྱང་ཕྱོགས་ཀྱི་arctic northern
བྱང་ཕྱོགས་སུ་northerly
བྱང་བྱིང་a number
བྱང་མ་skilled
བྱང་མི་གསུང་said nothing
བྱང་ཞྭ་iron helmet
བྱང་ཤར་northeast
བྱང་སྙིང་affectionate
བྱད་གཞིན་face
བྱད་གཟུགས་shape
བྱད་བཞིན་face
བྱན་པོ་cook
བྱམ་པོ་gentleness
བྱམས་པ་ཆེན་པོ་great love
བྱམས་པ་ཉིད་love
བྱམས་པ་དང་ལྡན་one who is loving
བྱམས་པ་མངོན་maitreyanatha
བྱམས་པར་འདོད་love
བྱམས་འདོད་love
བྱའི་ཁྱུ་flock of birds
བྱའི་ཕྱུར་ཚུལ་flying of a bird
བྱའི་མཆུ་ཏོ་beak
བྱའི་ཚོགས་flock of birds
བྱས་ཆོས་fabricated practices
བྱས་པ་ཅན་fabrication
བྱས་པ་དོན་ལྡན་meaningful action
བྱས་པ་ཙམ་objectified
བྱས་པ་ཚོར་བ་grateful
བྱས་མི་གཟོ་ungratefulness
བྱས་ཙང་ཀ་exactly
བྱི་ཁུང་mouse hole
བྱི་ཆད་punishment for rape
བྱི་ཐུར་porcupine
བྱི་དར་silk stuff
བྱི་དོར་sweeping
བྱི་དོར་ཅན་neat person
བྱི་དོར་བྱས་sweep
བྱི་ཕྲུག་bastard children
བྱི་བོ་lewd person
བྱི་ཚེ་a monster
བྱི་རལ་sugar
བྱི་རུག་a plant
བྱི་ལ་cat
བྱི་ལོང་mole
བྱི་ཤང་དཀར་མོ་medicinal plant
བྱིང་ན་གནས་པ་abiding in laxity
བྱིང་ཕབ་kind of tea
བྱིང་བ་laxity
བྱིང་བའི་sinking
བྱིང་རྡུལ་a number
བྱིང་རྨུག་drowsiness
བྱིངས་བ་dive
བྱིངས་ཟིན་པ་sank
བྱིན་to give
བྱིན་ཆེ་grandeur
བྱིན་ཆེན་great blessings
བྱིན་པ་གཙང་donkey
བྱིན་པའི་མཐའ་limit of charity
བྱིན་པར་བྱ་བ་give as a gift
བྱིན་ཕབས་good ordinary tea
བྱིན་བབ་received blessings
བྱིན་མེད་without display
བྱིན་རླབས་ཞུས་ask for a blessing
བྱིན་ལྕགས་kind of tea
བྱིའུ་འཇོག་ཁང་aviary
བྱིའུ་ཡི་སྐད་chirp
བྱིའུ་སྒོག་medicinal plant
བྱིའུ་སྦྱང་small bird
བྱིལ་མོ་naked
བྱིས་པ་ཁང་kindergarten
བྱིས་པ་གསོད་པ་infanticide
བྱིས་པའི་ལམ་childish ways
བྱུ་རུ་coral
བྱུ་རུ་ཇ་kind of tea
བྱུག་དམར་colored butter
བྱུག་སྣུམ་cream
བྱུང་ནས་having arisen
བྱུང་བའི་ཚུལ་what had happened
བྱུང་མ་མྱོང་བ་has not encountered
བྱུང་ཟིན་already arisen
བྱུང་ཟིན་པ་got
བྱུང་འཛིན་receipt
བྱུང་རྐྱེན་event
བྱུང་རྟིང་after he has come
བྱུང་སྲིད་པ་hard to avoid
བྱུར་བ་unlucky goiter
བྱུར་བུ་full
བྱུས་knack
བྱུས་ཆེ་very important
བྱེ་ཀོང་bowl of sand
བྱེ་ཆབ་sandy water
བྱེ་ནག་black sand
བྱེ་ཕྲུག་young bird
བྱེ་བྲག་ཁོ་ན་only particularity
བྱེ་བྲག་ཅན་different
བྱེ་བྲག་བྱེད་adjective
བྱེ་བྲག་རྣམ་པ་types
བྱེ་བྲུན་bird dung
བྱེ་མ་ངོགས་sandy bank
བྱེ་མ་ཅན་sandy
བྱེ་མ་དམར་vermillion
བྱེ་མ་འབྲུ་རེ་each grain of sand
བྱེ་མ་ལུང་district in tibet
བྱེ་མ་སེང་གེ་place in tibet
བྱེ་མ་ཨ་གྲོང་red sand
བྱེ་མའི་རི་dune
བྱེ་མའི་ལྷ་ཁང་monastery in tsangpo
བྱེ་མར་vaibhasikas
བྱེ་མས་དགང་བ་sandy
བྱེ་འཚུབ་sand storm
བྱེ་ལ་cat
བྱེ་ལེབ་butterfly
བྱེ་ས་sand
བྱེ་སྟོབས་sand bank
བྱེ་སྤུང་heap of sand
བྱེད་ཀྱང་though saying
བྱེད་ཉེན་ཅན་apt
བྱེད་པོ་creator
བྱེད་བདེ་པོ་convenient
བྱེད་བདེ་བ་easy
བྱེད་བཞིན་པ་doing
བྱེད་ཚུལ་treatment
བྱེད་ཟིན་པ་done
བྱེད་ཡུལ་object
བྱེད་རྒྱུ་བཅུ་ten creative causes
བྱེད་རྩོལ་ཀུན་all activities
བྱེད་ལས་function
བྱེད་སླ་པོ་convenient
བྱེའུ་baby birds
བྱེའུ་ལ་ཕུག་medicinal herb
བྱེར་གྱུར་to open
བྱོན་ཆས་clothes
བྱོན་དུ་མ་གནང་he refused to come
བྱོན་ནས་having come
བྱོན་པ་ལེགས་welcome
བྱོན་ཟན་welcoming food
བྱོན་སྐྱེམས་welcoming drink
བྱོན་སྐྱེས་arrival gift
བྲ་ད་ར་a tree
བྲ་ཕབ་པ་mirror divination
བྲ་ཕྱེ་buckwheat flour
བྲ་བོའི་ཟན་buckwheat meal
བྲ་མ་དན་དི་medicinal drug
བྲ་མཁར་burrow of bra ba
བྲ་ཚང་burrow of bra ba
བྲ་རྗེན་buckwheat meal
བྲག་echo
བྲག་ཁ་face of the cliff
བྲག་གཟར་པོ་precipitous rock
བྲག་གྱམ་shelter under a rock
བྲག་ཅ་echo
བྲག་ཅན་rocky
བྲག་ཅའི་resonant
བྲག་ཆ་echo
བྲག་ཇ་echo
བྲག་དང་ལྡན་པ་rocky
བྲག་དཔོན་place in tibet
བྲག་མཐོན་པོ་high rocky mountain
བྲག་ཟུར་ridge
བྲག་རི་stony mountain
བྲག་རི་དཀར་པོ་white rock
བྲག་རྫོང་craggy cliff
བྲག་ལ་ཆུ་འཐབ་rapids
བྲག་ལམ་rocky path
བྲག་ལྕམ་པ་rock vegetation
བྲག་ལྡན་rocky
བྲག་སྒང་rock
བྲག་སྒོར་on the cave door
བྲག་སྟོང་rocky desert
བྲག་སྲམ་rock otter
བྲང་ཁ་chest
བྲང་གི་རྒྱན་necklace
བྲང་ངེ་བ་unsettled
བྲང་བྲེང་a number
བྲང་བྲེམ་pure necessity
བྲང་སྤུ་chest hair
བྲད་བརྡར་abrasion
བྲད་རྡར་friction
བྲད་ཤུལ་scratch
བྲན་servant
བྲན་གཡོག་གི་servile
བྲན་དང་འདྲ་བ་like a servant
བྲན་དུ་སྐུལ་བ་engage as a servant
བྲན་པོ་male servant
བྲན་པོ་མེད་པ་rickety
བྲན་བཟའ་cultivator
བྲན་མ་sal tree
བྲམ་ཟེ་གཉིས་brahman couple
བྲམ་ཟེ་མོ་female brahman
བྲའོ་buckwheat
བྲལ་བ་ཉིད་separation
བྲལ་འབྲས་effect of separation
བྲལ་སྨིན་free and mature
བྲི་བའི་བསྒང་time for writing
བྲི་བོ་flavor
བྲི་མཁན་writer
བྲི་སྐུ་painted image
བྲིང་intermediate
བྲིན་ཚོང་selling well
བྲིས་དེབ་pad
བྲིས་སྐུ་painting
བྲུ་བ་ཚ་hunger and thirst
བྲུག་གཡོས་a number
བྲུབས་པ་put in
བྲུམ་ནད་chicken pox
བྲེ་ཀོ་basin for washing
བྲེ་ལ་བཅལ་measured in bre
བྲེད་stale
བྲེལ་དོས་overload
བྲེལ་མྱུར་hasty
བྲེལ་ཚབ་haste
བྲེལ་ཚབས་ངང་busily
བྲེལ་ཚབས་ཅན་hasty
བྲེལ་ཟིང་busy
བྲེལ་འཚུབ་tense
བྲེས་ཀྱུ་manger
བྲེས་བཤར་བ་measure with a bre
བྲོ་བ་མྱོང་བ་taste
བྲོ་བ་འབོར་བ་make oath
བྲོ་མི་འཚལ་བ་healthy person
བྲོ་མོ་folk dance
བྲོ་རྡུང་བ་dance
བྲོ་ལྟ་བ་to try the taste of
བྲོག་སྤུར་anthill
བྲོང་enticing
བྲོད་པ་མཆོག་great complacency
བྲོས་ཐར་escape
བྲོས་བྱོལ་refugee
བྲོས་འབྱོལ་exodus
བྲོས་ལམ་loophole
བྲོས་ཤོར་བ་run away
བླ་གཡུ་turquoise of the bla
བླ་གྱུ་spiritual turquoise
བླ་གླུད་ransom for the lama
བླ་ཅོལ་frivolous talk
བླ་ཆེ་དྲུག་six great masters
བླ་ཆོས་ministry
བླ་ཐབས་excellent methods
བླ་དབྱེ་courtyard
བླ་ན་མཆིས་པ་surpassable
བླ་བརྒྱུད་lineage of lamas
བླ་བོ་conversation
བླ་བྲི་baldachino
བླ་བྲེ་canopy
བླ་མ་ཆེན་པོ་great lama
བླ་མ་བསྟེན་པ་to follow a master
བླ་མ་མཆོག་chief lama
བླ་མ་མན་ཆད་those below the lama
བླ་མ་རྒལ་ཅིག་chameleon
བླ་མ་རྣམས་masters
བླ་མ་ལགས་your lama reverence
བླ་མའི་གདན་ས་seat of a chief lama
བླ་མེད་ཐེག་པ་supreme way
བླ་འཚོང་པོ་shamer
བླ་རེ་canopy
བླ་རྟགས་emblems of the bla
བླ་རྟེན་support of the bla
བླ་ལྗོན་life tree
བླ་སྐྱལ་succession
བླ་སྒྲུབ་guru sadhana
བླ་སྡེ་guest of honor
བླ་སྨན་པ་physician lama
བླག་ཤ་tree
བླང་དོར་adopt and discard
བླང་བྱ་to be adopted
བླང་བྱ་བ་object adopted
བླང་ཡུལ་locality
བླན་པ་give a reply
བླའི་མཆོག་chief priest
བླུགས་པར་casting mould
བླུན་གཏམ་foolish talk
བླུན་བྱས་to be stupefied by
བླུས་མ་anything ransomed
བླེ་ལོ་indolence
བློ་ཁ་ཕྱོགས་པ་directed
བློ་ཁོ་ནས་with an attitude of
བློ་ཁོག་courage valor
བློ་ཁོག་གི་gallantry
བློ་ཁོག་ཅན་gallant
བློ་ཁོག་མེད་པ་coward
བློ་གཅོད་ཁམས་acumen
བློ་གཉིས་hesitation
བློ་གཏད་ཞུ་trust
བློ་གཏད་འཆའ་བ་place confidence in
བློ་གཏན་conceptual mind
བློ་གེལ་བ་hope
བློ་གྲོས་ངན་པ་bad intelligence
བློ་གྲོས་ཅན་intelligent
བློ་ཆེས་བ་have confidence in
བློ་ཐོག་ནས་theoretical
བློ་དམན་པ་having little sense
བློ་དོན་དམ་པ་ultimate awareness
བློ་དྲེད་ཅན་unfeeling person
བློ་པ་be able
བློ་ཕམ་disappointment
བློ་ཕམ་པོ་sorry
བློ་ཕམ་བཅུག་པ་disappoint
བློ་བ་wisdom
བློ་བཏང་preoccupation
བློ་བཏང་བ་to use an idea
བློ་བདེ་free
བློ་བཞག་mental conviction
བློ་བརྟན་པོ་firm attitude
བློ་བསྐྱེད་resolve to
བློ་བུར་རྐྱེན་sudden accident
བློ་མ་ཁེལ་to distrust
བློ་མ་བསད་པ་wishes unfulfilled
བློ་མ་བསྟུན་should not trust
བློ་མ་མཐུན་པ་dissent
བློ་མ་རྨོངས་པ་unimpaired mind
བློ་མ་རྫོགས་པ་wishes unfulfilled
བློ་མི་ཁེལ་བ་to not trust
བློ་མི་བདེ་བ་anxiety
བློ་ཚིམ་satisfy
བློ་ཚོད་དཔག་པ་presume
བློ་ཞིག་to destroy concepts
བློ་ཞུམ་པ་depression
བློ་འཁྲུལ་པ་mistaken awareness
བློ་འཆང་mindful
བློ་འཐུམས་stupid
བློ་འདོད་appreciation
བློ་འདོད་བཞིན་according to my wish
བློ་འཚབ་ཆེ་བ་tense
བློ་འཛིན་memorize
བློ་ཡངས་spacious mind
བློ་ཡི་ཆོས་intellectual events
བློ་ཡི་བྱེད་པ་wisdom
བློ་ཡི་ཡུལ་object of mind
བློ་ཡོ་བ་wavering weak mind
བློ་རིག་གི་intellectual
བློ་རིག་བཀྲ་བ་intelligent
བློ་རྒོད་agitated mind
བློ་རྒྱ་ཆེ་བ་total mind
བློ་རྟུལ་weak intellect
བློ་རྣམས་all concerns
བློ་ལ་in mind
བློ་ལ་ཆུད་to retain in mind
བློ་ལ་བཟུང་བ་learn by heart
བློ་ལ་མི་སྣང་not visible to mind
བློ་ལ་ཟིན་ངེས་to memorize
བློ་ལ་འགྲོ་པོ་impressive
བློ་ལ་འདོད་པ་desire
བློ་ལ་འཛིན་memorize
བློ་ལ་ཡོད་པ་know by heart
བློ་ལ་ཤར་to come to mind
བློ་ལོག་renounce
བློ་ལྟོས་trust
བློ་ལྡོག་པ་change the mind from
བློ་ཤེད་memory
བློ་སྐྱེས་པ་notions
བློ་སྒམ་པ་very profound
བློ་སྒོ་ཡངས་open mental attitude
བློ་སྣ་བསྟུངས་confine the mind
བློ་སྣ་བྲོད་be inspired
བློ་སྣ་འཛིན་take an attitude
བློ་སྤོབས་courage
བློ་སྦྱང་to train the mind
བློ་ཨ་འཐས་mental attachment
བློན་ཆེན་ཁང་ministry
བློའི་ཐ་སྙད་mental convention
བློའི་རྒྱུ་cause of awareness
བློར་ཆུད་པ་understand
བློར་མ་ཤོང་བ་inconceivable
བློར་འབབ་པ་appreciate
བློར་འཛིན་retain in mind
བློར་འཛིན་པ་memorize
བློས་གཏོང་renunciation
བློས་གཞལ་བ་understand
བློས་བཅོས་to adjust mentally
བློས་འཁེལ་པོ་trusty
བློས་སྐྱེལ་བ་dependable
བྷ་ག་ན་fairy
བྷང་ག་ལ་eastern bengal
བྷའ་inspiration
བྷུ་mixed
བྷེ་ཀ་toad
མ་ཀ་ར་crocodile
མ་ཁུ་mother and uncle
མ་གཅིག་པ་dissimilar
མ་གདུང་principal beam
མ་གཙིགས་unimportant
མ་གཡེལ་བར་without failing
མ་གཤམ་ཤིང་tree without fruit
མ་གིར་down there
མ་གྲགས་is not found
མ་གྲུབ་not established
མ་གྲུབ་པ་not established
མ་གྲུབ་པར་not yet accomplished
མ་གྲོལ་པ་bondage
མ་གྲོལ་བ་not released
མ་ངལ་not tired
མ་ངོམས་i am not satisfied
མ་ཉན་useless
མ་ཉན་པ་defiance
མ་ཉིད་the mother herself
མ་ཏ་motor
མ་ཏུ་ལུང་ཀ་a plant
མ་ཏྲི་ཀ་wild animal
མ་ཐུབ་པ་not able to
མ་ཐེ་བ་exclude
མ་ཐེ་བའི་exclusive
མ་ཐོག་floor of a room
མ་ཐོག་རིང་མོ་long rise
མ་ཐོད་loft in lower story
མ་དག་ཞིང་impure dimension
མ་དག་ལས་སྣང་impure karmic vision
མ་དགའ་བ་བཟོ་བ་displease
མ་དངུལ་བཞག་པ་invest
མ་དུ་musical instrument
མ་དེབ་principal register
མ་དོད་indefinite
མ་དྲིས་unworthy of inquiry
མ་ནི་ཆོས་འཁོར་prayer wheel
མ་ནི་པ་ཏྲ་pure leaf gold
མ་ནི་བཀའ་འབུམ་religious work
མ་ནི་འཁོར་ལོ་prayer wheel
མ་ནུ་འཁུན་པ་grumbling
མ་ནུ་སྤོས་དཀར་camphor
མ་ནུ་ཧུ་agate
མ་ཕང་lake manasarowara
མ་ཕམ་invincible
མ་ཕམ་གཡུ་མཚོ་manasarovar
མ་ཕེབས་པ་not gone
མ་བཅིངས་without restriction
མ་བཅོས་གསལ་བ་uncontrived clarity
མ་བཅོས་པའི་ངང་unaltered condition
མ་བཏུབ་པོ་it is not convenient
མ་བཞག་not created
མ་བཞེད་མཁན་dauntless
མ་བཟི་བ་བྱུང་not got drunk
མ་བཟོས་པ་unfabricated
མ་བརྗོད་not come to pass
མ་བརྙས་ཤིག་do not despise
མ་བརྟག་པར་སྨྲ་untruth
མ་བརྟེན་not depending upon
མ་བསྲེ་without additions
མ་བསླད་པ་untainted by
མ་བསླབས་never learnt before
མ་བྱན་cook
མ་བྱས་ཀྱང་even without doing
མ་བྱས་ན་མི་have to
མ་བྱུང་ཕྱིན་until
མ་བྲ་minimum
མ་བྲལ་བ་not free from
མ་བྲལ་བར་not free from
མ་མགལ་མ་ལེ་lower row of teeth
མ་མཆུ་lower lip
མ་མཇེད་free
མ་མཐའི་མཚམས་lowest point
མ་མཚུངས་པ་derogatory misfit
མ་ཚང་བ་མེད་not impaired
མ་ཚང་བ་མེད་པ་not incomplete
མ་ཚུགས་cannot
མ་ཚོར་བ་to not notice
མ་ཞིག་not opened
མ་ཞུ་པའི་ནད་indigestion
མ་ཞུ་བ་undigested
མ་ཞུའི་ནད་indigestion
མ་ཞུས་unworthy of inquiry
མ་ཟིན་uncaught
མ་ཟླུམས་sun
མ་འཁོད་the nether stone
མ་འཁྲུགས་པར་without agitating
མ་འགགས་པར་གསལ་unobstructedly aware
མ་འགྱངས་པ་without delay
མ་འཆམ་པ་friction
མ་འཆམ་མཁན་dissident
མ་འདངས་པ་shortage
མ་འདོད་པ་dislike
མ་འདོས་པར་unspeakable
མ་འདྲ་བ་བཟོ་བ་dissimilate
མ་འཕྲོད་པ་fail
མ་འཕྲོས་not to wander off
མ་འབྱར་བ་analysis
མ་འབྱུང་not leave
མ་འཛོམས་པ་absent
མ་འཛོམས་པའི་absence
མ་འཛོམས་མཁན་absenter
མ་འོངས་ཀྱི་futurity
མ་འོས་པ་ineligible
མ་ཡི་མ་grandmother
མ་ཡིན་ན་unless
མ་ར་ཏི་ཀ་maratika cave
མ་རབ་ཅན་rascal
མ་རུང་unsuitable
མ་རུང་འགྱུར་unsuitable
མ་རྒད་emerald
མ་རྒལ་བ་not cross over
མ་རྒྱལ་བ་unconquered
མ་རྨོས་needs no toil
མ་རྨོས་ལོ་ཏོག་maize flour
མ་རྩ་རིང་ལུགས་capitalism
མ་ལ་ཡ་ཙེ་small lizard
མ་ལ་ཡར་གནས་མོ་epithet of durga
མ་ལ་ཡར་སྐྱེས་white sandal wood
མ་ལངས་པ་without rising
མ་ལུས་པར་མཛད་entirely removed
མ་ལུས་རྒྱལ་པོ་universal king
མ་ལེ་chin
མ་ལེམ་garland
མ་ལྟར་like a mother
མ་ལྡང་བ་inadequate
མ་ལྷ་deity of mothers
མ་ཤ་soybean
མ་ཤི་བ་survivor
མ་ཤུམ་མཛོད་do not weep
མ་ཤེས་did not know
མ་ཤོར་not to stray
མ་སོ་lower teeth
མ་སོ་ཡོད་པ་lower teeth
མ་སོང་he did not go
མ་སྐུལ་རང་མོས་automatic
མ་སྒྲིབ་ethically neutral
མ་སྙན་གྲགས་disgrace
མ་སྙོམས་པ་imbalance
མ་སྤངས་བྲལ་བ་to transcend
མ་སྤུན་of the same mother
མ་སྤྲད་པ་deprive
མ་སྦས་པར་openly
མ་སྨད་མ་a buddhist nun
མ་སྨན་queen
མ་ཧ་ནི་ལ་precious stone
མ་ཧེ་water buffalo
མ་ཧེ་མོ་female buffalo
མ་ཧེས་འགྱེད་པ་buffalo fight
མཁ་གནད་ཆེ་ཤོས་quintessence
མཁན་དཀར་white fern
མཁན་ནག་black fern
མཁན་པོ་ཡག་པོ་excellent lecturer
མཁན་པོ་རྣམས་authors
མཁན་སློབ་professor and pupil
མཁའ་ཀློང་གཏད་gaze at the sky
མཁའ་ཉལ་bird
མཁའ་དང་འདྲེས་merged into space
མཁའ་བགྲོད་bird
མཁའ་མཉམ་པ་name of buddha
མཁའ་འཕྲོ་daka
མཁའ་རུ་towards the sky
མཁའ་རུ་གཏད་direct in the space
མཁའ་ལ་འཁོར་vulture
མཁའ་ལ་ལྡིང་བ་soar in the air
མཁའ་ལས་བབ་rain
མཁའ་ལྟ་བུ་like space
མཁའི་ཟིལ་བ་fog
མཁའི་རྒྱལ་མཚན་cloud
མཁར་བཤིགས་destroyed the fort
མཁར་འགོ་commander of a fort
མཁར་འགྱེལ་the castle collapses
མཁར་རྒྱབ་པ་fortify
མཁར་རྩེ་fort in phan yul
མཁར་སྒོ་gate of the castle
མཁར་སྲུང་guard of a fortress
མཁལ་sides
མཁལ་མའི་renal
མཁས་པ་མ་ཡིན་inexpert
མཁས་པ་མ་ཡིན་པ་artless
མཁས་པ་མི་དགུ་nine sages
མཁས་པ་མིན་པ་inapt
མཁས་པ་སྨད་པ་inferior attainments
མཁས་པའི་intellectual
མཁས་པའི་རིགས་of the learned class
མཁས་པའི་རྒྱན་a grammatical work
མཁས་པས་དྲེགས་pedantic
མཁས་པོར་professionally
མཁས་མཆོག་རྣམས་most learned men
མཁས་རློམས་conceited person
མཁས་ཤོས་ace
མཁུར་བ་cheeks
མཁུར་ཚོས་cheeks
མཁོ་ཆས་སྦྱར་བ་equip
མཁོ་སྤྲོད་supplies
མཁོན་enmity
མཁྱས་venerable
མཁྱེན་བཞིན་དུ་while knowing
མཁྱེན་བརྩེ་omniscient mercy
མཁྱེན་མཁན་very learned
མཁྲང་པོ་robust constitution
མཁྲིག་མ་wrist of the hand
མཁྲིས་bile
མཁྲིས་པ་bile
མཁྲིས་ཚད་bilious fever
མཁྲིས་ལྦ་bile goiter
མཁྲེལ་བ་to integrate
མགར་work of a craftsmith
མགར་ཁང་smithy
མགར་ལས་smithery
མགར་ས་smithy
མགལ་ཆག་broken jawbone
མགལ་པ་billet of wood
མགལ་བུད་dislocated jawbone
མགུ་ཁག་པོ་fastidious
མགུ་ནས་delighted
མགུར་ཆེན་grand song
མགུལ་ཆམས་common cold
མགུལ་ཆིངས་necklace
མགུལ་རིང་long neck
མགུལ་སྔོན་peacock
མགོ་ཀླད་brain
མགོ་གཟེར་headache
མགོ་གེམས་stupid
མགོ་ཉལ་hair of the head
མགོ་ན་headache
མགོ་ནད་headache
མགོ་ནས་from the beginning
མགོ་པགས་scalp
མགོ་བ་head
མགོ་བཀོད་on top
མགོ་བཅོས་head treatment
མགོ་བརྒྱན་head gear
མགོ་བསྙུང་stiff neck
མགོ་བོར་བཞག་to place on the head
མགོ་བྲེགས་buddhist monk
མགོ་མཇུག་beginning and end
མགོ་མཉམ་པ་one the same level
མགོ་མོ་གཡོག་head cover
མགོ་ཚོན་binding of a book
མགོ་འཐོམ་པོ་puzzling
མགོ་འཐོམ་བྱེད་puzzle
མགོ་འཐོམས་dazed head
མགོ་འདོགས་པ་surrender
མགོ་ཡུ་འཁོར་བ་giddy
མགོ་ཡུར་dizziness
མགོ་རས་head scarf
མགོ་རིལ་bald
མགོ་རྗེན་with uncovered head
མགོ་ལིང་ཅན་tree
མགོ་ལྕག་blow on the head
མགོ་ལྗི་ཡོག་པ་heavy head
མགོ་ཤོག་title page of a book
མགོ་སྐོར་མཁན་imposter
མགོ་སྐྱ་gray head
མགོ་སྐྱོབ་helmet
མགོ་སྙོམས་impartial
མགོ་སྤུ་head hair
མགོ་སླ་པོ་gullible
མགོན་བགྱིད་པ་act as a protector
མགོན་མེད་པ་protectorless
མགོན་སྐྱབས་god
མགྱོགས་གཏམ་clapper talk
མགྱོགས་ནས་early barley
མགྱོགས་ནུས་acceleration
མགྱོགས་འགྲོས་canter
མགྱོགས་ལོད་speed
མགྱོགས་ཤུགས་velocity
མགྲིན་གཅིག་པས་in unison
མགྲིན་ཐུང་short neck
མགྲིན་དབྱངས་voice
མགྲིན་པ་ཅན་peaked mountain
མགྲིན་པའི་སྒྲ་voice
མགྲིན་པར་at the throat
མགྲིན་རིང་པ་long neck
མགྲོན་དུ་བོས་invoking
མང་many
མང་གུ་ར་red fish
མང་ཆེན་བ་majority
མང་ཐུན་meat
མང་དཀར་place gtsang
མང་དག་many
མང་དུ་བཏང་བ་multiply
མང་དུ་ཟད་པ་voraciousness
མང་དུ་སོང་བ་to increase
མང་དུ་སྟོན་པ་many teachings
མང་དུ་སྤྲོ་to think even more
མང་དྲགས་ན་if there is too much
མང་དྲགས་པ་excess
མང་ན་ཡང་although many
མང་པོ་མང་པོ་abundant
མང་པོ་འཛིན་much
མང་པོ་རྣམས་many
མང་པོའི་སྒོ་many doors
མང་པོས་བཀུར་བ་honored of many
མང་བཀུར་སྡེ་sammitiyas
མང་བར་abundantly
མང་བསྐུར་བ་honored of many
མང་ཚིག་plural
མང་ཚིག་མཐའ་དག་plural sign
མང་འཁུལ་domain
མང་འཛིན་a large number
མང་ཡུལ་district in tibet
མང་ལ་དུ་longer
མངག་གཏོང་ཁང་local police station
མངའ་ཁུངས་territory
མངའ་ཁུལ་territory
མངའ་ཁུལ་གྱི་territorial
མངའ་ཆེན་པོ་great dominion
མངའ་རིས་ཤ་a kind of apricot
མངའ་སྐྱེས་birth from a womb
མངའ་སྡེ་state
མངར་sweet
མངར་ཁམ་peach
མངར་ཁམ་མེ་ཏོག་peach flower
མངར་བ་sweet
མངར་ཟས་ཤིག་cake
མངལ་womb
མངལ་ནད་disease of the womb
མངལ་ནས་སྐྱེ་བ་born from a womb
མངལ་རླུགས་པ་abortion
མངལ་སྦྲུམ་gestation
མངོན་ཆ་ཆེ་བ་vivid
མངོན་ཐོ་eminence
མངོན་དགའ་great joy
མངོན་དགའ་བ་world of beatitude
མངོན་དུ་བྱས་made manifest
མངོན་པ་རྣམས་manifestation
མངོན་པར་གསར་པ་quite new
མངོན་པར་ཆགས་པ་manifest attachment
མངོན་པར་ཆལ་དུ་diffused
མངོན་པར་མཆོད་make offering
མངོན་པར་འགྲུབ་become manifest
མངོན་པར་རབ་ཏུ་suspends
མངོན་པར་རྒྱལ་pride
མངོན་པར་ལྡང་faith
མངོན་པར་ཤེས་clairvoyance
མངོན་པར་ཤེས་པ་clairvoyance
མངོན་པར་སྤྲུལ་emanate
མངོན་ཕྱུངས་revealing
མངོན་ཕྱོགས་approach
མངོན་ཕྲ་dissimulation
མངོན་བསྟན་clearly shown
མངོན་མཚན་evident sign
མངོན་མཛོད་abhidharma kosa
མངོན་འགྲུབ་directly evident
མངོན་འབྱུང་བ་histories
མངོན་ཤར་བ་to manifest
མངོན་ཤེས་clairvoyance
མངོན་སུམ་མཇལ་directly meeting
མངོན་སུམ་མཛད་manifest
མངོན་སྟོན་directly reveals
མངོན་སྦྱར་semantics
མཆན་ཁུག་armpit
མཆན་དུ་under the arm
མཆན་དུ་བགྲེངས་signify
མཆན་བཅུག་crook of arm
མཆན་རྒྱབ་པ་comment
མཆན་སྤུ་armpit hair
མཆི་མ་tear
མཆི་མ་བཀུ་shed tears
མཆི་མ་བསྙིལ་shed tears
མཆི་མ་བླག་པ་shed tears
མཆི་མ་འདོན་པ་shed tears
མཆི་མ་འཕྱི་བ་wipe away tears
མཆི་མ་འབྱིན་པ་shed tears
མཆི་མ་འཛག་པ་dropping of tears
མཆི་མ་སྐྱེམ་པ་dry tears
མཆི་མའི་ཐིག་པ་tear drops
མཆིག་སྐོར་བ་grind
མཆིན་ནད་liver disease
མཆིན་པ་ཞོ་ཤ་fruit
མཆིན་ཚད་liver fever
མཆིལ་spit
མཆིལ་ཁྲ་sparrow hawk
མཆིལ་བ་འཐབ་པ་bulbul fight
མཆིལ་མ་spit
མཆིལ་མ་གཡུག་པ་spit
མཆིལ་ལུད་mucous
མཆིལ་སྣབས་mucous
མཆིས་པའི་ཚེ་when it was
མཆིས་ལགས་པ་be
མཆུ་ཅན་having fine lips
མཆུ་ཏོ་lip
མཆུ་ཏོ་རྒྱབ་པ་peck
མཆུ་ནོན་པ་pointed beak
མཆུ་བཙུམ་close the lips
མཆུ་འཕྱང་spout
མཆུས་འཇིབས་པ་suck with the lips
མཆེ་གཅིགས་clenched fangs
མཆེད་གཉིས་two brothers
མཆེད་པ་increase
མཆེད་ལྕམ་དྲལ་brother and sister
མཆེར་པ་spleen
མཆེས་པ་happy advent
མཆོ་ཐོ་beak of a bird
མཆོག་གི་འདྲ་བ་like the best
མཆོག་གྱུར་ལུས་superior body
མཆོག་ཉལ་a number
མཆོག་ཏུ་དགའ་བ་supremely happy
མཆོག་ཏུ་བཀྲབ་exquisite choice
མཆོག་ཏུ་བཀྲབས་the chosen
མཆོག་ཏུ་བཟུང་very attached
མཆོག་ཏུ་བསམ་པ་well thought of
མཆོག་ཏུ་ཞི་བ་supreme peace
མཆོག་ཏུ་རིང་བ་very remote
མཆོག་ཐུན་supreme and ordinary
མཆོག་ཐོབ་magnolia
མཆོག་དགའ་supreme joy
མཆོག་བདག་the earth
མཆོག་བདེ་fish
མཆོག་མ་གཉིས་the two bow tips
མཆོག་འདོད་the sun
མཆོག་འཛིན་clinging
མཆོག་ཡས་a great number
མཆོག་ཤེས་wisdom
མཆོག་སྐྱོང་chief protector
མཆོག་སྒྱུར་utmost
མཆོག་སྦྱིན་མ་a medicine
མཆོང་jump
མཆོངས་jump
མཆོངས་རྒྱུག་jumping and running
མཆོད་ཁང་སྒོ་chapel door
མཆོད་གཞིས་monastic estate
མཆོད་གཤམ་shrine arrangement
མཆོད་གཤོམས་altar
མཆོད་གྲལ་row of offerings
མཆོད་ཉིད་offering
མཆོད་པ་འབུལ་བ་make offerings
མཆོད་པ་ལ་འཇུག་making offerings
མཆོད་ཕུལ་བ་to make offerings
མཆོད་མཇལ་religious visit
མཆོད་འོས་གནས་sanctuary
མཆོད་ལྡན་sun
མཆོད་ལྡན་མ་epithet of uma
མཆོད་སྡོང་ཅན་a kind of water fowl
མཆོད་སྤྲིན་cloud of offerings
མཇལ་དུ་ཡོད་saw that
མཇལ་ཕྱག་salutation
མཇལ་བར་ཞུ་བ་ask for an audience
མཇལ་མྱོང་to meet somebody
མཇལ་ཡང་whenever
མཇལ་སྣ་འཚོལ་conduct
མཇིང་ལྷག་nape of the neck
མཇུག་end
མཇུག་ཏུ་at the end
མཇུག་ཐོག་དེར་as soon as
མཇུག་ཐོག་སུ་at the very end
མཇུག་དོ་bone of the tail
མཇུག་ཕོད་ཅན་comet
མཇུག་བསྐྱངས་continued
མཇུག་བསྒྲིལ་ending
མཇུག་བསྒྲིལ་བ་end
མཇུག་བསྡུ་བ་final summary
མཇུག་རིངས་comet
མཇུག་རྫོགས་end
མཇུག་ཤོག་tail feather
མཇུག་སྒྲོ་ཅན་peacock
མཇེ་penis
མཇེ་མགོ་glans penis
མཇེ་རླིག་penis and testicles
མཉན་དུ་འོངས་come to listen
མཉམ་གཞས་chorus
མཉམ་ཉིད་ངང་state of integration
མཉམ་དུ་གནས་པ་coexist
མཉམ་དུ་བསྲེ་བ་mix together
མཉམ་དུ་འགྲོ་བ་going together
མཉམ་དུ་སྦྱར་to join together
མཉམ་པ་བརྗོད་པ་invite impartially
མཉམ་པར་equally
མཉམ་པར་གཞག་rest
མཉམ་པར་ཆགས་པ་total passion
མཉམ་པར་ཐོབ་ན་obtain equality
མཉམ་པར་བཞག་པར་meditative equipoise
མཉམ་པར་བསྲེ་equally integrated
མཉམ་པས་measures
མཉམ་པོར་common
མཉམ་བཞག་meditative equipoise
མཉམ་བཞེས་cooperation
མཉམ་བརྗེ་equal exchange
མཉམ་བསྲེས་ཀྱི་medley
མཉམ་བྱུང་simultaneous
མཉམ་བྱེད་paying in price
མཉམ་འཇོག་ཚེ་during meditation
མཉམ་རུབ་coalition
མཉམ་རུབ་ཀྱི་collective
མཉམ་རོགས་partnership
མཉམ་ལས་ཁང་cooperative
མཉམ་ལས་བྱེད་པ་cooperate
མཉམ་སྤྲོ་ཁང་club
མཉམ་སྦྱར་to join together
མཉམ་སྦྱོར་union
མཉམས་གྲིབ་vow breaking
མཉེན་མཉེལ་བ་make soft by tanning
མཉེན་ཚན་kindred
མཉེས་གྱུར་be pleased
མཉེས་ཐང་village
མཉེས་པར་དཀའ་difficult to please
མཉེས་པར་འགྱུར་become delighted
མཉེས་པོ་interesting
མཉེས་བྱས་gladdened
མཉེས་ཚོར་ཆེ་བ་delights in
མཉོས་tribe in tibet
མཐངས་all
མཐའ་ཀླས་པ་limitless
མཐའ་ཁྱབ་པར་up to the edges
མཐའ་ཁྱོལ་བ་thorough
མཐའ་གཅིག་absolute
མཐའ་ཐུག་པ་final
མཐའ་དག་མིན་plural sign
མཐའ་དང་མཉམ་boundless
མཐའ་དབུས་མེད་uncircumscribed
མཐའ་བརྟེན་ནས་by his side
མཐའ་བརྡུལ་a number
མཐའ་བསྡོམས་conclusion
མཐའ་བྲལ་free from extremes
མཐའ་མཇུག་final
མཐའ་མཉམ་boundless
མཐའ་མའི་མཐའ་extreme
མཐའ་མེད་འཁོར་revolves without end
མཐའ་འབྱམས་a very large number
མཐའ་འཛིན་limits
མཐའ་ཡས་པར་infinitely
མཐའ་ཡས་འོད་a tathagata
མཐའ་རྟེན་supplemental
མཐའ་ལས་from the extremes
མཐའ་ལྕགས་form of a mirror
མཐའ་ལྟེབ་པ་turn in the edge
མཐའ་ལྷས་frill
མཐའ་སྤངས་པ་abandon extremes
མཐའ་སྤྱད་theorize the depths
མཐའི་remote
མཐའི་རྒྱལ་ཁམས་border region
མཐར་གནས་པ་barber
མཐར་ཐུག་ཐེག་པ་final vehicle
མཐར་ཐུག་པ་མེད་inexhaustible
མཐར་དཀྲོལ་liberation
མཐར་མ་ཕྱིན་པ་fail
མཐར་མཐུད་པ་subjoin
མཐར་ཟིན་པ་sky
མཐར་འཁྱོལ་success
མཐར་འཕྱིན་པ་find fulfillment
མཐར་འཛིན་holding to extremes
མཐར་རྒྱས་greatly increase
མཐར་སོན་achievement
མཐར་སྐྱོལ་completion
མཐར་སྐྲོད་abolition
མཐས་approaching
མཐིང་ཁར་as blue color
མཐིང་གི་an ancient dynasty
མཐིང་དམར་violet
མཐིང་འོད་blue light
མཐིང་རིལ་wild duck
མཐིང་ཤུན་sulphate of copper
མཐིང་ཤོག་dark blue paper
མཐིང་ཧྲིལ་smaller bird
མཐིམ་ཟིན་པ་sunken
མཐིལ་palm
མཐིལ་ཕྱིན་thorough
མཐིལ་མེད་baseless
མཐིལ་ཤིང་floor
མཐུ་གཏེར་treasure of power
མཐུ་ཅན་powerful
མཐུ་ཆེ་great power
མཐུ་ཆེ་བ་great power
མཐུ་ཆེན་great magician
མཐུ་ཆེན་པོ་great power
མཐུ་ཆེན་ལྡན་པ་great power
མཐུ་ཉམས་weaken
མཐུ་ཐོབ་efficiency
མཐུ་ཐོབ་པ་obtain power
མཐུ་དང་ལྡན་པ་powerful
མཐུ་དབང་power
མཐུ་མེད་པ་powerless
མཐུ་མོ་ཆེ་a preta
མཐུ་འགྲུབ་པ་achieve power
མཐུ་ཡོད་པ་efficacious
མཐུ་རྒྱབ་མཁན་sorcerer
མཐུ་ལས་by means of
མཐུ་སྔགས་sorcery
མཐུག་heavy
མཐུག་པོ་བཟོ་བ་fatten
མཐུག་པོར་thickly
མཐུག་ཚད་thickness
མཐུག་ལོས་density
མཐུད་series
མཐུད་མཚུངས་joint
མཐུད་འབྲེལ་adjoining
མཐུད་རྒྱབ་པ་join
མཐུན་གྱུར་attuned to
མཐུན་གྲོགས་ཅན་amiable
མཐུན་དཔེ་similar example
མཐུན་པ་ཉིད་concordance
མཐུན་པ་མིན་does not concur with
མཐུན་པའི་རླུང་favorable wind
མཐུན་པའི་ལས་agreeable work
མཐུན་པར་གྱུར་in harmony
མཐུན་པར་སྐྱེས་younger brother
མཐུན་པར་སྣང་བ་similar culture
མཐུན་པོ་མེད་པ་hostile
མཐུན་ཕྱོགས་similar class
མཐུན་བྱ་session
མཐུན་ཚིག་concordant words
མཐུན་སྒྲིག་reconciliation
མཐུན་སྒྲིལ་unity
མཐུན་སྡེབས་harmonize
མཐུན་སྤྱོད་concordant practice
མཐུའི་སྐབས་occasion of power
མཐུས་power
མཐེ་ཆེན་thumb
མཐེ་པ་little finger
མཐེ་བོ་thumb
མཐེ་མོ་thumb
མཐེབ་གཉིས་two thumbs
མཐེབ་མོ་thumb
མཐེབ་སྲིན་ring finger
མཐོ་གང་བའི་ཚད་finger span in size
མཐོ་ཉམས་ཅན་lofty
མཐོ་དམན་མཉམ་པ་of equal height
མཐོ་བ་high
མཐོ་བརྒྱད་eight palms
མཐོ་མཆོང་high jump
མཐོ་མེད་པ་not high
མཐོ་རིམ་high level
མཐོ་རིས་གྲགས་barber
མཐོ་རིས་རླུང་heavenly breeze
མཐོ་རེ་ཙམ་span in length
མཐོ་རྒྱབ་པ་give earnest money
མཐོ་ལ་བརྗིད་པ་lofty and majestic
མཐོ་སྤྱོད་haughty manner
མཐོང་གྲོལ་liberation by seeing
མཐོང་ཆུང་disdain
མཐོང་ཆེན་པོ་dignified
མཐོང་ཆོས་ལ་in this lifetime
མཐོང་ཐུབ་possible to see
མཐོང་དང་མཚུངས་just like seeing
མཐོང་དུ་མེད་པ་not perceivable
མཐོང་བ་རབ་དག་very pure seeing
མཐོང་བ་ལ་སོགས་views and so forth
མཐོང་བའི་ལམ་path of seeing
མཐོང་བའི་ས་ground of seeing
མཐོང་བར་གྱུར་was seen
མཐོང་བར་དཀའ་difficult to see
མཐོང་བར་དཀའ་བ་difficult to see
མཐོང་བས་སྒྲོལ་deliverance at sight
མཐོང་བྱེད་seen
མཐོང་མ་མྱོང་བ་never seen
མཐོང་མྱོང་བ་have seen before
མཐོང་ཞེས་བྱ་seeing
མཐོང་ཟིན་seen
མཐོང་ཟིན་པ་saw
མཐོང་རྒྱའི་visual
མཐོང་ལྡན་ajatasatru
མཐོང་སྔོན་blue
མཐོངས་ཆེ་བ་dome
མཐོན་དམན་high and low
མཐོན་པོའི་ལྷ་epithet of vishnu
མཐོན་པོར་རློམ་puffed up
མཐོལ་ལོ་བཤགས་confess
མཐོས་abbr of mtho ris
མད་ཏ་ལི་ཀ་a flower
མད་པ་truth
མདང་ནུབ་last night
མདང་སང་yesterday
མདང་སུམ་last night
མདངས་འཕྲོ་radiate the light
མདངས་འབར་བ་glittering
མདའ་གསས་arrow deities
མདའ་གསིར་པ་whirl an arrow
མདའ་གྲོང་quiver
མདའ་དཔོན་ཆེ་བ་brigadier
མདའ་དོང་quiver
མདའ་ཕུ་place in tibet
མདའ་བ་parapet
མདའ་བཀྲ་arrow
མདའ་བསྟན་deer
མདའ་འཕངས་པ་shoot an arrow
མདའ་འཕེན་པ་shoot
མདའ་རྒྱག་to shoot an arrow
མདའ་རྒྱག་པ་shoot arrows
མདའ་རྒྱབ་པ་shoot an arrow
མདའ་རྒྱབ་མཁན་archer
མདའ་རྩེད་archery
མདའ་ལམ་arrow way
མདའ་ལྟོང་notch in an arrow
མདའ་ཤུབས་quiver
མདའ་སྣོད་quiver
མདུང་ཅན་evil spirit
མདུང་ཏོག་point of a spear
མདུང་ཐུང་lance
མདུང་བཟོ་པ་maker of lances
མདུང་མ་beam
མདུང་འཛིན་hornet
མདུང་ཡུ་shaft of a lance
མདུང་རྒྱབ་པ་sting
མདུང་ཤིང་shaft of a lance
མདུད་knot
མདུད་ཁྱིམ་pole tent
མདུད་དོར་བ་lay a wager
མདུད་པ་knot
མདུད་པ་ཅན་knotty
མདུད་པ་ཐེབས་པ་constrict
མདུད་པ་བཅད་པ་disconnect
མདུད་པ་སྙིང་པ་wealth
མདུད་པར་བཟུང་malice
མདུད་འཛིན་wreath of flowers
མདུད་རྫོངས་forms of the knots
མདུན་ངོས་front side
མདུན་ཐབས་bride
མདུན་དྲུང་གི་in front of
མདུན་དྲུང་དུ་in front of
མདུན་ཕྱོགས་སུ་in front of
མདུན་བསྐྱེད་generation in front
མདུན་མ་conference
མདུན་ཟུར་front corner
མདུན་རོལ་ན་in front of
མདུན་ལེགས་good frontage
མདུར་cantor
མདོ་ཅན་prudent
མདོ་དང་མདུད་valleys or hills
མདོ་བ་excellent horse
མདོ་བོ་ལུང་valley
མདོ་མང་ལྕགས་carved iron
མདོ་མེད་imprudent
མདོ་ཙམ་briefly
མདོ་རྒྱུད་sutras and tantras
མདོ་ལུགས་sutra system
མདོ་སྔགས་རྣམས་monks and tantrikas
མདོ་སྔོབ་benediction to host
མདོ་སྡེ་sets of discourses
མདོ་སྡེ་ཟབ་མོ་profound sutras
མདོ་སྡེ་རྣམས་sautrantikas
མདོག་ཉེས་པོ་ugly
མདོག་ཏུ་རུང་བ་suitable as hue
མདོག་དཀར་white color
མདོག་དཀར་པོ་fair
མདོག་དམར་red color
མདོག་ནག་dark
མདོག་བུ་པ་a raven
མདོག་མདོག་pretend particle
མདོག་ལེགས་beautiful color
མདོག་སྣུམས་glossy complexion
མདོངས་མཐའ་ཅན་peacock
མདོངས་ལྡན་peacock
མདོའི་སྡེ་sets of discourses
མདོར་in brief
མདོར་ན་in brief
མདོར་བསྟན་brief indication
མདོར་བསྟན་པ་brief explanation
མདོར་བསྡུ་ན་in brief
མདོར་བསྡུས་ན་in brief
མདོར་བསྡུས་པ་concise way
མདོར་བསྡུས་ཙམ་in a limited way
མན་ངག་གི་གཞུང་text of the upadesha
མན་ངག་གི་དམ་པ་supreme upadesha
མན་ངག་གི་རྩ་བ་root upadesha
མན་ངག་ཕྲན་བུ་a little advice
མན་ད་ར་བ་tree of paradise
མན་དྷ་ར་mandarava
མན་ཛི་ར་mineral
མན་ཡན་below and above
མན་ཤེལ་crystal
མནན་མགོ་a mountain in nepal
མནམ་ཞིང་having smelt
མནའ་ནང་district in nw tibet
མནའ་མ་གཏོང་to send as a bride
མནའ་མ་ལེན་to take a bride
མནར་སེམས་vindictive attitude
མནལ་sleep
མནལ་ཁུག་to fall asleep
མནལ་གཟིམ་པ་go to sleep
མནལ་དུ་ཕེབ་པ་fall asleep
མནལ་ལམ་dream
མནལ་ལམ་དུ་མཇལ་met in a dream
མནལ་ལམ་འཁྲུགས་disturbed by a dream
མནལ་ལས་དཀྲོགས་shook awake
མནལ་ལྟས་ངན་པ་nightmares
མནལ་སད་woke up
མནལ་སད་དུས་when waking up
མནོ་བསམ་པ་muse upon
མནོང་མེད་shameless
མནོད་པ་to cause to receive
མནོལ་བ་ཡིན་have been weakened
མནོལ་རིག་weak intellect
མནོས་to cause to receive
མཚང་དྲུས་པ་annoy
མཚང་ཕྱར་exposing the faults
མཚང་བྲུས་irritated
མཚང་རྗེན་པ་expose nakedly
མཚད་མེད་boundlessness
མཚན་གཉིས་ཅན་bisexual
མཚན་གནས་denomination
མཚན་གསོལ་བ་give a name
མཚན་གུང་midnight
མཚན་ཅིག་faction
མཚན་ཉིད་གཅིག་single character
མཚན་ཉིད་ཆད་པ་hypothetical
མཚན་ཉིད་ཟབ་པ་profound character
མཚན་ཉིད་རིག་པ་philosophy
མཚན་ཐུན་night session
མཚན་དཀྱིལ་midnight
མཚན་དང་དབྱིབས་limbs and shape
མཚན་དུས་night time
མཚན་ཕྱེད་midnight
མཚན་བྱང་title
མཚན་མ་མཆིས་པ་signless
མཚན་མ་འཛིན་aesthetic perception
མཚན་མའི་གནས་abode of signs
མཚན་མའི་ལྷ་sign deity
མཚན་མར་སྒོམ་པ་take as an omen
མཚན་མོ་night
མཚན་མོ་འབྲལ་ruddy goose
མཚན་མོ་ཡང་even at night
མཚན་མོའི་nightly
མཚན་མོའི་གོས་darkness
མཚན་རྫོགས་perfect in qualities
མཚན་ལ་at night
མཚན་ལས་night work
མཚན་ལྟས་dream prophecy
མཚན་སྨོས་call upon
མཚམས་ཁང་hermitage
མཚམས་བཅད་bounded within limit
མཚམས་བཞག་stopped
མཚམས་བཞག་པ་halt
མཚམས་མཐའ་boundary line
མཚམས་མཚམས་sometimes
མཚམས་མཚམས་ལ་occasionally
མཚམས་ཚིགས་words of approval
མཚམས་འཇོག་surcease
མཚམས་འདྲི་a visit
མཚམས་འདྲི་ཞུ་to visit
མཚམས་རེ་sometimes
མཚམས་ལྡན་མ་women
མཚམས་སུ་when connective
མཚམས་སྦྱར་བ་transition
མཚམས་སྦྱོར་བ་transition
མཚར་fantastic
མཚར་གྱི་ཚུལ་jokingly
མཚལ་དཀར་white paint
མཚལ་དམར་vermilion
མཚུངས་པའི་ལན་reciprocal
མཚུངས་པར་བྱ་བ་equalize
མཚུངས་པོ་apt matching
མཚུངས་བྱ་ratio
མཚུངས་ཟླ་match
མཚུངས་ལྡན་similar association
མཚུར་ཕུ་place in stod lung
མཚེ་pond
མཚེ་ཕྲུག་twin
མཚེ་ལྡུམ་ephedra sinica stapf
མཚེ་སྐྱོང་medicinal earth
མཚེའུ་pond
མཚེའུ་འཁྲུགས་agitated pond
མཚེར་ལྷང་neigh
མཚོ་lake
མཚོ་གླིང་island
མཚོ་ཆུང་ངུ་small lake
མཚོ་ཕག་hippopotamus
མཚོ་མ་ཕམ་lake manasarowar
མཚོ་འཁོར་assemblage of lakes
མཚོ་འགྲམ་ནས་along the seashore
མཚོ་འཇག་pirate
མཚོ་ཡས་a number
མཚོ་རྫོང་a jong in kong po
མཚོ་རླངས་vapors of a lake
མཚོ་ལས་སྐྱེས་lotus
མཚོན་ཆ་ཁང་armory
མཚོན་ཆའི་གཙོ་arrow
མཚོན་ཆའི་མཛོད་arsenal
མཚོན་དང་བྲལ་beyond examples
མཚོན་ན་for example
མཚོན་པར་མཁས་able to communicate
མཚོན་བྱ་དོན་meaning
མཚོན་བྱེད་illustrator
མཚོན་མདངས་tint
མཚོན་རྟུལ་blunt weapon
མཚོན་ལ་སོགས་པ་weapons and so forth
མཚོའི་ཁ་beach
མཛང་ར་cradle
མཛངས་wise
མཛངས་མ་woman
མཛད་ཀྱིན་practicing
མཛད་པ་སྐོར་མང་many stories
མཛད་ཕྲིན་buddha activity
མཛད་འཁུར་responsibility
མཛད་རིམ་schedule
མཛད་སྒོ་function
མཛའ་གཅུགས་love
མཛའ་གཙུགས་པ་cultivate friendship
མཛའ་བཤེས་friend
མཛུ་གུའི་ཚིགས་knuckle
མཛུག་མོ་finger
མཛུག་རྒྱུས་finger ring
མཛུབ་ཀེར་stiff finger
མཛུབ་ཀྱང་stiff finger
མཛུབ་ཀྱེར་stiff finger
མཛུབ་གུ་finger
མཛུབ་ཆུང་little finger
མཛུབ་བརྐྱངས་extended finger
མཛུབ་མོ་index finger
མཛུབ་མོ་དང་པོ་index finger
མཛུབ་མོ་མེད་པ་one without fingers
མཛུབ་ཚིགས་joint of a finger
མཛུབ་རྩེ་tip of a finger
མཛུབ་ལྕིབས་thimble
མཛུབ་སྐྱིས་finger ring
མཛེ་ནད་leprosy
མཛེ་ནད་པ་leper
མཛེ་རྨོག་helmet
མཛེས་དགའ་delightful
མཛེས་པར་beautifully
མཛེས་པོ་བཟོ་བ་beautify
མཛེས་མི་མཛེས་beautiful or ugly
མཛེས་ལྡན་མ་handsome woman
མཛོ་དཀར་white mdzo
མཛོ་མཛངས་བླུན་a mahayana sutra
མཛོ་མར་butter of jomo yaks
མཛོ་ཚྭ་medicinal salt
མཛོད་ཀྱི་ཏི་ཀ་abhidharmakosa tika
མཛོད་ཁང་པ་storekeeper
མཛོད་ཇུས་a fine satin
མཛོད་ཐ་མ་patala tree
མཛོད་པ་treasurer
མཛོད་བཏགས་fine silk scarf
མཛོད་ལུས་plantain plant
མའི་མ་grandmother
མའི་འོད་གསལ་mother clear light
མའོ་དབྱི་woolen sweater
མར་ཀོག་skin of butter
མར་གཟར་བ་downfall
མར་གཡུག་པ་dump
མར་གསར་fresh butter
མར་གྱི་གང་medicinal fruit
མར་གྱིས་with butter
མར་ཆེན་cook
མར་ཐང་price of butter
མར་པ་native of mar
མར་པུར་butter and treacle
མར་བླུགས་oil pitcher
མར་མར་སྒྲ་a kind of war cry
མར་ཚོན་ཁྲ་colored butter
མར་འཁྱགས་པ་coagulated fat
མར་འགྲོ་to walk down
མར་འདེད་པ་chase down
མར་འབབ་པ་descend
མར་འཛིན་regarded as a mother
མར་འོག་ཏུ་below
མར་རྐན་lower palate
མར་རྐྱལ་butter bag
མར་རྒྱས་decadence
མར་རྗེན་butter not melted
མར་རྙིང་old butter
མར་ལ་སྲེ་བ་mix with butter
མར་ལྟ་looked down
མར་ཤེས་cognize as mother
མར་ཤེས་པ་cognize as mother
མར་སྙིང་པ་old butter
མར་སྡོད་པ་sit down
མར་སྣུམ་butter or oil
མལ་ཁྲག་ཅན་adulterer
མལ་གདན་mattress
མལ་གཟན་bedding
མལ་གྱི་འོག་ཏུ་under the bed
མལ་ཆས་bedding
མལ་ཏིང་ལ་on the bed
མལ་དུ་in bed
མལ་དུ་ཁུར་stretcher
མལ་དུ་ཉལ་ཟིན་lay down in bed
མལ་ནས་ལངས་got out of bed
མལ་བདེ་བ་quiet sleep
མལ་འཆའ་བ་prepare a bed
མལ་ས་sleeping place
མལ་སའི་ཁང་མིག་bedroom
མས་མཐར་in the lower part
མི་ཁེངས་པ་ཆེ་conceited man
མི་ཁེལ་བ་to not trust
མི་ཁྱུ་company of men
མི་ཁྱེད་there is not enough
མི་ཁྲེལ་བ་not displease
མི་ཁྲོད་troop
མི་གཏའ་མ་hostage
མི་གནས་མཐོ་པོ་royal
མི་གཞན་པ་others
མི་གཞན་མེད་པ་seclude
མི་གཞན་ཞིག་someone else
མི་གཡས་right eye
མི་གཤེ་བ་indecent language
མི་གསང་བ་to not hide
མི་གསལ་བ་unclear
མི་གསུམ་three people
མི་གསོད་མཁན་assassin
མི་གསོད་ལས་homicide
མི་གོང་not high
མི་གྱོ་བའི་ལས་subliminal activity
མི་གྱོ་བའི་ས་immovable stage
མི་ངན་གྱི་ཐོ་black list
མི་ཆུང་གི་elfin
མི་ཆུང་བ་bon heaven
མི་ཆོག་not sufficient
མི་ཆོད་པ་not cut off
མི་ཉག་province of khams
མི་ཉན་useless
མི་ཉམ་ཆུང་humble man
མི་ཉིད་ཅན་humane
མི་ཉེད་པ་crushing
མི་ཐ་ར་vessel
མི་ཐད་ཀར་personally
མི་ཐུན་points to be shunned
མི་ཐོད་པ་human skull
མི་ཐོན་པ་to miss
མི་དག་པ་impure
མི་དགའོ་was displeased
མི་དགེ་བའི་ལས་unrighteous work
མི་དགེའི་གནས་place of sin
མི་དགེའི་ལས་impious action
མི་དགོས་པ་བཟོ་call off
མི་དངས་muddy water
མི་དཔོན་prefect
མི་དབང་བ་not allowed
མི་དུབ་པོ་untired ones
མི་ན་health
མི་ནག་སྐྱེ་བོ་laymen
མི་ནས་འཛིན་པ་catch a man
མི་ནུབ་not understating
མི་པོ་man
མི་ཕོད་པ་grudge
མི་བཅད་not separating
མི་བདག་king
མི་བདག་མ་queen
མི་བཙིང་not force
མི་བཞག་not be left
མི་བཟོད་ངོ་ཚ་unbearable shame
མི་བརྟན་པོ་judicious
མི་བརླང་པ་not rough
མི་བསད་assassination
མི་བསྙེངས་not to be afraid
མི་བསྲུན་impudent
མི་བྱ་refrain from
མི་བྱས་མི་རུང་it ought to be done
མི་བྱོན་incapable
མི་མང་civil people
མི་མང་ཁ་སྡེབས་uniform deposition
མི་མང་གི་civilian
མི་མང་པོ་many people
མི་མངས་chess
མི་མཇལ་not seeing
མི་མཇེད་obdurate
མི་མཇེད་ཅན་mount sumeru
མི་མཇེད་པ་obdurate
མི་མཉམ་འདབ་alstonia tree
མི་མཐུན་དཔེ་dissimilar example
མི་མཚུངས་པ་inconsistent
མི་མཛེས་ugly
མི་མོ་woman
མི་མོ་མཁན་painter
མི་མོ་རྩེ་coconut
མི་ཚངས་སྤྱོད་copulate
མི་ཚབས་ཆེན་unscrupulous man
མི་ཚོ་people
མི་ཚོད་riddle about men
མི་ཚོར་not notice
མི་ཞིམ་stink
མི་ཞུ་བའི་ནད་indigestion
མི་ཞུམ་པ་undaunted
མི་ཟབ་པ་shallow water
མི་ཟིན་not governed
མི་ཟླ་help mate
མི་ཟློས་པ་not repeat again
མི་འཁྱོག་འགྲོ་arrow
མི་འཁྲུལ་པ་infallibly
མི་འགག་uninterrupted
མི་འགལ་no conflicts
མི་འགོག་པ་uninterrupted
མི་འགོགས་པ་does not block
མི་འགྱུར་immutable
མི་འགྱུར་བ་immutable
མི་འགྱུར་རོ་immutable
མི་འགྲིབ་not grow less
མི་འགྲེང་human height
མི་འཐད་དེ་wrong
མི་འདུག་ཚུལ་why it is impossible
མི་འདོར་བ་not forsake
མི་འདྲར་འགྲོ་going differently
མི་འཕམ་invincible
མི་འཕེལ་not exaggerating
མི་འཕྲུལ་optical illusion
མི་འཕྲོ་stagnant
མི་འཕྲོད་ཟས་unwholesome food
མི་འབྲང་བ་without following
མི་འཛུམ་open
མི་འོང་not suffice
མི་འོང་བ་not have found
མི་ཡ་མེད་desperado
མི་ཡི་ཐེག་པ་epithet of vishnu
མི་ཡི་ཡི་དྭགས་preta in human shape
མི་ཡི་ས་བོན་seed of human beings
མི་ཡོང་incapable
མི་ཡོང་བ་it would not do
མི་རབས་ཀྱི་genealogical
མི་རིགས་ཀྱི་tribal
མི་རིངས་པ་not in haste
མི་རུང་unsuitable
མི་རེ་ཆུད་ཙམ་very narrow
མི་རྐྱང་free unemployed man
མི་རྒྱུད་ཀྱི་tribal
མི་རྟག་པ་ཉིད་impermanence
མི་རྟོགས་པ་not comprehensible
མི་རྟོན་not based on
མི་རྡུལ་blood
མི་རྩ་ཆེན་hallow
མི་རྩོམ་པ་inactivity
མི་རྫབ་ཆེན་scoundrel
མི་ལ་འགྱིང་བ་despise people
མི་ལག་servant
མི་ལངས་པ་human height
མི་ལམ་footpath
མི་ལུད་པ་not flow over
མི་ལྕོགས་མེད་not unable
མི་ལྟོ་it does not matter
མི་ལྡང་བ་no longer arise
མི་ལྡོག་ཉིད་irreversibility
མི་ལྡོག་པ་ཉིད་irreversibility
མི་ལྷུང་blood
མི་ཤ་ཟ་མཁན་མི་cannibal
མི་ཤ་སྐམ་པོ་thin person
མི་ཤིགས་པ་indestructible
མི་ཤིགས་པ་ཉིད་indestructibility
མི་ཤེས་བཞིན་inattentive
མི་ཤོམ་ཆ་བ་many thanks
མི་སི་aromatic plant
མི་སྐྱ་ནག་widower
མི་སྐྱག་human ordure
མི་སྐྱེ་ཕོ་མོ་men and women
མི་སྐྱོན་no harm
མི་སྒོམ་not meditating
མི་སྙན་པར་unpleasantly
མི་སྙོམས་པ་unbalanced
མི་སྡེ་རྣམས་people
མི་སྤོངས་not transcended
མི་སྤྱི་mankind
མི་སྤྲུག་not agitated
མི་སྦེད་པ་revealing
མི་སྨད་པ་praise
མི་སྨོན་པ་dispense with
མི་སྨྲ་to speak little
མི་སྨྲ་ན་when not propounding
མི་སྲུན་savage
མིག་eye
མིག་ཁྲོ་བས་ལྟ་look back with anger
མིག་གསུམ་འཛིན་moon
མིག་གི་གྲུ་corner of the eye
མིག་གི་རྫིམ་eyebrow
མིག་གི་སྐྲི་ཁ་eyeline
མིག་གོར་གོར་globular eyes
མིག་ཆུ་གཏོང་བ་shed tears
མིག་ཆུ་ཤོར་to shed tears
མིག་ཆུས་གང་ནས་tearful
མིག་ཆེར་རེ་to open the eyes
མིག་དབང་eye sense power
མིག་ནད་disease of the eye
མིག་ནད་ཞིག་sty
མིག་པགས་eyelid
མིག་པོ་eye
མིག་པོ་ཆེ་large eye
མིག་བཀག་པ་blindfold
མིག་བཀྲ་མ་grouse
མིག་བཙུམ་closing your eyes
མིག་བཙུམ་པ་blink
མིག་བརྡ་signs by the eye
མིག་བསྐྲ་བ་certain magic trick
མིག་མ་eye
མིག་མང་རྩེ་བ་play chess
མིག་མངས་རྩེ་བ་play at chess
མིག་ཟླུམ་པོ་round eyes
མིག་འཁྲུལ་མཁན་showman
མིག་འགྲན་disapproval
མིག་འཕྲུལ་magic
མིག་འབེན་target
མིག་འབྱེད་པ་open the eyes
མིག་རབ་རིབ་faulty vision
མིག་རིང་ཅན་long sighted
མིག་རིལ་eyeball
མིག་རིས་artificial eyebrows
མིག་རུས་eye bone
མིག་རྒྱང་ཅན་long sighted
མིག་རྫག་པ་blear eyes
མིག་ལ་ཕན་crystal gem
མིག་ལོང་མོ་ཤམ་blind barren woman
མིག་ལྟ་to look at
མིག་ཤེལ་eyeglasses
མིག་སྒྱུ་mirage
མིག་སྔ་at present
མིག་སྤྲིན་cataract
མིག་སྨན་eye medicine
མིག་ཧ་ཅང་ཆེ་བ་very large eyes
མིང་གདགས་པ་give a name
མིང་གཞི་name basis
མིང་གཟུགས་name and form
མིང་གི་ཚབ་ཚིག་pronoun
མིང་གི་ཚོགས་group of stems
མིང་གིས་by names
མིང་དང་གཟུགས་name and form
མིང་བཏགས་སྲོལ་nomenclature
མིང་བརྡ་name and terminology
མིང་བརྫུས་མ་pseudonym
མིང་མ་མཆིས་པ་nameless
མིང་མེད་ring finger
མིང་མེད་ཀྱི་anonymous
མིང་ཙམ་དུ་nominal
མིང་ཚར་starvation
མིང་ཚིག་noun
མིང་འདོགས་nickname
མིང་རྟགས་initial signature
མིང་ཤས་བཟོ་བ་scandalize
མིང་སྐམ་mere titles
མིང་སྤོ་བ་change name
མིང་སྲིང་brother and sister
མིན་ད་help mate
མིན་ནམ་is it not
མིན་པ་ཉིད་not at all
མིན་པ་འདྲ་it does not seem
མིན་ཟེར་བ་deny
མིན་འགྲོ་probably not
མིན་འགྲོའམ་maybe
མིན་ལ་ཆེ་expression of doubt
མིན་ལས་ཆེ་expression of doubt
མིའམ་ཅི་type of lha
མིའི་human
མིའི་ཆོས་པ་religious people
མིའི་བྲུན་human ordure
མིའི་འགྲོ་བ་human beings
མིའི་ལུས་ཀྱི་corporal
མིར་ཆགས་པ་desire to become man
མིར་སྤྱོད་པ་human habits
མིས་དགང་བ་populate
མུ་ཁམ་བུར་place in nepal
མུ་གེ་ཅན་eager for food
མུ་གྱེན་fine breed of horses
མུ་ཅོར་foolishness
མུ་ཅོར་སྨྲ་བ་to talk nonsense
མུ་ཏིག་pearl
མུ་ཏིག་ཅན་a tibetan king
མུ་ཏིག་འཕྲེང་rosary of pearls
མུ་ཏིག་རྫས་མ་imitation pearls
མུ་ཐི་ལ་a precious stone
མུ་བཞི་four possibilities
མུ་བཞིན་in the course of
མུ་མཐའ་མེད་པ་unlimited
མུ་མཐུད་པ་continue
མུ་མེད་པར་vaguely
མུ་ཟི་ཅན་containing sulphur
མུ་ཟི་ནག་པོ་black sulphur
མུ་ཟི་རྡོ་brimstone
མུ་ཟེ་match
མུ་ཡལ་some large number
མུ་རྡོ་pebbles from water
མུ་ལ་འགྲོ་goes together
མུ་ལ་སྐྱེ་grows on the edge
མུ་སངས་the sky
མུག་ཆུ་གུམ་kind of wild ass
མུག་ཕྲུག་illegitimate child
མུག་མ་moth
མུག་རྨེལ་small cardamom
མུན་ཁྱབ་entire darkness
མུན་ཅན་མ་night
མུན་ཏུ་འཁྱམས་wandering everywhere
མུན་ནག་ཅན་gloomy
མུན་ནག་ཏུ་in the darkness
མུན་པ་གཏིབ་darkness envelopes
མུན་པ་བྲལ་knows no darkness
མུན་པ་སོལ་dispel darkness
མུན་པའི་རུམ་darkness
མུན་པར་འཐོམས་grope in darkness
མུན་བསྐལ་dark age
མུན་མ་moth
མུན་མཚམས་dark retreat
མུན་སེལ་མ་full moon night
མུན་སོང་become dark
མུར་ཇ་green china tea
མུར་དུམ་dull
མུར་ཟླུམ་dull
མུར་རྫོག་fist
མུལ་ཐུག་fist
མེ་ཁར་on the fire
མེ་གནས་abiding in fire
མེ་གཙའ་moxibustion
མེ་གཞི་anvil
མེ་གསོ་བ་trim the fire
མེ་གསོད་བྱེད་fire extinguisher
མེ་ཅན་fiery
མེ་ཆ་flint
མེ་ཆར་flint
མེ་ཏོག་flower
མེ་ཏོག་ཀུ་མུད་lily
མེ་ཏོག་ཁ་འབུས་flower blossoms
མེ་ཏོག་གི་ཚལ་flower garden
མེ་ཏོག་ཅན་garland flowery
མེ་ཏོག་ཆུན་པོ་bunch of flowers
མེ་ཏོག་ཉི་མ་saffron
མེ་ཏོག་དགྲམ་པ་flowers to be strewn
མེ་ཏོག་དངོས་real flowers
མེ་ཏོག་དམར་པོ་red flowers
མེ་ཏོག་དོན་ཅན་saffron
མེ་ཏོག་ཟས་ཅན་bee
མེ་ཏོག་ཟུམ་པ་the flower closes
མེ་ཏོག་འཇམ་tree acacia sirisa
མེ་ཏོག་རྒྱལ་magnolia
མེ་ཏོག་རྡུལ་pollen of a flower
མེ་ཏོག་རྩ་ནག་patala tree
མེ་ཏོག་རྩེ་tree
མེ་ཏོག་ལྡན་having a flower
མེ་ཏོག་ལྡན་མ་woman in menses
མེ་ཏོག་ཤར་བ་blossom
མེ་ཏོག་སིལ་མ་scattered flowers
མེ་ཐུར་match
མེ་ད་ཀ་water
མེ་དང་ཕྲད་པ་meet with fire
མེ་དཔུང་flame
མེ་དྲོད་warmth from fire
མེ་དྲོད་ཚ་པོ་ardor
མེ་ན་ཀོ་mountain range
མེ་ན་ཡ་mithila
མེ་ནའི་བདག་himalaya mountains
མེ་ནེ་place in india
མེ་ཕུང་bonfire
མེ་བཞི་སྐྱེས་epithet of vrhaspati
མེ་བོ་large fire
མེ་བོ་ཆེ་conflagration
མེ་མཆེད་to be on fire
མེ་མཆེད་པ་fire spreads
མེ་མདའ་gun
མེ་མདའ་རྒྱག་to shoot a gun
མེ་མདའ་རྒྱབ་པ་fire
མེ་མར་fire
མེ་ཙག་spark
མེ་ཙག་འཐོར་བ་sparkle
མེ་ཞགས་lasso of flames
མེ་ཞལ་ལམ་sky
མེ་འབར་fire burns
མེ་འབར་བ་catch fire
མེ་འབར་བཞིན་aflame
མེ་འབར་སླ་པོ་inflammable
མེ་འབུད་པ་light a fire
མེ་འུ་རུ་རུ་fire under a breeze
མེ་འོད་ཅན་aglow
མེ་འོད་ཆེན་པོ་blaze
མེ་འོབ་fire pit
མེ་ཡི་ཀ་བ་pillar of fire
མེ་ཡི་དུས་period of fire
མེ་ཡི་མགྲིན་bird
མེ་ཡི་འགྲམ་fireside
མེ་ཡོལ་fire screen
མེ་རི་འབར་བ་a buddha realm
མེ་རིས་barbarous tribe
མེ་རྒན་learned man
མེ་རྒྱབ་པ་set on fire
མེ་རྟགས་sign of fire
མེ་རྡོ་flint
མེ་ལ་འཆོར་བ་be consumed by fire
མེ་ལེན་ember nippers
མེ་ལོང་mirror
མེ་ལོང་གཤིས་nature of the mirror
མེ་ལོང་ངོས་in a mirror
མེ་ལྟར་fiery
མེ་ཤི་གི་རེད་fire is going out
མེ་ཤོར་fire breaks out
མེ་སྐམ་gun cock
མེ་སྟག་འཕྲོ་to spark
མེ་སྤོར་བ་light a fire
མེ་སྦར་བ་light a fire
མེ་སྨན་medicines from fire
མེ་ཧ་ར་heretical hindu sect
མེད་ཀྱང་རུང་can also do without
མེད་ཅང་absolute nothingness
མེད་དུ་མི་རུང་to be indispensable
མེད་པ་ཆགས་པ་lose
མེད་པ་རེད་not exist
མེད་པར་བྱས་པ་demolished
མེད་མཐའ་nihilism
མེད་མེད་paltry
མེད་མོ་penniless woman
མེད་སྟོང་nihilism
མེན་པའོ་bread
མེན་ཧྲི་fur
མེའི་དཔེ་example of fire
མེའི་ནང་དུ་aflame
མེའི་རྩེ་མོ་saffron
མེར་གྱིས་གང་full to the brim
མེར་ནུ་embryo
མེར་བཤུར་ཏོ་scorches with fire
མེར་ཚིག་པ་blaze
མེལ་ཚེ་མ་the night
མེས་དབོན་ancestors
མེས་བསྲོས་པ་tormented by fire
མོ་ཁབ་needle
མོ་གདོང་female figure
མོ་གསར་virgin
མོ་ངན་evil prophecy
མོ་ཊ་car
མོ་དོར་car
མོ་དྲེ་she mule
མོ་ན་ནིང་female hermaphrodite
མོ་ན་རེ་she said
མོ་པ་fortune teller
མོ་ཕག་sow
མོ་བྱིས་girl
མོ་མཁན་soothsayer
མོ་མོག་momos
མོ་འདེབས་པ་cast lots
མོ་ཡིག་feminine letters
མོ་ར་a kind of bird
མོ་རང་གི་hers
མོ་རང་ལ་herself
མོ་རབ་noble woman
མོ་རྐྱང་female wild ass
མོ་རྡེ་stone in females
མོ་རྣམས་females
མོ་ལ་her
མོ་ལ་ཀོ་a country
མོ་ལུས་female body
མོ་ལྷ་deity of females
མོག་ཟངས་food steamer
མོང་mongolian
མོང་གོལ་mongolian
མོན་ཀོ་fabulous mountain
མོན་ཏ་རི་name of a place
མོན་སྲན་indian pea
མོན་སྲན་རྡེའུ་phaseolus mungo
མོར་སྤན་fine kind of satin
མོས་གུས་devotion
མོས་གུས་རབ་supreme devotion
མོས་ཆམ་settlement
མོས་ཆམ་བྱེད་པ་settle
མོས་པ་འཐོབ་པ་obtain belief
མོས་པར་དཀའོ་difficult to believe
མོས་བློ་veneration
མོས་འཆམ་accordance
མོས་འཛིན་devoted
མོས་རྟགས་vote by hand
མོས་སྒྲུབ་considered practice
མྱ་ངན་གྱི་tragic
མྱ་ངན་བྱས་brought about misery
མྱ་ངན་འཚང་free from misery
མྱ་ངན་ལས་འདའ་attain nirvana
མྱ་ངམ་fearful sandy desert
མྱ་ངམ་ཐང་desert
མྱག་པ་chew
མྱག་བྱེད་mixing phlegm
མྱང་བར་འདོད་པ་wishing to taste
མྱང་བྱ་tongue
མྱང་འདས་nirvana
མྱང་རོ་village in tsang
མྱང་རྩི་an officinal plant
མྱད་པ་older form of mad pa
མྱིང་older form of ming
མྱུ་གུ་sprout
མྱུ་གུ་ཤིང་reed bamboo
མྱུ་གུའི་ཚལ་grove of reeds
མྱུག་གཟན་འབུ་locust
མྱུག་ཙེ་cane basket
མྱུར་quickly
མྱུར་དུ་quickly
མྱུར་དུ་རྟོགས་understand quickly
མྱུར་པོར་apace
མྱུར་བ་མྱུར་བ་very quickly
མྱུར་བར་སད་easily wakeful
མྱུར་མ་dancing woman
མྱུར་རྩིས་quick calculation
མྱུར་སྐྱོབ་name of sgrol ma
མྱེར་བཞག་firmly set up
མྱོང་ཐོབ་direct experience
མྱོང་བ་ཁྱད་ཅན་special experiences
མྱོང་བ་ཐོན་པ་develop experience
མྱོང་བ་ཐོབ་པ་gain experience
མྱོང་བ་དགའ་མོ་sound experience
མྱོང་བ་བརྟན་པ་stable experience
མྱོང་བ་མེད་པ་unexperienced
མྱོང་བའི་ཉམས་experiences
མྱོང་བྱ་object of experience
མྱོས་བུམ་ཅན་elephant
ཙ་ན་ཀའི་འབྲུ་grain of chick pea
ཙ་ནས་from the time
ཙ་མའི་སྙིང་པོ་kind of cake
ཙ་ར་བཅད་པ་be flogged
ཙ་ལ་wind
ཙ་ཨ་ཝ་medicinal grass
ཙག་ཅིག་accessory
ཙན་དན་sandalwood
ཙན་རྫུས་མ་imitation sandalwood
ཙན་སྡོང་sandalwood tree
ཙབ་ཙུབ་in a hurry
ཙབ་ཙུབ་ཅན་hasty
ཙབ་ཙོབ་in a hurry
ཙབས་རུ་ཚ་kind of salt
ཙམ་གྱིས་as soon as
ཙམ་ཉིད་ནས་from the very moment
ཙམ་དུ་འདུག་is it merely
ཙམ་ན་as soon as
ཙམ་ནས་with verbs
ཙམ་ཙོམ་doubt
ཙམ་ཡང་མེད་not even a
ཙམ་རིང་དུ་for about
ཙམ་རེ་at least
ཙར་མ་place in liyul
ཙི་ཆུང་any shrew
ཙི་ཏིས་རྫོ་པ་cancer
ཙི་ཙི་རྫོ་ལ་cancer
ཙི་རྫི་ཚ་kind of leprosy
ཙི་ལི་ཙིམ་species of fish
ཙི་སྟག་purgative medicine
ཙིར་འཛིན་to fixate upon
ཙུ་ཏ་a gem
ཙུ་ཏའི་ཤིང་mango tree
ཙུན་ད་a goddess
ཙུའུ་group
ཙུའུ་ཀྲང་group leader
ཙེ་ཙི་millet
ཙེ་རྒོད་monk supervisor
ཙེ་ལུ་disciple
ཙེན་གྱིས་utterly
ཙེན་ནེ་instantness
ཙེན་མེན་gradualist school
ཙེམ་ཙེ་small scissors
ཙོང་ཁ་onion bank
ཚ་ཁུ་salty
ཚ་ག་པ་grasshopper
ཚ་ག་འབུ་grasshopper
ཚ་གྲང་གལ་མདོ་sunstroke
ཚ་གྲང་ལྟ་ཆས་thermometer
ཚ་གྲང་སྙོམ་པོ་temperate
ཚ་ཆས་lunch
ཚ་དྲོད་heat
ཚ་བ་ཉིད་heat
ཚ་བ་ཙམ་slightly warm
ཚ་བའི་ན་ཚ་fever
ཚ་བའི་མ་pungent
ཚ་བའི་འབུ་cicada
ཚ་བོའི་སྐོར་grandchildren
ཚ་མདངས་radiated the heat
ཚ་ཚའི་ཞག་rust
ཚ་ཝ་acrid taste
ཚ་ཞིང་སྲེག་པ་hot and burning
ཚ་ཟེར་འཇོམས་cloud
ཚ་འཁྲུ་diarrhea
ཚ་རིང་ངེ་བ་daily warm food
ཚ་རུ་lamb skin
ཚ་ལ་རྒྱབ་པ་solder
ཚ་ལུ་མའི་དྲི་orange scent
ཚ་ལེ་borax
ཚ་ལེ་བྱེད་པ་to solder
ཚ་ལྕིབས་pot cloth
ཚ་སྐོར་grandchildren
ཚག་yak
ཚག་པོ་yak
ཚག་རློན་fresh beef of yak
ཚག་ལག་front leg of yak
ཚག་ལུག་yak and sheep
ཚག་ཤ་རློན་fresh beef of yak
ཚག་སྐམ་dried beef of yak
ཚག་སྒྲ་crack
ཚགས་ཀྱིས་བཙགས་sift with a sieve
ཚགས་མ་sieve
ཚགས་སུ་ཚུད་པ་internalize
ཚང་ཅན་cushion
ཚང་བང་kitchen
ཚང་བཅད་annihilate
ཚང་བར་རྟོགས་པ་realize fully
ཚང་མ་all
ཚང་མ་བསྡོམ་པ་all taken together
ཚང་མ་མཉམ་དུ་altogether
ཚང་འཛོམས་plenary
ཚང་རྔམ་fearful
ཚང་སྐམ་perfectly dry
ཚངས་ཉིད་brahmahood
ཚངས་པའི་གནས་euphoric states
ཚངས་པའི་བུ་ག་cranium
ཚངས་པའི་ཤིང་indian mulberry tree
ཚངས་བཅོམས་epithet of kamadeva
ཚངས་བུ་ག་brahmarandhra
ཚངས་མང་kitchen
ཚངས་སྤྱོད་monastic discipline
ཚད་ཁྱད་པར་particular measure
ཚད་གདུང་head
ཚད་གཞལ་བ་measure
ཚད་གཟུང་calculation
ཚད་གསུང་མཛོད་ask them all
ཚད་གྲུབ་valid establishment
ཚད་དཔག་པ་evaluate
ཚད་དཔོག་པ་fathom
ཚད་དུ་བྱེད་paying in price
ཚད་དུ་བྱེད་པ་measure
ཚད་དུ་འཆོལ་to actualize
ཚད་དུ་ཤེས་become the model
ཚད་ནད་fever
ཚད་པ་བྱུང་ཚེ་when it grows hot
ཚད་པའི་ཤིང་birch tree
ཚད་བྲལ་no choice
ཚད་མ་བསྡུས་པ་pramanasamuccaya
ཚད་མ་འབྲིང་པོ་middle line
ཚད་མཚམས་limitation
ཚད་མའི་བློ་prime consciousness
ཚད་མར་གྱུར་convinced
ཚད་མར་བྱས་ཏེ་serve as a measure
ཚད་མར་མཛད་པ་serve as a measure
ཚད་ཟླ་brother
ཚད་ཡོད་པ་measureable
ཚད་རྒལ་excess
ཚད་རྒྱབ་པ་gauge
ཚད་ལས་བརྒལ་བ་exceed
ཚད་ལོང་པ་adequate
ཚད་ལོངས་བ་competent
ཚད་ལྡང་sufficient quantity
ཚད་ལྡན་standard
ཚད་ལྡན་འདབ་མ་tree
ཚད་ཤིང་scale
ཚད་སེམས་valid mind
ཚད་སྟོན་པ་dial
ཚན་ཅན་full
ཚན་ནེར་quietly
ཚན་ཟུག་fever
ཚན་རིག་science
ཚན་རིག་གི་scientific
ཚབ་གཏོང་བ་depute
ཚབ་དུ་behalf
ཚབ་བཅུག་པའི་displacement
ཚབ་ཚབ་བྱས་པ་sit
ཚབ་ལ་instead
ཚབ་སྒྲུབ་ཚར་བ་liquidated
ཚབས་ཆེན་grievous
ཚབས་པ་be afraid
ཚམ་དམ་shrinking attitude
ཚམ་ཚམ་doubt
ཚར་to finish
ཚར་གཅིག་ལ་in one moment
ཚར་གཉིས་twice
ཚར་གསུམ་thrice
ཚར་ཚར་stage of completion
ཚར་འགྲོ་scorpion
ཚར་རྒྱུ་མེད་པ་tedious
ཚར་ལོང་ཡོང་བ་grow
ཚར་ལྔ་five times
ཚལ་vegetables
ཚལ་གྱི་བཀོད་པ་magnificent sight
ཚལ་གླང་pan
ཚལ་ཏོ་cleaver
ཚལ་ཐིག་red line
ཚལ་མ་breakfast
ཚལ་མ་ཟ་བ་རྣམས་breakfast companions
ཚལ་ཞིག་tomato
ཚལ་ཡང་རྩ་herb garden
ཚས་ཆུན་gardens
ཚས་མཁན་gardener
ཚས་སྐྱོར་garden bed
ཚི་གོང་fat of the breast
ཚི་ཆད་with no hope
ཚིག་ཀུན་all the words
ཚིག་ཁ་སྐོང་བ་further enumeration
ཚིག་ཁེབས་ring
ཚིག་གསུམ་three statements
ཚིག་གི་དོན་meaning of the word
ཚིག་གི་ཚོགས་group of words
ཚིག་གི་འབྲུ་syllable
ཚིག་གིས་བྱང་བ་purified by words
ཚིག་གྱི་རྒྱུད་tantra as literature
ཚིག་གྱོང་པོ་impolite words
ཚིག་ཉན་པ་listen to the word
ཚིག་ཏུ་བཏོན་recitation
ཚིག་ཐ་དད་answer
ཚིག་ཐང་one moment
ཚིག་ཐར་ཐོར་scattered words
ཚིག་ཐལ་no longer valid
ཚིག་དང་དོན་glossary
ཚིག་དང་ཡི་གེ་words and letters
ཚིག་དབང་word initiation
ཚིག་དོན་meaning of the word
ཚིག་དོར་བ་indecent language
ཚིག་པ་ཟ་to feel irritated
ཚིག་བཙུན་པ་creditable discourse
ཚིག་བར་གཅོད་syllable
ཚིག་བཤད་chanted phase
ཚིག་བསགས་vocabulary
ཚིག་བསྐྱལ་བ་confused prattling
ཚིག་བསྒྱུར་translate words
ཚིག་བྱེད་དམར་saffron
ཚིག་བླ་དགས་synonym
ཚིག་བླ་དྭགས་denomination
ཚིག་མང་ཅན་wordy
ཚིག་མཚམས་punctuation
ཚིག་འགྱུར་word translation
ཚིག་འགྱུར་ཡང་even if burnt
ཚིག་འགྲེལ་word commentary
ཚིག་འབུད་པ་dislocate
ཚིག་རྒྱུད་tantric scriptures
ཚིག་རྡེག་dancing girl
ཚིག་རྩུབ་ལབ་པ་affront
ཚིག་རྩེད་pun
ཚིག་ལ་ཟ་བ་be angry
ཚིག་ལེགས་articulate
ཚིག་ཤད་punctuation mark
ཚིག་སུན་insults
ཚིག་སོང་has been burnt
ཚིག་སྐྱོར་བ་repeat a word
ཚིག་སྒྲུབ་sentences
ཚིག་སྙན་པར་with pleasant words
ཚིགས་དགུར་crooked back
ཚིགས་པ་joints
ཚིགས་པ་ན་pain in the joints
ཚིགས་བཅད་verse
ཚིགས་བཅད་པ་compose verses
ཚིགས་མང་a thorny plant
ཚིགས་ཟུག་pain in the joints
ཚིགས་རིགས་what is meant by
ཚིགས་ལྷུགས་prose
ཚིགས་སྦྱོང་loosening the joints
ཚིགས་སྦྱོད་a brahman
ཚིང་ག་a medicinal drug
ཚིམ་satisfy
ཚིམ་པའི་ཉམས་contented
ཚིམ་པའི་ཡིད་satisfied mind
ཚིམ་པར་བྱས་པ་satisfy
ཚིམ་བྱེད་satisfying phlegm
ཚིམ་བྱེད་དམར་saffron
ཚིལ་fat
ཚིལ་ཆེན་human fat
ཚིལ་མར་melted fat or lard
ཚིལ་མེད་lean
ཚིལ་ཝ་swelling from fat
ཚིལ་ལུ་ཅན་fatty
ཚིལ་ལྦ་fat goiter
ཚིལ་སྡོང་tallow candle
ཚིས་སུ་in friendship
ཚུ་ཁ་this side
ཚུ་བི་one of this side
ཚུ་རོལ་ན་on this side
ཚུ་རོལ་ནས་from this side
ཚུག་ས་caravansary
ཚུགས་ཐུབ་དུ་confidently
ཚུད་ཀྱི་གདོང་dial
ཚུད་རེ་རེའི་hourly
ཚུབ་མ་storm
ཚུབས་ཚུབ་ཏུ་whirling
ཚུར་nearby
ཚུར་ཀ་to this side
ཚུར་ཁ་on this side
ཚུར་དཀར་alum
ཚུར་ཕྱོགས་this direction
ཚུར་བཀུག་པ་attract
ཚུར་བཞག་put to the side
ཚུར་མཛེས་beautiful here
ཚུར་འཁྱེར་bring to
ཚུར་འདུས་to be reabsorbed
ཚུར་འཕར་བ་rebound
ཚུར་འོང་བ་return home
ཚུར་ལ་ཉོན་listen here
ཚུར་སླེབ་come to this side
ཚུལ་ཁྲིམས་ethics
ཚུལ་ཁྲིམས་འཆལ་faulty ethics
ཚུལ་གཉིས་two modes
ཚུལ་གནས་པ་remains like
ཚུལ་བསྟན་pretend
ཚུལ་བསྟན་པ་display the mode
ཚུལ་བྱས་pretend construction
ཚུལ་བྱེད་presumption
ཚུལ་མ་nun
ཚུལ་མ་ནོར་བ་precise manner
ཚུལ་མ་ལགས་པ་discipline
ཚུལ་མཐའ་དག་all the aspects
ཚུལ་མཐུན་པ་ཙམ་mere concordant mode
ཚུལ་མཛད་པ་putting on a show
ཚུལ་འཆོས་མཁན་hypocrite
ཚུལ་འདིས་accordingly
ཚུལ་རྣམས་all aspects
ཚུལ་སྟོན་མཁན་hypocrite
ཚེ་གཅིག་one lifetime
ཚེ་ཆང་long life wine
ཚེ་ཆོས་elixir of life
ཚེ་ཐར་གཏོང་བ་acquit
ཚེ་དང་སྒྲུབ་པ་life and practice
ཚེ་དཔག་ཏུ་མེད་immortality
ཚེ་བཀྲག་lustre of life
ཚེ་བཅུད་nectar of long life
ཚེ་བདག་moon
ཚེ་བསླུ་ransom of longevity
ཚེ་མ་ཕྱིད་miserable
ཚེ་མཆོག་གླིང་a monastery
ཚེ་མཐའི་མདོ་a sutra
ཚེ་ཚད་duration of life
ཚེ་ཚིགས་སུ་at that time
ཚེ་ཚེ་goat
ཚེ་ཚོམ་མེད་it is certain
ཚེ་ཟད་ཀར་at the hour of death
ཚེ་འགྲོ་life is passing
ཚེ་འདའ་death
ཚེ་འདས་departed
ཚེ་འདས་པ་late
ཚེ་འདི་this lifetime
ཚེ་འདི་ལ་in this lifetime
ཚེ་འདིའི་temporal
ཚེ་འདོན་coming of age
ཚེ་འཕག་ལྷ་ཁང་a temple in lhasa
ཚེ་འཕེལ་རྫས་kuca grass
ཚེ་འཕོ་death
ཚེ་འཕོ་བ་change of existence
ཚེ་འབྲང་long life torma
ཚེ་ཡི་མདའ་arrow of long life
ཚེ་ཡི་ཡུམ་mother of life
ཚེ་ཡི་ལྷ་མོ་goddess of life
ཚེ་ཡུམ་mother of life
ཚེ་རབས་བརྗེ་བ་change of existence
ཚེ་རི་sorrow
ཚེ་རིལ་long life pills
ཚེ་རྒྱབ་པ་zip
ཚེ་སྔོན་མ་former life
ཚེ་ཧྲིལ་པོར་for the whole life
ཚེག་ཚོམ་sound made by mice
ཚེགས་difficulty
ཚེགས་ཆུང་ངུ་little difficulty
ཚེགས་ཆེན་great difficulty
ཚེན་type
ཚེམ་པ་tailor
ཚེམ་པོ་tailor
ཚེམ་བུ་པ་tailor
ཚེམ་བུ་བ་tailor
ཚེམ་བུ་རྒྱག་པ་sew
ཚེམ་མེད་without a seam
ཚེམ་ཚེམ་patched cloth
ཚེམས་ལུས་without remainder
ཚེམས་ལུས་མེད་nothing left
ཚེར་དཀར་buckthorn
ཚེར་མ་thorn
ཚེར་མ་ཅན་thorny
ཚེར་མ་སྐྱེས་jack fruit
ཚེར་མའི་ར་བ་thorn hedge
ཚེར་ལུམ་yellow raspberry
ཚེར་ལྕག་གིས་with thorns
ཚེར་ལྟར་like a thorn
ཚེས་དགེ་བ་auspicious day
ཚེས་བཅུ་the tenth day
ཚེས་བཅོ་ལྔ་day of full moon
ཚེས་བདག་moon
ཚེས་བཟང་པོ་auspicious day
ཚོ་ཁུ་fat gravy
ཚོ་བུད་མ་བུད་is it fat or not
ཚོ་ལྡིར་unwieldy with fat
ཚོགས་ཀྱི་གཏམ་sambharaparikatha
ཚོགས་ཀྱི་ལམ་path of accumulation
ཚོགས་ཀྱི་ལྷ་type of lha
ཚོགས་གཙོ་chairman
ཚོགས་གསོག་པ་accumulate merit
ཚོགས་ཅན་cadamba tree
ཚོགས་ཅན་མ་prostitute
ཚོགས་ཆུང་committee
ཚོགས་ཆེན་མ་prostitute
ཚོགས་དང་པོ་first offering
ཚོགས་དུས་session
ཚོགས་ཕལ་མོ་ཆེ་most
ཚོགས་བཟང་excellent
ཚོགས་བཤད་speech
ཚོགས་བསྐྱེད་པ་to accumulate
ཚོགས་མཆོག་supreme assembly
ཚོགས་མི་member
ཚོགས་འགྱེད་པ་dismiss an assembly
ཚོགས་རྫས་feast substances
ཚོགས་སོ་assembled
ཚོགས་སྡུ་བ་call an assembly
ཚོགས་སྡེའི་communal
ཚོགས་སྤྱད་པ་congregating
ཚོང་གི་གུན་loss in trading
ཚོང་དུས་fair
ཚོང་པ་ཆེན་པོ་tycoon
ཚོང་པ་ཚོ་body of merchants
ཚོང་བ་sell
ཚོང་བཞིན་པ་selling
ཚོང་བརྒྱུད་པ་carry on trade
ཚོང་ཟོང་ར་བ་store
ཚོང་ཟླ་partner in trade
ཚོང་འགྲེམས་ཁང་emporium
ཚོང་འདུས་ས་market place
ཚོང་འབྲེལ་གྱི་commercial
ཚོང་རོགས་partner in trade
ཚོང་རྒྱབ་པ་deal trade
ཚོང་ལས་ཀྱི་mercantile
ཚོང་ལས་ཁང་firm
ཚོང་ཤག་client
ཚོང་སྤྲུལ་trading
ཚོད་ཀྱི་སྐར་ཆ་second
ཚོད་དཔག་guess
ཚོད་དཔག་པ་estimate
ཚོད་པ་ཟོ་མཁན་watchmaker
ཚོད་བྱ་riddle
ཚོད་བྱེད་པ་guess
ཚོད་འཇལ་བ་measure
ཚོད་རེ་རེའི་hourly
ཚོད་ལྟའི་ཆེད་in order to test
ཚོད་ཤེས་riddle
ཚོད་ཤེས་སྨྲ་བ་propose a riddle
ཚོད་སྙམ་པ་suppose
ཚོན་hue
ཚོན་ཁོ་mortar
ཚོན་གང་གང་བ་the size of a thumb
ཚོན་གང་བ་the size of one inch
ཚོན་གཏོང་བ་paint
ཚོན་ཅན་silver
ཚོན་པོ་fat
ཚོན་རྒྱབ་པ་dye
ཚོན་སྐུད་colored thread
ཚོན་སྣ་ཅན་colorful
ཚོན་སྲབ་པོ་tinge
ཚོབས་be afraid
ཚོམ་བུར་བརྡལ་manifest as a mass
ཚོམས་ཏེ་being surprised
ཚོར་ནས་feeling oneself as
ཚོར་བ་feeling
ཚོར་བ་མེད་void of feeling
ཚོར་བ་ཡོད་པ་conscious
ཚོར་བ་རྣོན་པོ་sensitive
ཚོར་བའི་sensory
ཚོར་བའི་མིང་sour vegetable curry
ཚོར་བའི་རྒྱུ་cause of feeling
ཚོར་ཞིབ་རྟོགས་carefully examined
ཚོར་ཟིན་པ་felt
ཚོར་སླ་པོ་susceptible
ཚོལ་ཅིག་investigate
ཚོལ་མཁན་searcher
ཚོས་ཀྱི་ཁུ་བ་liquid paint
ཚོས་མདོག་color hue
ཚྭ་salt
ཚྭ་ཁ་རུ་black salt
ཚྭ་ཁུག་salt bag
ཚྭ་ཆུའི་མཚེའུ་salt water lake
ཚྭ་དམར་བྲག་ཚྭ་kid of red rock salt
ཚྭ་ཚིལ་salted fat
ཚྭ་ཚྭ་sparks
ཚྭ་ཞན་པ་tasteless
ཚྭ་རྒྱབ་པ་to salt something
ཚྭ་སྡོར་salt and meal
ཛ་དྲག་ཆེ་བ་tense
ཛ་ཡི་ཕལ་nutmeg
ཛ་རི་ཁན་ད་an indian province
ཛ་ལ་ཏ་ན་crane
ཛང་ཁྲག་menstrual blood
ཛབ་དབྱངས་recitation of mantra
ཛམ་བུ་ཀ་jackal
ཛམ་བུའི་འབྲས་glomerous fig tree
ཛར་ཛོར་ཅན་ragged
ཛི་ན་མི་ཏྲ་kashmirian pandit
ཛིག་four
ཛུན་དུ་falsely
ཛོ་ཀི་practitioner
ཝ་ཁྱེམ་scoop
ཝ་གྲོ་bluish fox
ཝ་གྲོ་གྲོ་grey fox
ཝ་པག་gutter tile
ཝ་ཕོ་male fox
ཝ་བ་goiter
ཝ་བརྒྱལ་fox yelps
ཝ་བྲག་དཀར་place in tibet
ཝ་མཆུ་gutter
ཝ་མོ་fox
ཝ་ར་a kind of tea
ཝ་ལུང་district in nepal
ཝ་ལྤགས་fox skin
ཝ་སི་a kind of apple
ཝ་སྐད་barking of the fox
ཝ་སྐྱེས་fox
ཝལ་གྱིས་in a flash
ཝལ་པོ་hazy
ཝལ་ཝལ་ཤར་clearly and vividly
ཝལ་ལེ་བ་very vividly
ཝི་པ་དྭ་a place
ཝུ་ཐོང་ཤིང་chinese parasol tree
ཝེལ་ལེ་བ་very vivid
ཞ་ཆེན་cage
ཞ་ཉེ་ནག་པོ་black lead
ཞ་ཉེ་མཚོན་leaden sword
ཞ་ཉེ་སྐྱེས་quick silver
ཞ་དཀར་ཤོག་tin foil
ཞ་ནེ་metal lead
ཞ་ནེ་མ་pounded dry cheese
ཞ་ར་blind
ཞ་ལུ་district in tsang
ཞ་ལུ་པ་native of zha lu
ཞ་ལུ་ལོ་ཆེན་buton the author
ཞ་སྒྲེ་earless
ཞ་སྨི་shrimp
ཞ་སྨྱུག་pencil
ཞག་day
ཞག་ཁྲག་clotted blood
ཞག་གསུམ་three days
ཞག་གྲངས་the date
ཞག་ཉ་མིག་drop of oil
ཞག་དང་ཉི་མ་a day and a night
ཞག་ནས་ཞག་ཏུ་from day to day
ཞག་པོ་a day
ཞག་བདུན་ཕྲག་week
ཞག་མང་དུ་for quite a few days
ཞག་ཚི་grease
ཞག་འགའ་ནས་a few days ago
ཞག་འགའི་བར་དུ་for a couple of days
ཞག་འགར་for a couple of days
ཞག་རེ་ཙམ་for a few days
ཞག་ཤས་some days
ཞག་སྐག་bad day
ཞགས་lasso
ཞགས་གྲོལ་sita river
ཞགས་ཐག་noose
ཞགས་དབྱུག་noose
ཞགས་པ་noose
ཞགས་རྒྱབ་པ་throw a noose
ཞགས་རྡོལ་leaky bottom
ཞང་ཀ་མ་place in tibet
ཞང་ཁ་ཆེན་པོ་broad
ཞང་ཁྲག་menstrual blood
ཞང་ཆི་chinese chess
ཞང་ཚན་uncle and nephew
ཞང་ཞང་maternal uncle
ཞང་ཞུང་ཇུ་ཐིག་method of divination
ཞང་ལྕམ་aunt
ཞན་ཀྲང་county magistrate
ཞན་སྒོ་ugly face
ཞབས་ཀྱི་པད་མོ་footstool
ཞབས་ཀྱི་མཐོ་བ་big toe
ཞབས་ཐོག་service
ཞབས་དྲུང་དུ་to the feet of
ཞབས་ཕྱི་ཞུ་བ་cater serve
ཞབས་བཀྱག་chair
ཞབས་བཅར་attendance
ཞབས་མཐིལ་soles of the feet
ཞབས་ཞུ་service
ཞབས་ཞུ་བ་cortege
ཞབས་ཟུང་pair of feet
ཞབས་འབྲིང་བ་follow as a servant
ཞབས་རྗེན་པར་barefooted
ཞབས་རྟིང་heel
ཞབས་རྩ་shoes
ཞབས་སོར་toe
ཞབས་སྟེབས་footstool
ཞམ་རིན་servant
ཞར་བྱུང་ancillary
ཞར་འབྱུང་addendum
ཞར་ལྟས་winking of one eye
ཞལ་ཀོ་chin
ཞལ་ཁ་curses
ཞལ་ཁྲིད་oral instruction
ཞལ་གདང་བ་gape
ཞལ་གཟིགས་པ་seeing face to face
ཞལ་གཟིགས་མ་vision
ཞལ་གསལ་བའི་which clarified
ཞལ་གསལ་བར་མཇལ་saw clearly
ཞལ་ཏ་advice
ཞལ་ཏ་བ་steward
ཞལ་ཏ་མ་chamber maid
ཞལ་ནག་a medicine
ཞལ་ནས་གསུངས་པ་orally transmitted
ཞལ་པ་plastering on walls
ཞལ་བགྲད་mouth is open
ཞལ་བགྲད་པ་gape
ཞལ་བཤུས་true copy
ཞལ་བས་སྙན་དུ་from mouth to ear
ཞལ་བསྟན་revealed herself
ཞལ་བསྡུར་deliberate together
ཞལ་བུ་small cup
ཞལ་མཁན་brick layer
ཞལ་མཆུ་lip
ཞལ་མཇལ་བ་met
ཞལ་མཐོང་have a vision
ཞལ་ཚུལ་pastry
ཞལ་ཚོམ་beard
ཞལ་ཚོས་cheek
ཞལ་ཟག་tobacco pipe
ཞལ་འགྲམ་jaw
ཞལ་འཆེམས་last testament
ཞལ་འདོན་གནང་offer prayer
ཞལ་འཚོ་ཐུབ་able to recognize
ཞལ་འཛུམ་པ་smile
ཞལ་ཡམ་joke
ཞལ་རལ་hare lip
ཞལ་རས་face
ཞལ་རས་ཀྱི་facial
ཞལ་རྒྱན་moustaches
ཞལ་རྒྱུད་oral tradition
ཞལ་རྦད་boasting
ཞལ་ལ་མི་ཉན་be disobedient
ཞལ་ཤེས་clarifications
ཞལ་སྐོད་appendix
ཞལ་སྐོམ་thirst
ཞལ་སྔ་in the presence of
ཞལ་ཨོག་chin
ཞི་ཀྭ་watermelon
ཞི་གནས་calm abiding
ཞི་གནས་གཤའ་མ་natural calm state
ཞི་གནས་ལམ་path of calm abiding
ཞི་དུལ་ཅན་placid
ཞི་ནག་པ་black guard
ཞི་བ་ཆེན་པོ་great peace
ཞི་བ་དཀར་aromatic plant
ཞི་བ་སེལ་complacency
ཞི་བདེ་ཅན་peaceful
ཞི་བདེའི་ཁ་དན་peace offer
ཞི་བའི་གོ་ཆ་santivarman
ཞི་བའི་མཐའ་extreme of serenity
ཞི་བའི་ལས་pacifying activities
ཞི་བར་གནས་པ་calm abiding
ཞི་བར་བྱེད་pacifying
ཞི་བར་བྱེད་པ་pacifying
ཞི་བར་འགྱུར་བ་become pacified
ཞི་བསིལ་serenity
ཞི་བྱེད་pacifying
ཞི་མི་cat
ཞི་མིའི་feline
ཞི་མིའི་སྐད་purr
ཞི་ཞིང་ནུབ་come to rest
ཞི་འདོད་desire peace
ཞི་ལ་སོང་became quiet
ཞི་ཧུང་ཧྲི་tomato
ཞིག་གསོ་repairs
ཞིག་པར་སྣང་appear to dissolve
ཞིག་འབྱུང་བ་get a sense of
ཞིག་རལ་laceration
ཞིག་ལ་སོང་will dissolve
ཞིང་ཁ་རྨོ་བ་farm
ཞིང་ཁམས་དག་པ་pure land
ཞིང་ཁའི་བུ་མོ་girls in the field
ཞིང་ཁར་འགྲོ་བ་work in the fields
ཞིང་ཁུལ་agricultural area
ཞིང་གཉེར་farm steward
ཞིང་གཞལ་ཡས་ཁང་celestial abodes
ཞིང་གཤིན་པ་fertile field
ཞིང་གི་བྱ་བ་husbandry
ཞིང་ངན་barren bleak field
ཞིང་དག་pure land
ཞིང་པ་farmer
ཞིང་པ་ཕྱུག་པོ་rich peasant
ཞིང་བདག་landlord
ཞིང་བྱ་husbandry
ཞིང་འདེབས་པ་til or sow a field
ཞིང་འབྲས་crop
ཞིང་འབྲོག་farmers and nomads
ཞིང་ཡུལ་objects
ཞིང་རབ་འབྱམས་universe
ཞིང་རྨོ་ploughs a field
ཞིང་ལྤགས་human skin
ཞིང་ས་ཆེན་པོ་large province
ཞིང་སྐྱེས་born in a grove
ཞིང་སྟོང་fallow
ཞིང་སླག་flayed human skin
ཞིབ་ཏུ་in detail
ཞིབ་ཏུ་དབྱེ་བ་discern
ཞིབ་ཏུ་བཤད་explain in detail
ཞིབ་ཏུ་བསྟན་to teach in detail
ཞིབ་དཔྱད་scrutiny
ཞིབ་པར་བཏགས་grind into a powder
ཞིབ་བཅད་investigate
ཞིབ་བཏས་ground into powder
ཞིབ་བཏེགས་weighed accurately
ཞིབ་བརྡུངས་reduced to powder
ཞིབ་མོ་དཔྱད་ན་detailed analysis
ཞིབ་མོ་བསེད་པ་enter into details
ཞིབ་ཚགས་པོ་thorough
ཞིབ་ཚགས་པོར་thoroughly
ཞིབ་འཇམ་བཟོ་བ་soothe
ཞིབ་རྩིང་fine and gross
ཞིབ་ལྷུག་minute details
ཞིམ་བུ་cat
ཞིམ་ཟས་dainty
ཞུ་གྲབས་about to ask
ཞུ་གླེང་petitionary letter
ཞུ་ཆེན་revise
ཞུ་དེ་melting bliss
ཞུ་པོ་petitioner
ཞུ་བ་པོ་petitioner
ཞུ་བཞེར་tibetan clan
ཞུ་བོན་bon interrogators
ཞུ་མ་ནུས་པ་unable to pray
ཞུ་མ་སྤོབས་པ་unable to pray
ཞུ་མར་lamp
ཞུ་ཝ་dissolve
ཞུ་འཕྲིན་reply
ཞུ་ཡིག་petition
ཞུ་རུ་place in dwagpo
ཞུ་ལོ་ཐོས་ལོ་superficial way
ཞུ་ལོག་feigned petition
ཞུ་ལོག་འབུལ་བ་to appeal
ཞུ་ལོག་རྒྱབ་པ་complain
ཞུ་སྒོ་requesting favors
ཞུ་སྨྱུག་pencil
ཞུག་པ་tribal name in tibet
ཞུགས་པས་with this link
ཞུགས་ལ་འཕེན་པ་implicitly suggest
ཞུགས་ལིང་burning embers
ཞུད་ཐག་suspending cord
ཞུན་གཟུང་a number
ཞུན་མ་melted
ཞུན་མར་melted butter
ཞུན་སྣུམ་melted fat
ཞུབ་པ་coat of mail
ཞུར་བ་deliquesce
ཞུས་དག་གཏོང་བ་correct
ཞུས་བྱེད་shame
ཞུས་ཡིག་letter
ཞུས་ལོ་nominal inquirer
ཞེ་གདེང་profound confidence
ཞེ་ཐག་the depths
ཞེ་ཐག་པ་sincerity
ཞེ་དང་hatred
ཞེ་དྲག་very
ཞེ་དྲག་གི་highly
ཞེ་ནས་བཙའ་cherishes dearly
ཞེ་བཀོན་པ་hating mind
ཞེ་བཅད་resignation
ཞེ་བདེའི་གནས་sanctuary
ཞེ་མཆིའོ་thus he said
ཞེ་མེར་ལངས་པ་vomiting
ཞེ་འཁོན་malice
ཞེ་འདོད་བྱས་entertain ambitions
ཞེ་འདྲངས་པ་obstructed
ཞེ་འབྲད་པ་be wrathful
ཞེ་རྐམ་པ་covetous
ཞེ་ལ་བཞག་hold on to
ཞེ་ས་དང་བཅས་respectful
ཞེ་ས་དང་བཅས་པ་with reverence
ཞེ་ས་བྱེད་faith
ཞེ་སྡང་ཤས་ཆེ་indignant
ཞེ་ཧོར་པོ་ཏ་ལ་jehor
ཞེང་ཁ་ཐུང་བ་narrow
ཞེང་ཅན་broad
ཞེང་ཆུང་narrow
ཞེང་དུ་in breadth
ཞེང་ཕྲ་མོ་narrow
ཞེང་མེད་of small width
ཞེད་to be afraid
ཞེད་སྐུལ་threat
ཞེད་སྐྲག་terrific
ཞེད་སྐྲག་ཚ་པོ་terrible
ཞེད་སྣང་ཅན་hideous
ཞེན་གཞི་referent
ཞེན་དོན་object of desire
ཞེན་པ་རང་ལོག་natural revulsion
ཞེན་ལོག་ཅན་ghastly
ཞེའམ་or whether
ཞེར་འདེབས་པ་strike
ཞེས་དེ་ལ་བྱ་it is called
ཞེས་མེས་great grandfather
ཞེས་ཟེར་པ་quote indicator
ཞེས་ལྡན་པར་politely
ཞེས་སུ་བསྟན་པ་we call it
ཞེས་སྤྲིང་ངོ་so i sent him word
ཞོ་yogurt
ཞོ་ཀ་thick cream
ཞོ་ཁ་ཆུ་whey
ཞོ་ཁང་place in tibet
ཞོ་ཁོག་potato
ཞོ་ཆང་curds and beer
ཞོ་བཞོ་བ་milk
ཞོ་བསྔལ་བ་place milk to curdle
ཞོ་འཐུང་བ་new born child
ཞོ་འབྲས་ཅན་kapettha tree
ཞོ་རྡོ་དམར་པོ་mineral drug
ཞོ་ལོང་ཞིག་fetch some curds
ཞོ་སྐ་བ་thick curd
ཞོག་posit
ཞོག་ཁ་early morning
ཞོག་ཁར་in the early morning
ཞོག་ཁོག་potato
ཞོགས་ཁ་early morning
ཞོགས་པ་morning
ཞོགས་པར་on the morning
ཞོགས་མ་upper covering
ཞོགས་ཟས་breakfast
ཞོགས་ལས་morning work
ཞོགས་ལྟོ་breakfast
ཞོང་རྩེ་lower and upper part
ཞོད་ཀྱི་བགེགས་drought
ཞོན་riding
ཞོན་ཏེ་having mounted
ཞོན་རྟ་riding pony
ཞོའི་སྤྲིས་མ་sweetened curd
ཞོལ་པོ་yak
ཞོལ་མེད་without beard
ཞྭ་གཞོལ་brim of a cap
ཞྭ་གོན་པ་put a cap on
ཞྭ་གྱོན་པ་put a cap on
ཞྭ་མོ་hat
ཞྭ་འབུད་པ་take a cap off
ཞྭ་རྩེ་རིང་hat with high crown
ཟ་ཁང་གཡོག་པོ་waiter
ཟ་ཁང་གཡོག་མོ་waitress
ཟ་ཆག་nettle
ཟ་ཆས་foodstuffs
ཟ་དམ་place in tibet
ཟ་ནུས་པར་བྱེད་is able to eat
ཟ་ཕྱི་ཨ་ཡ་medicinal drug
ཟ་བ་པོ་eater
ཟ་བཞིན་པ་eating
ཟ་བའི་བསྒང་time of eating
ཟ་བར་འདོད་པ་desire for eating
ཟ་བུན་itch
ཟ་ཟིང་itching
ཟ་འགྲམ་པ་cheeks
ཟ་འཕྲུག་itching
ཟ་འཕྲུག་ལང་བ་itching of the skin
ཟ་འཕྲུག་ལངས་པ་itchy
ཟ་འོག་glossy silk cloth
ཟ་འོག་གི་གོས་garment made of silk
ཟ་རུ་wooden ladle
ཟ་རྒྱུ་མེད་nothing to eat
ཟ་རྒྱུ་ཡིན་will eat
ཟ་ལུང་place in tibet
ཟ་ལུང་པ་native of za lung
ཟག་menstrual flow
ཟག་པ་contamination
ཟག་པ་མེད་པ་uncontaminated
ཟག་བཅས་ཀྱི་ལས་contaminated action
ཟག་བྱེད་པ་make water
ཟག་མེད་དབྱིངས་uncontaminated realm
ཟག་རྫས་feces and urine
ཟང་ངེ་ཐལ་ལེ་transparent
ཟང་ཐལ་ལེ་directly penetrating
ཟང་མ་open
ཟང་མ་ཐལ་འབྱུང་impeded
ཟང་ཟིང་ངེ་chaos
ཟང་ཟིང་ཅན་turbulent
ཟངས་ཀྱི་བཙའ་verdigris
ཟངས་ཀྱི་མདོག་fabulous mountain
ཟངས་ཁོལ་བ་boiling kettle
ཟངས་གདུབ་སྣ་མ་battered bangle
ཟངས་ཏིབ་copper teapot
ཟངས་ཐལ་copper oxidized
ཟངས་ཐིབ་copper teapot
ཟངས་ཐུམ་copper ladle
ཟངས་དཀར་district in nga ri
ཟངས་དཀར་པ་native of zangs dkar
ཟངས་དབྱི་red lynx
ཟངས་དུག་poison of copper
ཟངས་དུང་copper trumpet
ཟངས་བུ་small pot
ཟངས་བུམ་a copper pot
ཟངས་མགར་copper smith
ཟངས་ཞུན་molten copper
ཟངས་རི་ཁ་དམར་a monastery
ཟངས་རྡོ་copper ore
ཟངས་སུ་སྐོལ་བ་boil in a kettle
ཟངས་སྡེར་copper dish
ཟད་གཙང་suddhodana
ཟད་པ་དང་བྲལ་བ་free from extinction
ཟད་པ་བསྲིང་prolong life
ཟད་རྫོགས་erosion
ཟད་ཧྲུལ་worn out
ཟན་ཆང་meat and drink
ཟན་དྲོན་warm food
ཟན་བཙོས་པ་boiled food
ཟན་ལིང་small dough ling ga
ཟན་སྙིག་mistake
ཟབ་གནད་བཅུད་profound essence
ཟབ་ཐིག་profound essence
ཟབ་དོན་the profound meaning
ཟབ་བེར་brocade robe
ཟབ་མོའི་གནད་profound method
ཟབ་མོའི་དོན་profound meaning
ཟབ་མོའི་ཚིག་profound aphorism
ཟབ་རྒྱས་ཅན་exuberant
ཟབ་ལག་ཅན་aquatic grass
ཟབ་སྐུད་silk cord
ཟམ་ཆུང་little bridge
ཟམ་ཆེན་large bridge
ཟམ་པ་bridge
ཟམ་པའི་ཀ་བ་piers of a bridge
ཟམ་པའི་རྐང་པ་piers of a bridge
ཟམ་བུ་ལུང་holy place in tsang
ཟམ་ཟིམ་number
ཟར་བུ་tassel
ཟར་མ་a type of bean
ཟར་མ་སོགས་fibers
ཟར་མའི་གོས་linen
ཟར་ཟེར་a number
ཟར་འཇུག་པ་begin to eat
ཟལ་ཟུག་a number
ཟལ་འོད་moonlight
ཟས་ཀྱི་དྭངས་མ་relish of food
ཟས་ཀྱི་བཅུད་food nutriment
ཟས་ཁམ་གཅིག་mouthful of food
ཟས་ངན་bad food
ཟས་དང་གོས་food and clothing
ཟས་དང་སྐོམ་food and drink
ཟས་དྲོད་warm types of food
ཟས་དྲོན་མོ་warm food
ཟས་ནས་ཡོད་has been eaten
ཟས་བཅུད་protein
ཟས་བཅུད་མེད་པ་malnutrition
ཟས་བསྐྲུས་food cut up
ཟས་བྱེད་cook
ཟས་མགྲོན་feast
ཟས་ཚུལ་species of food
ཟས་ཞི་མ་པོ་delicacy
ཟས་ཟིན་པ་ate
ཟས་འཚེད་པ་པོ་one who cooks
ཟས་འཚོལ་བ་look for food
ཟས་ཡིད་yi dwags for bon
ཟས་ལ་དུར་བ་hasten to dinner
ཟས་ལ་བསྐོ་བ་distributor of food
ཟས་ལ་སྐྲུ་cut meat
ཟས་ལ་སྲེད་པ་desirous of food
ཟས་ལེགས་པ་good eater
ཟས་ལྷག་residue of food
ཟས་སྤངས་པ་fasting
ཟས་སྤྱོད་food and exercise
ཟིང་ཆ་སློང་བ་stir up trouble
ཟིང་ཟིང་པོ་chaos
ཟིང་འཁྲུགས་riot
ཟིང་སྐྱ་pink
ཟིང་སློང་བ་make trouble
ཟིན་ཏིག་kind of gentian
ཟིན་ཏོ་this concludes
ཟིན་པར་བྱ་make sure to attain
ཟིན་པར་བྱེད་པ་to capture
ཟིལ་པ་ཁྲོམ་མེ་sparkling dew drop
ཟིལ་པ་ནག་པོ་dewdrop
ཟིལ་པ་འཁོར་dew has arisen
ཟིལ་བ་drop
ཟུག་དྲག་པོ་virulent disease
ཟུག་རྒྱག་to be in pain
ཟུང་གཅིག་one pair
ཟུང་ང་pair of doors
ཟུང་འཇུག་union
ཟུང་འཇུག་བདག་indivisible identity
ཟུངས་མེད་no categories
ཟུར་གསོག་reservation
ཟུར་ཆས་private property
ཟུར་དང་རྒྱབ་side and back
ཟུར་དུ་ཉར་བ་reserve
ཟུར་དུ་ཕྱེ་བ་to separate
ཟུར་ཕོགས་allowance
ཟུར་བཞི་four corners
ཟུར་བཞི་ཅན་quadrangle
ཟུར་བསྟན་པ་been on the fringe
ཟུར་མ་ཆག་unfailing
ཟུར་མཆན་separate annotations
ཟུར་མིག་གཡོ་glance sideways
ཟུར་མོ་pain
ཟུར་འཇོག་to set or put aside
ཟུར་འདོགས་appendage
ཟུར་འབུལ་private note
ཟུར་ཡོལ་retirement
ཟུར་རྒྱན་accessory
ཟུར་རྒྱུན་appendix
ཟུར་ལོགས་སུ་sideways
ཟུར་ལྟ་མ་women in general
ཟེ་ཏའོ་bayonet
ཟེ་པྲོག་crest of a cock
ཟེ་བ་precious stone
ཟེ་མ་eye lashes
ཟེ་མ་ར་མགོ་barbed
ཟེ་ཚྭ་salt peter
ཟེ་འབྲུ་anthers of a flower
ཟེག་མའི་ལྟེ་whirlpool
ཟེའུ་འབྲུ་anthers of a flower
ཟེར་དགུ་many talks
ཟེར་བ་སྣང་it is said
ཟེར་བའི་དོན་means
ཟེར་མ་a drop
ཟེར་ཟེར་rumor
ཟེར་རོ་he said
ཟེལ་མ་small chip
ཟོ་ཆགས་showing mouldy spots
ཟོ་ཆུ་water wheel
ཟོ་དོར་local guardian
ཟོ་མ་bucket
ཟོ་མར་old mouldy butter
ཟོ་ཤ་mouldy meat
ཟོག་གོང་price of merchandise
ཟོག་ཤ་beef
ཟོང་པ་trader
ཟོང་ཟོག་merchandise
ཟོན་ཕན་abacus
ཟོན་མེད་heedless
ཟོབ་རྒྱལ་charlatan
ཟོམ་ཆེན་large barrel
ཟོམ་སྐྱུར་བྱས་rotten and cast out
ཟོར་ཆུང་chopper
ཟོར་བུ་chopper
ཟོར་ར་sickle
ཟོར་ལྕེ་sickle blade
ཟོལ་བུ་pretext
ཟོལ་བྱེད་པ་pretender
ཟོལ་མེད་without pretext
ཟོས་ནས་ཡོད་he was eating
ཟྭ་ཁུ་nettle soup
ཟྭ་ཚོད་nettle
ཟླ་ཁྲུལ་intercalary month
ཟླ་གང་full moon
ཟླ་གཞོན་ནུ་day after new moon
ཟླ་གསང་secret moon
ཟླ་གསང་ཆེན་པོ་anuyoga rare tantra
ཟླ་ཉིན་last year
ཟླ་ཐེབ་intercalary month
ཟླ་དཀྱིལ་lunar disk
ཟླ་དང་ཟླ་every month
ཟླ་ནག་new moon
ཟླ་ཕོག་monthly salary
ཟླ་ཕོགས་monthly salary
ཟླ་བ་གཅིག་one month
ཟླ་བ་གསུམ་རེར་quarterly
ཟླ་བ་ཆུ་ཤེལ་finest crystal gem
ཟླ་བ་ཉ་full moon
ཟླ་བ་ཉ་པ་full moon
ཟླ་བ་དགུ་པ་the month of october
ཟླ་བ་ནོར་བུ་crystal gem
ཟླ་བ་ཙམ་about a month
ཟླ་བ་ཚེས་པ་waxing moon
ཟླ་བ་འཛིན་eclipse of the moon
ཟླ་བ་རིལ་པོ་entire month
ཟླ་བ་ཤོལ་intercalary month
ཟླ་བའི་lunar
ཟླ་བའི་གྲོགས་great ocean
ཟླ་བའི་ཅོད་པན་epithet of sambhara
ཟླ་བའི་ཏོག་a tathagata
ཟླ་བའི་བླ་མཁན་lama astrologer
ཟླ་བའི་ཙང་ཀུན་a sa bdag monster
ཟླ་བའི་རླུང་lunar breathing
ཟླ་བས་དགའ་water lily
ཟླ་བོ་spouse
ཟླ་བོན་ཚེས་པ་bon of the moon
ཟླ་མཐོང་day after new moon
ཟླ་མཚན་མེད་པ་one without menses
ཟླ་ཚེ་crescent moon
ཟླ་ཚེས་crescent moon
ཟླ་ཞལ་moon face
ཟླ་འོད་སྒྲ་ཅན་lammergayer
ཟླ་ར་བ་season
ཟླ་རལ་གྱི་དཔེ་counter example
ཟླ་ལྷག་intercalary month
ཟླ་ཤོལ་intercalary month
ཟླ་སྐག་unlucky month
ཟླ་སྐར་moon
ཟླ་སྐྱལ་escorts
ཟླམ་པོ་མཉམ་པ་roundish
ཟླུམ་པོ་འཛིན་the sun
ཟླུམ་བུམ་circle
ཟླུམ་སྐོར་circular
ཟློག་ཕྱོགས་opposite class
ཟློས་གཏམ་recitation
ཟློས་གར་ཁང་theatre
ཟློས་གར་བ་actor
འ་ན་ཡང་although
འ་འབུས་i
འ་འུར་loud whirring noise
འ་ཡོ་puppy
འ་ལ་གཟི་ཆེན་a learned lama
འ་ཤ་རྒྱབ་པ་jeer
འཁར་བ་ལ་རྟེན་lean on a staff
འཁར་རྒྱུག་walking stick
འཁལ་ཟིན་པ་spun
འཁལ་ལས་spinning
འཁུམ་པའི་contraction
འཁུམས་ཟིན་པ་shrank
འཁུར་བ་དགེར་བ་fry pastry
འཁུར་བཞིན་པ་carrying
འཁུར་བྱེད་carrying
འཁུར་འགན་liability
འཁུར་ཤོག་bring it
འཁུར་སོང་take it away
འཁེགས་བྱེད་one who stops
འཁེངས་to be full with
འཁེལ་འཐག་spin and weave
འཁོད་ཡོད་འདུག་was written
འཁོད་སྙོམས་པོ་even
འཁོན་བཅུག་པ་entangle
འཁོན་འཛིན་resentment
འཁོན་རྩེད་feud
འཁོར་ཁང་workshop
འཁོར་གཅིག་one attendant
འཁོར་གཡའ་latch
འཁོར་གླ་fare
འཁོར་ཆུ་whirlpool
འཁོར་ཏོ་tribe in tibet
འཁོར་ཐེམ་winding stair
འཁོར་དུ་peripheral
འཁོར་དུ་འབྱུང་accompany
འཁོར་པ་male attendant
འཁོར་པོ་male attendant
འཁོར་བ་དག་cycles of aeons
འཁོར་བ་འོང་to detour
འཁོར་བ་སྟོང་པ་to empty samsara
འཁོར་བཞིན་being circled
འཁོར་བའི་ཁྱིམ་residence of a queen
འཁོར་བའི་ཆོས་samsaric phenomena
འཁོར་བར་ཐལ་repaid
འཁོར་བསྐོར་turn the wheel
འཁོར་བྱིན་པོ་most of the servants
འཁོར་མ་ཚགས་without interruption
འཁོར་མང་པོ་numerous retinue
འཁོར་མདའ་machine gun
འཁོར་མེད་uninterrupted
འཁོར་མོ་འཇིག་kormo jig
འཁོར་འགྱུར་circling
འཁོར་འདབ་retinue
འཁོར་འཕྲུལ་motor
འཁོར་འབངས་servants
འཁོར་ལེགས་པ་good attendants
འཁོར་ལོ་གཡོ་a flower
འཁོར་ལོའི་བདག་lord of the mandala
འཁོར་ལོས་མཚན་marked by a wheel
འཁོར་སྒྱུར་universal monarch
འཁོལ་to be boiled
འཁོས་མེད་uninfluential
འཁྱག་པོ་cold
འཁྱག་སྒམ་refrigerator
འཁྱགས་ཆུ་glacier
འཁྱགས་འབྱུང་feel cold
འཁྱགས་ཤུད་skiing
འཁྱམ་wander
འཁྱམ་ཁྱི་stray dog
འཁྱམ་འཁྱམ་stroll
འཁྱམ་སྐྱེར་rogue
འཁྱམས་wander
འཁྱམས་ཤིང་wander
འཁྱར་མཁན་wandering
འཁྱིགས་པ་bound
འཁྱིར་འཁྱིར་swirl
འཁྱིལ་བ་ཅན་earring
འཁྱིལ་བ་བརྒྱ་one hundred coils
འཁྱིལ་འཁོར་rotation
འཁྱིལ་རྫིང་eddy
འཁྱུག་རྩལ་agility
འཁྱུགས་flashing
འཁྱུགས་པོ་nimble
འཁྱུད་འཐུང་as soon as born
འཁྱེར་མཁན་bearer
འཁྱེར་ཟིན་པ་carried
འཁྱེར་ཡོང་བ་fetch
འཁྱེར་ཡོངས་བ་bring
འཁྱོག་ཅན་tortuous
འཁྱོག་ཏེ་astray
འཁྱོག་བྲལ་straight road
འཁྱོག་མེད་straight
འཁྱོག་སྟོན་པ་fly into a passion
འཁྲ་སར་འཁྲས་firm in support
འཁྲག་ཏུ་བཅུག་to make disordered
འཁྲངས་hard
འཁྲངས་བ་hard
འཁྲབ་གཞུང་script of a play
འཁྲལ་བ་bereave
འཁྲིག་ཐབས་amorous dalliance
འཁྲིག་པ་སྦེད་name for the crow
འཁྲིག་པའི་ཆོས་sensuality
འཁྲིག་མ་wrist of the hand
འཁྲིག་འདོད་མ་voluptuous woman
འཁྲིག་སྤྱོད་fornication
འཁྲིགས་མ་wrist of the hand
འཁྲིལ་མཁན་embracer
འཁྲིལ་ལྡན་plant with tendrils
འཁྲིས་ཟིན་པ་clung
འཁྲིས་འཛིན་brass
འཁྲུ་ཁང་bathroom
འཁྲུ་རུང་བ་washable
འཁྲུ་སྣོད་basin
འཁྲུང་བཟའ་marriage
འཁྲུངས་སྐར་birthday
འཁྲུད་པར་བྱེད་cause to be washed
འཁྲུན་མཐོ་བ་of high rank
འཁྲུབ་jumping
འཁྲུར་འཇུག་པ་causing to be washed
འཁྲུལ་ཆ་confusion
འཁྲུལ་པའི་illusory
འཁྲུལ་བྲལ་free of illusions
འཁྲུལ་བློ་illusory mind
འཁྲུལ་མེད་དུ་infallibly
འཁྲུལ་འཁོར་མི་robot
འཁྲུལ་ཡས་a very large number
འཁྲུལ་ལམ་path of delusion
འཁྲེད་cross
འཁྲོ་བ་belligerence
འཁྲོགས་dislocated
འཁྲོམ་bazaar
འགག་གྲི་death by hanging
འགངས་མཐུན་equal
འགན་གཟུང་མཁན་governor
འགན་ཅན་responsible
འགན་དབང་jurisdiction
འགན་འཛིན་director
འགན་ཡོད་པ་responsible
འགབ་ས་hiding
འགམས་to eat tsamba
འགའ་ཞིག་some
འགའ་ཞིག་འོང་someone coming
འགའ་ཡང་whatsoever
འགའ་ཤས་གནང་please give me some
འགལ་ཁྱབ་inverse pervasion
འགལ་ཏེ་against
འགལ་བའི་གྲོགས་enemy
འགལ་བར་བྱེད་contradict
འགལ་མེ་firebrand
འགལ་མེད་without mistake
འགལ་ཚབས་ཅན་sinning heinously
འགལ་ཟླ་contradictory object
འགལ་འཁྲུལ་confusion
འགལ་འདུ་contradictions
འགས་ཆག་fracture
འགས་ཐོར་གྱི་explosive
འགས་འཐོར་explosion
འགུ་མེད་ungrateful
འགུགས་invoke
འགུགས་བྱེད་evil spirit
འགུལ་གཏོང་stimulation
འགུལ་བ་པོ་shaker
འགུལ་བསྐྱོད་motion
འགུལ་བྱེད་shaker
འགུལ་མཁན་shaky
འགུལ་མེད་standstill
འགུལ་ཟིན་པ་shook
འགུལ་འཚེར་lazy
འགེགས་བྱེད་husband
འགེགས་སྐྲོད་eject an evil spirit
འགེངས་ཤོག་form
འགེབས་བ་cover
འགེབས་བྱེད་wings
འགེམ་པ་pass over
འགེལ་གཡག་laden yaks
འགེལ་བྲེལ་old
འགོ་ཕེར་useful
འགོ་བཙུགས་མཁན་beginner
འགོ་བྱེད་director
འགོ་མི་headman
འགོ་འདོགས་submission
འགོ་འཛིན་rector
འགོག་པ་པོ་one who takes out
འགོག་བཟླས་བྱ་recite silently
འགོག་མེད་without obstruction
འགོག་རྒོལ་resistance
འགོགས་སྙོམས་cessation absorption
འགོང་ghostly
འགོང་བ་པོ་enchanter
འགོད་ཚུལ་mode of statement
འགོད་ལ་ཕྱོགས་to put in writing
འགོར་གཞི་delay
འགོར་པོ་ཆགས་པ་slacken
འགོལ་བའི་གནས་hermitage
འགོས་ནད་infection
འགྱངས་བ་extend
འགྱངས་མེད་without delay
འགྱིག་rubber
འགྱིག་མདའ་catapult
འགྱིག་ལྷམ་rubbers
འགྱིག་ཤོག་plastic
འགྱིགས་བསུབ་rubber
འགྱིང་ཉམས་dignity
འགྱིང་བག་ཅན་stylish
འགྱིངས་assume a pose
འགྱིམ་པ་circumference
འགྱུ་བ་ཞིག་a thought
འགྱུར་ཆུགས་take form
འགྱུར་ཕྱོགས་trend
འགྱུར་བ་ཅན་impermanent
འགྱུར་བཅུག་allow
འགྱུར་བའི་གནས་having to change
འགྱུར་བྱུང་was translated
འགྱུར་ཚུལ་how it comes to be
འགྱུར་ཟིན་པ་became
འགྱུར་རུང་བ་convertible
འགྱུར་སོང་changed
འགྱུར་སྤྱོད་situation
འགྱེད་གཏོང་པ་distribute alms
འགྱེད་པར་impel
འགྱོག་ཐེལ་seal
འགྱོག་པ་ascend
འགྱོགས་པ་rapidity
འགྱོད་པ་བས་big with repentance
འགྱོད་པ་སྐྱེད་to feel regret
འགྱོད་ཟིན་པ་having repented
འགྱོད་སེམས་remorse
འགྲགས་གྲགས་very bright
འགྲན་བཟོད་པ་suffer rivalry
འགྲན་བསྡུར་པ་competitor
འགྲན་མེད་incompatible
འགྲན་འོས་པ་competent
འགྲན་སེམས་ཅན་competitive
འགྲམ་དེར་by the side of
འགྲམ་མུར་cheek
འགྲམ་ལྕགས་smack
འགྲམ་སེར་coquettish woman
འགྲམས་པ་spread over
འགྲམས་བཅོས་rites to repair
འགྲིག་compilation
འགྲིམ་འགྲུལ་པ་traveller
འགྲུབ་ཐོབ་acquisition
འགྲུབ་པ་སླ་facilitates
འགྲུབ་འབྲས་achievement
འགྲུབ་རྟགས་signs of realization
འགྲུལ་ཏེ་walking
འགྲུལ་བསྐོར་བ་tourist
འགྲུལ་བསྐྱོད་trek
འགྲུལ་ལམ་pathway
འགྲེང་གིན་standing
འགྲེང་པོ་sign of the vowel e
འགྲེང་བཞིན་པས་while standing
འགྲེམ་ཡིག་advertisement
འགྲེམས་སྟོན་exhibition
འགྲེལ་བ་commentary
འགྲེལ་བཤད་ཀྱི་explanatory
འགྲོ་ཀུན་all beings
འགྲོ་ཁམས་ཀུན་everywhere
འགྲོ་ཆོག་you can go
འགྲོ་ཉོང་previously visited
འགྲོ་ན་དྲག་it is better to go
འགྲོ་བ་དྲུག་six transmigrations
འགྲོ་བ་མི་human
འགྲོ་བ་མིའི་manhood
འགྲོ་བཞིན་པ་going
འགྲོ་བར་འདོད་desire to move about
འགྲོ་བསྐྱོད་going
འགྲོ་མྱོངས་previously visited
འགྲོ་ཞིབ་four
འགྲོ་ཟིན་པ་went
འགྲོ་འཆག་བྱ་moving about
འགྲོ་འོང་going and coming
འགྲོ་འོང་བྱེད་exhale and inhale
འགྲོ་ཡུལ་destination
འགྲོ་ལྡོག་circularity
འགྲོ་ཤུགས་current
འགྲོ་ཤུལ་trail
འགྲོ་སྡོད་movement
འགྲོག་མོ་female shepherd
འགྲོང་die
འགྲོངས་die
འགྲོད་དཀའ་བ་difficult of access
འགྲོན་traveller
འགྲོལ་བ་པོ་one who unravels
འགྲོལ་བྱེད་one who loosens
འགྲོས་རྒྱབ་པ་trot
འང་གུ་pigeon
འང་གུ་མདོག་gray
འང་མི་never
འཆག་གཏམ་moving about
འཆག་ཏུ་འགྲོ་བ་take a walk
འཆག་ས་place for walking in
འཆག་སུ་འགྲོ་བ་take a walk
འཆགས་པའི་དུས་time of confession
འཆང་བའི་མཆོག་best of possessions
འཆངས་པ་handful
འཆད་པོ་expositor
འཆད་འགྱུར་ལྟར་as will be explained
འཆད་སྤེལ་cultivate
འཆབ་པ་concealment
འཆམ་masked dances
འཆམ་འཆམ་walk
འཆམ་ཡིག་dance scripts
འཆའ་སྒམ་cupboard
འཆར་ཁ་dawn
འཆར་གཞི་ངན་པོ་conspiracy
འཆར་གཞི་བཟོ་བ་frame
འཆར་གཞི་འགོད་to make a plan
འཆར་ཅན་གྱི་habitual
འཆར་ཆ་appearances
འཆར་ན་དགག་intrude
འཆར་ཚུལ་mode of appearing
འཆར་སྐྱེམས་habit
འཆར་སྣང་impression
འཆལ་པ་faulty
འཆལ་བ་faulty
འཆལ་འགྲོ་བ་degenerate
འཆི་ཁ་མ་about to die
འཆི་དགྲ་mortal enemy
འཆི་བ་མེད་immortal
འཆི་བ་ཡིན་he is about to die
འཆི་བའི་ཚེ་time of death
འཆི་བའི་འབངས་subject to death
འཆི་བའི་རྐྱེན་cause of death
འཆི་མེད་ཆབ་name of ganges river
འཆི་མེད་བུ་མོ་a goddess
འཆི་མེད་ཚེ་immortality
འཆི་མེད་རྔ་celestial drum
འཆི་འདས་death
འཆི་འཕོ་བ་transmigrate
འཆི་འཕོ་ལྟུང་rebirth and falling
འཆི་རྟགས་sign of death
འཆི་ལྟས་forebodings of death
འཆི་སྲིད་the death state
འཆིང་བས་ཟིན་པ་to be conditioned by
འཆིང་བསྒྲིགས་agreement
འཆིང་བྱེད་མ་women
འཆིང་མེད་unbound
འཆིལ་པ་sparrow
འཆུ་པ་irrigate
འཆུག་མེད་without mistake
འཆུགས་པ་mistaken
འཆུགས་མེད་unmistaken
འཆུན་ཆེ་very efficacious
འཆེམས་པ་chew
འཆེར་པ་spleen
འཆེལ་བ་fixation
འཆེས་པ་happy advent
འཆོ་བ་prepare
འཆོབས་ཤིག་made secret
འཆོར་loses control
འཆོར་རྒྱུ་way of incurring it
འཆོལ་བར་བྱེད་contrive
འཆོལ་བར་འགྲོ་be intermixed
འཆོལ་མེད་random
འཇག་པོ་species of klu
འཇགས་ཁྲིས་time of prosperity
འཇངས་ཞབས་place in khams
འཇངས་ས་ཐམ་place in khams
འཇན་པོ་consort
འཇན་ཕོ་husband
འཇན་མོ་wife
འཇབ་དམག་གི་མི་guerrilla
འཇབ་ནས་ལྟ་བ་sneak
འཇབ་བུ་བ་thief
འཇམ་soft
འཇམ་ཀླས་straight
འཇམ་ཇུས་kind of silk scarf
འཇམ་ཐིང་ངེ་quiet and peaceful
འཇམ་པོ་smooth
འཇམ་པོའི་gentleness
འཇམ་མོ་post stage
འཇམ་ཡས་a number
འཇམ་ལྷོད་peaceful and relaxed
འཇམ་ཤ་དོད་པོ་smooth
འཇའ་བར་བྱེད་པ་make lame
འཇའ་ཚོན་rainbow
འཇའ་འོད་ཁ་དོག་rainbow colors
འཇའ་འོད་དྲ་བ་rainbow net
འཇའ་ལུས་rainbow body
འཇའ་ལུས་པ་body of light
འཇའ་ས་edict
འཇའ་སྒོར་solid rainbow
འཇལ་ཁ་act of measuring
འཇལ་བ་comprehend
འཇལ་བ་མེད་པ་without examining
འཇལ་བར་བྱེད་paying in price
འཇལ་བར་འགྱུར་comprehend
འཇལ་བྱེད་comprehender
འཇལ་ཚད་ཞིག་pound
འཇལ་འགྲོ་measured
འཇི་ཤིག་flea
འཇིག་པའི་རྒྱུ་destructive cause
འཇིག་པར་བྱེད་disintegrate
འཇིག་པར་འགྱུར་destined to vanish
འཇིག་བསྐལ་aeon of destruction
འཇིག་རྒྱུ་perishable
འཇིག་རྟེན་འདས་supramundane
འཇིག་རྟེན་ལ་in the world
འཇིགས་དངངས་terror
འཇིགས་པ་བཅུ་པ་buffalo
འཇིགས་པ་མེད་fearless
འཇིགས་པར་བྱེད་frighten
འཇིགས་བྲལ་fearless
འཇིགས་མེད་fearless
འཇིགས་རྔམ་ཅན་awful
འཇིགས་སྐྲག་ཅན་ferocious
འཇིགས་སྒྲ་crash
འཇིགས་སྡེ་མ་ganges river
འཇིགས་སྤང་abandoning fear
འཇིང་ཁུང་nape of the neck
འཇིང་ནུབ་short neck
འཇིང་པ་neck
འཇིབ་བྱེད་absorbent
འཇིབ་མཁན་absorbent
འཇིབ་ཟིང་པ་suck
འཇིབ་འཐེན་absorption
འཇིམ་བརྙན་statue
འཇིལ་overcome
འཇུ་བྱེད་digestive bile
འཇུ་སྟོབས་digestive power
འཇུ་སླ་བ་easily digestible
འཇུག་དུས་when inhaling
འཇུག་པ་བྱེད་པ་perseverance
འཇུག་པ་ཞི་cessation
འཇུག་པའི་ལམ་way of initiation
འཇུག་པར་བདེ་easy to practice
འཇུག་བདེ་བ་easy to plant or fix
འཇུག་ཚུལ་mode of relating
འཇུག་ཡུལ་object of engagement
འཇུག་རིངས་comet
འཇུག་རིམ་stages of operation
འཇུག་རྐྱེན་entry condition
འཇུག་ལྡོག་obstacles
འཇུངས་པ་ཅན་avaricious
འཇུན་འགར་eleuth mongols
འཇུམ་swoop
འཇུམས་པ་cause to shudder
འཇུར་ཏ་leather shoes
འཇུར་བཙིར་attachment
འཇུར་མེད་unavoidable
འཇུར་འཛིན་rigorous
འཇུར་ལྷམ་leather shoes
འཇུས་ཟིན་པ་caught
འཇོ་བ་པོ་one who milks a cow
འཇོ་བ་མོ་milkmaid
འཇོ་མཁན་one who milks a cow
འཇོ་མོ་cow
འཇོ་ཤ་celestial flowers
འཇོག་ཏུ་བཅུག་to remain
འཇོག་ཐུབ་པ་can be posited
འཇོག་དཀའ་difficult to posit
འཇོག་བ་placement
འཇོང་ཙེ་small low table
འཇོན་ཐང་capability
འཇོན་དམར་copper
འཇོམས་སྨན་aspirin
འཇོར་བུ་small hoe
འཇོར་ཡུ་handle of the hoe
འཇོར་ལྕགས་iron of a mattock
འཇོལ་ཅན་having a train
འཇོལ་བོན་revealed bon
འཇོལ་ལེ་hanging
འཐག་ཁྲི་loom
འཐག་གི་འདུག་grinding in a mill
འཐག་པ་པོ་weaver
འཐག་རྡོ་grinder
འཐག་སྟན་loom
འཐང་པོ་lower parts of body
འཐད་རུང་ཡིན་it is still possible
འཐད་ལེགས་a large numeral
འཐན་འདྲེ་a demon
འཐབ་ཇུས་strategy
འཐབ་འབུ་silkworm
འཐབ་འབྲལ་yama gods
འཐབ་འཛིངས་combat
འཐབ་རྒོལ་offensive
འཐལ་བྱེད་སྲང་scales for weighing
འཐིབས་བསྡད་པ་murky
འཐིམ་བཞིན་པ་sinking
འཐུག་པ་thick
འཐུང་to drink
འཐུང་ཆུ་drinking water
འཐུང་བ་drink
འཐུང་བྱེད་saffron
འཐུངས་ཚར་བ་drunk
འཐུན་བྱེད་sun
འཐེན་པ་བཟང་advisable to stop
འཐེན་ཟིན་པ་drawn
འཐེན་འཛུགས་to hang up
འཐེན་རྒྱུང་tension
འཐེན་རྩིས་subtraction
འཐེན་ཤུགས་gravity
འཐེར་པོ་smooth and glossy
འཐེར་བ་smooth and glossy
འཐོམ་པ་to be confused
འཐོམས་dazed
འཐོར་གསས་scattered deities
འཐོར་བྱེད་parrot
འཐོར་མཐོ་lofty peak
འཐོར་ཞིག་disperse
འཐོར་འཐུང་libation
འད་བ་to forsake
འདག་གཟུང་occupation
འདག་པའི་ཕྱེ་མ་powdered clay
འདག་བྱིའུ་swallow
འདག་རྫས་clay
འདང་ཙམ་scanty
འདད་funeral repast
འདབ་གཤོག་wings
འདབ་ཆགས་དང་མ་hawk
འདབ་ཆགས་རབ་phasianus gallus
འདབ་བརྒྱ་lotus
འདབ་བརྒྱ་བ་saffron
འདབ་བུ་ཆེ་name of arjuna
འདབ་མ་གཡོབ་clap the wings
འདབ་མ་མཐོ་sal tree
འདབ་མ་ཤིང་palm tree
འདབ་མ་སྣུམ་smooth fresh leaf
འདབ་མའི་ཐིག་པ་cuckoo
འདབ་མའི་མཛོད་jasminum multiflorum
འདབ་ཟུར་ཅན་sandal wood tree
འདབ་འདེབ་large number
འདབ་ལོ་leaf
འདབ་ལྡན་bird
འདམ་ཀ་བྱེད་པ་choose
འདམ་བུ་ཀ་རས་medicinal root
འདའ་ཀ་moment of death
འདའ་ཁར་at the time of death
འདའ་ག་hour of death
འདའ་ག་མ་hour of death
འདའ་བ་མེད་does not pass
འདའ་བ་མེད་པ་not move away from
འདར་འདར་trembling
འདར་སིག་shudder
འདར་སིག་སིག་shaky
འདས་ཀྱང་even if we are not
འདས་ཆོས་requiem
འདས་པའི་ཚིག་the perfect tense
འདས་པའི་སེམས་past mind
འདས་རྫབ་marsh
འདས་ལོག་ཡོང་བ་resurrect
འདི་this
འདི་ཁོ་ན་is just this
འདི་གཉིས་these two
འདི་གས་འདི་these
འདི་ཉིད་this itself
འདི་དག་གཞན་པ་these and others
འདི་དག་གི་ཚེ་during these steps
འདི་ནས་from this
འདི་ནས་ཕར་away from here
འདི་ནི་མེད་དོ་that is not
འདི་ནི་ཡོད་དོ་that is
འདི་པ་སུ་ཡོད་who is here
འདི་བཞིན་དུ་likewise
འདི་བར་hereabouts
འདི་བྱས་what was done
འདི་བྱེད་what one will do
འདི་མུར་here
འདི་ཚོ་these
འདི་ཡིན་what is happening
འདི་རྣམས་all this
འདི་ལས་from this
འདི་སྐད་སྨྲ་བ་saying these words
འདི་སྣང་what appears
འདིག་རིལ་musket ball
འདིའི་of this
འདིར་here
འདིར་བཞུགས་དང་sit down here
འདིར་འདུས་here included
འདིར་འཕྲད་པ་meet here
འདིར་འབྱོན་come here
འདིར་སྣང་phenomena
འདིས་མཚོན་starting with this
འདུ་འབྲེལ་inherence
འདུ་འཛིན་company
འདུ་ཤེས་discrimination
འདུ་ཤེས་མེད་imperceptive
འདུ་ཤེས་འཛིན་to have an ideology
འདུ་སྐོང་recruitment
འདུག་མིན་whether or not
འདུག་ཚུགས་feel settled
འདུག་ཚུལ་character
འདུག་འདུག་sit
འདུག་ལུགས་posture
འདུག་སྟི་sitting
འདུང་མ་tight sleeves
འདུད་homage
འདུད་པ་homage
འདུད་འགྲོ་animal life
འདུན་གྲོས་མཁན་those who scheme
འདུན་པ་aspiration
འདུན་པ་ཉམས་པ་abandon aspiration
འདུན་པ་དྲག་པོ་very diligent
འདུན་པ་ཞུ་བ་apply for
འདུན་པའི་རྩེ་intention
འདུན་པར་བྱས་པ་aspire
འདུན་མ་ངན་པ་bad advice
འདུན་མ་བྱེད་པ་take a resolution
འདུར་གྱིས་སོང་went trotting
འདུར་གྲོས་trot
འདུལ་བ་ཉིད་པ་discipline
འདུལ་བའི་དབང་power of discipline
འདུལ་བར་བྱ་should be converted
འདུལ་བར་བྱེད་discipline
འདུལ་སླ་པོ་pregnable
འདུས་ཆུང་district in gtsang
འདུས་དབང་district in gtsang
འདུས་པར་included
འདུས་མདོར་junction
འདུས་འཇོམས་crushing hell
འདུས་སོ་assembled
འདུས་སྡེ་community
འདེགས་support
འདེགས་པ་support
འདེད་ཟིན་པ་drove
འདེམས་ཁུངས་constituency
འདེམས་སྐོ་election
འདེམས་སྒྲུག་audition selection
འདོ་ཆུང་good breed of pony
འདོ་ལི་palanquin
འདོགས་ཁྱི་mastiff
འདོགས་མཁན་one who is binding
འདོད་ཁམས་desire realm
འདོད་གྲོགས་sweetheart
འདོད་ངོམས་satisfaction
འདོད་ཆགས་མང་བ་much desire
འདོད་ཆུང་little desire
འདོད་དགུ་desire
འདོད་དབང་dog
འདོད་དུས་spring season
འདོད་པ་ཁེངས་བ་complacent
འདོད་པ་ཅན་desirous
འདོད་པ་ཆུང་little desire
འདོད་པ་ཆུང་བ་having few desires
འདོད་པ་ཆེན་པོ་avid
འདོད་པ་ཉུང་little desire
འདོད་པ་ཉུང་པ་little desire
འདོད་པ་དང་བྲལ་be free from desires
འདོད་པ་བཀང་བ་wish fulfilled
འདོད་པ་བསྐྱེད་produce desire
འདོད་པ་བྱེད་པ་wish
འདོད་པ་ཙམ་yearning
འདོད་པ་ལ་འདོད་lust
འདོད་པའི་who want to
འདོད་པའི་ཁམས་desire realm
འདོད་པའི་ཕོ་ཉ་patala tree
འདོད་པར་བྱ་desire
འདོད་པར་སྐྱེ་produce desire
འདོད་ཚིམ་satisfaction
འདོད་རོགས་sweetheart
འདོད་རྔམས་greed
འདོད་རྔམས་ཅན་avarice
འདོད་རྣམ་ཅན་greedy
འདོད་རྩེན་cuckoo
འདོད་ལོ་yearning
འདོད་ལྡན་desirous
འདོད་སྣམ་ledge
འདོན་ཁང་dining room
འདོན་པ་བསྒྱུར་modified chant
འདོན་ས་exit
འདོམ་གང་one fathom
འདོམས་པ་ལ་མཁས་capable of teaching
འདོམས་སྤུ་pubic hair
འདོར་བའི་ཅ་ལག་derelict
འདོར་བའི་མི་castaway
འདོར་རུང་བ་disposable
འདོར་སྟབས་heruka posture
འདོལ་ས་fertile ground
འདོས་ན་in the pubic region
འདྲ་གཟུགས་caricature
འདྲ་གླུད་glud effigy
འདྲ་བཟོས་imitation
འདྲ་བའི་which was like a
འདྲ་བརྙན་image
འདྲ་བརྫུས་artificial
འདྲ་བཤུས་exact or true copy
འདྲ་བྱས་པ་it seems like
འདྲ་མིན་variation
འདྲ་མོ་a kind of
འདྲ་ཚིག་synonym
འདྲ་ཡ་duplicate
འདྲ་རིས་portrait
འདྲ་རྣམ་similar aspect
འདྲི་ask
འདྲི་གཅོད་trial
འདྲི་བ་ask
འདྲི་བའི་ཚིག་interrogative word
འདྲི་བར་བྱ་ask
འདྲི་མཁས་ask clever questions
འདྲི་རྩད་investigation
འདྲི་ཤོག་questionnaire
འདྲི་སྙམས་thought to ask
འདྲིད་fornicate
འདྲིད་པ་tempt
འདྲིལ་rolls
འདྲིས་be well acquainted
འདྲིས་པ་be well acquainted
འདྲིས་བ་ask
འདྲུ་བ་dig
འདྲུད་འཁོར་pulley
འདྲུབ་པ་sewn
འདྲེ་པ་contamination
འདྲེ་པང་ཁ་a medicinal fruit
འདྲེ་ཕོ་male devil
འདྲེ་བསྒྲུབས་demon worship
འདྲེ་བུ་young devil
འདྲེ་མནན་པ་press down
འདྲེ་མོ་female devil
འདྲེ་མོང་yeti
འདྲེ་རྣམས་imps
འདྲེ་ལྡོག་plunderer
འདྲེ་སྡོད་pause of the spirits
འདྲེ་སྲིན་hobgoblin
འདྲེད་ཤུད་slide
འདྲེན་ནུས་able to guide
འདྲེན་ཟམ་draw bridge
འདྲེན་འཁོར་carriage
འདྲེས་པར་གྱུར་become mixed up
འདྲེས་རུང་suitable to be mixed
འདྲོངས་achieve
འདྲོན་སྐྱོན་keeper of light
འདྲོབས་པ་straight
འཕག་ཚག་prank
འཕགས་པ་ཅན་bon name of kamaloka
འཕགས་པ་སློབ་པ་buddhist saints
འཕགས་པའི་མཚམས་separating gap
འཕང་ཕུང་very large number
འཕང་བཀྲ་spindle
འཕང་བསྟོད་པ་to rouse the mind
འཕང་མཐོ་uplifted
འཕང་མཐོ་བ་of high rank
འཕངས་པའི་དབང་impelling power
འཕངས་འབྲས་projected effect
འཕངས་སུ་ཟིན་outlined
འཕན་བྱེད་པ་throw
འཕན་ཚར་tassel
འཕན་ཟེལ་kind of onyx
འཕམ་འགྲོ་བ་be defeated
འཕར་བར་བཏེགས་lift up
འཕར་མ་གཏོང་བ་refund the excess
འཕར་རྩ་pulse
འཕུ་རྒྱབ་པ་blow
འཕུད་blame
འཕུར་བྱེད་flying
འཕུར་བྲོས་flight
འཕུར་ཟིན་པ་flew
འཕུར་འགྲོ་bird
འཕུར་ལྕེ་ribbon
འཕེན་ཐག་sling
འཕེན་པའི་དབང་force of impelling
འཕེན་བྱེད་discursive
འཕེར་བ་raise
འཕེལ་འགྱུར་development
འཕོ་བྱ་soul
འཕོ་བྱས་shifted
འཕོ་མཛད་to transmit
འཕོ་མེད་unsubsiding
འཕོ་འགྱུར་ཅན་variable
འཕོག་ཐུག་pollution
འཕོག་ཟིན་པ་struck
འཕོང་མཁན་archer
འཕོངས་ལྕག་horsewhip
འཕོས་པ་transferred
འཕྱག་to sweep
འཕྱག་པ་sweep
འཕྱགས་to sweep
འཕྱང་བར་གྱུར་hanging down
འཕྱང་བར་ལྡན་flowing
འཕྱང་འཕྲུལ་suspended ornament
འཕྱད་ཅན་name of a place
འཕྱར་པ་sprinkling
འཕྱར་བ་ཅན་a cemetery
འཕྱི་པ་prairie dog
འཕྱི་ཕི་marmot
འཕྱི་བ་marmot
འཕྱི་འབིགས་marmot
འཕྱིད་རས་duster
འཕྱིས་རྒྱབ་པ་polish
འཕྱུགས་misleads
འཕྱེན་གཏོང་བ་fart
འཕྱོ་དར་བ་undulate
འཕྱོགས་to sweep
འཕྱོང་jump
འཕྱོང་འགྱུར་large number
འཕྱོང་རྒྱས་district of lokha
འཕྱོངས་རྒྱས་pride
འཕྱོར་ཆས་garish
འཕྲག་shoulder
འཕྲང་མ་གཅོད་do not be ambushed
འཕྲད་དུ་ཕྱིན་went to see
འཕྲལ་གཡེང་immediate diversions
འཕྲལ་བདེ་present comfort
འཕྲལ་ཤོར་temporary straying
འཕྲལ་སེལ་temporary
འཕྲལ་སྦྱོང་temporary practice
འཕྲས་རྒྱབ་པ་kicked by a horse
འཕྲིག་མ་ཚུད་པ་to be unresolved
འཕྲིག་ཚུད་པ་be assured of
འཕྲིན་བསྐུར་བ་send a reply
འཕྲིན་འགན་པ་send a reply
འཕྲིན་ལན་answer a message
འཕྲིན་སྐུར་བ་send intelligence
འཕྲིལ་བ་swinging
འཕྲུ་བསྐྱོད་flying
འཕྲུལ་གཤེན་gshen of magic power
འཕྲུལ་ཆས་machinery
འཕྲུལ་ཐུར་catheter
འཕྲུལ་དགའ་བ་nirmanarati gods
འཕྲུལ་མཐིལ་drawer
འཕྲུལ་མོ་trickster
འཕྲུལ་ལ་མཁས་mischievous child
འཕྲུལ་ལས་engineering
འཕྲེང་ལྡན་garland
འཕྲེད་གླིང་flute
འཕྲེད་ངོས་slope
འཕྲེད་དུ་slantingly
འཕྲེད་རྒྱུག་traverse
འཕྲེད་སློག་པ་slant
འཕྲོ་དྲགས་very agitated
འཕྲོ་ན་when thoughts move
འཕྲོ་མཐུད་remainder
འཕྲོ་འདུ་ཀུན་all activity
འཕྲོ་འབར་emission
འཕྲོ་རུ་བཅུག་to leave free
འཕྲོ་སྐྱེ་great number
འཕྲོག་བཅོམ་པ་robber
འཕྲོག་ཡས་a number
འཕྲོད་meet
འཕྲོད་ངེས་བྱ་must be introduced
འཕྲོད་པ་འདུ་བ་inherence
འཕྲོས་མོལ་conversations
འབག་རག་གི་ཚང་cobweb
འབང་རག་spider
འབངས་lover
འབངས་སུ་འཁོར་subjects
འབད་ཅིང་striving
འབད་དགོས་necessary to devote
འབད་པས་diligently
འབད་པས་ཞུགས་པ་begin with energy
འབད་འཚལ་བ་show diligence
འབན་ཁྲ་fine cotton cloth
འབན་བཅད་a number
འབན་ཚོགས་general offerings
འབབ་བཟོ་བྱེད་to impose tax
འབབ་ལྡན་vein
འབབ་ལྷུང་descent
འབབ་ས་place of landing
འབམ་disease
འབམ་ནད་arthritis
འབམ་ཡིག་formal large hand
འབའ་ཁེན་coolie
འབའ་གན་agreement
འབའ་ཐང་place in khams
འབའ་དར་kind of scarf
འབའ་ཤོག་bring it hither
འབའ་ས་ཀ་wild animal
འབའ་སོང་take it away
འབར་བཞིན་པ་burning
འབར་བའི་རལ་པ་light
འབར་ཟིན་པ་burnt
འབར་འབུར་ཅན་lumpy
འབར་རྫས་fuel
འབར་ཤིང་match
འབས་ཅན་rice pap
འབིགས་ལྡན་thunderbolt of indra
འབུ་ཁང་deity in nepal
འབུ་གསོད་བྱེད་insecticide
འབུ་ཆ་ག་པ་locust
འབུ་པད་leech
འབུ་བྱང་ཁྲ་hornet
འབུ་བླ་མ་མ་ནི་dragonfly
འབུ་རིང་snake
འབུགས་pierce
འབུགས་རིང་sigh
འབུད་གཏོང་བ་discard
འབུད་འདོར་expulsion
འབུབས་པ་vault put on a roof
འབུམ་ཐང་place in sikkim
འབུར་ཐོན་bulge projection
འབུར་དུ་elongated
འབུར་དུ་དོད་པ་carved in relief
འབུར་བཟོ་པ་engraver
འབུར་བར་prominent
འབུར་བྲིས་written in relief
འབུར་འདོན་hump
འབུར་རྐོ་མཁན་engraver
འབུར་རྡོག་lump
འབུར་སྐུ་basso relievo image
འབེན་བསྣུན་arrow
འབེན་འཛུགས་པ་set up a target
འབེབས་བ་turn down
འབེལ་པོ་ཡོད་པ་abundance
འབེལ་མེད་extravagant
འབོ་ཇ་kind of tea
འབོག་སྒྲིལ་cloth wrapper
འབོད་དབྱངས་lament
འབོད་པའི་བརྡ་verbal interjection
འབོད་ཕྱོགས་invitation
འབོད་ཚིག་slogan
འབོད་སྒྲ་vocative case
འབོམ་bomb
འབོམ་གཡུགས་to drop bombs
འབོལ་བ་easy
འབོལ་འབོལ་spongy
འབོལ་ལེ་བ་relaxation
འབོས་པའི་ནས་swelled barley
འབྱང་ཁྱད་custom
འབྱམས་ཡས་པ་omnipervasiveness
འབྱམས་སུ་བཅུག་be suspended
འབྱར་conglomerate
འབྱར་མཐུད་adhesion
འབྱར་རས་adhesive
འབྱར་རྩི་adhesive
འབྱར་རྩི་ཅན་sticky
འབྱིང་རྒོད་torpor and agitation
འབྱིན་དུས་during exhalation
འབྱུང་གཟུགས་forms of elements
འབྱུང་ཉིད་true state of a case
འབྱུང་ཉེ་བ་imminent
འབྱུང་ཐོ་account of receipts
འབྱུང་པོ་ghost
འབྱུང་བ་བཞི་four elements
འབྱུང་བའི་ཆུ་ordinary water
འབྱུང་བའི་ལུས་physical body
འབྱུང་མོ་female spirit
འབྱུང་འཕྲོ་emanation
འབྱུང་ལྔ་the five elements
འབྱུང་ལྔ་ཤར་five elements arise
འབྱེད་འཛུམ་open and close
འབྱོག་པ་lick
འབྱོང་བར་བྱ་to train
འབྱོངས་perfected
འབྱོངས་པ་mastered
འབྱོར་བྱེད་connection phlegm
འབྱོར་ཟིན་པ་came
འབྱོར་རྒྱུ་cause of fortune
འབྱོར་ལན་acknowledgement
འབྲང་ས་residence
འབྲལ་མི་རུང་not separated from
འབྲས་ཀྱི་ཁུ་rice water
འབྲས་ཀྱི་ཁྲག་vermilion
འབྲས་ཆེན་rice gruel
འབྲས་དཀར་མོ་white rice
འབྲས་པུ་effect
འབྲས་ཕྱེ་rice flour
འབྲས་བཅས་subsequent results
འབྲས་བུ་མྱོང་experience an effect
འབྲས་བུ་རྟག་coconut
འབྲས་བུ་ལེན་པ་reap
འབྲས་བུ་ཤིང་fruit tree
འབྲས་བུའི་དུས་fruition period
འབྲས་བུས་སྟོང་empty
འབྲས་མང་ལྡན་cadamba tree
འབྲས་མཚུངས་rebounding argument
འབྲས་མོ་གཞོང་sikkim
འབྲས་ཚ་rice porridge
འབྲས་ཟླུམ་ཅན་indian deodar
འབྲས་ཡོས་parched rice
འབྲས་རྟགས་reason for cause
འབྲས་རྩམ་rice flour
འབྲས་ལྡན་ཤིང་fruit tree
འབྲས་ཤིང་fruit tree
འབྲས་ཤུན་chaff
འབྲས་སོ་བོ་rice not husked
འབྲས་སོག་rice straw
འབྲས་སྟོང་unsubstantial
འབྲི་ཁུངས་a monastery
འབྲི་དེབ་notebook
འབྲི་བྱ་writing
འབྲི་བྷོ་a mountain
འབྲི་མཁན་writer
འབྲི་མར་butter of cow yak
འབྲི་མོ་female yak
འབྲི་ཤིག་bedbug
འབྲིང་middling
འབྲིང་རིམ་mean
འབྲིན་པ་slow exhalation
འབྲུ་ཁྲལ་tribute paid in corn
འབྲུ་ཆང་beer from corn
འབྲུ་དུག་poison of cereals
འབྲུ་བཞིན་པ་digging
འབྲུ་མང་པོ་a kind of war cry
འབྲུ་མཆོད་grain offering
འབྲུ་མར་ཚག་པ་draw off oil
འབྲུ་ཚུགས་protrude
འབྲུ་འཇལ་grain measure
འབྲུ་འཐག་པ་grind grain
འབྲུ་ཡི་མར་grain oil
འབྲུ་རྒོད་wild grain
འབྲུ་ལ་སྒང་place in tibet
འབྲུ་ལས་digging
འབྲུ་སྒྲོག་མ་ant
འབྲུ་སྨིན་པ་ripe corn
འབྲུག་གཡས་agitation
འབྲུག་ལྡིར་it thunders
འབྲུག་ཤིང་a plant
འབྲུག་སྒྲ་thundering
འབྲུམ་ནག་smallpox
འབྲུམ་ཕོ་ལྷ་district in gtsang
འབྲུའི་ཁལ་load of grain
འབྲེ་place in tibet
འབྲེང་པ་leather strap
འབྲེལ་ཐོགས་connection
འབྲེལ་བ་ཉེ་པོ་intimate
འབྲེལ་བ་ཡོད་པ་relevant
འབྲེལ་མཐུད་relay
འབྲེལ་ཚབས་ཅན་exigent
འབྲེལ་འདྲིས་intercourse
འབྲོག་ཁག་tribe
འབྲོག་ཁུལ་pastoral area
འབྲོག་པ་nomad
འབྲོག་མི་herdsman
འབྲོག་ལྷས་fold for cattle
འབྲོག་ས་pastoral area
འབྲོག་སྣམ་coarse blanket
འབྲོང་wild yak
འབྲོང་ཕྲུག་yak calf
འབྲོང་འབྲི་wild yak cow
འབྲོས་པའི་གནས་place of refuge
འབྲོས་ས་place of refuge
འཚག་སེ་sieve
འཚང་ཀ་རྒྱག་པ་squeeze
འཚང་གུང་nunnery in lhasa
འཚངས་ཀ་crowd rush
འཚངས་པ་stuff
འཚངས་ཚོགས་jam
འཚབས་འཚབས་perplexed
འཚམས་པོ་consistent
འཚམས་པོ་བཟོ་བ་adapt
འཚར་ལོངས་growth
འཚར་ལོངས་ཡོང་to grow up
འཚལ་པར་དོན་according to
འཚལ་མ་ནར་མ་continually eating
འཚིག་to get burned
འཚིག་པ་spite
འཚིག་པ་ཟ་བ་infuriate
འཚིག་རོ་ash
འཚིགས་ཟིན་པ་burnt
འཚུབ་restless
འཚུབ་པོ་naughty
འཚུབ་བེ་བ་fidgety
འཚུབ་མ་storm
འཚུབ་ཟིང་བ་completely restless
འཚུབས་པ་tempestuous storm
འཚུམ་པ་protuberant belly
འཚུར་ནག་place in tibet
འཚེ་བ་དག་distress
འཚེ་བར་སེམས་harmful mind
འཚེད་པའི་གནས་kitchen
འཚེད་བྱེད་མ་cook
འཚེམ་ཁབ་needle
འཚེམ་གཟེར་staple
འཚེམ་པོའི་sewing
འཚེམ་བུ་stitch
འཚེམ་སྐུད་thread for sewing
འཚེམ་སྲུབ་seam
འཚེར་རྩུབ་bad omen
འཚོ་གཞེས་prosper
འཚོ་བ་བྱ་འཚོལ་seeking sustenance
འཚོ་བ་མ་woman that nourishes
འཚོ་བ་སྐྱེལ་བ་live
འཚོ་བའི་ཚད་duration of life
འཚོ་བྱེད་པ་physician
འཚོ་བྱེད་མ་a goddess
འཚོ་ལས་occupation
འཚོད་སྣུམ་oil for frying food
འཚོལ་བཞིན་པ་searching
འཚོལ་མཁན་detective
འཛད་spending
འཛམ་གླིང་གི་terrestrial
འཛམ་གླིང་གྱི་earthly
འཛིགས་shaggy
འཛིངས་ཐེབས་པ་complicated
འཛིངས་དཀྲུགས་disarray
འཛིངས་འཁྲུགས་disorder
འཛིན་ཁང་classroom
འཛིན་ཁོངས་ownership
འཛིན་གྲོགས་classmate
འཛིན་ཆས་furniture
འཛིན་པ་ཆེ་བ་auspicious time
འཛིན་པའི་བློ་idea
འཛིན་པའི་སེམས་subject
འཛིན་པར་accept
འཛིན་བཟུང་arrest
འཛིན་བྱེད་པ་to get attached
འཛིན་མཁན་apprehender
འཛིན་མི་བྱེད་not to get attached
འཛིན་ཡས་a great number
འཛིན་རྟོག་grasping thoughts
འཛིན་ཤོག་coupon
འཛིན་སྐྱོང་པ་administrator
འཛིན་སྟངས་དམ་tight grip
འཛུགས་ལས་plantation
འཛུགས་སྐྲུན་establishment
འཛུམ་smile
འཛུམ་ཁ་smiling mouth
འཛུམ་དང་ལྡན་smiling
འཛུམ་དམུལ་བ་smile
འཛུམ་བག་ཅན་sweetly smiling
འཛུམ་བྱེད་པ་smile
འཛུལ་to enter
འཛུལ་ས་entrance
འཛེག་པར་བྱེད་climbs up
འཛེང་མོ་conical
འཛེམ་སྤང་abstention
འཛེར་པོ་hoarse
འཛེར་པོ་བཟོ་བ་defile
འཛོམས་མཚམས་junction
འཛོམས་མེད་absence
འར་ཅན་angry
འར་པ་a lot
འར་པོ་angry
འུ་ཐུག་ག་ཆད་པ་giving up in despair
འུ་བུ་we
འུ་བུ་ཅག་we
འུ་ཟི་kind of tea
འུ་ཡུག་place in gtsang
འུ་རུ་རུ་whizzing sound
འུག་གུ་ཆུང་little owl
འུག་པ་owl
འུག་པ་ལུང་པ་celebrated rnying ma
འུག་ཕྲུག་owlet
འུག་མིག་albino
འུག་རྒན་great horned owl
འུད་ཤོབ་bragging
འུད་ཤོབ་ཤོད་to brag
འུར་ཅོ་loud noise
འུར་ཅོས་loud noise
འུར་ཆེ་many thanks
འུར་ཏིང་brass basin
འུར་པ་འཐབ་པ་scuffle
འུར་རྒྱབ་པ་make a noise
འོ་termination particle
འོ་གཏོང་བ་kiss the mouth
འོ་ཅག་we
འོ་ཇ་tea with milk
འོ་ཐུག་ཁོལ་མ་boiling gruel
འོ་དོང་wind pipe
འོ་ཕྲན་place in tibet
འོ་བརྒྱལ་བ་be fatigued
འོ་བྱམས་པ་be loving
འོ་བྱེད་པ་kiss
འོ་མ་milk
འོ་མ་ཅན་milky
འོ་མ་དཀར་པོ་medicinal root
འོ་མ་དཀྲོགས་པ་churn milk
འོ་མ་བཞོ་བ་milk
འོ་མ་བོ་བས་milk bubbled over
འོ་མ་འཆིང་cow
འོ་མ་འཇོ་བ་to milk
འོ་མ་འཕེལ་cow
འོ་མ་འཚིར་བ་milk
འོ་མ་འཛག་པ་milk trickles down
འོ་མ་རུལ་སོང་milk has gone bad
འོ་མ་རྒྱབ་པ་pour or mix milk
འོ་མ་ཤིང་milk fruit tree
འོ་མ་སྙོལ་བ་let milk curdle
འོ་མ་སྲུབ་པ་churn milk
འོ་ཟན་milk pap
འོ་ཟོ་milk bucket
འོ་འགྲིག་ག་alright
འོ་འཕེལ་cow
འོ་འཛིན་ཅན་མ་women in general
འོ་འོ་goose
འོ་ཡོ་puppy
འོ་རྒྱབ་པ་kiss
འོ་ལགས་སོ་oh very well
འོ་སེ་mulberry
འོ་སྐོལ་we
འོ་སྣོལ་བ་kiss each other
འོ་སྤི་cream
འོ་སྲི་cream
འོག་གནོན་sag
འོག་གི་ལམ་kind of tree
འོག་ཏུ་མནན་པ་press down
འོག་ཏུ་འཁོད་པ་placed under
འོག་ཏུ་འཇུག་པ་put underneath
འོག་ཏུ་རྒྱུ་thief
འོག་ཏུ་ལྷུང་fallen down
འོག་ཐོག་downstairs
འོག་ནས་འོངས་come from below
འོག་ཕྱོགས་nadir
འོག་མེད་castrated
འོག་ཞོལ་མེད་པ་without beard
འོག་འཇུག་པ་put underneath
འོག་འཛུགས་opening
འོག་རྔུ་place in khams
འོག་རྟ་racehorse
འོག་རྡོ་anvil
འོག་སོ་lower teeth
འོང་བའི་ལམ་དུ་being on the way
འོང་སྐོར་a tibetan festival
འོད་ཀྱི་དྲྭ་བ་net of light
འོད་ཀྱི་ཡི་གེ་letters of light
འོད་ཀྱི་སྒོ་ང་egg of light
འོད་ཀྱི་སྡེ་domestic fowl
འོད་ཁང་lantern
འོད་ཁྱུགས་shimmering light
འོད་གཙང་sun
འོད་གསལ་ལྷ་type of lha
འོད་ཆེན་glare
འོད་ཆེམ་shimmering light
འོད་དཀར་པོ་white light
འོད་དམར་པོ་red light
འོད་དུ་སྦྱང་purify into light
འོད་ཕུང་light body
འོད་ཕྲོ་a sugata
འོད་བཀྱེ་sent forth rays
འོད་བཀྱེ་བ་spread forth light
འོད་མ་ཚལ་bamboo grove
འོད་མཐིང་ཁ་blue light
འོད་མའི་དཀྲིས་piper nigrum
འོད་མེད་without brightness
འོད་མེད་མཁན་without brightness
འོད་ཞགས་bright
འོད་ཞུགས་sun
འོད་ཟེར་གཟུགས་epithet of the sun
འོད་ཟེར་ལྡན་sun
འོད་འཐབས་པ་such bright light
འོད་འདུས་པས་when light gathers
འོད་འཕྲོས་light spreads
འོད་འཚེར་twinkling
འོད་ལྗང་green light
འོད་ཤར་བ་shining light
འོད་སེར་པོ་yellow light
འོད་སྟོང་འབར་to burn brilliantly
འོད་སྣང་ཁ་དོག་color of light
འོད་སྣང་བ་sun
འོད་སྤྲོ་light
འོད་སྤྲོ་བ་emit light
འོན་པ་པ་deaf man
འོན་པ་པོ་deaf man
འོན་པ་མོ་deaf woman
འོན་པོ་deaf man
འོབས་དོང་trench
འོབས་ཕྱོགས་fire pit quarter
འོམ་བུ་གླ་སྒང་early yarlung palace
འོར་ཆེ་many thanks
འོལ་ཁ་district in lokha
འོལ་གསལ་vague
འོལ་ཆུན་meadows
འོལ་དགའ་district in lokha
འོལ་པ་kite
འོས་suitable
འོས་ཁོངས་among the candidates
འོས་པ་suitable
འོས་པ་ཡིན་should be
འོས་མི་candidate
འོས་མིན་aptitude
འོས་འགན་duty
འོས་འདེམས་election
འོས་འདེམས་ཀྱི་voting
འོས་ཤོག་ballot
ཡ་ཀོབ་བེ་ལ་iacobella
ཡ་ཁ་upper teeth
ཡ་གངས་large numeral
ཡ་གཉིས་pair
ཡ་གདུང་mental suffering
ཡ་གི་ཚུར་up here
ཡ་གིར་up there
ཡ་ང་སྙིང་རྗེ་brutal
ཡ་ངའི་གེགས་terrible danger
ཡ་ཐོག་ceiling
ཡ་ཐོག་རིང་མོ་long decline
ཡ་བཏགས་subjoined ya
ཡ་བཞེར་tribe in tibet
ཡ་བྲལ་separated
ཡ་མ་བར་ལ་vain
ཡ་མགལ་ལེ་upper row of teeth
ཡ་མཆུ་upper lip
ཡ་མད་great number
ཡ་མཚན་ཅན་གྱི་heretical teachings
ཡ་མེད་ཚ་པོ་desperate
ཡ་ཙེ་duck
ཡ་ཚད་opposite of ma tshad
ཡ་ཟི་invincible sword
ཡ་ཟིགས་village in tibet
ཡ་ཟུ་kind of chinese tea
ཡ་འཁོད་upper stone
ཡ་འགྲན་འོས་མི་rival candidate
ཡ་འཆང་place in tibet
ཡ་ཡུད་རྩེ་བ་gamble
ཡ་ཡོ་རྒྱུ་leaning towards
ཡ་རབ་ཅན་noble
ཡ་རབ་བྱས་ཏེ་politely
ཡ་རབས་ཅན་courteous
ཡ་ལ་ལ་flashes and flashes
ཡ་ཤ་esteem
ཡ་ཤིན་ཏུ་མཚན་very surprised
ཡ་སོ་upper teeth
ཡ་སོ་ཡོད་པ་upper teeth
ཡག་ཉེས་quality
ཡག་ཏུ་ཕྱིན་པ་ameliorate
ཡག་པོ་good
ཡག་པོ་བྱས་ཏེ་properly
ཡག་པོ་མ་ཡིན་པ་crude
ཡག་བ་superior
ཡག་ཙམ་a little better
ཡག་ཡག་a great number
ཡང་ང་དཀར་པོ་a bonpo sect
ཡང་ངེ་གཡེང་ངེ་colloquial speech
ཡང་ཆུང་still smaller
ཡང་དག་གནས་stability
ཡང་དག་གསུང་pronouncement
ཡང་དག་པའི་ངག་correct speech
ཡང་དག་པར་བདེན་really authentic
ཡང་དག་པར་བསྡམ་restrained
ཡང་དག་པར་རྒྱུ་really moving one
ཡང་དག་པར་ལྟ་བ་search into minutely
ཡང་དག་བསྙེན་close proximity
ཡང་དག་མཇལ་full interview
ཡང་དག་འཇོག་complete resting
ཡང་དག་འཇོག་པ་meditation
ཡང་དག་འབྱུང་completely arise
ཡང་དག་རྫོགས་complete perfect
ཡང་དག་ལྟ་correct view
ཡང་དག་སྟོན་པ་to teach perfectly
ཡང་དག་སྡོམ་perfect abstinence
ཡང་དག་ཧེ་རུ་thugs
ཡང་དང་ཡང་again and again
ཡང་དང་ཡང་དུ་again and again
ཡང་དུ་again and again
ཡང་པོ་བཟོ་བ་lighten
ཡང་བྲན་second order serfs
ཡང་མེས་མོ་great grandmother
ཡང་མོ་light
ཡང་མོར་lightly
ཡང་ཞུ་crest
ཡང་ཞུན་refined
ཡང་འཁོབ་distant border land
ཡང་འཇུག་secondary suffix
ཡང་ཡང་again and again
ཡང་ཡང་བལྟ་repeatedly look into
ཡང་ཡང་འཁོར་བ་haunt
ཡང་ཡང་འགྲོ་བ་frequent
ཡང་རྡུལ་hydrogen
ཡང་ལ་candle
ཡང་ལྕི་ལྟ་བ་examine the weight
ཡང་ལྗིད་weight
ཡང་ལྗིད་གཞལ་བ་weigh
ཡང་ལྗིད་ལྟ་བ་weigh
ཡང་སྐྱར་ཡང་again and again
ཡང་སྐྱར་སྐྱེས་grown or born again
ཡང་སྙིང་བཅུད་quintessence
ཡངས་ཁྱད་width
ཡངས་པ་རྒྱས་པ་extensive
ཡངས་པའི་ཤུན་alstonia tree
ཡངས་ལྡན་large and spacious
ཡད་ཡུད་confused movement
ཡན་དུ་ཆུག་wander free
ཡན་དུ་འཇུག་པ་go ownerless
ཡན་པར་བཏང་let loose
ཡན་མར་ཙམ་པ་about
ཡན་ལག་གཅོད་པ་mutilate
ཡན་ལག་གི་རླུང་secondary winds
ཡན་ལག་དྲུག་six branches
ཡན་ལག་དྲུག་ཅུ་sixty branches
ཡན་ལག་དྲུག་པ་bird
ཡན་ལག་བརྒྱད་war chariot
ཡན་ལག་མཆོག་head cinnamon
ཡན་ལག་མེད་པ་epithet of kamadeva
ཡན་ལག་མེད་པའི་anangavajra
ཡན་ལག་སྐུམ་པ་draw in the limbs
ཡན་སྟབས་remain in it freely
ཡབ་གཅིག་my only father
ཡབ་དམ་པ་deceased father
ཡབ་ཕ་ཇོ་lord father
ཡབ་བཀའ་father inspiration
ཡབ་མེས་paternal ancestors
ཡབ་ཡུམ་parents
ཡམ་པ་ལ་a great river
ཡམ་ཡོམ་བྱེད་པ་totter
ཡམས་ནད་epidemic
ཡར་ཀྱག་པ་lift
ཡར་ཀླུངས་valley in lhokha
ཡར་ངོ་waxing moon period
ཡར་ངོའི་ཟླ་བ་waxing moon
ཡར་ཆབ་upper waters
ཡར་ཐོན་progressive
ཡར་ཐོན་ཅན་progressive
ཡར་ཐོན་པ་civilized
ཡར་ན་either
ཡར་ནས་མར་ལ་from top to bottom
ཡར་བཏེག་པ་elevate
ཡར་བསྐྱོད་ascent
ཡར་མོ་ཐང་a district in amdo
ཡར་མོ་སྣ་བཞི་a district in lhokha
ཡར་ཙམ་just a little above
ཡར་འཁྱམས་dissipated
ཡར་འགྲོ་to walk up
ཡར་འགྲོ་བ་go up
ཡར་འདེགས་པ་raise up raise
ཡར་འདེད་པ་drive upwards
ཡར་འཕར་བ་ascend forward
ཡར་འཕེལ་བ་increase
ཡར་འབྲོག་yamdok pastures
ཡར་ཡོང་བ་come in
ཡར་རྒྱས་གཏོང་to develop
ཡར་ལ་ཁྱེར་ཤོག་fetch it up
ཡར་ལག་གཟིགས་པ་look upwards
ཡར་ལང་rising
ཡར་ལྟ་looked up
ཡར་ལྟ་བ་look upwards
ཡར་ལྟ་མར་ལྟ་looked up and down
ཡར་སེལ་exorcism upwards
ཡར་སྐྱེད་growth
ཡར་སྒྲུག་པ་pickup
ཡལ་ག་branch
ཡལ་ག་གེལ་tree
ཡལ་ག་ཅན་a notable tree
ཡལ་ག་ཆུང་ཆུང་shoot
ཡལ་ག་ཕྲ་མོ་twig
ཡལ་ག་བཞིན་like branches
ཡལ་ག་སྐྱུར་walnut tree
ཡལ་གའི་རུས་པ་bones of the limbs
ཡལ་བར་འཇོག་neglect
ཡལ་ཟིན་པ་departed
ཡལ་འགྲོ་dissolve by itself
ཡལ་འཕྱོང་large numeral
ཡལ་ཡལ་ཆེན་པ་a million
ཡས་up
ཡས་ནས་from above
ཡས་ཕྱིན་estate in tibet
ཡས་བགྲང་counting up
ཡས་བབས་descending manner
ཡས་འབབ་པ་come down from above
ཡས་སྟགས་ritual objects
ཡི་ག་འགག་appetite is los
ཡི་གཤོར་lost my mind
ཡི་གེ་གཏོང་གླ་postage
ཡི་གེ་གཏོང་བ་post
ཡི་གེ་ཉུང་དུ་in few letters
ཡི་གེ་བཀོད་པ་calligraphy
ཡི་གེ་བསྲིངས་dispatched a letter
ཡི་གེ་མེད་without letter
ཡི་གེ་ཤིང་writing board
ཡི་གེ་ཤེས་པ་learn to read
ཡི་གེ་སྐུར་ས་address
ཡི་གེ་སྤྲིང་བ་send of a letter
ཡི་གེ་སླེབ་a letter arrives
ཡི་གེའི་ཚོགས་group of letters
ཡི་གེའི་ལན་written answer
ཡི་གེའི་ལྷ་letter deity
ཡི་གེའི་ཤུབས་envelope
ཡི་གེར་འགོད་པ་to write down
ཡི་གེར་འདྲི་write
ཡི་གེར་འབྲི་བ་put into writing
ཡི་དམ་བཅའ་བ་lodge a vow
ཡི་དམ་འཆའ་བ་promise by oath
ཡི་དྭགས་ས་བོན་seed of the pretas
ཡི་བཏགས་yi dwags for bon
ཡི་མུག་ག་ཆད་པ་giving up in despair
ཡི་ཙི་soap
ཡི་རྩི་soap
ཡི་རྩི་ལྡན་པ་soapy
ཡི་ཤུབས་envelope
ཡིག་གཟུགས་script
ཡིག་གེ་letters
ཡིག་གྲངས་line
ཡིག་གྲྭ་writing school
ཡིག་ཆའི་མ་དཔེ་manuscript
ཡིག་ཆེན་capital
ཡིག་བསྐུར་བ་correspond
ཡིག་འབྲུ་གཅིག་single letter
ཡིག་འབྲེ་letter
ཡིག་འབྲེལ་correspondence
ཡིག་རིགས་various arts
ཡིག་ལན་answer to a petition
ཡིག་ཤོག་letter paper
ཡིག་སྐོགས་envelope
ཡིག་སྒྱུར་translation
ཡིག་སྣོད་file
ཡིང་battalion
ཡིང་ཀྲང་battalion commander
ཡིང་ཐའོ་cherry
ཡིངས་coarse
ཡིད་ཀྱི་ཁ་individual mind
ཡིད་ཀྱི་ཡུལ་content of mind
ཡིད་ཀྱི་ཤེས་པ་mental consciousness
ཡིད་ཀྱིས་imaginary
ཡིད་ཀྱིས་གཟུང་holding in mind
ཡིད་གཏོད་པ་to rely upon
ཡིད་གཞུང་ཅན་deluded
ཡིད་གཞུང་ལྡན་deluded
ཡིད་ངོ་idea
ཡིད་ཆགས་པ་infatuated with
ཡིད་ཆེས་གཙང་མ་confident
ཡིད་ཆེས་མེད་པ་faithless
ཡིད་ཆེས་ཡོད་པ་doubtless
ཡིད་ཐང་ཆད་པ་pessimistic
ཡིད་དགའ་བ་glad in heart
ཡིད་དང་བྲལ་beyond mind
ཡིད་དང་འཐད་པ་favorable
ཡིད་དངངས་fear for
ཡིད་དཔྱད་metal analysis
ཡིད་དམ་ལེན་པ་vow
ཡིད་དོགས་ཤར་བ་doubt
ཡིད་ཕྲོགས་captivate the mind
ཡིད་བཞིན་མ་མ་great ocean
ཡིད་བརྟན་ཁེལ་confident
ཡིད་བསད་པ་sad in mind
ཡིད་བྱིང་བ་slothfulness
ཡིད་མ་ཆེས་པ་disbelieve
ཡིད་མདོག་ཁ་pretend
ཡིད་མདོག་ཁ་པོ་plausible
ཡིད་མི་འབྱུང་no desire for
ཡིད་མུག་gloom
ཡིད་ཙམ་slightly
ཡིད་འཁྲུགས་པ་mental corruption
ཡིད་འགག་want of appetite
ཡིད་འགྱུ་བ་discursive thoughts
ཡིད་འཐད་are attracted to
ཡིད་འཕྱོ་a great number
ཡིད་འཕྲོག་པོ་attractive
ཡིད་འཕྲོག་མཁན་glamour
ཡིད་འཛིན་mental apprehension
ཡིད་ཡུལ་house
ཡིད་རངས་པ་joy
ཡིད་རིང་have forbearance
ཡིད་རྒྱུགས་examination
ཡིད་རྩ་ཁོལ་depressed
ཡིད་ལ་གཅགས་make sad
ཡིད་ལ་ངེས་པ་retained in mind
ཡིད་ལ་ཉལ་mental dormancy
ཡིད་ལ་བཅུགས་པ་firm in the mind
ཡིད་ལ་བརྗོད་པ་debate in the mind
ཡིད་ལ་བསམ་mental thought
ཡིད་ལ་བསམ་པ་mental thought
ཡིད་ལ་བྱས་contemplated
ཡིད་ལ་མ་བྱས་inconceivable
ཡིད་ལུས་mental body
ཡིད་ལོག་aversion
ཡིད་ལོག་པ་be tired or weary
ཡིད་ལྡན་མ་a yaksini princess
ཡིད་སྐྱོ་པོ་gloomy
ཡིད་སྤྱོད་correct assumption
ཡིན་ཀྱང་albeit
ཡིན་ཀྱི་མ་རེད་probably not
ཡིན་ཀྱི་རེད་probably
ཡིན་ཁུལ་pretend to be
ཡིན་ཁྱབ་pervasion of being
ཡིན་གྱུར་what something is
ཡིན་དགོས་བྱུང་of course
ཡིན་དུ་ཆུག་is indeed
ཡིན་ནམ་what
ཡིན་ནོ་yes
ཡིན་པ་ཐག་ཆོད་must surely be
ཡིན་པ་ཞེས་is spoken of
ཡིན་པ་འདྲ་it seems
ཡིན་པ་ཡིན་being this or that
ཡིན་པའི་ཕྱིར་in fact they are
ཡིན་པས་སོ་because is
ཡིན་ཙ་ན་since
ཡིན་ཙི་atom
ཡིན་ཚད་proper
ཡིན་ཚུལ་way of being
ཡིན་ཚོད་measure of being
ཡིན་འགྲོ་probably
ཡིན་ཡིན་པ་obvious
ཡིན་ལས་ཆེ་must surely be
ཡིན་ཤག་བྱེད་པ་assume
ཡིབ་ནས་བལྟ་བ་peep
ཡིབ་ཟིན་པ་hid
ཡིབས་to hide
ཡིབས་སུ་situation
ཡིའུ་ཕིའོ་post stamp
ཡུ་ཇ་chinese tea
ཡུ་བ་ལྡན་one with a stick
ཡུ་བྱེད་པ་culminate
ཡུ་མ་weeds
ཡུ་མར་ཇ་buttered tea
ཡུ་མེད་without a handle
ཡུག་གཅིག་ཏུ་in one piece
ཡུག་པ་leg with the foot
ཡུགས་ཕོ་widower
ཡུགས་མོ་widow
ཡུགས་ས་མ་widow
ཡུགས་ས་མོ་widow
ཡུང་མ་turnip
ཡུངས་ནག་black mustard
ཡུངས་མར་oil of mustard
ཡུངས་འབྲ་mustard seed
ཡུད་དུ་in a moment
ཡུད་ཙམ་དུའང་even for an instant
ཡུད་ཙམ་ན་for a brief instant
ཡུད་ཙམ་བཞུགས་remain for awhile
ཡུད་ཙམ་རིང་momentary
ཡུད་ཙམ་ལྟ་བ་glance
ཡུད་རེ་for a moment
ཡུན་ཐུང་short periods
ཡུན་ཐུང་ངུ་short periods
ཡུན་དུ་for a long time
ཡུན་དུ་འགྲོགས་stay forever
ཡུན་ཙམ་little while
ཡུན་རིང་གི་ཁ་gradually
ཡུན་རིང་དུ་for a long time
ཡུན་རིང་པོ་ནས་for a long time
ཡུན་རིང་པོར་during a long time
ཡུན་རིང་བར་for a long time
ཡུན་རིངས་ཤོས་the longest time
ཡུན་རེ་for a moment
ཡུམ་དཔེ་original of a book
ཡུམ་བཀའ་mother inspiration
ཡུམ་མཆོག་supreme consort
ཡུམ་མདོ་shes rab snying po
ཡུའུ་ཐའོ་taro
ཡུར་པ་to smooth
ཡུར་པོ་canal
ཡུར་ཕྲན་small channel
ཡུར་མ་རྒྱག་པ་hoe
ཡུལ་གཅིག་ཏུ་in a certain place
ཡུལ་གཞིས་estate
ཡུལ་གྱི་ལྟ་བ་objective view
ཡུལ་གྲོང་district
ཡུལ་གླིང་island
ཡུལ་ཆུང་བ་small object
ཡུལ་ཆོས་entities
ཡུལ་ཐང་local price
ཡུལ་དང་དུས་direction and time
ཡུལ་དཔོན་businessman
ཡུལ་དབང་བྱེད་senses
ཡུལ་དེ་གའི་native
ཡུལ་ཕུད་an exile
ཡུལ་བློན་civil officer
ཡུལ་མི་མེད་པ་not objectless
ཡུལ་མི་རྟོག་not to judge objects
ཡུལ་འདི་this place
ཡུལ་འབྱེད་widen the gap
ཡུལ་འཛིན་subject
ཡུལ་རྐྱེན་support
ཡུལ་རྟོག་to judge objects
ཡུལ་རྣམ་object aspect
ཡུལ་རྣམས་all phenomena
ཡུལ་ལ་ཁྱབ་པ་encompass objects
ཡུལ་ལ་ལར་in some places
ཡུལ་ལག་tongue of land
ཡུལ་ལས་འདས་པ་transcend the idea
ཡུལ་སྐད་dialect
ཡུལ་སྟེང་ནས་objectively
ཡུལ་སྟོང་lonely
ཡུལ་སྣང་apparent objects
ཡུལ་སྤོ་བ་migrate
ཡེ་གདོད་མ་primordial start
ཡེ་ཉིད་original state
ཡེ་ཐིག་wisdom line
ཡེ་དབང་མཐུ་primordial power
ཡེ་དོན་primordial nature
ཡེ་ནས་གནས་atemporally present
ཡེ་ནས་བཟང་པོ་altogether good
ཡེ་ནས་ལྷ་primordial divinity
ཡེ་མ་indeed
ཡེ་མ་བྱེད་པ་does not at all do
ཡེ་མ་སོང་was not at all good
ཡེ་མི་never
ཡེ་ཙེ་སྔོན་མོ་blue hawk
ཡེ་འབྱམས་emptiness
ཡེ་རིག་primordial awareness
ཡེ་ཤུའི་དཔེ་ཆ་bible
ཡེ་ཤེས་ཀྱི་ལམ་path of wisdom
ཡེ་ཤེས་ཆེན་པོ་great wisdom
ཡེ་ཤེས་དང་ལས་wisdom and action
ཡེ་ཤེས་མཚོན་ཆ་weapon of wisdom
ཡེ་ཤེས་ཚོགས་collection of wisdom
ཡེ་ཤེས་འཆོལ་བ་crazy wisdom
ཡེ་ཤེས་ཡངས་པ་extensive wisdom
ཡེ་ཤེས་རྒྱལ་བ་great bon lama
ཡེ་ཤེས་ལམ་path of wisdom
ཡེ་ཤེས་ལྷ་wisdom deities
ཡེ་ཤེས་སྣང་བ་light of wisdom
ཡེ་ཤོར་basic straying
ཡེ་སྲས་primordial prince
ཡེ་ཧམ་ཆི་དམ་bezoar
ཡེང་ཆེད་mental agitators
ཡེངས་distraction
ཡེངས་སྟབས་maintain it openly
ཡེར་scattered
ཡེར་ཁེན་yarkand
ཡེར་འཕྲོས་པ་to abruptly arise
ཡེར་ཤོང་place in khams
ཡེས་མས་ancestors
ཡོ་གུར་a country
ཡོ་ཆས་ear
ཡོ་ཏན་scarf of assent
ཡོ་བ་crooked
ཡོ་བཅོས་to restore harmony
ཡོ་བྱང་rituals
ཡོ་བྱད་ལྡན་person of property
ཡོ་འབོག་ཤིང་elm
ཡོ་ལངས་ཁྲོད་clutter
ཡོག་བུར་lower bolt
ཡོག་ཤིང་spindle
ཡོང་ཆོག་you may come
ཡོང་དེབ་account book
ཡོང་མཁན་comer
ཡོང་འབབས་proceeds
ཡོང་རྒྱུ་forthcoming
ཡོང་སྒོ་income
ཡོང་སྡུད་པ་collector of revenue
ཡོངས་ཀྱི་ལམ་the universal way
ཡོངས་ཀྱིས་མེད་totally beyond
ཡོངས་གང་སྣོད་full vessel
ཡོངས་ཉམས་པ་abandon
ཡོངས་དཀྲིས་circumference
ཡོངས་བརྗོད་express
ཡོངས་བརྗོད་པ་express
ཡོངས་བསལ་utterly dispel
ཡོངས་བསྐོར་full circle
ཡོངས་བསྐྱོད་cart
ཡོངས་བསྔོ་dedicate
ཡོངས་བསྔོས་dedicate
ཡོངས་བྱང་ལམ་path of utter purity
ཡོངས་བྲལ་བ་completely overcome
ཡོངས་མི་འབྱུང་not transcend
ཡོངས་འགྲོ་darkness
ཡོངས་འདས་པ་to utterly transcend
ཡོངས་འདུ་divine tree
ཡོངས་འདུད་tree
ཡོངས་འཕོས་utterly transferred
ཡོངས་འབྲེལ་བ་combine with
ཡོངས་རྫོགས་སུ་altogether
ཡོངས་ལ་throughout
ཡོངས་ཤེས་cognize
ཡོངས་ཤེས་ནས་having cognized
ཡོངས་ཤེས་པ་cognize
ཡོངས་སུ་ཁྱབ་completely pervading
ཡོངས་སུ་དབང་lion
ཡོངས་སུ་བསྣུན་thoroughly pricked
ཡོངས་སུ་བྲལ་བ་utterly transcend
ཡོངས་སུ་མགུ་བ་be very joyful
ཡོངས་སུ་འགེམས་enlightening
ཡོངས་སུ་འདས་totally beyond
ཡོངས་སུ་འདྲེན་guide
ཡོངས་སུ་རྒོལ་dispute hotly
ཡོངས་སུ་སྨིན་quite ripe
ཡོངས་སྐྱོབ་copper
ཡོངས་སྤོང་ཉིད་thorough abandonment
ཡོད་ཀྱི་མ་རེད་probably not
ཡོད་ཀྱི་རེད་probably
ཡོད་ཅེས་པ་thus existing
ཡོད་ཐང་གང་པོ་all that exists
ཡོད་ཐང་པ་there seems to be
ཡོད་པ་ཉིད་existence
ཡོད་པ་ཐག་ཆོད་there must surely be
ཡོད་པ་མ་འདྲ་probably not
ཡོད་པ་འདྲ་it seems
ཡོད་པ་རེད་existential verb
ཡོད་པ་སྤངས་པ་abandon existence
ཡོད་པའི་གནས་place one is in
ཡོད་བཞིན་དུ་while present
ཡོད་མི་སྲིད་there does not exist
ཡོད་འགྲོ་probably
ཡོད་འདུག་པ་was
ཡོད་ལུགས་way of existence
ཡོད་སྒྲུབ་exists proof
ཡོན་གནས་shrine of worship
ཡོན་ཏན་བཞི་four qualities
ཡོན་ཏན་མེད་not talented
ཡོན་ཏན་ཚད་མེད་infinite qualities
ཡོན་ཏན་རྫོགས་perfected qualified
ཡོན་ཏན་ལྷག་མ་special qualities
ཡོན་དུ་འབུལ་བ་present as a gift
ཡོན་པོ་deceiver
ཡོན་ཙི་ཏན་atom bomb
ཡོན་འབུལ་འོས་worth of a present
ཡོབ་གོང་instep of the foot
ཡོབ་མཐིལ་footing
ཡོབ་ཡོབ་foot
ཡོབ་རྡུང་spurring on
ཡོམ་པོ་unsteady
ཡོམ་ཡོམ་ཅན་wavy
ཡོར་མོ་salmon
ཡོར་ཤིང་species of tamarisk
ཡོལ་place in tibet
ཡོལ་བ་གཅོད་པ་close the curtain
ཡོལ་བ་ཐེན་པ་draw a curtain
ཡོལ་བ་འཐེན་པ་draw a curtain
ཡོལ་མ་cup
ར་གན་brass
ར་གུར་enclosure with rail
ར་ཉ་ཛ་ཀ་gourd
ར་ཉེ་lead
ར་ཏི་གུབ་ཏ་an indian sage
ར་ཐུལ་dress of goat skin
ར་ཐེར་serge or shawl
ར་དྷ་province near bengal
ར་ཕྲུག་kid goatling
ར་བ་ཏི་a kashmirian monk
ར་བ་བཞི་four seasons
ར་བ་རྒྱབ་པ་barricade
ར་བ་ཤིང་kind of tree
ར་བ་སྐྱེས་aromatic plant
ར་བ་སྟོད་a small monastery
ར་བཏགས་subjoined ra
ར་བཞོན་མ་milch goat
ར་བཟི་བཅུག་པ་intoxicate
ར་བཟི་བའི་drunken
ར་བཟི་བའི་མི་drunkard
ར་བས་སྐོར་བ་enclose with a fence
ར་མ་བཟི་བ་sober
ར་མགོ་superscribed ra
ར་མོ་ཤ་hornet
ར་ཛ་ཀ་tongue
ར་ཛོར་གྱི་ཤུལ་stain
ར་རོ་ཅན་drunk
ར་རྐྱལ་bag of goat skin
ར་རྒོད་wild goat
ར་རྩིགས་ཁང་པ་castle in tibet
ར་ལུག་sheep goats or sheep
ར་སྒོག་species of garlic
ར་སྒྲེང་ancient monastery
ར་སྡོང་weeping willow
ར་སྤུ་goat hair
ར་ཧུ་planet rahu
རག་ཐུམ་brass ladle
རག་དུག་poison of brass
རག་པ་མེད་not discerned
རག་མ་village in tibet
རག་མ་ལུས་པ་not dependent upon
རག་ཙེ་stone in fruits
རག་འགག་small brass plate
རག་རྡོ་mineral substance
རག་ལུས་པ་dependent on depend
རག་ས་recipient
རག་སྐུད་brass wire
རགས་པར་སྣང་བ་grossness
རགས་ཙམ་ཤེས་broadly determine
རགས་རིམ་rough outline
རགས་ལས་dependence upon
རགས་ལས་པ་ཡིན་depends upon
རང་ཁའི་ལས་ordinary actions
རང་ཁར་འདུག་as one naturally is
རང་ཁེ་selfish
རང་ག་naturally
རང་གཅེས་པ་egocentric
རང་གར་བཞག་remain artless
རང་གསང་acupuncture points
རང་གི་ཐོག་ཏུ་in the state itself
རང་གི་དངོས་པོ་own factuality
རང་གི་དབྱིངས་own realm
རང་གི་ནང་ནས་within oneself
རང་གི་མགུལ་ལ་suicide
རང་གི་མཐུ་natural power
རང་གི་མིན་པ་alien
རང་གི་མྱོང་personal experience
རང་གི་ཡོན་ཏན་own qualities
རང་གི་རྒྱ་སྲད་chinese rose
རང་གི་རྣམ་ཐར་autobiography
རང་གི་ལྟ་བ་own view
རང་གི་ཤེས་པ་noetic capacity
རང་གི་སྡེ་པ་our own schools
རང་གིར་བྱེད་independence
རང་གིས་ཆོག་is enough
རང་གིས་རང་ལ་one leads to another
རང་གྲུབ་བཙན་ས་natural barrier
རང་གྲོལ་self release
རང་ངོ་འཕྲོད་པ་recognized
རང་ངོ་རང་own nature
རང་ངོ་རང་ཐོག་directly
རང་ངོར་བལྟས་པ་look at oneself
རང་ངོར་རྣམ་དག་intrinsic purity
རང་ཆེ་རང་བཀུར་conceited
རང་ཉེས་own crime
རང་ཐག་གིས་grind in a mill
རང་ཐག་ཆོད་པ་to certainly gain
རང་ཐག་བདག་པོ་miller
རང་ཐང་artless
རང་ཐོག་in themselves
རང་དག་ལ་སོང་to dissolve
རང་དགའ་independence
རང་དགའ་པ་unmarried man
རང་དགའ་བ་ordinary
རང་དགའ་མ་housewife
རང་དགར་སྤྱོད་independence
རང་དངས་naturally unsullied
རང་དབང་ཐོབ་attained mastery
རང་དབང་མེད་དུ་involuntarily
རང་དེངས་vanish naturally
རང་དྭངས་naturally unsullied
རང་ནོག་inherent state
རང་ནོངས་ལབ་པ་confess
རང་ཕྱོགས་sectarianism
རང་བབ་གཤིས་natural state
རང་བབ་ཤེས་པ་natural mind
རང་བབས་ལ་in the flow
རང་བཞག་ཆེན་པོ་great natural state
རང་བཞིན་གསུམ་three natures
རང་བཞིན་གྱི་ordinary
རང་བཞིན་དག་པ་naturally pure
རང་བཞིན་དུ་naturally
རང་བཞིན་བཞག་in its natural state
རང་བཞིན་མཉམ་པ་nature of equality
རང་བཞིན་སྐུ་nature body
རང་བས་ངན་པ་worse than self
རང་བྱན་ཆུད་has mastered
རང་བྱན་ཚུད་པ་totally master
རང་བྱས་to progress simply
རང་བྱུང་ཁམས་nature
རང་བྱུང་བ་self arisen
རང་བྱུང་ཚང་པ་epithet of brahma
རང་བྱུང་ཤེལ་natural crystal
རང་བྱུས་self interest
རང་བྱེར་གྱུར་to open by itself
རང་མཇལ་ཐུབ་able to see
རང་མཐོང་ཅན་proud
རང་མདངས་འབར་བ་naturally blazing
རང་ཚོ་steady
རང་འཁྲིས་selfishness
རང་འགགས་stop by itself
རང་འཆིའོ་i will seek death
རང་འདོད་ཀྱིས་ad libitum
རང་འདོད་མེད་པ་selfless
རང་འབྱོར་personal endowments
རང་འབྲས་own effect
རང་རིག་མ་དག་impure rigpa
རང་རིགས་kinsman
རང་རེའི་our
རང་རྣམ་autobiography
རང་ལ་བསྡུས་gather in oneself
རང་ལ་རྫོགས་perfected in oneself
རང་ལས་ཐ་དད་different from self
རང་ཤེད་subjectivity
རང་ཤེལ་natural crystal
རང་ཤེས་པ་direct introduction
རང་ཤེས་སུ་by himself
རང་ས་ན་in their own right
རང་སར་དག་པ་naturally dissolve
རང་སོ་ཟིན་achieved
རང་སྐལ་personal share
རང་སྐྱེད་world
རང་སྐྱོང་ཁུལ་autonomous area
རང་སྐྱོན་fault
རང་སྒྲ་གྲགས་པ་naturally resounding
རང་སྟོང་emptiness of self
རང་སྟོབས་independent
རང་སྟོབས་ཀྱིས་by its own power
རང་སྣང་དག་sacred outlook
རང་སྤྱི་specific and general
རང་སྦྱོང་homework
རན་པོ་བཟོ་བ་adjust
རན་ཚད་enough
རན་འགྲིག་fitness
རན་འོས་validity
རབ་གང་very full
རབ་གནས་བྱེད་པ་consecrate
རབ་གྱུར་excellence
རབ་གྲགས་very renowned
རབ་ཏུ་གང་བ་very full
རབ་ཏུ་གཟིགས་behold carefully
རབ་ཏུ་གསར་པ་very fresh
རབ་ཏུ་གྲགས་པ་very renowned
རབ་ཏུ་ཆགས་པ་become a cleric
རབ་ཏུ་དགའ་ནས་rejoicing greatly
རབ་ཏུ་དང་བ་very pure
རབ་ཏུ་དུལ་བ་very disciplined
རབ་ཏུ་བགས་absolute prohibition
རབ་ཏུ་བརྐྱང་བ་quite stretched out
རབ་ཏུ་མང་པོ་very many
རབ་ཏུ་ཚ་བྱེད་husband
རབ་ཏུ་ཚེས་པ་completely dawned
རབ་ཏུ་འཇོམས་པ་quite subdued
རབ་ཏུ་རྣོ་བ་perky
རབ་ཏུ་ཤར་blossoming
རབ་ཏུ་སྐྱེས་བ་strongly arising
རབ་ཏུ་སྡོམ་lock the door well
རབ་ཏུ་སྤོང་thoroughly abandon
རབ་ཏུ་སྨྲ་སྟེ་speaking well
རབ་དཀར་very white
རབ་དཀར་སྙིང་bear
རབ་དགའ་very joyful
རབ་དགའི་ཡིད་very joyful mind
རབ་དམར་very red
རབ་ཕྱོགས་resort to
རབ་བཙལ་have looked
རབ་བརྟག་discrimination
རབ་བསྐྱེད་པ་analyze
རབ་བསྒྲགས་proclaimed
རབ་བསྒྲུབ་realize
རབ་བྱེད་chapter
རབ་འཇོམས་god of wind
རབ་འཇོམས་བྱེད་lord of death
རབ་འདས་utterly transcended
རབ་འཛག་urine
རབ་རིབ་དག་པ་get rid of dimness
རབ་རིབ་མེད་པ་free from darkness
རབ་རྟོགས་ནས་thinking well
རབ་སྐྱེད་father
རབས་པ་རྣམས་followers
རབས་སྡེ་genealogy
རམ་བཏེགས་accompanied in song
རམ་བུ་ཐེག་accompany in song
རའི་སྤུ་goat hair
རལ་ཀླུང་ganges river epithet
རལ་གྲི་པ་fighting man
རལ་གྲི་རྗེན་པ་naked sword
རལ་པ་གསིག་he shakes his mane
རལ་བ་lost
རལ་ལྕང་weeping willow tree
རལ་སོ་sword edge
རས་cotton
རས་ཀྱི་textile
རས་ཁེབས་sheet
རས་ཁྲ་chintz
རས་གུར་tent of cotton cloth
རས་གོས་cotton clothing
རས་ཆ་ཚོང་མཁན་draper
རས་ཆ་ཤུར་མ་corduroy
རས་ཆུང་name of an opera
རས་ཆུང་ཕུག་a small monastery
རས་ཐེར་drill
རས་དཀར་white cotton
རས་དན་དལ་sieve made of cloth
རས་བཅོས་བུ་calico
རས་བལ་གྱི་གོས་cotton cloth
རས་བལ་ཤིང་cotton plant
རས་བྲིས་painted cloth
རས་ཚལ་པ་piece of rag
རས་འབྲས་cotton fruit
རས་འཛར་tatter
རས་རྐྱང་cotton cloth
རས་ལྷམ་cloth shoes
རས་ལྷེ་kind of cotton cloth
རས་སུ་བོར་བ་neglects
རས་སྒྱེ་bag of cotton stuff
རས་སྦོམ་པ་strong cotton cloth
རི་ཀ་ཤ་flower
རི་ཁ་mountain pass
རི་ཁྲོད་དུ་in retreat
རི་གཉའ་mountain ridge
རི་གཤམ་foot of the mountain
རི་ངོགས་སུ་in the mountains
རི་དིལ་འགའ་some hills
རི་དྭགས་གསོད་wild dog
རི་དྭགས་ཆང་musk
རི་དྭགས་དགྲ་hunter
རི་དྭགས་པ་hunter
རི་དྭགས་མཚན་moon
རི་དྭགས་རྒྱག་to hunt
རི་དྭགས་རྩི་musk
རི་དྭགས་ལྟེ་བ་musk
རི་ཕག་wild boar
རི་ཕར་boar
རི་བོ་mountain
རི་བོ་དགའ་ལྡན་gelugpa school
རི་བོ་སྤོས་fragrant mountains
རི་བོང་rabbit
རི་བོང་མཚན་མ་moon
རི་བོང་འཛིན་moon
རི་བྱ་སྐྱེགས་grouse
རི་བྱིའི་ཁྱིམ་residence of agastya
རི་བྲག་rocky precipice
རི་བྲག་པ་herdsman
རི་བྲག་ལ་གནས་mouse
རི་མཐོ་high mountain
རི་མེའི་ལྷ་མོ་a goddess
རི་མོ་པ་painter
རི་མོ་ལ་འབྲི་draw
རི་མོ་ལྡན་marked with figures
རི་ཞིང་field on hill slope
རི་ཞུམ་wild or hill cat
རི་ཟེ་ridge
རི་འགེམས་thunderbolt
རི་འདབས་foot of the mountain
རི་ཡི་ངོས་mountain slope
རི་ཡི་འོད་ཅན་great ocean
རི་ཡི་སུལ་mountain ridge
རི་ཡི་སྙིང་པོ་iron
རི་རབ་གྱི་ཟོམ་summit of the ri rab
རི་ལ་on the mountain
རི་ལ་འཛེག་པ་ascend a hill
རི་ལ་འཛེག་མཁན་mountaineer
རི་ལ་སྐྱེས་born in the mountain
རི་ལུང་mountain and valley
རི་ལོགས་hillside
རི་ཤི་sage
རི་སུལ་mountan ridge
རི་སྐེད་crystal
རི་སྣ་spur
རིག་ཀློང་state of rigpa
རིག་གནས་ཁང་cultural center
རིག་གཤིས་state of rigpa
རིག་གསར་new sciences
རིག་གི་ཤེས་པ་noetic
རིག་ངོ་essence of rigpa
རིག་ཐོག་direct awareness
རིག་པ་གཅེར་བུ་naked awareness
རིག་པ་གསལ་clear rigpa
རིག་པ་པོ་knower
རིག་པ་སྒྲིམས་steady attention
རིག་པའི་ཀློང་rigpa dimension
རིག་པའི་གཤིས་state of rigpa
རིག་པའི་ངང་state of rigpa
རིག་པའི་དབང་knowledge initiation
རིག་པས་ཕོངས་པ་devoid of intellect
རིག་བྱེད་གདོང་epithet of brahma
རིག་མ་knowledge woman
རིག་ཙམ་pure presence
རིག་སྔགས་ཆེ་great knowledge
རིག་སྣང་visions of rigpa
རིགས་ཀྱི་ཐུ་བ་brahman caste
རིགས་ཀྱི་མ་housewife
རིགས་ཁུངས་caste
རིགས་གནས་པ་abide in a lineage
རིགས་ཉམས་པ་degenerate
རིགས་ཐམས་ཅད་in all instances
རིགས་པ་ཡང་དག་correct reasoning
རིགས་པའི་ཚུལ་logical procedure
རིགས་བདག་lord of the families
རིགས་བརྒྱུད་པ་descendant
རིགས་བསྡུས་པ་condensed lineage
རིགས་བསྲེས་པ་crossbreed
རིགས་མཐུན་concordant type
རིགས་མཐུན་པ་concordant type
རིགས་འགའ་some people
རིགས་འདྲེས་པ་crossbreed
རིགས་འབྱུང་lineage
རིགས་ལམ་path of reasoning
རིགས་སུ་འགྲོ་ocean
རིགས་སོ་well done
རིགས་སྐྱོངས་མ་housewife
རིང་ངེ་བ་every day warm meals
རིང་དེར་during the time that
རིང་པ་remote
རིང་བར་འགྱུར་to remain far from
རིང་མཁན་specialist
རིང་མདའ་rifle
རིང་མོ་སྐྱེས་a medicinal plant
རིང་ཙམ་དུ་for some time
རིང་ཞིག་a long time
རིང་ཞིག་ན་after a long time
རིང་འགག་lama shawl
རིང་འཇམ་long and gentle
རིངས་པ་བཞིན་eager
རིངས་སྟབས་སུ་most speedily
རིད་meager
རིན་གོང་ཆག་པ་slump
རིན་ཆེན་གྱི་precious
རིན་ཆེན་གླིང་jewel island
རིན་ཆེན་ཆེ་gold
རིན་ཆེན་དང་པོ་gold
རིན་ཆོག་it is worthwhile
རིན་པ་cost
རིན་མེད་དུ་gratis
རིན་འབབ་cost
རིན་འབབ་པ་falling in value
རིན་འབེབས་པ་lower the price
རིན་འབྲི་བ་falling in value
རིབ་ཙམ་a moment
རིམ་ཅན་successively
རིམ་པ་གསུམ་པ་third level
རིམ་པ་ལ་in a gradual manner
རིམ་པར་སྐྱེ་བ་develop slowly
རིམ་བཞིན་དུ་respectively
རིམ་བཞིན་ཟད་པ་lapse
རིམ་བྱུང་དུ་successively
རིམ་འབྱུང་གི་successive
རིམ་འབྱུང་བ་successor
རིམ་ལྡབས་double
རིམས་ཆམ་influenza
རིམས་མི་ཟད་པ་typhoid fever
རིམས་མེད་པ་free from epidemic
རིའི་གཤམ་དུ་downhill
རིའི་རུས་སྦལ་hill tortoise
རིར་on the mountain
རིར་སྐྱེས་born in the mountain
རིལ་འགྲོ་བ་roll
རིལ་འཇོག་མ་celestial courtesan
རིས་ཆད་separate
རིས་བྲལ་impartial
རིས་སུ་in figure
རིས་སུ་ཆད་པ་separate
རིས་སུ་བཀོད་to write down
རིས་སུ་བཀོད་པ་wrote down
རིས་སུ་བཅད་particularize
རིས་སུ་བཏབ་པ་start to write down
རིས་སུ་འབྲི་བ་draw
རུ་ངར་པོ་diligent
རུ་ཐོག་fort in tibet
རུ་པོ་ram
རུ་བ་སྤོ་བ་nomadic life
རུ་བཞི་four ranges
རུ་མ་curded milk
རུ་མི་young pioneer
རུ་ཚོགས་cluster
རུག་པ་bend
རུག་བྱས་bent
རུག་མ་town in sindhu
རུག་རུག་compact
རུང་suitable
རུང་དུ་མི་འཐད་it is irrelevant
རུང་བ་ཉིད་suitability
རུང་བའི་རིགས་analysis
རུང་བར་འགྱུར་suitable
རུང་བྱ་suitable object
རུབ་ཤོ་currant
རུམ་གདན་carpet
རུམ་ཤམ་syria
རུལ་སྦལ་tortoise
རུས་ཀྱི་མིང་name of a tribe
རུས་གཅིག་པ་kinsman
རུས་ཆག་fracture of the bone
རུས་ཆོལ་dice made of bone
རུས་དམའ་བ་low extraction
རུས་པ་ཅན་bony
རུས་པ་བཙབས་pounded the bones
རུས་པ་མུར་བ་crunch bones
རུས་པའི་གཟེབ་skin
རུས་མཐོ་བ་high extraction
རུས་རུས་པ་སྦ་a celebrated lama
རུས་རྒྱན་bone ornaments
རུས་སྦལ་མོ་female tortoise
རུས་ཧྲམ་hard bone
རེ་ཁའི་འདབ་birch tree
རེ་ཐབས་ཡོད་པ་prospective
རེ་དམིགས་ambition
རེ་བ་hope
རེ་བ་ཅན་hopeful
རེ་བ་ཆུང་ཆུང་pessimist
རེ་བ་ཆེན་པོ་optimist
རེ་བ་བསྐང་fulfils wishes
རེ་བ་མེད་སེམས་hopeless mind
རེ་བ་སྟོང་ཟད་disappointment
རེ་བཟུང་ནས་once one has grasped
རེ་བས་hoping
རེ་བསྐུལ་request
རེ་བྱས་hope to
རེ་མོས་པ་alternately
རེ་ཞིག་ཅིག་ན་after a little while
རེ་ཞིག་སྡོད་wait awhile
རེ་འཁང་offence
རེ་འཁང་བྱེད་པ་make mischief
རེ་འཁོན་frequent quarrel
རེ་འདོད་ཅན་anxious
རེ་འདོད་ཆན་wishful
རེ་རེ་བཞིན་one after another
རེ་རེ་རལ་a vegetable medicine
རེ་རེ་ལ་apiece
རེ་རེའི་of each
རེ་རེར་to each
རེ་རེས་by each
རེ་རྨ་woman
རེ་སྒུག་expectation
རེ་སྨོན་hope and desire
རེག་དུག་ནད་syphilis
རེག་པའི་ཟས་food of contact
རེག་བྱ་བསིལ་feeling of coolness
རེག་བྱ་ཙུབ་rough to the touch
རེག་བྱ་ཚ་feeling of heat
རེག་བྱ་ཡང་feeling of lightness
རེག་བྱ་ལྕི་feeling of heaviness
རེག་བྱེད་གདོང་cinnamon
རེག་འདོད་desire for contact
རེགས་པ་མེད་is not discerned
རེད་is
རེད་དམ་མ་རེད་yes or no
རེད་མདའ་spent arrow
རེད་འདུག་was
རེའི་རླུབས་fire pool
རེལ་ཚར་skin of a kid
རེས་གཟའ་ལྷག་པ་wednesday
རེས་དཀར་རྩི་white muslin
རེས་དགའ་at times cheerful
རེས་མོས་བཞིན་alternate
རེས་མོས་བསྐོར་alternating
རེས་རེས་alternating between
རོ་ཁ་བ་bitter taste
རོ་གཅིག་of one taste
རོ་གཅིག་པ་of one taste
རོ་གཅིག་འབྲིང་medium one taste
རོ་ཉེ་lead
རོ་ཏོ་dreg
རོ་དང་འདྲ་བ་as much as dead
རོ་བཅུད་taste
རོ་བཟང་མ་a yaksha princess
རོ་བརྟག་དཔྱད་autopsy
རོ་བསྲེག་པའི་funeral
རོ་མིག་corpse eyes
རོ་མྱགས་kunapa hell
རོ་ཙ་ཀ་celestial flowers
རོ་ཙ་ཀ་ཆེན་པ་celestial flowers
རོ་ཙ་ན་kacimbala tree
རོ་ཚིག་truth
རོ་ཚོགས་funeral rituals
རོ་འཇམ་པོ་flavorful
རོ་འཛིན་tongue
རོ་རོ་rubbish
རོ་རྒྱབ་the back
རོ་སྒམ་coffin
རོགས་བྱེད་to help
རོགས་སྐྱོར་help
རོང་གཅོང་rocky defile
རོང་མི་man coming from rong
རོང་ཙུབ་rugged ravines
རོང་རྟ་horse bred in rong
རོང་ས་agricultural area
རོབ་རྩིས་estimate
རོའི་གསེར་camphor
རོལ་ཆ་དཀྲོལ་བ་play music
རོལ་དབང་vassal
རོལ་དབྱངས་music
རོལ་པ་sport
རོལ་པ་ཆེ་majestic play
རོལ་པའི་ས་celestial regions
རོལ་པར་མཛད་པ་enjoyment
རོལ་མོ་བྱེད་པ་to make music
རོལ་མོ་མཁན་musician
རོལ་མོའི་སྒྲ་sound of music
རོལ་རྙེད་playfulness
རོལ་རྩལ་manifest potency
རྐང་ཁྲི་footstool
རྐང་གཉིས་bipeds human
རྐང་གཡས་right leg
རྐང་གི་ཁོང་ནས་from innermost heart
རྐང་གྱོག་bent or crooked leg
རྐང་གྲངས་extent
རྐང་ཐང་དམག་མི་infantry
རྐང་ཐང་པ་pedestrian
རྐང་ཐང་ལ་afoot
རྐང་ཐུང་short legs
རྐང་དྲུག་ཚེས་mango tree
རྐང་པ་གཉིས་two legs
རྐང་པ་གཉིས་ཅན་biped
རྐང་པ་གུག་པ་bowleg
རྐང་པ་བརྐྱངས་legs stretched
རྐང་པ་བསྐུམས་contracted legs
རྐང་པ་འཇོགས་ས་footstool
རྐང་པ་འཐེང་པོ་lame
རྐང་པ་སྣོལ་བ་join the legs
རྐང་པ་སྤོ་བ་march
རྐང་པ་སྦྲིད་པ་numb legs
རྐང་པའི་མཐིལ་sole of the foot
རྐང་པའི་རྩ་བ་the heel
རྐང་པས་རྫི་བ་tread
རྐང་བ་leg
རྐང་བཀོད་manner of walking
རྐང་བཞི་པ་quadruped
རྐང་བརྒྱ་centipede
རྐང་མང་polypods
རྐང་མང་པོ་crab
རྐང་མེད་apods
རྐང་འཁུམ་a diseased foot
རྐང་རུས་bone of the foot
རྐང་རྒྱུ་foot soldier
རྐང་རྟེགས་footstool
རྐང་རྡུམ་maimed foot
རྐང་ལག་limb
རྐང་ཤར་པ་foot soldier
རྐང་ཤིང་treadle of a loom
རྐང་ཤུ་footsore
རྐང་སོར་toe
རྐང་སྟེགས་footstool
རྐན་ཕུག་cavity of the palate
རྐན་སྒྲ་cracking sound
རྐུ་steal
རྐུ་བར་བགྲང་བ་count as stealing
རྐུ་མ་རྐུ་བ་steal
རྐུ་སེམས་thievish mind
རྐུན་ཅན་thief
རྐུན་ནོར་stolen goods
རྐུན་འཇག་bandit
རྐུབ་ཀྱག་chair
རྐུབ་བཀྱག་chair
རྐུབ་ཚོས་buttocks
རྐུབ་རྐྱག་chair
རྐུབ་རྒྱག་chair to sit upon
རྐུམ་རྐུ་བ་rob
རྐེད་པ་ཕྲ་slender waist
རྐེད་འཆུ་buttocks
རྐེད་འབྲས་fruit used in fever
རྐེད་སོ་waist
རྐོ་to dig
རྐོ་བཞིན་པ་digging
རྐོ་ལས་excavation
རྐོས་རིས་sculpture
རྐོས་སྐུ་engraved image
རྐྱ་བ་stirring spoon
རྐྱག་པ་གཏོང་བ་ease nature
རྐྱག་པ་བཏོང་བ་cause purging
རྐྱང་དར་མ་adult wild ass
རྐྱང་མ་left channel
རྐྱང་འདེད་to chase after
རྐྱང་རྒན་old wild ass
རྐྱང་ལྟབ་པ་fold single
རྐྱལ་swim
རྐྱལ་ཀ་vain talk
རྐྱལ་རྒྱག་པ་swim
རྐྱལ་རྒྱབ་པ་swim
རྐྱལ་རྫིང་swimming pool
རྐྱེན་ཀློག་པ་avert a misfortune
རྐྱེན་ངན་གྱི་tragic
རྐྱེན་ངན་པ་unfortunate accident
རྐྱེན་ཐེགས་པ་endure misfortune
རྐྱེན་པ་barley
རྐྱེན་པས་since it was
རྐྱེན་བཟང་ནས་fortunately
རྐྱོང་extend
རྐྱོངས་extend
རྒ་ཁྲི་footstool
རྒ་ཞི་decay and death
རྒ་འཆི་aging and death
རྒ་ཤི་aging and death
རྒད་མོ་old woman
རྒན་པ་old
རྒན་པོ་old person
རྒན་འཁོགས་old person
རྒན་རྒོན་གཉིས་old couple
རྒན་སོང་has become old
རྒན་སྲི་disturber of the old
རྒལ་cross over
རྒལ་ཅིག་lizard
རྒས་ཀ་old age
རྒས་པ་བསོ་བ་elixir
རྒས་ཕོགས་pension
རྒུ་many
རྒུད་trouble
རྒུད་མུན་destitute person
རྒུད་མེད་དཔལ་unfailing prosperity
རྒུན་grapes
རྒུན་ཆང་wine from grapes
རྒུམ་ཆུང་small collection
རྒུར་རེ་sit downcast
རྒུར་ཤིག་stoop down
རྒོད་ཅིང་excited
རྒོད་དཀར་white vulture
རྒོད་མ་mare
རྒོད་མ་མ་སྨད་the two
རྒོད་མའི་ཚོགས་herd of mares
རྒོད་ལན་མེད་unassailable
རྒོད་སྐམ་མ་barren mare
རྒོལ་རླུང་attack
རྒྱ་ཁམས་པ་a tribe
རྒྱ་ཁུག་leather chinese bags
རྒྱ་ཁྲི་european chair
རྒྱ་གཅོག་པ་break a seal
རྒྱ་གཟེབ་rake
རྒྱ་གར་སྐད་indian language
རྒྱ་གྱུ་treachery
རྒྱ་ཅོག་table
རྒྱ་ཆེན་ཤུན་པ་alstonia tree
རྒྱ་ཐང་plain
རྒྱ་ནག་གོང་མ་the emperor of china
རྒྱ་ནང་རྩིས་chinese astrology
རྒྱ་ཕིབས་roof
རྒྱ་ཕུགས་full covering
རྒྱ་བགྱབ་པ་set a trap
རྒྱ་བཏབ་seals
རྒྱ་བཞི་a gtor ma offering
རྒྱ་བོ་beard
རྒྱ་བྱ་pheasant
རྒྱ་མ་ཆད་པ་expansiveness
རྒྱ་མ་ལྷོད་bulky sash
རྒྱ་མཚོ་གཉིས་two eyes
རྒྱ་མཚོ་དགའ་moon
རྒྱ་མཚོ་ལྟར་like a sea
རྒྱ་མཚོ་སྐྱེས་moon
རྒྱ་མཚོའི་མཐའ་coast
རྒྱ་ཚད་malaria
རྒྱ་ཞྭ་chinese cap
རྒྱ་ཡན་པ་dispersed
རྒྱ་ཡི་འབུར་engravings on a seal
རྒྱ་ར་འབྲུ་kind of millet flour
རྒྱ་རོག་beard
རྒྱ་རྒྱ་རྒྱ་gya gya gya
རྒྱ་རྒྱུ་ར་ant
རྒྱ་རྨ་secondary syphilis
རྒྱ་རྩངས་lizard
རྒྱ་ལབ་ཅན་talkative
རྒྱ་ལྕགས་chinese iron
རྒྱ་ལྷམ་chinese boot
རྒྱ་ཤུག་འཁྱིལ་species of juniper
རྒྱ་ཤོས་vermillion
རྒྱ་སྐས་staircase
རྒྱ་སྐྲས་regular staircase
རྒྱ་སྒྱུར་ant
རྒྱ་སྣ་དུ་copulation
རྒྱགས་provisions
རྒྱགས་པ་haughtiness
རྒྱགས་པ་བཟོ་བ་fatten
རྒྱགས་རིལ་plump
རྒྱགས་ལོགས་པ་spare provision
རྒྱང་གྲགས་ཐོས་osprey
རྒྱང་ཆད་distant and cut off
རྒྱང་ཐུང་span
རྒྱང་ཐུང་བ་near
རྒྱང་དུ་ཐོན་to move far away
རྒྱང་དུ་ལུས་པ་lingering behind
རྒྱང་པ་stretched
རྒྱང་བསྲིངས་put off
རྒྱང་ཚས་not far from
རྒྱང་འཕེན་politico
རྒྱང་རིང་དུ་farther
རྒྱང་ཤིང་cross
རྒྱང་སོ་ཚུགས་keep watch from afar
རྒྱངས་ཆད་distant and cut off
རྒྱངས་ཏེ་arriving as in haste
རྒྱངས་བཅད་པར་distant and cut off
རྒྱན་གཡུག་པ་toss
རྒྱན་ཆ་ཕལ་པ་trinket
རྒྱན་ཆ་བཏགས་པ་decorate
རྒྱན་ཆ་ལུགས་customary ornaments
རྒྱན་ཆས་ornament
རྒྱན་པ་བྱེད་པ་lay a wager
རྒྱན་པོ་throwing dice
རྒྱན་བཏགས་པ་ornament worn
རྒྱན་བཙུགས་པ་bet
རྒྱན་བྱེད་པ་making bets
རྒྱན་མཆོག་earring
རྒྱན་འཁོར་ལྔ་five aspects
རྒྱན་འགྱེད་པ་lay a wager
རྒྱན་ཤོག་raffle
རྒྱབ་གནོན་confirmation
རྒྱབ་གྱེས་པ་totally separating
རྒྱབ་ཏུ་ཞོན་mounts on the back
རྒྱབ་ཏུ་སྐྱུར་cast behind
རྒྱབ་ཐུང་short back
རྒྱབ་ནས་འཕུལ་to push from behind
རྒྱབ་བཞིན་པ་struck
རྒྱབ་བསྙུན་pain in the back
རྒྱབ་བསྣོལ་contradictory
རྒྱབ་བྲག་rock at my back
རྒྱབ་འབོལ་cushion for the back
རྒྱབ་ཡས་number
རྒྱབ་རིས་background
རྒྱབ་རུས་backbone
རྒྱབ་རྗེན་པ་naked backside
རྒྱབ་ལ་རྒྱུག་run behind
རྒྱབ་ལས་བྱུང་consequence
རྒྱབ་ཤུད་secession
རྒྱབ་སྒོ་exit
རྒྱལ་ཀའི་ཚིག་playful word
རྒྱལ་ཁག་kingdom
རྒྱལ་ཁབ་ཀྱི་national
རྒྱལ་ཁབ་ནང་inland
རྒྱལ་ཁབ་ལ་ཞེན་nationalism
རྒྱལ་ཁམས་kingdom
རྒྱལ་ཁམས་པ་vagabond
རྒྱལ་ཁྲི་throne
རྒྱལ་ཁྲོམ་royal gathering
རྒྱལ་གུར་royal pavilion
རྒྱལ་གྱི་ཟླ་བ་month of december
རྒྱལ་གླུད་ransom for the king
རྒྱལ་ཐབས་kingdom
རྒྱལ་དགོང་class of spirits
རྒྱལ་དབང་victorious lord
རྒྱལ་དབང་རྗེ་person
རྒྱལ་དམངས་people
རྒྱལ་ནས་having conquered
རྒྱལ་པོ་ཐོབ་པ་become king
རྒྱལ་པོའི་ཁམས་kingdom
རྒྱལ་བཞིན་པ་winning
རྒྱལ་བརྒྱུད་dynasty
རྒྱལ་བྱེད་མ་a goddess
རྒྱལ་མཆོག་supreme conqueror
རྒྱལ་མཚན་victory banner
རྒྱལ་མཚམས་international border
རྒྱལ་མོ་queen
རྒྱལ་མོ་ལྟ་བུ་queenly
རྒྱལ་ཟམ་large bridge
རྒྱལ་འདབ་name of a tree
རྒྱལ་རྔ་drum of victory
རྒྱལ་སར་བསྐོས་elected to throne
རྒྱས་ཐེབས་having the seal of
རྒྱས་པའི་རྒྱུ་expanding cause
རྒྱས་པའི་སྤྱན་enhanced eye
རྒྱས་པར་མཛད་widely accomplished
རྒྱས་པར་འགྱུར་to develop fully
རྒྱས་པོ་བཟོ་བ་elaborate
རྒྱས་བྱ་to broaden
རྒྱས་འཁོགས་worn out by age
རྒྱས་འཆིངས་པ་bind oneself
རྒྱས་འདེབས་པ་to label with
རྒྱས་ཤིང་thriving
རྒྱས་སུ་ཞུས་པ་reply at length
རྒྱས་སྤྲོ་pomp
རྒྱས་སྤྲོས་luxury
རྒྱུ་གང་for what reason
རྒྱུ་གཅིག་པ་homogeneous
རྒྱུ་གཟེད་diarrhea
རྒྱུ་དངོས་actual cause
རྒྱུ་དངོས་པོ་assets
རྒྱུ་དབང་wealth and power
རྒྱུ་དམན་པ་inferior
རྒྱུ་བ་ངན་bad breathing
རྒྱུ་མཐུན་causally concordant
རྒྱུ་ཚད་typhoid
རྒྱུ་ཚོགས་prerequisites
རྒྱུ་ཞིང་སོང་wander and go
རྒྱུ་འཁོར་diarrhea
རྒྱུ་འཁྲོག་diarrhea
རྒྱུ་ཡང་དག་པར་consequence
རྒྱུ་ཡི་ལམ་path to the ground
རྒྱུ་ལམ་orbit
རྒྱུ་ལྐུགས་diarrhea
རྒྱུ་སྐར་གཙོ་moon
རྒྱུ་སྟོད་upper bowels
རྒྱུ་སྤྱི་general cause
རྒྱུ་སྦྱིན་cloud
རྒྱུ་སྲིན་intestinal worm
རྒྱུག་ཁྱི་running dog
རྒྱུག་པ་གཞུ་བ་cane
རྒྱུག་བཞིན་པ་running
རྒྱུག་ཟིན་པ་sped
རྒྱུག་འགྲོས་gallop
རྒྱུག་རྩལ་running
རྒྱུག་ཤད་comb
རྒྱུགས་ཆུ་river
རྒྱུགས་མཁན་runner
རྒྱུགས་ཡོང་བ་run back
རྒྱུགས་ལེན་པ་to give test
རྒྱུད་ཆད་cut off
རྒྱུད་ཆིངས་tantric guidelines
རྒྱུད་ཐ་དད་different substances
རྒྱུད་བཟང་བ་healthy attitude
རྒྱུད་འཇམ་gentle character
རྒྱུད་རིམ་system
རྒྱུད་རྩལ་race
རྒྱུད་སྐུལ་campaign
རྒྱུད་སྲོག་life
རྒྱུན་ཁྱེར་daily practice
རྒྱུན་གསུམ་པ་ganges river
རྒྱུན་གོས་everyday coat
རྒྱུན་གྱིས་always
རྒྱུན་ཆགས་continuous
རྒྱུན་ཆད་interrupted
རྒྱུན་བབ་rain
རྒྱུན་བབ་ཚ་heavy rain
རྒྱུན་བསྲིངས་to prolong
རྒྱུན་འཁྱོངས་always to protect
རྒྱུན་ཡུན་flow
རྒྱུན་རིང་long time
རྒྱུན་རིང་བ་long
རྒྱུན་ཤེས་common sense
རྒྱུན་སྲོལ་habitual usual
རྒྱུའི་ཆེད་དུ་purposive connective
རྒྱུའི་ཚོགས་prerequisite
རྒྱུའི་རིག་science of reasoning
རྒྱུའི་རྒྱུན་stream of cause
རྒྱུར་so that
རྒྱུར་འགྱུར་serviceable
རྒྱུས་ཡོད་familiar
རྒྱོ་རྒྱབ་པ་copulate
རྒྱོ་ལས་fornication
རྒྱོན་པ་cover oneself
རྒྱོར་བ་kill
རྔ་drum
རྔ་གཡོག་military drum
རྔ་དཀར་white hairy tail
རྔ་དཔོན་chief drummer
རྔ་དབྱུག་drum stick
རྔ་དར་scarf tied to a drum
རྔ་པ་drummer
རྔ་བཟོ་བ་drum maker
རྔ་བརྡུང་བ་drum beater
རྔ་བྲན་an animal
རྔ་མ་དཀར་པོ་white hairy tail
རྔ་མུ་ཀུན་ད་kind of drum
རྔ་མོ་camel
རྔ་མོང་camel
རྔ་མོང་གི་ཕྲུ་young camel
རྔ་རིང་long tail
རྔ་རྡུང་བ་drum
རྔན་ཆུང་tip
རྔན་འཕྱར་angry words
རྔབ་ཚ་བ་oppressive
རྔབ་རྭ་horn cauteries
རྔམ་གཏུམ་fierceness
རྔམ་པའི་ང་རོ་voice of terror
རྔམ་པོ་ཆེ་very frightful
རྔམས་བཅུག་པ་allure
རྔའི་སྒྲ་sound of a drum
རྔུ་pain
རྔུ་མ་rheum in the eye
རྔུབ་inhalation
རྔུར་བ་འཐེན་snore
རྔུལ་ཁ་sweat
རྔུལ་མ་sweat
རྔུལ་འབྱིན་seats
རྔོ་ཐོག་པ་be capable
རྔོ་ཡས་number
རྔོག་ཅན་having a mane
རྔོག་ལྡན་having a mane
རྔོད་པའི་སྐད་sizzle
རྔོན་ཆ་payment gifts
རྗང་མ་store room
རྗིད་པ་lean
རྗེ་ཁྲི་ཐོག་the reigning king
རྗེ་གོང་honorable lord
རྗེ་ཐོག་བཙན་early tibetan king
རྗེ་བཙུན་དཔལ་honorable sir
རྗེ་བོ་དང་བྲན་master and servant
རྗེ་བྱའི་ནོར་articles of barter
རྗེ་བློན་king and minister
རྗེ་མ་lady of rank
རྗེ་མ་ཆུང་young lady
རྗེ་ཡི་དྲིན་atisa
རྗེད་རྡོ་memorial stone
རྗེན་raw
རྗེན་ཆར་nakedly
རྗེན་ཆེར་nakedly
རྗེན་ནེ་naked state
རྗེན་པ་naked
རྗེན་པར་nakedly
རྗེན་པར་མཇལ་to nakedly discover
རྗེན་པར་འཆར་arise nakedly
རྗེན་པར་ཤར་བ་nakedly manifests
རྗེའུ་overlords
རྗེའུ་ཚོད་pot
རྗེའུ་རིགས་merchant class
རྗེས་གཅོད་knife
རྗེས་ངན་disaster
རྗེས་ཆོ་ག་concluding service
རྗེས་ཐོག་afterwards
རྗེས་དངོས་real
རྗེས་བཟུང་to be taken care of
རྗེས་བར་དུ་until after
རྗེས་བརྩེ་mercy
རྗེས་མཐུན་པར་concordant with
རྗེས་མའི་futurity
རྗེས་མི་འབྲང་do not pursue
རྗེས་ཟིན་to rely upon
རྗེས་ཟིན་པ་catch up overtake
རྗེས་འགྲོ་མཁན་singing bird
རྗེས་ཡི་རངས་rejoice
རྗེས་ཤེས་subsequent knowledge
རྗེས་སུ་གཅོད་knife
རྗེས་སུ་ཞུགས་involved with
རྗེས་སུ་འབྲང་follow
རྗེས་སུ་འབྲངས་follow
རྗེས་སུ་སྙོག་following
རྗེས་སྙེགས་པ་follow after
རྗེས་སྦྱོར་anuyoga
རྗོད་བྲལ་ineffable
རྙ་བ་place in tibet
རྙ་ལོ་species of polygonum
རྙང་ནད་diarrhea
རྙང་པ་diarrhea stool
རྙང་མ་diarrhea stool
རྙས་སྐོ་བ་irritate
རྙི་ནང་གཟུང་བ་entrap
རྙི་ནང་བཅུག་པ་ensnare
རྙི་འཛུག་པ་lay snares
རྙི་སྐོན་པ་trap
རྙིང་པ་old
རྙིང་པ་བཟོ་བ་antiquate
རྙིང་རིགས་ཁང་museum
རྙིང་རེ་རྗེ་to take pity upon
རྙེད་དཀའ་difficult to find
རྙེད་དོན་object found
རྙེད་པ་འདོད་wish to gain
རྙེད་པར་དཀའ་བ་difficult to find
རྙེད་བཀུར་riches and honor
རྙེད་མ་ཐུབ་could not find
རྙེད་མེད་nothing to be found
རྙེད་འདོད་inclination for gain
རྙེད་འདོད་པ་desire to gain
རྙེད་ལ་གདུ་love of gain
རྙོག་ཁྲ་problem
རྙོག་ཁྲ་བཟོ་to cause problems
རྙོག་ཁྲ་བཤད་to cause troubles
རྙོག་ཁྲ་བསལ་བ་solve
རྙོག་པ་མེད་unsullied
རྙོག་ཕྲ་tumult
རྙོག་མ་ཅན་muddy
རྙོག་རྫིང་ravel
རྙོགས་མ་dirty
རྙོགས་མེད་limpid
རྙོགས་ཚད་a disease
རྙོན་མ་ཅན་muddy water
རྟ་horse
རྟ་གཅོད་པ་to break in a horse
རྟ་གནས་stable
རྟ་གཞོང་manger
རྟ་གཡོག་groom
རྟ་གལ་saddle bag
རྟ་གེ་colt
རྟ་གྲས་stable
རྟ་གླུད་ransom for the horse
རྟ་ཆང་mare liquor
རྟ་དྲེལ་horses and mules
རྟ་པའི་དཔུང་cavalry
རྟ་པོ་horse
རྟ་བགད་horse laugh
རྟ་བོན་nasty filth
རྟ་བོན་པ་mare
རྟ་བྲོ་hayagriva dance
རྟ་མགོ་ཅན་boat
རྟ་མོ་mare
རྟ་ཞུན་good horse
རྟ་ཟམ་པ་post rider
རྟ་འདྲོག་པ་shying of a horse
རྟ་ཡི་མཇུག་མ་medicinal plant
རྟ་ཡི་ཤུགས་power of a horse
རྟ་ར་stable
རྟ་རིགས་ཡག་པོ་thoroughbred
རྟ་རོ་dead horse
རྟ་རྒོད་མ་mare
རྟ་རྒྱུག་horse race
རྟ་རྒྱུགས་to gallop a horse
རྟ་རྔོག་mane of the horse
རྟ་རྭ་stable
རྟ་ལ་དྲངས་to sing
རྟ་ལ་ཞོན་པ་ride on horseback
རྟ་ལ་སྒ་སྟད་པ་saddle a horse
རྟ་ལའི་ཀོང་mythological race
རྟ་ལྕག་གཞུ་བ་whip
རྟ་ཤད་curry comb
རྟ་སྒལ་horse load
རྟ་སྒྱེལ་killing of horses
རྟག་eternal
རྟག་ཏུ་བྱེད་པ་do constantly
རྟག་ཏུ་ལང་ཚོ་epithet of draupadi
རྟག་པ་ཉིད་permanence
རྟག་པ་རྒྱུན་perpetual continuity
རྟག་པ་ཤིང་birch tree
རྟག་པའི་དུས་permanent time
རྟག་པའི་སྐུ་permanent body
རྟག་མཐོང་བ་view of permanence
རྟག་ཞི་བ་eternal peace
རྟག་རེ་འཁོར་བ་constant change
རྟག་རྒྱལ་eternal ruler
རྟགས་གསལ་disputation
རྟགས་གསུམ་oar
རྟགས་ཅན་མ་harlot
རྟགས་ཐམ་stamp
རྟགས་ཐུགས་intimate connection
རྟགས་དམ་ཕྲུག་sign and seal
རྟགས་དེ་ལ་ཟེར་asterisk
རྟགས་བྱེད་པ་make a mark
རྟགས་མ་medal
རྟགས་མཚོན་to symbolize
རྟགས་མེད་hermaphrodite
རྟགས་འབྱུང་signs manifest
རྟགས་ཡིན་པས་characterized by
རྟགས་རིགས་signs and reasonings
རྟགས་ལོག་contraposed reason
རྟགས་ཤིག་travel permit
རྟགས་སུ་symbolizing
རྟབ་རྟོབ་ལ་helter skelter
རྟབས་པ་be afraid
རྟའི་ཁྱུ་herd of horses
རྟའི་གློ་ཐག་girth
རྟའི་ཐེག་པ་horse carriage
རྟའི་ཚོགས་cavalry
རྟའི་ཡོབ་stirrup
རྟའི་སྐད་སྒྲ་neigh
རྟའི་སྒ་saddle
རྟའི་སྲབ་bridle
རྟར་ཀ་horse shoe
རྟལ་སྣང་manifestation
རྟས་རྡེབས་thrown by a horse
རྟིང་གཉིས་two heels
རྟིང་མ་ཉི་མ་following day
རྟིང་ལྕགས་spur
རྟིས་འཇོག་པ་reckon up
རྟུག་དྲི་fart
རྟུག་སྐམ་dry excrement
རྟུག་སྐེམ་dry excrement
རྟུན་པ་diligence
རྟུན་རིལ་trituration bowl
རྟུལ་activity
རྟེན་གནས་support or home
རྟེན་ཐ་དད་different bases
རྟེན་དང་བཅས་པ་with a basis
རྟེན་དང་བྲལ་free from fixation
རྟེན་དུ་based upon
རྟེན་ནི་རུང་བ་suitable basis
རྟེན་བཞག་place a support
རྟེན་བྱེད་supportive phlegm
རྟེན་བྱེད་མ་earth
རྟེན་མི་བཅའ་not fix upon
རྟེན་མི་བརྟན་unstable basis
རྟེན་འགངས་ཆེན་very sacred symbols
རྟེན་འབྲེལ་ངན་bad omens
རྟེན་རྣམས་sacred objects
རྟེན་ས་supporter
རྟེན་སྐལ་dowry
རྟོག་གེ་མཁན་logician
རྟོག་དཔྱོད་པ་examine anything
རྟོག་པ་ཙམ་mere conceptuality
རྟོག་པ་འཕྲོ་བ་flow of thought
རྟོག་པ་སྔ་མ་previous thought
རྟོག་པའི་དགྲ་a tree
རྟོག་པའི་བྱ་བ་conceptualization
རྟོག་པས་ཐ་སྙད་thoughts
རྟོག་ཙམ་གཞུ་བ་flick
རྟོག་ཞིབ་inspection
རྟོག་ཡུལ་object of thought
རྟོགས་ཁག་པོ་sophisticated
རྟོགས་ཆུང་realize a little
རྟོགས་དཀའ་བ་difficult to realize
རྟོགས་དཀར་difficult to realize
རྟོགས་དེབ་memorandum book
རྟོགས་པ་ཐོབ་པ་attain realization
རྟོགས་པ་དཀའ་བ་difficult to realize
རྟོགས་པ་བརྗོད་to explain subjects
རྟོགས་པ་མཆོག་real knowledge
རྟོགས་པའི་དུས་time of realizing
རྟོགས་པར་དཀའ་difficult to realize
རྟོགས་བྱེད་realizer
རྟོགས་འགྲོ་number
རྟོགས་ཡས་a numerical figure
རྟོགས་རིགས་modes
རྟོགས་སྤྱོད་theory and practice
རྟོགས་སླ་བ་easy to perceive
རྟོན་པར་འགྱུར་rely
རྟོལ་ཤེས་པ་know thoroughly
རྡབ་to clap
རྡབ་ཆལ་བ་slip and stumble
རྡབ་ཐུག་collision
རྡར་rub
རྡིང་ཁང་canopy
རྡིབ་to overturn
རྡུ་བ་thistle
རྡུག་shielding
རྡུང་བྱས་པ་him who was beaten
རྡུང་བྱེད་པ་he who is beating
རྡུང་འཚོག་པ་cudgel
རྡུང་སྒྲ་bang
རྡུའུ་ཡ་ཙི་bean sprouts
རྡུལ་ཐུལ་dust arises
རྡུལ་དམར་vermillion powder
རྡུལ་ཕྲ་མོ་subtle particle
རྡུལ་ཕྲན་མོ་minutest particle
རྡུལ་བསལ་stainless realm
རྡུལ་མ་dust
རྡུལ་ཚོགས་nuclear
རྡུལ་འཕྱང་reduced to dust
རྡུལ་སྙིང་atom
རྡུལ་སྟོབས་ཅན་cadamba tree
རྡེ་དཀར་white pebble
རྡེག་ཆ་མཁན་blacksmith
རྡེག་ཆོས་dance
རྡེག་ཆོས་པ་to dance
རྡེག་འཚོགས་getting a beating
རྡེག་ཤུགས་thrust
རྡེང་uppermost
རྡེའུ་པར་bullet mould
རྡེའུ་འདོན་པ་removing of stone
རྡེལ་ཁྲ་colored pebble
རྡོ་ཀ་མ་རུ་པ་marble
རྡོ་ཀྱག་staircase
རྡོ་ཀླད་medicinal stone
རྡོ་ཁུང་quarry
རྡོ་གཞུ་བ་stone
རྡོ་གཡམ་slate
རྡོ་གྲུབ་ཆེན་dodrup chen
རྡོ་ཅན་rocky
རྡོ་ཆེན་rock
རྡོ་ཆེན་པོ་boulder
རྡོ་ཐེམ་stone stair
རྡོ་ཐོ་stone hammer
རྡོ་དྲེག་kind of pitch
རྡོ་བཅག་break stone
རྡོ་བཅུད་bitumen
རྡོ་བོན་revealed bon
རྡོ་མཁྲིས་gallstone
རྡོ་མཆོད་cairns
རྡོ་ཞིབ་gravel
རྡོ་ཞོ་lime
རྡོ་ཟམ་natural rock bridge
རྡོ་འདྲ་པོ་stony
རྡོ་ཡི་ཟས་ཅན་a pigeon
རྡོ་རིལ་round stone
རྡོ་རྒྱབ་པ་throw stones at
རྡོ་རྗེ་གསུང་vajra voice
རྡོ་རྗེ་ཐུགས་vajra mind
རྡོ་རྗེ་ནག་མོ་tantric goddess
རྡོ་རྗེ་པད་མ་a bodhisattva
རྡོ་རྗེ་མཆོག་a bird
རྡོ་རྗེ་ཤིང་thunderbolt tree
རྡོ་རྗེ་སྐུ་vajra body
རྡོ་རྗེའི་གུར་pavilion of vajras
རྡོ་རྗེའི་ཟོམ་point of the rdo rje
རྡོ་རྗེའི་སྒྲ་thunder
རྡོ་རྡུག་poison of stone
རྡོ་རློག་པ་reduce to powder
རྡོ་ལ་ཁ་place in nepal
རྡོ་ལས་masonry
རྡོ་སྐས་staircase
རྡོ་སྐུ་stone image
རྡོ་སྐྱུར་medicinal substance
རྡོ་སྐྱེས་bitumen
རྡོ་སྤུངས་cairn
རྡོ་སྤོས་solid incense
རྡོ་ཧྲིལ་cobblestone
རྡོ་ཧྲུག་rubble
རྡོག་ཁྲིས་burden
རྡོག་ཁྲེས་cloth wrapper
རྡོག་ཆས་baggage
རྡོག་ཐོན་པ་go out together
རྡོག་མ་each
རྡོག་རྒྱག་kick
རྡོག་རྡོག་ཅན་lumpy
རྡོག་ལེབ་flat piece
རྡོག་སྒྲ་sound of a step
རྡོད་millstone
རྡོད་པ་fry roast
རྡོའམ་ཤིང་ལེབ་table
རྡོའི་བརྩིག་པ་stone wall
རྡོའི་སྨན་medicinal stones
རྡོར་rub
རྡོར་བཟླས་vajra repetition
རྡོར་ལེགས་tantric deity
རྡོར་སེམས་vajrasattva
རྡོལ་ཐོར་eruption
རྡོས་གང་བ་stony
རྣ་ear
རྣ་ཁུང་ear hole
རྣ་ཅོག་ear
རྣ་ཆེན་donkey
རྣ་ཐོས་hearsay
རྣ་དབང་ears
རྣ་དབང་སྒྲ་sounds for the ears
རྣ་བ་ear
རྣ་བ་གསེང་quick ear
རྣ་བ་ཅན་sal tree
རྣ་བ་བྱ་བ་listen
རྣ་བ་བྱོ་བ་listen
རྣ་བ་བླག་with all your ears
རྣ་བ་འོན་པ་deaf
རྣ་བ་ལ་གཟོན་listen to
རྣ་བ་ལ་གཟོན་པ་attend to
རྣ་བ་ཤེས་པ་heavenly ear
རྣ་བའི་ལས་function of hearing
རྣ་བརྒྱུད་oral transmission
རྣ་མཛད་kind of ear ornament
རྣ་མེད་earless
རྣ་ཟ་ལ་གཟན་it deafens the ears
རྣ་ཟལ་ལ་གཟན་deafens the ears
རྣ་འཁོར་earring
རྣ་རིང་hare
རྣ་ལྕོག་ear
རྣ་སྐོར་earring
རྣ་སྤགས་ear wax
རྣ་སྤབས་ear wax
རྣ་སྦངས་ear wax
རྣག་pus
རྣག་ཁྲག་matter and blood
རྣག་གིས་གང་བ་filled with pus
རྣག་འདྲེན་པ་draw out pus
རྣག་འབྲུམ་abscess
རྣག་སྨིན་པ་pus grown mature
རྣགས་པ་festering
རྣམ་ཁྲོ་wrath
རྣམ་གཡེང་distraction
རྣམ་གཡོ་fickleness
རྣམ་གྲངས་པ་redundant
རྣམ་གྲོལ་release
རྣམ་གྲོལ་ལམ་path of release
རྣམ་ཆད་པ་cut off
རྣམ་ཐར་liberation
རྣམ་ཐར་པ་liberation
རྣམ་ཐར་སྒོ་door of liberation
རྣམ་དག་གྱུར་become very pure
རྣམ་དྭངས་learned man
རྣམ་པ་ཀུན་ཏུ་all aspects
རྣམ་པ་གང་ཡིན་whatever aspect
རྣམ་པ་གཉིས་of two kinds
རྣམ་པ་ཅིར་ཡང་any image whatsoever
རྣམ་པ་དགུ་nine aspects
རྣམ་པ་དུ་མ་in many forms
རྣམ་པ་དྲུག་ཏུ་in six ways
རྣམ་པ་བཅུ་ten aspects
རྣམ་པ་ལྔ་five aspects
རྣམ་པ་སྣང་བ་perceived image
རྣམ་པར་as the aspect
རྣམ་པར་གཞིག་པ་break down
རྣམ་པར་གཡེང་བ་distraction
རྣམ་པར་གཡོང་བ་distraction
རྣམ་པར་གསལ་བ་clarify
རྣམ་པར་ཐོས་intelligent
རྣམ་པར་དག་ཉིད་purity
རྣམ་པར་དྭངས་learned
རྣམ་པར་བཀོད་fully arranged
རྣམ་པར་བཞག་པ་presentation
རྣམ་པར་བརྟགས་is given the name
རྣམ་པར་བལྟའོ་you should view
རྣམ་པར་བཤིག་པ་destroy
རྣམ་པར་བྲལ་བ་completely free from
རྣམ་པར་ཚིག་solvent
རྣམ་པར་འཁོར་quite dazed
རྣམ་པར་འདྲེན་cart
རྣམ་པར་འཕེལ་བ་increase
རྣམ་པར་འཕྲུལ་emanate
རྣམ་པར་འཚིག་པ་burn entirely
རྣམ་པར་འཚེ་བ་harmfulness
རྣམ་པར་ཡངས་པ་wide and spacious
རྣམ་པར་རོལ་to manifest in form
རྣམ་པར་རོལ་པ་sport
རྣམ་པར་ལྡན་པ་gone away
རྣམ་པར་ལྷུང་fallen away
རྣམ་པར་སྐྱེས་a king
རྣམ་བཅུ་ten aspects
རྣམ་བདུན་seven aspects
རྣམ་བཞག་པ་meditative equipoise
རྣམ་བརྟགས་the imputed
རྣམ་བཤད་explanation
རྣམ་བསགས་well formed realm
རྣམ་མེད་formless
རྣམ་འགྱུར་manifestation
རྣམ་འགྱེད་a fabulous number
རྣམ་འཇིག་sadness
རྣམ་འཕྱོ་fish
རྣམ་འཕྲོ་scattering
རྣམ་རིག་cognition
རྣམ་རིག་བྱེད་wisdom
རྣམ་ཤེས་ལྔ་five consciousnesses
རྣམ་སྐྱེད་procreate
རྣམ་སྐྱེས་a king
རྣམ་སྒེག་མ་coquettish woman
རྣམ་སྒོམ་night
རྣམ་སྣང་བྱེད་sun
རྣམ་སྤྱོད་engagement
རྣམ་སྤྲུལ་manifestations
རྣམས་plural marker
རྣལ་གཞག་naturally occurring
རྣལ་དུ་བཞག་normal condition
རྣལ་བཞག་authentic condition
རྣལ་མའི་གཤིས་authentic condition
རྣལ་མའི་དོན་actual meaning
རྣལ་མའི་སེམས་original mind
རྣལ་འགོངས་crossing
རྣལ་འབྱོར་པ་saint
རྣལ་འབྱོར་ལམ་path of the yogins
རྣལ་ལྟས་signs of a dream
རྣིལ་gums
རྣོ་ངར་sharp
རྣོ་ཅན་pointed
རྣོ་ཕྱུང་བ་to sharpen
རྣོ་བྱས་sharpened knife
རྣོ་བྱེད་horn
རྣོ་མཐོང་divination
རྣོ་མེད་པ་blunt
རྣོན་པོ་བྱས་sharpened
རྦ་wave
རྦ་ཀློངས་waves
རྦ་རག་place in tibet
རྦ་རླབས་wave
རྦད་དེ་ཆོད་cut it abruptly
རྦད་འདྲེ་cursing spirits
རྦད་སྒྲ་harsh voice
རྦབ་rolling down
རྦབ་གྲི་rock fall
རྦབ་རྒོད་avalanche
རྨ་ཁམས་petty state in khams
རྨ་གཏིང་ཟབ་gash
རྨ་གསར་པ་fresh wound
རྨ་གསོ་བ་heal a wound
རྨ་ཆུང་scratch
རྨ་བ་to wound
རྨ་བཅོས་surgeon
རྨ་བཟོ་བ་scathe
རྨ་བྱ་peacock
རྨ་བྱའི་ཐུལ་པ་peacock cloak
རྨ་བྱའི་མགྲིན་a gem
རྨ་མཚན་scar
རྨ་རྙིང་old wound
རྨ་རྩི་salve for a wound
རྨ་ལས་འབབ་པ་blood
རྨ་ཤུལ་scar
རྨ་སྨན་medicine for a wound
རྨང་པོ་children
རྨང་རྡོ་foundation stone
རྨང་ལམ་dream
རྨན་པ་wounded
རྨའི་ལྷ་བ་wound growing worse
རྨས་མ་wounded animal
རྨས་སྐྱོན་ཅན་wounded
རྨི་ཉམས་dream experiences
རྨི་བ་dream
རྨི་འདྲ་as in a dream
རྨི་རྒོད་super dream
རྨི་ལམ་གཏེར་dream treasure
རྨི་ལམ་དུ་གསན་see in dreams
རྨི་ལམ་བཟུང་practiced dream yoga
རྨི་ལམ་བཤད་པ་interpret dreams
རྨི་ལམ་མཐོང་བ་to dream
རྨིག་ཟླུམ་undivided hoof
རྨིག་ལྕགས་horse shoe
རྨིགས་པ་lizards
རྨིས་ཉམས་dream experience
རྨུ་རྒོད་obtuse person
རྨུ་ལི་place in kham
རྨུག་ཐིག་bruise
རྨུགས་ཐིབ་པ་dense fog covering
རྨུགས་པ་ཅན་foggy
རྨུགས་བྱེད་stuns
རྨུགས་འཛིན་sea
རྨུགས་སྲི་sri of darkening
རྨེ་གྲིབ་moral defilement
རྨེ་བད་a monastery in lhasa
རྨེ་རུ་a monastery in lhasa
རྨེའུ་ཟན་unclean food
རྨོ་ཕྱུགས་draft animals
རྨོ་བཤོལ་plough share
རྨོ་བོ་རྒན་མོ་crone
རྨོ་མཁན་ploughman
རྨོག་helmet
རྨོག་ཅོག་place in tibet
རྨོག་བརྩེགས་མ་heretical sect
རྨོངས་བློ་stupidity
རྨོངས་མེད་unimpaired mind
རྨོད་གླང་ploughing ox
རྨོད་པ་plough
རྨོད་ལམ་furrow
རྨོན་གླང་farm cattle
རྨོན་དོར་yoke of oxen
རྨོན་པ་དོར་yoke of oxen
རྨོན་པ་རྒྱག་to plow
རྨོན་པ་རྒྱབ་པ་plough
རྨོན་མཛོ་farm cattle
རྨོའོ་grandmother
རྩ་ཁ་སྡོམ་པ་close an opened vein
རྩ་ཁང་thatched house shed
རྩ་ཁུ་sap of plants
རྩ་ཁྲག་འཆོར་བ་the blood exuding
རྩ་གཅོད་པ་cut off the cause
རྩ་གཞུང་root text
རྩ་ཆག་fodder
རྩ་ཆུས་cramp
རྩ་དགོངས་ཞུ་བ་resign
རྩ་དབུ་མ་central channel
རྩ་དམར་bloodshot
རྩ་དམིག་pore
རྩ་དོན་principle theme
རྩ་ནད་paralyze
རྩ་ཕུང་place in tibet
རྩ་བ་དམ་པ་really holy
རྩ་བ་དྲུག་six medicinal roots
རྩ་བ་ན་under a tree
རྩ་བ་ནས་བཞར་scrape away
རྩ་བ་ནས་བཞར་བ་shave entirely away
རྩ་བ་ནས་མ་སོང་was not at all good
རྩ་བ་བཅད་པ་to investigate
རྩ་བ་བཙུགས་པ་implant
རྩ་བ་བཟང་པོ་good roots
རྩ་བ་ཚུགས་root is established
རྩ་བ་འགོག་པ་pull up the root
རྩ་བའི་ཐིག་base line
རྩ་བའི་དམ་ཚིག་basic samayas
རྩ་བའི་རླུང་basic winds
རྩ་བའི་ལྟུང་བ་root infraction
རྩ་བའི་སེམས་fundamental mind
རྩ་བའི་སྟོབས་fundamental force
རྩ་མཇིང་meadow
རྩ་མེད་མ་without basis
རྩ་ཞལ་main face
རྩ་འཁུམ་པ་cramp
རྩ་འཁོར་ལྔ་five chakras
རྩ་འཁྲིད་lineage
རྩ་འགངས་valuable
རྩ་འདབ་secondary channels
རྩ་འདུལ་control of the nadi
རྩ་འདུས་cramp
རྩ་འཕར་pulse is beating
རྩ་འབྱོ་a large number
རྩ་རས་gunny
རྩ་རིང་bush
རྩ་རོ་མ་right channel
རྩ་རྣམས་channels
རྩ་ལ་in the presence of
རྩ་ལ་རྒྱུག་པ་to move the bowels
རྩ་ལག་kinsman
རྩ་ལག་བྱེད་husband
རྩ་ལག་མེད་without relatives
རྩ་ལེན་པ་a small fine
རྩ་ཤེར་mulamadhyamakakarika
རྩ་སྐུད་coir
རྩ་སྔོན་green grass
རྩ་ཧྲམ་tough muscle
རྩག་རྩིག་petty
རྩང་རྩང་a sa bdag monster
རྩངས་པ་chameleon
རྩངས་པག་skin of a lizard
རྩད་ནས་completely
རྩབས་wedge
རྩབས་རྒྱབ་པ་wedge
རྩམ་པ་ནང་བཞིན་powder
རྩམ་པ་རྩིང་པོ་coarse barley flour
རྩའི་སྤྱིལ་པོ་thatched hut
རྩར་ཕེབས་come to the foot of
རྩར་ལ་near
རྩལ་ཁ་རྒྱས་develops in potency
རྩལ་གྱི་མཆོངས་gymnastic feat
རྩལ་ཆེན་ཝ་very powerful
རྩལ་དུ་གསོལ་request
རྩལ་པ་powerful
རྩལ་པོ་ཆེ་བ་very powerful
རྩལ་མཐོན་པ་efficient
རྩལ་མེད་unskillful
རྩལ་འགྲང་པ་vie in skill
རྩལ་འབྱོངས་པ་to progress
རྩལ་ཤོར་all skill is gone
རྩལ་སྦྱོང་ར་བ་drill ground
རྩི་གཏོང་བ་polish
རྩི་ཆེན་asafoetida
རྩི་དཔོན་chief accountant
རྩི་ནག་ཞིག་asphalt
རྩི་བཅུད་nourishment
རྩི་བོ་ཆེ་asafoetida
རྩི་ཚོན་paint
རྩི་ལྗོན་ཤིང་leafy tree
རྩིག་གཞི་foundation of a wall
རྩིག་གེ་mouse
རྩིག་པ་wall
རྩིག་པ་བརྩིགས་build a wall
རྩིག་ཕུག་hole in the wall
རྩིག་རིམ་tier
རྩིག་རྩིག་squeaking of a mouse
རྩིག་རླག་house martin
རྩིག་ལོགས་side of a wall
རྩིང་ཐུད་coarse cheese
རྩིང་ཞིབ་gross and fine
རྩིད་ཕྱིང་felt
རྩིད་བུ་kid
རྩིབ་rib
རྩིབ་གཟེར་pleurisy
རྩིབ་མ་rib
རྩིབ་འབིགས་a great number
རྩིབ་ལོགས་ན་བ་pain about the ribs
རྩིབས་ལོགས་side
རྩིམ་unstripped
རྩིས་ཀྱིས་find by computation
རྩིས་ངན་astrologer
རྩིས་དེབ་cash book
རྩིས་བཀུར་obedience
རྩིས་བྱེད་པ་make account
རྩིས་ཞིབ་པ་auditor
རྩིས་ཟིན་to recognize
རྩིས་འཕྲེང་abacus
རྩིས་ལས་འདས་པ་innumerable
རྩིས་སུ་བཀོད་set into order
རྩིས་སྒྲ་shrieking
རྩུབ་ཉམས་harsh experience
རྩུབ་ཐུང་rough and short
རྩེ་གཏུབ་trim
རྩེ་གཏུབ་པ་prune
རྩེ་གསུམ་trident
རྩེ་གྲ་deluxe
རྩེ་གྲི་bayonet
རྩེ་ཐང་large tibetan town
རྩེ་དགའ་བ་joyful play
རྩེ་ནས་from the top
རྩེ་ཕོ་བྲང་potala palace
རྩེ་བཙུགས་པ་poke
རྩེ་བྲ་གཏོང་བ་skip about
རྩེ་བྲན་crest ornaments
རྩེ་མ་ཁབ་རལ་needle case
རྩེ་མཐོ་ཤོས་climax
རྩེ་མོ་གུག་bent point
རྩེ་མོ་ཅན་arrow kind of tree
རྩེ་མོ་ཉིད་pointedness
རྩེ་མོ་བརྒྱ་པ་mount sumeru
རྩེ་མོ་སྣོན་adding a pinnacle
རྩེ་མོར་སོན་best
རྩེ་རག་irritable
རྩེ་རོལ་humor
རྩེ་རྒོད་mirth and laughter
རྩེ་རྣོ་པོ་ཅན་barbed
རྩེ་ཤོད་top and bottom
རྩེ་སྒྲོ་feathers
རྩེ་སྟོན་མཁན་sharpener
རྩེ་སྦྱོར་peak training
རྩེག་རིམ་tier
རྩེད་གྲོགས་playmate
རྩེད་ཆས་ཝ་ཝ་doll
རྩེད་དགའ་merriment
རྩེད་པོ་ཞིག་chess
རྩེད་མོ་ཞིག་cricket
རྩེད་མོ་རྩེ་to play
རྩེད་མོའི་ཚིག་playful word
རྩེད་མོའི་ར་བ་playground
རྩེད་འགྲན་tournament
རྩེད་འཇོ་ཅན་sporting
རྩེད་སྐྱོད་merriment
རྩེན་གྱིས་ཞོག་rest precisely
རྩེའུ་ཆུང་veins of the neck
རྩེར་ཕྱིན་go to the top of
རྩེར་སོན་in front
རྩོག་ugliness
རྩོད་གཞི་basis of debate
རྩོད་དུང་བ་disputable
རྩོད་དུས་age of conflict
རྩོད་པ་ཐུག་པ་conflict with
རྩོད་པ་མེད་པ་indisputable
རྩོད་པ་རྒྱབ་པ་argue
རྩོད་པ་ཤོར་fights break out
རྩོད་བྱེད་མ་tree pongamia glabra
རྩོད་མེད་beyond dispute
རྩོད་འགྱེད་struggle
རྩོད་འོས་པ་debatable
རྩོད་རྙོག་dispute
རྩོད་རྙོག་ཅན་controversial
རྩོད་སྒྲུབ་dialectic
རྩོམ་པ་དང་པོ་the first beginning
རྩོམ་པ་ལ་མཁས་elegant composer
རྩོམ་བྲིས་essay writing
རྩོམ་མཁན་writer
རྩོམ་ཡིག་article
རྩོམ་རིག་literature
རྩོམ་རིག་གི་literary
རྩོམ་སྒྲིག་གི་editorial
རྩོམ་སྒྲིག་པ་editor
རྩོལ་བ་གློད་པ་to release effort
རྩོལ་བ་བསྐྱེད་make effort
རྩོལ་བའི་རླུང་force of prana
རྩོལ་བྱུང་arisen from exertion
རྩྭ་rite of magic action
རྩྭ་ཁང་hut
རྩྭ་ཁར་pasture
རྩྭ་ངན་weed
རྩྭ་ངན་རྐོ་བ་weed
རྩྭ་ཉག་མ་blade of grass
རྩྭ་དྲེས་མ་a bodhisattva
རྩྭ་བའམ་ཤིང་grass or tree
རྩྭ་ཞྭ་straw hat
རྩྭ་ཡི་ཐག་པ་grass rope
རྩྭ་ར་grazing land
རྩྭ་རས་matting
རྩྭ་རྒྱུས་tissue
རྩྭ་ལྷམ་straw sandals
རྩྭ་སྐམ་པོ་hay
རྩྭཐང་steppe
རྩྭའི་herbal
རྫ་ཀོང་clay oil burner
རྫ་ཁང་pottery
རྫ་ཁུང་clay pit
རྫ་གཡམ་tile
རྫ་གསོང་frying vessel
རྫ་ཆུ་river in khams
རྫ་ཏིབ་earthen teapot
རྫ་ཕོར་earthen cup or dish
རྫ་བུམ་clay pot or jug
རྫ་བོ་earthen vessel
རྫ་མཁན་potter
རྫ་རྡོ་landslide
རྫ་ལེབ་tile
རྫ་ས་clay
རྫབ་ཅན་heinous thug
རྫབ་ཅན་གྱི་outrageous
རྫབ་ཆེན་rogue
རྫར་རྫོར་ཅན་shaggy
རྫས་ཆུང་ངུ་small object
རྫས་ཐིག་substance drop
རྫས་མདེལ་ammunition
རྫས་འཛིན་concretizing
རྫས་འོས་པ་lawful
རྫས་སུ་བཅུ་ten basic categories
རྫི་གསང་བ་dog
རྫི་ཆར་rain with wind
རྫི་ཆར་དྲག་པོ་rain storm
རྫི་ཕོ་male shepherd
རྫིག་པོ་rich
རྫིག་རྫིག་menace
རྫིང་pond
རྫིངས་ship
རྫིངས་ཆེན་large pond
རྫུ་ལ་ཆགས་པ་disguise
རྫུ་སྐྱེས་spontaneous birth
རྫུན་གཏམ་lie
རྫུན་དཔང་false witness
རྫུན་དུ་སྨྲ་བ་lying
རྫུན་ཕུགས་falsehood
རྫུན་བྱེད་པ་tell a lie
རྫུན་མ་བཟོ་བ་falsify
རྫུན་མ་བྱེད་པ་feint
རྫུན་ཚིག་falsehood
རྫུན་ཤོད་པ་lying
རྫུན་ཤོད་མཁན་liar
རྫུབ་རླུང་rough breathing
རྫུས་བག་false pose
རྫུས་སྐྱེས་spontaneous birth
རྫེའུ་ཚོད་pot
རྫོག་མགོ་fist
རྫོགས་པ་ཆེ་total perfection
རྫོགས་པའི་ངང་perfect condition
རྫོགས་པར་བྱ་to perfect
རྫོགས་མཚམས་expiration
རྫོགས་རྒྱུའི་expiry
རྫོགས་སངས་སྐུ་sambuddhakaya
རྫོང་བ་parting gifts
རྫོང་བཙན་fortress
རྫོང་འགོ་commander of a fort
རྫོར་པོ་བཟོ་བ་soil
རྭ་horn
རྭ་ག་ruby
རྭ་ཅོ་horn
རྭ་དབལ་flaming horns
རྭ་རྡུམ་mutilated horn
རྭ་སྤྱིན་glue made of horn
རླག་ཟིན་པ་lost
རླངས་པ་ཆགས་པ་evaporate
རླངས་པོ་lowest social grade
རླངས་བ་steam
རླངས་རླུང་gas
རླན་wet
རླན་གཤེར་liquid
རླན་པ་བཟོ་བ་drench
རླན་མེད་dry
རླན་རློན་beer
རླན་རློན་ཆང་beer
རླན་སྟེང་ཉལ་བ་sleep in the wet
རླན་སྣུམ་raw fat
རླན་སྤང་བ་avoid the wet
རླབས་ཅན་wavy
རླབས་དང་བྲལ་བ་free of waves
རླབས་པོ་ཆེ་great waves
རླབས་འཕྲིན་wireless
རླབས་ཡས་great number
རླིག་པ་ཕྱུང་emasculated
རླིག་པ་འཕྱི་བ་remove the testicles
རླིག་པ་རླུགས་swollen testicle
རླིག་བུ་scrotum
རླིག་མེད་castrated
རླིག་རིལ་testicle
རླིག་རླུགས་པ་swollen testicles
རླིག་སྐྲངས་swollen testicle
རླིག་སྒོང་testes
རླིག་སྦོས་པ་swollen testicles
རླིད་closed leather bag
རླུང་light and moving
རླུང་ཁུག་པ་round of breathing
རླུང་གཡབ་fan
རླུང་གཡོར་sail of a boat
རླུང་གསོས་wave
རླུང་གི་aerial
རླུང་གི་ཁམས་wind constituent
རླུང་གི་གྲོགས་castor oil plant
རླུང་གི་བལ་rainbow
རླུང་གི་ཤུགས་force of the wind
རླུང་ཅན་airy
རླུང་ཆེན་པོ་high wind
རླུང་ཐོག་gale of wind
རླུང་དགང་བ་to hold the breath
རླུང་དང་སྦྱར་join with prana
རླུང་དབྱིབས་shape of prana
རླུང་ནག་dust storm
རླུང་ནད་nervous disorder
རླུང་ཕྱོགས་སུ་windward
རླུང་བགྲང་བ་to count the breath
རླུང་བསིལ་པོ་breeze
རླུང་བསེབ་gale
རླུང་བསྲེག་musk deer
རླུང་བུམ་ཅན་kumbhaka
རླུང་མི་བཙིང་not force breathing
རླུང་ཚ་པོ་windy
རླུང་ཞོན་to ride the wind
རླུང་འཁོར་བ་weathercock
རླུང་འགྲོ་ventilation
རླུང་འཚུབས་hurricane
རླུང་འཛིན་air holding
རླུང་འུ་རུ་རུ་noise of wind
རླུང་ཡི་དུས་period of air
རླུང་རྒྱག་པ་blow
རླུང་རྒྱངས་པ་inflate
རླུང་རྟགས་sign of air
རླུང་ལང་པོ་angry
རླུང་ལངས་པ་get angry
རླུང་ལྦ་wind goiter
རླུང་ཤས་speediness
རླུང་ཤུགས་air energy
རློན་གྷེར་moisture
རློན་པ་wet
རློན་པ་བཟོ་བ་moisten
རློན་པ་བཟོས་པ་drench
རློམ་སེམས་conceited mind
ལ་ཀ་top of a mountain
ལ་ཁ་mountain pass
ལ་ཁྱི་མོ་mountain weasel
ལ་གནས་abide in
ལ་གནས་ནས་having abided in
ལ་གཟིགས་fetus
ལ་གཡོགས་retribution
ལ་ཆུ་rhubarb
ལ་ཉུང་radish and turnip
ལ་ཉེ་a mark
ལ་ཉེ་བ་vulture
ལ་ཉེ་བཟང་པོ་good sign
ལ་ཏ་kind of yarn
ལ་དོན་dative
ལ་དྭགས་ladak
ལ་ཕུག་གཞི་radish seed
ལ་ཕུག་གི་ལོ་མ་radish leaf
ལ་བཏགས་subjoined la
ལ་བརྟེན་through
ལ་མ་kind of herb
ལ་མ་སྲོ་raspberry in kunawar
ལ་མགོ་superscribed la
ལ་མོ་ཤོག་come quickly
ལ་ཟུར་edge of a pass
ལ་འུར་quickly
ལ་འོག་a place
ལ་ཡང་even
ལ་ལ་དག་ན་རེ་some say
ལ་ལི་someone
ལ་སྟེགས་candlestick
ལ་སྤྱོད་to experience
ལག་གཉིས་ཀྱིས་with the hands
ལག་གཉིས་བསྣོལ་to cross the hands
ལག་གཡས་right hand
ལག་གཡས་ཁུ་ཚུར་fist of right hand
ལག་གཡོན་left hand
ལག་གོལ་wrong path
ལག་ཉལ་rdo rje
ལག་ཏུ་in the hands
ལག་ཏུ་བསྣམས་པ་hold up in the hand
ལག་ཏུ་འཆང་བ་hold in the hand
ལག་དགུར་drawn bent hands
ལག་དར་handkerchief
ལག་དོག་handful
ལག་ན་in the hand
ལག་པ་གཏོང་བ་shake hands
ལག་པ་གཡས་མ་right hand
ལག་པ་གཤོགས་པོ་generous
ལག་པ་དམ་པོ་stingy
ལག་པ་ནས་འཇུ་བ་take by the hand
ལག་པ་བཀྲན་པོ་stingy
ལག་པ་བརྡབས་folded arms
ལག་པ་མ་སྦྲེལ་do not join hands
ལག་པའི་manual
ལག་པའི་གོང་མོ་middle finger
ལག་པའི་ཆུ་བོ་name of river sita
ལག་པའི་མཐིལ་the palm of the hand
ལག་པའི་མདུན་palm of the hand
ལག་པའི་རྒྱབ་back of the hand
ལག་པའི་སོར་མོ་fingers
ལག་པས་ནོམ་པ་grabble
ལག་པས་བཞོགས་split with the hand
ལག་པས་འཆང་བ་touch
ལག་པས་འཇུ་བ་handle
ལག་པས་འཐམ་པ་embrace
ལག་བཟང་མ་celestial courtesan
ལག་བཟེད་hand basin
ལག་བརྡ་གཏོང་བ་beckon
ལག་བརྡ་བྱེད་པ་gesticulate
ལག་བསྡམས་sexual embrace
ལག་བེར་walking staff
ལག་མཆོད་hand offering
ལག་མཐིལ་the palm of the hand
ལག་མདའ་pistol
ལག་ཚིགས་wrist
ལག་ཞར་having only one hand
ལག་འཐག་mill
ལག་འབོམ་hand grenade
ལག་འབྲས་ཐོན་cut up
ལག་རྗེས་imprint
ལག་རྟེན་parapet
ལག་རྩ་pulse
ལག་རྩལ་གྱི་skillful
ལག་རྩལ་མཁས་པ་artisan
ལག་རྩལ་མེད་པ་inapt
ལག་ལས་སྐྱེས་king
ལག་ལེན་གྱི་practical
ལག་ལེན་དུ་མཛད་practiced
ལག་ཤུགས་glove
ལག་ཤེས་པ་craftsman
ལག་ཤེས་བཟོ་ལས་handicraft
ལག་སྐྱོང་knife
ལག་སྡམ་པ་handcuffed
ལག་སྤྲོད་cash payment
ལགས་ང་བདེ་པོ་thank you
ལགས་མ་ལགས་yes or no
ལགས་མོ་clean
ལགས་མོད་དམ་is it not
ལགས་རེད་yes
ལང་cow
ལང་ཀ་ceylon
ལང་བསྐྱར་afresh
ལང་མ་ཡིན་not repeat here
ལང་མ་ལིང་sweeps and soars
ལང་ཚོ་youth
ལང་ཚོ་ཡོལ་life slips away
ལང་ཚོ་ལོན་པ་womanhood
ལང་ཚོ་ལྡན་adolescent
ལང་ཚོ་ལྡན་པ་youthful
ལང་སྐྱོན་ཆེ་that is very bad
ལངས་ཏེ་སྡོད་པ་get up and stand
ལངས་ལུགས་manner of rising
ལངས་སོ་he has arisen
ལངས་སྡོད་པ་stand
ལད་ཀ་work
ལད་མོ་imitation
ལད་མོ་བྱས་emulate
ལན་ཀྲང་company commander
ལན་གཉིས་twice
ལན་གྲངས་number of times
ལན་གྲངས་མང་a few times
ལན་ཅི་ཙམ་how many times
ལན་ཅིག་one time
ལན་ཅིག་གི་ཚེ་single lifetime
ལན་ཅིག་མ་ཡིན་not just once
ལན་ཆགས་པོ་creditor
ལན་ཏ་ཀ་a drug
ལན་ཐོབ་get a reply
ལན་དགུ་nine times
ལན་དུ་in reply to that
ལན་དུ་མར་many times
ལན་ཕྲན་braid of hair
ལན་བཅུ་ten times
ལན་བསྐུར་send a reply
ལན་བསྐུར་བ་send a reply
ལན་བུ་ཅན་woman
ལན་བླན་པ་give a reply
ལན་མང་དུ་many times
ལན་མང་པོ་many times
ལན་ཚ་salt
ལན་ཚྭ་ཆུ་salt water
ལན་ཚྭ་བ་salt taste
ལན་འགའ་sometime
ལན་འགའ་ཞིག་sometimes
ལན་འགར་a few times
ལན་རེ་each time
ལན་རེ་ལན་གཉིས་once or twice
ལན་ལྒ་ལྟག་པ་give a reply
ལན་སྐྱེལ་errand
ལན་སྨྲ་give a reply
ལབ་to say
ལབ་ག་talk
ལབ་ཅི་ཅི་བྱེད་call
ལབ་ཕིང་bean jelly
ལབ་མི་ཐུབ་cannot speak
ལབ་རྡོལ་talking unbecomingly
ལབ་སོན་radish seed
ལམ་ཀ་ན་by the road side
ལམ་ཁ་road
ལམ་ཁར་by the road side
ལམ་ཁུག་པ་twist of a road
ལམ་ག་road
ལམ་གཅོད་པ་cut off the path
ལམ་གཟུར་side of a road
ལམ་གསུམ་three paths
ལམ་གུ་དོག་narrow path
ལམ་གྱི་འགྲམ་roadside
ལམ་གྱི་རྟོགས་path realization
ལམ་གྱི་སེམས་path mind
ལམ་ཆད་པ་cut off the path
ལམ་ཆེ་བ་total path
ལམ་དངུལ་traveling expenses
ལམ་དུ་ཁྱེར་make use of
ལམ་དུ་འགོར་བ་linger on the way
ལམ་ན་སྒུག་པ་wait on the road
ལམ་ནས་འཛུར་བ་step aside in a path
ལམ་པ་བ་practitioner
ལམ་པ་བ་རྣམས་practitioners
ལམ་ཕྱེད་ཙམ་དུ་about half way
ལམ་བདེན་པ་true paths
ལམ་བཟོ་road construction
ལམ་བར་on the road
ལམ་བར་བཀག་པ་intercept
ལམ་བཤོག་པ་hew a path
ལམ་བྲལ་kind of tree
ལམ་མཐོ་road marker
ལམ་མདོ་road junction
ལམ་མེ་བ་vividness
ལམ་ཟབ་profound path
ལམ་ཟུར་དུ་wayside
ལམ་འགྲོ་མེད་པ་have bad luck
ལམ་འདེགས་riding horse
ལམ་འཕྱུག་པ་mistake the road
ལམ་རྣམ་པ་གཉིས་two kinds of paths
ལམ་ལམ་flashing
ལམ་ལས་བྱུང་derive from the way
ལམ་ལོག་པ་wrong way
ལམ་ལོམ་large number
ལམ་ལྷོང་prosperity
ལམ་ལྷོང་ཅན་prosperous
ལམ་སང་དུ་immediately
ལམ་སྣ་guide
ལམ་སྣ་པ་guide
ལམ་སྣ་འཁྲིད་པ་steer
ལམ་སྤྱད་པ་practice the path
ལམ་སྲང་མདོ་street corners
ལའང་even
ལས་ཀ་work
ལས་ཀ་ཅན་worker
ལས་ཀ་ཆེར་མ་idleness
ལས་ཀ་བྱེད་མཁན་employee worker
ལས་ཀ་བྱེད་འགོ་touch
ལས་ཀ་འབྱོང་པོ་skilful work
ལས་ཀ་རྫབ་ཆེན་felony
ལས་ཀ་སྤྲོད་པ་employ
ལས་ཀྱང་instead of
ལས་ཀྱི་ཐིག་ལེ་bindus of action
ལས་ཀྱི་དབང་མོ་dakini
ལས་ཀྱི་ཚེ་བཀག་to block karmic life
ལས་ཀྱི་འཆིང་བ་fetters of karma
ལས་ཀྱི་ལམ་path of action
ལས་ཀྱིས་བྲེལ་busy with activities
ལས་ཀྱིས་སྐོ་བ་destiny
ལས་ཁུངས་office
ལས་གསར་new work
ལས་གསོག་ཚུལ་ways to create karma
ལས་གླ་wages for work
ལས་ཆེ་probability
ལས་དགེ་བ་virtuous action
ལས་དང་པོ་beginner
ལས་དབོན་head workman
ལས་དམ་seal
ལས་དོན་བྱེད་པ་work
ལས་དྲུང་clerk
ལས་ནག་bad action
ལས་ཕྱི་རོལ་དུ་be far from
ལས་བརྩམས་ཏེ་beginning with
ལས་བརྩམས་ཞིང་beginning with
ལས་བསྡོམས་report
ལས་བུམ་bottle with no beak
ལས་བྱ་བར་ཆུང་less energetic
ལས་བྱང་practice
ལས་མཁན་servant
ལས་མི་འབྱུང་not arise other than
ལས་ཚན་དུ་འཇུག་appoint
ལས་ཚན་ནས་འདོན་dismiss
ལས་ཞོར་spare time
ལས་ཟད་exhaustion of karma
ལས་འཁྱུར་retirement
ལས་འབྲེལ་karmic connection
ལས་འཛོལ་accident
ལས་རབ་གྲུབ་པ་a buddha realm
ལས་རྒྱ་མཚོ་countless deeds
ལས་རྩལ་པ་technician
ལས་རྩལ་བཟོ་པ་skilled worker
ལས་ལ་དུར་བ་hasten to work
ལས་ལ་བཀྲལ་བ་engage in business
ལས་ལ་སྐོ་བ་destine
ལས་ལོག་པ་opposite from
ལས་སུ་བསྐུལ་བ་engage
ལས་སུ་བྱ་བ་object
ལས་སུ་འཇུག་པ་execute
ལས་སྐལ་དམན་པ་unfortunate people
ལས་སྒྲིབ་karmic obstruction
ལས་སྟོད་place in upper tibet
ལས་སྣ་ཚོགས་ཅན་divine architect
ལས་སྦྱོར་destructive action
ལས་སླ་པོ་easy
ལས་སླ་པོར་easily
ལས་སླ་བ་easy work
ལི་ཀ་a tree
ལི་ཀ་ར་medicinal sugar
ལི་ཁ་ར་medicinal sugar
ལི་ག་དུར་drug
ལི་གི་སྐྱེས་crow
ལི་ཏྭ་plum
ལི་ཐུར་bronze spoon
ལི་ཐོ་calendar
ལི་དཀར་kind of bronze
ལི་དམར་kind of bronze
ལི་དོང་ར་medicinal drug
ལི་བ་མིག་squinting eyes
ལི་ཡུའུ་ཉ་carp
ལི་སེར་kind of bronze
ལི་སྐུ་image of bronze
ལི་སྡོང་pear tree
ལི་སྨུག་kind of bronze
ལིག་བུ་མིག་malachite
ལིག་ཤི་ཝེར་nutmeg
ལིང་red flag
ལིང་ག་ཅན་male organ
ལིང་གཅིག་of one piece
ལིང་ངེ་བ་concrete
ལིང་པོ་concrete
ལིང་བ་any entire piece
ལིང་བཞི་four pieces
ལིངས་ཀྱི་hound
ལིངས་དུང་hunting bugle
ལིངས་པ་མོ་huntress
ལིངས་འདེབས་པ་hunt
ལིའི་ཙི་chestnut
ལུ་གུ་lamb
ལུ་མ་ཅན་rich in springs
ལུག་sheep
ལུག་གི་ཁྱུ་flock of sheep
ལུག་གི་གཤེད་wolf
ལུག་ངལ་བ་medicinal herb
ལུག་ཆུང་བ་medicinal herb
ལུག་ཐང་wether
ལུག་ཐུག་ram
ལུག་ཐུལ་dress of sheep skin
ལུག་ཕོ་ram
ལུག་ཕྲུག་lamb
ལུག་བཞོན་མ་milch sheep
ལུག་བཤས་slaughtered a sheep
ལུག་མོ་ewe
ལུག་ཚང་sheep pen
ལུག་ཚིལ་mutton fat
ལུག་ཚོན་པོ་fat sheep
ལུག་རྒྱུད་threads
ལུག་ལྤགས་sheepskin
ལུག་ཤ་mutton
ལུག་ཤ་གསར་པ་fresh mutton
ལུག་སྙིད་wether
ལུགས་གོང་crucible
ལུགས་མཐོང་concordant process
ལུགས་འབྱུང་forward process
ལུགས་ལྡོག་reverse process
ལུགས་སྤྱི་general principle
ལུང་གཤོངས་gorge valley
ལུང་གི་ཆོས་the verbal doctrine
ལུང་ཐན་name of a tree
ལུང་དུ་མ་བསྟན་unidentified
ལུང་དྲངས་པ་quote
ལུང་པ་ད་གའི་indigenous
ལུང་པ་འདི་ལ་in this valley
ལུང་བཀའ་authorizations
ལུང་བསྟན་གསོལ་prophesy
ལུང་བསྟན་གྱི་prophetic
ལུང་བོང་bullock
ལུང་ཚགས་པ་collected mind
ལུང་ཚིག་dogma
ལུང་འདི་this teaching
ལུང་ལས་from scripture
ལུང་སྟོན་prophesize
ལུད་ཁུ་dung water
ལུད་དོང་dung hole
ལུད་པ་གཡུག་པ་expectorate
ལུད་ཕུང་dung hill
ལུད་འགྲེམ་པ་spread manure
ལུད་འབུ་grubs in a dung hill
ལུད་འབོད་པ་cough out
ལུད་རྒྱག་པ་apply fertilizer
ལུའི་brigade
ལུའི་ཀྲང་brigade commander
ལུས་ཀུན་entire body
ལུས་ཀྱི་ནད་physical illness
ལུས་ཀྱི་བརྡ་overt activity
ལུས་ཀྱི་མདངས་spirit
ལུས་ཀྱི་རེག་པ་copulation
ལུས་ཀྱི་རྩ་muscles
ལུས་ཁོག་trunk of the body
ལུས་གནད་བསྲང་upright posture
ལུས་གུ་རྒྱུད་interlinked
ལུས་གློད་relax the body
ལུས་ངན་མིག་patala tree
ལུས་ཅན་the embodied
ལུས་ཆད་corporeal punishment
ལུས་ཉམས་ཆུང་བ་lean body
ལུས་ཐད་ཀྲོང་body erectly stood
ལུས་ཐིག་body measurements
ལུས་དང་ངག་body and speech
ལུས་དང་ཡན་ལག་body and limbs
ལུས་དང་སེམས་body and mind
ལུས་དང་སྲོག་body and life
ལུས་དབང་པོ་sensory activity
ལུས་དམར་saffron
ལུས་དྲོད་physical heat
ལུས་ནས་after leaving behind
ལུས་པོར་སྐྱེས་hair
ལུས་བརྟན་པ་firm body
ལུས་བོངས་bulk of the body
ལུས་བྱད་form of the body
ལུས་མགྱོགས་bird
ལུས་མཆོག་cinnamon
ལུས་མཆོག་མ་handsome woman
ལུས་མི་སྡུག་scorpion
ལུས་མིར་in a human body
ལུས་འཁྱགས་freezing body
ལུས་འབབ་sweat
ལུས་ཡངས་light body
ལུས་རྐྱང་naked body
ལུས་རྒྱགས་པ་fat
ལུས་རྟེན་physical basis
ལུས་རྡོས་ཆེ་བ་very corpulent body
ལུས་རྩལ་མཁས་པ་gymnast
ལུས་ལ་གཏོགས་པ་included in the body
ལུས་ལྕིམ་pregnant woman
ལུས་སེམས་body and mind
ལུས་སྐྱེད་growth of the body
ལུས་སྒྲིབ་bodily obstructions
ལུས་སྨད་ལྔ་ས་prostrate oneself
ལེ་ཐོ་calendar
ལེ་ལན་པ་blame
ལེ་ལན་བདའ་བ་blame
ལེ་ལོ་མ་lazy woman
ལེ་ལོའི་ཚིག་words of idleness
ལེགས་གནས་best
ལེགས་ཉེས་beautiful or ugly
ལེགས་དགུ་everything positive
ལེགས་ནས་འོང་will be excellent
ལེགས་པ་ཉོན་to listen carefully
ལེགས་པ་ཡིན་it is best
ལེགས་པའི་ཚོགས་great benefits
ལེགས་པར་གསན་to listen well
ལེགས་པར་ཉོན་listen well
ལེགས་པར་ཕྱེས་to open wide
ལེགས་པར་བྱ་བ་well done
ལེགས་པར་མཇལ་to see well
ལེགས་པར་ཞིམ་delicious
ལེགས་པར་ཟུངས་imprint well
ལེགས་པར་སྐྱེས་auspiciously born
ལེགས་པོར་གོ་well understood
ལེགས་བརྗོད་full description
ལེགས་བསྐྱངས་properly sustaining
ལེགས་བྱིན་མ་name of sgrol ma
ལེགས་བླངས་properly receiving
ལེགས་ལམ་auspicious
ལེགས་ཤོས་best
ལེགས་སྐྱོང་བ་to protect well
ལེགས་སྤྱད་excellent practice
ལེགས་སྤྱོད་good actions
ལེགས་སྦྱར་speech
ལེགས་སྦྱར་སྐད་sanskrit
ལེགས་སྨྲ་full description
ལེན་ཀ་ར་a place
ལེན་གྱིན་still singing
ལེན་པ་འདྲ་as if stolen
ལེན་བཞིན་པ་taking
ལེན་མེད་unassailable
ལེན་ཟིན་པ་took
ལེན་འོས་པ་acceptable
ལེབ་པོ་flat
ལེབ་མོ་flat
ལེབ་མོར་གླེབ་make flat
ལེའུ་chapter
ལོ་ཀ་world
ལོ་གསར་new year
ལོ་གྲངས་teens
ལོ་ཅི་ཙམ་ལོན་how old are you
ལོ་ཆག་every second year
ལོ་ཏོག་harvest
ལོ་ཏོག་གཉེན་rain
ལོ་ཐང་གཅོད་པ་fix yearly tribute
ལོ་ན་གཞོན་པ་young
ལོ་ན་ཕྲ་བ་young
ལོ་ན་སོན་to grow old
ལོ་ནས་ལོ་རུ་from year to year
ལོ་ཕོག་yearly pay
ལོ་ཕྱག་annual rent
ལོ་བཅུ་decade
ལོ་བཅུ་རེར་decennial
ལོ་བརྒྱད་eight years
ལོ་མ་leaf
ལོ་མ་གྱོན་མ་parnasabari
ལོ་མ་ཆུང་ཆུང་leaflet
ལོ་མང་པོ་many years
ལོ་ཙཱ་བ་translator
ལོ་ཙཱབ་དྲུག་six translators
ལོ་ཙྭ་translator
ལོ་ཟླ་year and month
ལོ་འདབ་leaf
ལོ་འདོད་yearning
ལོ་ཡི་ཤིང་རྟ་sun
ལོ་རང་དྲུག་ཅུ་sixty year cycle
ལོ་རྒྱུས་ན་in a book of history
ལོ་རྒྱུས་བཤད་to tell a story
ལོ་རྙིང་last year
ལོ་ལྔ་བཅུ་ལོན་of fifty years
ལོ་ལྗང་བ་green leaf
ལོ་ལྟར་གྱི་annual
ལོ་ཤས་རིང་for some years
ལོ་སྐག་unlucky year
ལོ་སྙམ་པ་think
ལོ་སྟ་ཀ་arrow
ལོ་སྟར་every year
ལོ་ཧིན་ཏ་ར་lohintara river
ལོག་གི་རིག་པ་false knowledge
ལོག་ཆུང་young in years
ལོག་ཐང་kind of linen
ལོག་པ་མཁན་rebel
ལོག་པ་འཐད་let us turn back
ལོག་པ་འབྲད་let us turn back
ལོག་པའི་ནན་ཏན་wrongly progress
ལོག་པའི་ཚིག་mistaken words
ལོག་པའི་ལྟ་བ་wrong view
ལོག་པའི་ཤེས་པ་wrong consciousness
ལོག་པའི་སྐད་secret language
ལོག་པར་གཡེམ་བ་adultery
ལོག་པར་ལྟ་wrong view
ལོག་པར་ལྟ་བ་wrong view
ལོག་ཕྱོགས་opposite class
ལོག་འདྲེན་པ་mislead
ལོག་འཚོ་corruptly lived
ལོག་ལ་འདོད་དོ་let us turn back
ལོག་ལྟ་wrong view
ལོག་སུ་འགྲོ་wrongly go
ལོག་སྤྱོད་ཅན་reactionary
ལོགས་ན་on the earth
ལོགས་པར་ཞུགས་to be opinionated
ལོགས་ཤིག་outside
ལོགས་སུ་separately
ལོགས་སུ་དགར་བ་lay aside
ལོགས་སུ་ཕྱེ་to separate
ལོགས་སུ་བཀར་བ་lay aside
ལོགས་སུ་བཀྲལ་differentiate
ལོགས་སུ་བཅར་བ་prop sideways
ལོང་ཀི་red cloth
ལོང་པོ་rising
ལོང་པོ་སྟོད་district in kongpo
ལོང་བཏང་བ་send a reply
ལོང་བྱའི་ཚིགས་ankle joint
ལོང་ཡོད་leisure
ལོངས་མེད་no leisure
ལོངས་ཤིག་get it from
ལོངས་སྤྱོད་ཅན་having resourses
ལོངས་སྤྱོད་བྱ་objects of use
ལོན་པའི་རོ་fresh corpse
ལོན་བཟང་good news
ལོན་སྐྱུར་བ་give a reply
ལོབ་tamed
ལོས་ཀྱང་in the same way
ལོས་ཐུབ་yes i can
ལྐུག་wager
ལྐུགས་གཏམ་foolish talk
ལྐུགས་པ་མ་dumb woman
ལྐོག་གླུ་secret hummed song
ལྐོག་ཆད་secret punishment
ལྐོག་ཏུ་ལབ་པ་speak confidentially
ལྐོག་པ་hard covering
ལྐོག་བདུད་larynx
ལྐོག་ཟས་ཟ་བ་take food secretly
ལྐོག་རྔན་bribe
ལྐོག་སོག་craw of birds
ལྐོལ་མདུད་larynx
ལྒ་རློན་fresh ginger
ལྒ་སེར་turmeric
ལྒ་སྐྱ་ginger
ལྒང་ངེ་marble white
ལྒང་བུག་bladder
ལྒང་ཞུ་lantern
ལྒའུ་གཤེར་fresh ginger
ལྔ་five
ལྔ་ཅན་fives
ལྔ་ཅར་all five together
ལྔ་ཆ་གཉིས་two fifths
ལྔ་ཆ་བཞི་four fifths
ལྔ་པའི་དོན་the five sciences
ལྔ་བ་flash of lightning
ལྔ་རེ་fives
ལྕ་སྒ་white ginger
ལྕག་དངོ་lash of whip
ལྕག་འབྲས་whip cord
ལྕག་འབྲེང་lash of whip
ལྕག་ཡུ་handle of a whip
ལྕག་རིལ་slug
ལྕག་རྒྱུག་rod
ལྕག་ལུང་buckle
ལྕག་ལྕིག་number
ལྕགས་iron
ལྕགས་ཀུག་iron hood
ལྕགས་ཀྱི་རི་iron mountains
ལྕགས་ཀྱི་ཤལ་མ་hell
ལྕགས་ཁབ་iron needle
ལྕགས་ཁེམ་iron shovel
ལྕགས་ཁྲོལ་iron caldron
ལྕགས་གཞོང་tub
ལྕགས་གཟར་iron spoon
ལྕགས་གཟེར་iron nail
ལྕགས་གོས་coat of mail
ལྕགས་དབྱི་black lynx
ལྕགས་དམར་copper
ལྕགས་དུག་poison of iron
ལྕགས་དོང་iron tube
ལྕགས་དྲ་iron lattice
ལྕགས་ཕོར་iron cup
ལྕགས་ཕྱེ་iron filings
ལྕགས་བདར་file
ལྕགས་བཟོ་ཁང་smithy
ལྕགས་བཟོ་བ་blacksmith
ལྕགས་བསྲོ་smoothing iron
ལྕགས་མག་tinder case
ལྕགས་མགུ་iron pot
ལྕགས་མགོ་iron ladle
ལྕགས་ཚགས་iron sieve
ལྕགས་ཚན་གཞུ་བ་lash
ལྕགས་ཞ་helmet
ལྕགས་ཞོལ་a weapon
ལྕགས་ཟངས་iron kettle
ལྕགས་ཟམ་iron bridge
ལྕགས་རི་fence
ལྕགས་རིགས་metal
ལྕགས་སོལ་powdered coal
ལྕགས་སྐམ་iron pincers
ལྕགས་སྒོར་iron pan
ལྕགས་སྒྲོ་iron fetters
ལྕགས་སྒྲོག་shackle
ལྕགས་སྡིག་iron scorpions
ལྕགས་སྡེར་iron plate
ལྕགས་སྣོད་flask
ལྕགས་སྤུ་place in tibet
ལྕགས་སྨྱུག་pen
ལྕང་མ་tree
ལྕང་མའི་ཡལ་ཀ་strip
ལྕང་ཤོས་red willow
ལྕི་བ་སྐམ་པོ་dried dung of cattle
ལྕི་བའི་ལས་grievous act
ལྕི་མདའ་place in tibet
ལྕི་རློན་fresh dung of cattle
ལྕིག་ལྕིག་slightly moving
ལྕིད་heavy
ལྕུག་གུ་tender twig
ལྕུག་པ་supple branch
ལྕུག་མདལ་creeping plant
ལྕུང་ཀ་jackdaw
ལྕུང་མོ་thimble
ལྕེ་tongue
ལྕེ་ཀྱིགས་frenum of the tongue
ལྕེ་གཞུང་middle of the tongue
ལྕེ་ཆུང་uvula
ལྕེ་དིག་པ་stammer
ལྕེ་བདེ་པོ་fluent
ལྕེ་བདེ་བདེ་enunciate well
ལྕེ་མྱང་ཚྭ་alum
ལྕེ་འབར་བ་burning flame
ལྕེ་རྩེ་tip of the tongue
ལྕེ་ལག་རྒྱག་པ་lick
ལྕེ་ལེབ་tongue
ལྕེ་སྙིང་མེད་thunder bolt
ལྕེ་སྤྱང་jackals
ལྕེ་སྤྱང་མིག་eye of jackal
ལྕེབ་བྱས་པ་committed suicide
ལྕེའི་རྣམ་ཤེས་tongue consciousness
ལྕོག་ཙེ་small low table
ལྕོག་རྩེ་small low table
ལྕོག་ལྕོག་nod
ལྕོགས་པ་བཟོ་བ་enable
ལྕོང་མོ་tadpole
ལྗག་མ་fine satin
ལྗག་མོ་གླིང་ག་state grove in tibet
ལྗགས་དབུགས་breath
ལྗགས་མཆིལ་spittle
ལྗང་ཁུ་green
ལྗང་པ་སྐྱེ་བ་sprout
ལྗང་པ་སྐྱེས་བ་germinate
ལྗང་མོ་district in lithang
ལྗངས་place west of lhasa
ལྗངས་མི་རྣམས་provincial people
ལྗབ་ལྗབ་large number
ལྗི་heaviness
ལྗིག་གོག་weight
ལྗིད་གནོན་oppressive
ལྗིད་གོག་gravity
ལྗིད་ཅན་heavy
ལྗིད་ཆེ་བ་very heavy
ལྗིད་ནོན་oppressive
ལྗིད་བ་heavy
ལྗོངས་ཆེན་པོ་large country
ལྗོན་པ་ལུང་district in kong po
ལྗོན་པ་སེར་པོ་deodara tree
ལྗོན་པའི་གགས་sublime forest
ལྟ་གོན་prelude
ལྟ་གྱི་འདུག་is seeing
ལྟ་ངན་མེད་no bad views
ལྟ་ཉུལ་seeking further
ལྟ་དང་བྲལ་བ་free from views
ལྟ་བ་ངན་པ་bad view
ལྟ་བ་དམན་པ་the lower views
ལྟ་བ་དྲང་པོར་right view
ལྟ་བ་མཐོ་བ་high view
ལྟ་བ་རྣམ་དག་true view
ལྟ་བ་ལ་དགའ་བ་delight in views
ལྟ་བ་ལོག་པ་wrong view
ལྟ་བར་བྱ་should be viewed as
ལྟ་བས་གཟིངས་པ་rationalism
ལྟ་བསྐོར་visit
ལྟ་བསྐོར་བ་visitor
ལྟ་བུ་ཉིད་similarity
ལྟ་བྱེད་eye
ལྟ་མོ་བ་audience
ལྟ་མོའི་ལེའུ་scene
ལྟ་ཞིབ་བྱེད་པ་observe
ལྟ་འོས་པ་sightly
ལྟ་རྟོག་གི་vigilance
ལྟ་རྟོག་ཅན་vigilant
ལྟ་རྟོགས་care
ལྟ་རྟོགས་པ་caretaker
ལྟ་སྟངས་སྨད་lower the gaze
ལྟ་སྣང་མ་མཛེས་vulgar
ལྟ་སྣང་ལ་མ་squalid
ལྟ་སྣོལ་བ་interchange looks
ལྟ་སྲུང་ward
ལྟ་སྲུང་བ་warden
ལྟག་ཀོར་bones of the neck
ལྟག་རྩ་back
ལྟག་སྒོ་back door of a house
ལྟང་བུག་ཐོང་bore through
ལྟངས་སྤྱད་minutely examine
ལྟད་མོ་བལྟ་ཁང་theater
ལྟད་མོ་མཛོད་take delight in it
ལྟད་མོ་ལྟ་བའི་theater
ལྟན་པ་joined together
ལྟབ་གྲི་clasp knife
ལྟབ་བྱེད་པ་fold up
ལྟར་གྱི་in accordance with
ལྟར་ན་in that case
ལྟར་བཅོས་made like
ལྟར་བྱེད་make like
ལྟས་བརྟག་to examine
ལྟས་ཚར་has seen
ལྟས་ཟིན་has seen
ལྟས་རྣམ་པ་omen
ལྟི་རི་pitcher
ལྟིངས་unclear
ལྟིབ་པ་fall through
ལྟིར་full
ལྟུང་བ་གཤོག་པ་confess a fall
ལྟུང་བ་ཕྲ་མོ་subtle infraction
ལྟུང་བ་བཤགས་པ་confession of sin
ལྟུང་བཟེད་begging bowl
ལྟུང་བའི་རྩ་བ་root infraction
ལྟུང་བཤགས་confession
ལྟུང་བས་གོས་པ་stained with sin
ལྟུང་མེད་sinless
ལྟུང་ཟིན་པ་fell
ལྟེ་ཁུང་socket
ལྟེ་བ་གཞུང་རང་lhasa
ལྟེ་བ་བཟང་mount tise in ngari
ལྟེ་བ་བལ་ཅན་spider
ལྟེ་བ་འཁྱིལ་a medicine
ལྟེ་བར་at the navel
ལྟེ་ཡུ་handle of axe
ལྟེ་ལེ་polecat
ལྟེང་པོ་lethargic
ལྟེང་རྒྱས་name of a buddha
ལྟེབས་རྩེ་crease
ལྟེམ་བསད་has just been killed
ལྟོ་གཡོ་བ་prepare food
ལྟོ་གོས་food and clothes
ལྟོ་ཅན་arrow
ལྟོ་ཆས་food
ལྟོ་ཆེ་appetite
ལྟོ་ཐབ་hearth to cook food
ལྟོ་བ་belly
ལྟོ་བ་ཕྲལ་བ་split open the belly
ལྟོ་བ་བཤལ་བ་purge the bowels
ལྟོ་བ་འགེངས་པ་full stomach
ལྟོ་བ་སྦོས་belly is swollen
ལྟོ་མ་ཟ་བ་fast
ལྟོ་ཚང་གཅིག་པ་inmate
ལྟོ་ཟ་ནུས་can eat food
ལྟོ་ཟ་རན་པ་time to take food
ལྟོ་ཟ་སྟངས་diet
ལྟོ་ཟོས་དང་eat food
ལྟོ་རྒྱབ་food and clothes
ལྟོ་ལ་བརྣན་པ་eager for food
ལྟོ་ལྡིར་ཅན་big bellied
ལྟོ་ལྡིར་བ་bulbous
ལྟོ་སྐལ་share of food
ལྟོ་སྟེར་བ་feed
ལྟོ་སྣོད་crockery dish
ལྟོ་སྦོས་swollen belly
ལྟོགས་to be hungry
ལྟོགས་འདྲེ་demon
ལྟོགས་རྔམ་ཅན་ravenous
ལྟོགས་རྔམས་hunger
ལྟོགས་རྔམས་ཅན་voracious
ལྟོགས་ཤི་ཐེབས་to starve to death
ལྟོགས་སྒུར་bearing hunger
ལྟོངས་summit
ལྟོར་bastard
ལྡ་གུ་ཅན་talkative
ལྡ་གུ་ལབ་པ་talk
ལྡག་པ་lick
ལྡང་ངེས་sufficient
ལྡང་བ་ཡང་བ་light rising
ལྡང་བར་འགྱུར་raises up
ལྡང་མིན་insufficient
ལྡང་ཚད་sufficiency
ལྡན་མ་a district in kham
ལྡབ་བཅུ་tenfold
ལྡབས་ཕྱོར་large number
ལྡམ་བུ་muddy water
ལྡམ་ལྡམ་very slothful
ལྡི་རི་རི་rattling of thunder
ལྡིང་ཀ་pond
ལྡིང་ཁྲི་seat
ལྡིང་བཞིན་adrift
ལྡིང་ཟངས་large copper caldron
ལྡིང་འགྲོས་strut
ལྡིང་ཤེས་science of flight
ལྡིང་སྐྱོགས་large copper ladle
ལྡིང་སྐྱོངས་large copper ladle
ལྡིར་བཞིན་like thunder
ལྡིར་ཚ་བ་thundering
ལྡུགས་སྐུ་molten image
ལྡུམ་དུག་poison of plants
ལྡེ་ཆེན་senior treasurer
ལྡེ་མིག་key
ལྡེ་མིག་ཁྱེར་take the key
ལྡེ་མིག་པ་storekeeper
ལྡེང་ཀ་pond
ལྡེང་མིན་insufficient
ལྡེམ་དགོངས་design a plan
ལྡེམ་འགྲོས་walk
ལྡེམ་འཕྲུ་crest banner
ལྡེམས་flex
ལྡེའུ་མིག་key
ལྡེའུ་སྒང་place in tibet
ལྡོག་ཆ་isolate factor
ལྡོག་པ་ཐ་དད་different isolates
ལྡོག་མི་བྱེད་do not deviate from
ལྡོག་ལན་reaction
ལྡོག་སྐྱེན་པ་being dragged back
ལྡོག་སྒོམ་reversal meditation
ལྡོག་སྟེ་against
ལྡོང་མོ་tea churner
ལྡོབ་བེ་བ་dull
ལྤགས་བྱེའུ་bat
ལྦ་བ་goiter
ལྦུ་བ་འདོན་པ་effervesce
ལྷ་ཁ་divine fame
ལྷ་ཁུང་bend of the knee
ལྷ་གཉན་རྣམས་deities of terror
ལྷ་གདོང་place in gung thang
ལྷ་གསོལ་བ་worship a god
ལྷ་ཅིག་princess
ལྷ་དཀར་white deities
ལྷ་དགུ་a sa bdag demon
ལྷ་དངོས་real god
ལྷ་པ་medium
ལྷ་བཀའ་oracular trance
ལྷ་བཞིན་པ་knitting
ལྷ་བཞུགས་པ་trance
ལྷ་བུ་བདུད་godling devil
ལྷ་བྲན་dancing deity
ལྷ་བླ་མ་father of bromston
ལྷ་མི་divine or human
ལྷ་མིན་ས་བོན་seed of the asuras
ལྷ་མོ་ཚོགས་པ་opera association
ལྷ་མོ་རྟ་certain insect
ལྷ་ཚངས་པ་name of brahma
ལྷ་ཚོགས་ཀུན་countless hosts
ལྷ་ཚོགས་རྣམས་hosts of deities
ལྷ་འདྲ་བ་like a god
ལྷ་འདྲེ་gods and demons
ལྷ་འབབ་descent of the gods
ལྷ་འབྲུམ་smallpox
ལྷ་ཡི་ཆུ་བོ་ganges river
ལྷ་ཡི་དབང་པོ་name of indra
ལྷ་ཡི་ཕྱག་མཚན་trident
ལྷ་ཡི་བཟའ་ཤིང་alstonia tree
ལྷ་ཡི་ལྷ་god of gods
ལྷ་ཡི་ས་བོན་seed of the devas
ལྷ་རབ་best
ལྷ་རི་holy mountain
ལྷ་རྫས་གོས་divine silk
ལྷ་ཤིག་bug
ལྷ་ས་པ་one of lhasa
ལྷ་སྒང་place in kham
ལྷ་སྔགས་deities and mantras
ལྷ་སྡིངས་place in yarklung
ལྷ་སྦྱིན་ཉིད་devadatta
ལྷག་གནས་bringing down
ལྷག་གེ་vivid
ལྷག་གེར་མཐོང་clearly saw
ལྷག་ཏུ་འདས་པ་surpass
ལྷག་པ་ཤེས་རབ་higher understanding
ལྷག་པའི་བསམ་པ་unusual attitude
ལྷག་པའི་ལྷ་special deity
ལྷག་པར་དགའ་བ་unusually happy
ལྷག་པར་མོས་པ་surpassingly intent
ལྷག་པར་ལེགས་པ་uncommonly good
ལྷག་པོ་མེད་nothing higher
ལྷག་ཕྱོགས་སུ་windward
ལྷག་བསམ་unusual attitude
ལྷག་མིན་without remainder
ལྷག་འཕྲོས་remnant
ལྷག་འོག་upper and lower
ལྷག་ལྡན་with remainder
ལྷགས་ངར་cold piercing wind
ལྷགས་པ་རྒྱག་པ་blow
ལྷང་བལྟས་to look vividly
ལྷད་པ་relax
ལྷད་མ་basket
ལྷད་མེད་པ་pure
ལྷད་མོ་spectacle
ལྷད་མོ་ཆེན་པོ་spectacular
ལྷད་རྒྱབ་པ་adulterate
ལྷན་ཁང་council
ལྷན་གཅིག་ཏུ་together
ལྷན་གནས་serene calm
ལྷན་གྱིས་together
ལྷན་གྱིས་ཞི་completely subside
ལྷན་ཅིག་together
ལྷན་ཅིག་གནས་པ་abide together
ལྷན་ཅིག་པ་combined with
ལྷན་ཐབས་table for math
ལྷན་དུ་ཡོད་living together
ལྷན་དུ་སོང་gone together with
ལྷན་ནེར་གནས་པ་serene calm
ལྷན་ནེར་གསན་listen carefully
ལྷན་པ་གདབ་patch together
ལྷན་པ་རྒྱག་པ་mend
ལྷན་བསྡུས་mix together
ལྷན་མེར་relaxed mind
ལྷན་འཛོམས་convention
ལྷན་སྐྲེན་tumor
ལྷན་སྦྲེལ་together
ལྷབས་middle
ལྷམ་གོག་shoes
ལྷམ་ཆ་གཅིག་a pair of boots
ལྷམ་ཕུད་remove shoes
ལྷམ་བཟོ་trade of a shoemaker
ལྷམ་བཟོ་བ་cobbler
ལྷམ་བརྙིངས་old shoes
ལྷམ་མེ་blazing
ལྷམ་མེའོ་blazing
ལྷམ་མེར་གསལ་shone brightly
ལྷམ་ཞིག་slipper
ལྷམ་ཡུ་leg of a boot
ལྷའི་གར་མཁན་celestial dancers
ལྷའི་གསེར་འདབ་a flower
ལྷའི་གླུ་མཁན་celestial musician
ལྷའི་ཆུ་བོ་heavenly rivers
ལྷའི་དབང་པོ་chief of the gods
ལྷའི་དྲང་སྲོང་heavenly sages
ལྷའི་བཏུང་བ་drink of the gods
ལྷའི་བསྙེན་པ་divine approximation
ལྷའི་བུ་devaputramara
ལྷའི་མ་mother of the gods
ལྷའི་མིག་divine eye
ལྷའི་འདབ་tree
ལྷའི་རྣ་བ་divine ear
ལྷའི་སྐུ་form of a deity
ལྷའི་སྣང་བ་vision of the deity
ལྷའི་སྨན་པ་celestial physicians
ལྷར་བཅས་theistic
ལྷར་བཅས་པ་theistic
ལྷས་སྤྱིན་devadatta
ལྷིང་འཇགས་པ་lull
ལྷུ་མགོ་limb joint
ལྷུ་ཚིགས་joints of the limbs
ལྷུག་གིས་relaxed
ལྷུག་པ་pour out
ལྷུག་པར་བཞག་remain unbound
ལྷུག་པར་ཞོག་rest at ease
ལྷུག་པར་སྨྲ་to speak freely
ལྷུག་མ་prose
ལྷུགས་པར་loosely
ལྷུགས་ཚིག་continuous praise
ལྷུང་བ་fall
ལྷུང་བྱེད་cause to fall
ལྷུང་ཡས་a number
ལྷུན་aggregate
ལྷུན་ཆེན་བ་very large
ལྷུན་ཕབ་unshakable
ལྷུབ་གྱོན་loose
ལྷུམས་womb
ལྷེབ་gasping for breath
ལྷོ་south
ལྷོ་ནས་འོངས་come from the south
ལྷོ་ནུབ་southwest
ལྷོ་ཕྱོགས་ཀྱི་southern
ལྷོ་སྤྲིན་southern cloud
ལྷོག་རྒོད་fatal ulcerous sores
ལྷོང་ཕོག་པ་slightly affected
ལྷོང་ཚད་surprise attack
ལྷོད་loosen
ལྷོད་ཀྱིས་ཞོག་rest loosely
ལྷོད་གློད་relaxation
ལྷོད་ཆ་relaxed
ལྷོད་ཆ་མ་རྙེད་unrelaxed
ལྷོད་དེ་བ་relaxation
ལྷོད་དེ་བཞག་པ་rest loosely
ལྷོད་དེ་འཇོག་remain relaxed
ལྷོད་པའི་ངང་relaxed condition
ལྷོད་པོ་ཆགས་པ་slacken
ལྷོད་བཞག་པ་to leave relaxed
ལྷོད་འཇག་ས་tranquillity
ལྷོད་ལྷོད་relaxed
ལྷོན་ཤིང་magic tree
ཤ་ཀ་kind of game
ཤ་ཀ་མ་saffron from kashmir
ཤ་ཀུའི་འབྲས་sami tree
ཤ་ཁ་རའི་རོ་taste of sugar
ཤ་ཁྲ་bile
ཤ་ཁྲག་གསལ་བ་sound body
ཤ་གང་place in tibet
ཤ་གནག་flesh
ཤ་གོས་lower garment
ཤ་ཏ་hundred
ཤ་ནའི་རས་fine linen
ཤ་པོས་thick blanket
ཤ་བ་deer
ཤ་བ་མོ་doe
ཤ་བཀྲག་beautiful appearance
ཤ་བཀྲག་དྭངས་brilliant complexion
ཤ་བཙོན་slaughter pen
ཤ་བཤགས་lug sha byed bshags
ཤ་བོ་enemy
ཤ་མ་ཟ་མཁན་vegetarian
ཤ་མདོག་complexion
ཤ་མོ་རིགས་ཤིག་toadstool
ཤ་མོག་མོག་steamed stuffed bun
ཤ་མོང་mushroom
ཤ་ཚ་ཆེ་བ་love ardently
ཤ་ཚ་བ་affectionate
ཤ་ཚ་མེད་without affection
ཤ་ཚེ་nickel silver
ཤ་ཟ་མཁན་carnivore
ཤ་ཟ་མཁན་གྱི་carnivorous
ཤ་ཟའི་གླིང་a cannibal island
ཤ་འཁྲིག་པ་sexual instinct
ཤ་འབུ་maggot
ཤ་འཚོད་པ་boil meat
ཤ་འཛེར་wart
ཤ་ཡི་ལུས་བཅུད་blood
ཤ་ཡི་ས་བོན་blood
ཤ་ར་པ་an indian saint
ཤ་ར་ཤོ་རེ་moist
ཤ་རྒྱགས་fat meat
ཤ་རྒྱས་healthy corpulence
ཤ་རྒྱུས་muscle
ཤ་རྔོད་པ་roast meat
ཤ་རྗེན་raw meat
ཤ་རློན་པ་raw meat
ཤ་ལུས་muscles
ཤ་ལོག་ལོག་bloated
ཤ་ཤང་large number
ཤ་ཤན་kind of chinese tea
ཤ་སྦྱང་gteg byed kyi nya ga
ཤ་ཧྲམ་tough meat
ཤཱཀྱ་ཐུབ་ཆེན་an earlier buddha
ཤཱཀྱ་རྒྱལ་མཚན་celebrated lama
ཤག་མ་ཅན་gravelly
ཤག་རད་rocky ground
ཤག་རུག་gravel
ཤག་ཤག་གིས་with no doubt
ཤང་ཁ་conch shell
ཤང་པོ་debonair
ཤངས་ཁུང་nostril
ཤངས་རྩ་གསེར་place in shangs
ཤངས་རྩེ་tip of the nose
ཤངས་སྐྱོར་bent nose
ཤངས་སྣ་nose
ཤད་དེ་བརྐྱང་stretch out
ཤན་ཇ་kind of chinese tea
ཤན་ད་ཏི་ལ་a race
ཤན་དི་ལ་a race
ཤན་ཤོར་affected by company
ཤབ་སྒོ་ལྔ་place in gtsang
ཤམ་ཀ་shell
ཤམ་པ་lowlander
ཤའི་སྤྱན་fleshly eye
ཤར་ཁ་place in tibet
ཤར་གཏོང་to send directly
ཤར་ཆེན་ཉི་མ་great eastern sun
ཤར་ཐག་easterly direction
ཤར་དུ་གནས་resides in the east
ཤར་ནས་འོངས་come from the east
ཤར་ནུབ་rising and setting
ཤར་པ་མི་རིགས་sherpa
ཤར་ཕྱོགས་ཀྱི་oriental
ཤར་བ་དེ་that experience
ཤར་བུ་rain spout motif
ཤར་ཙོང་ཁ་པ་tsong khapa
ཤར་ཟིན་པ་became
ཤར་འགྱུར་བྱེད་blood
ཤར་རི་eastern mountain
ཤར་རྒྱབ་པ་sew in long stitches
ཤར་ལ་ancillary
ཤར་ལྷོ་southeast
ཤར་ཤར་a little bit of
ཤལ་ཐག་ties
ཤལ་མ་ཅན་full of sharp stones
ཤལ་ཤལ་བ་to harrow
ཤས་ཉོག་ཅན་fondling anything
ཤས་ཤིག་གནང་please give me some
ཤི་to die
ཤི་ཀི་མ་རུ་in dying
ཤི་ཁན་དི་ལ་peacock
ཤི་གསོན་dead or alive
ཤི་ཐབས་mode of death
ཤི་བ་ཐང་ཆད་པ་breathless
ཤི་བ་ནང་བཞིན་deadly
ཤི་བ་ཡིན་i shall die
ཤི་བའི་death
ཤི་བའི་ལུས་body of the deceased
ཤི་བར་འོང་he will die
ཤི་བརྡ་knell
ཤི་བས་བསྐོར་surrounded by death
ཤི་བྲལ་will die
ཤི་འཕྲས་death struggle
ཤི་རི་ཁན་ད་a kind of medicine
ཤི་རོ་carcass
ཤི་རོག་sort of early barley
ཤི་རྒྱུ་ཡོད་པ་perishable
ཤི་རྒྱུའི་expiry
ཤི་ལ་moral behavior
ཤི་ལུ་དཀར་པོ་species of tree
ཤི་སྐྱིད་happy to die
ཤི་སྲི་sri of death
ཤིག་གི་སྒོང་egg of a louse
ཤིག་གེ་free
ཤིག་གེག་relaxed
ཤིག་ཅན་full of lice
ཤིག་བསལ་བ་clean from lice
ཤིག་བྱ་will give
ཤིགས་བཤིག་release
ཤིགས་སེ་relaxed
ཤིང་ཀ་ཀུ་བྷ་arjuna tree
ཤིང་ཀ་ད་བ་cadamba tree
ཤིང་ཀ་དམ་པ་tree cadamba
ཤིང་ཀ་པེཏ་ཐ་kapettha tree
ཤིང་ཀ་པེད་ཐ་kind of lemon
ཤིང་ཀ་ཤིམ་བ་ལ་kacimbala tree
ཤིང་ཁུ་sap of trees
ཤིང་གཏུབ་པ་split wood in chips
ཤིང་གཟེར་wooden nail
ཤིང་གཤོག་པ་split wood
ཤིང་གཤོག་མཁན་carpenter
ཤིང་གི་ཁ་གཅོད་cork
ཤིང་གི་གྲིབ་མ་shadow of a tree
ཤིང་གི་མེ་ཏོག་flowering of a tree
ཤིང་གི་རྩ་བ་root or foot of tree
ཤིང་གི་རྩེ་མོ་top of a tree
ཤིང་གི་ལས་ཀ་woodwork
ཤིང་གི་ཤུན་པ་bark or fibers
ཤིང་ཅན་wooden
ཤིང་ཆ་timber
ཤིང་ཆོལ་wooden dice
ཤིང་ཏ་ལ་palm tree
ཤིང་ཏོག་ཁུ་བ་squash
ཤིང་ཏོག་ཞིག་banana
ཤིང་ཏོག་ཨ་མྲ་persimmon mango
ཤིང་ཐོག་fruit of a tree
ཤིང་དུག་poison of trees
ཤིང་དུམ་བུ་log
ཤིང་དོང་wooden tube
ཤིང་ནགས་forest
ཤིང་པང་པ་གང་armful of wood
ཤིང་ཕལ་རྣམས་common trees
ཤིང་ཕྱེ་sawdust
ཤིང་བཅག་split wood
ཤིང་བཅུད་molasses
ཤིང་བཟོ་carpentry
ཤིང་བཟོ་པ་carpenter
ཤིང་བཟོ་བ་carpenter
ཤིང་བཟོ་རིག་པ་woodcraft
ཤིང་བརྐོས་woodcarving
ཤིང་བལ་ཅན་cadamba tree
ཤིང་བལ་འདའ་བ་cotton
ཤིང་བུ་stick
ཤིང་བྱང་wooden tablets
ཤིང་བྱང་ཆུབ་peepul tree
ཤིང་མཁན་carpenter
ཤིང་མི་woodsman
ཤིང་མོད་པོ་wood is plentiful
ཤིང་ཚ་cinnamon
ཤིང་ཚའི་ལོ་མ་cinnamon leaf
ཤིང་ཞིག་some wood
ཤིང་ཟམ་wooden bridge
ཤིང་ཟེལ་wood shaving
ཤིང་འཆེག་པ་split wood
ཤིང་འཇོག་པ་carpenter
ཤིང་འཐུན་gatherer of wood
ཤིང་འཐུར་འགྲོ་goes collecting wood
ཤིང་འབྲས་fruit
ཤིང་འབྲས་མོ་rice
ཤིང་འཛིན་plantain plant
ཤིང་འཛེག་climbing up
ཤིང་ཡག་wooden hoe
ཤིང་ཡན་ལག་thorn
ཤིང་རགས་stack of wood
ཤིང་རིས་decorated tablets
ཤིང་རྒོན་woodpecker
ཤིང་རྒྱབ་པ་put wood
ཤིང་རྟ་བྱེད་carpenter
ཤིང་རྟའི་ཁ་ལོ་charioteer
ཤིང་རྟའི་གཉེན་charioteer
ཤིང་རྟའི་ཚོགས་chariot troops
ཤིང་རྩི་varnish
ཤིང་ལོ་མ་བདུན་tree alstonia
ཤིང་ཤ་མི་sami tree
ཤིང་ཤི་རི་ཤ་tree acacia sirisa
ཤིང་ཤི་ལུ་species of tree
ཤིང་ཤུག་པ་cypress
ཤིང་ཤོག་bark paper
ཤིང་ས་ལ་sal tree
ཤིང་སེ་བ་food of the silkworm
ཤིང་སོན་tree seeds
ཤིང་སྐུ་any wooden image
ཤིང་སྐྱ་ནར་patala tree
ཤིང་སྐྱོགས་wooden ladle
ཤིང་སྐྲས་པ་cut wood
ཤིང་སྒམ་crate
ཤིང་སྒྲོམ་scaffold
ཤིང་སྟག་པ་birch tree
ཤིང་སྟག་མ་rhododendron
ཤིང་སྡོང་པོ་tree
ཤིང་སྡོད་tree
ཤིང་སྤང་woodland meadow
ཤིང་ཨ་པ་མ་རྒ་kind of tree
ཤིང་ཨེ་རནད་ད་castor oil plant
ཤིད་funeral ceremony
ཤིད་བུ་shiva
ཤིད་སྲང་kind of steelyard
ཤིན་ཏུ་ཆུང་བ་very small
ཤིན་ཏུ་ཆེ་very big
ཤིན་ཏུ་དཀའ་extremely difficult
ཤིན་ཏུ་དཀར་very white
ཤིན་ཏུ་དོག་པ་very narrow bounds
ཤིན་ཏུ་དྲག་པོ་very strong
ཤིན་ཏུ་ཕྲ་མོ་very subtle
ཤིན་ཏུ་བཀྲག་very bright
ཤིན་ཏུ་བརྡལ་བ་very extensive
ཤིན་ཏུ་བྱུང་a class of brahmans
ཤིན་ཏུ་མང་པོ་very many
ཤིན་ཏུ་མྱུར་བ་rapid
ཤིན་ཏུ་ཟབ་པ་extremely deep
ཤིན་ཏུ་འཁྲུགས་very stormy
ཤིན་ཏུ་འདས་ཏེ་well passed beyond
ཤིན་ཏུ་འདས་ནས་well passed beyond
ཤིན་ཏུ་འདས་པ་well passed beyond
ཤིན་ཏུ་འཕགས་པ་very superior
ཤིན་ཏུ་འབོལ་very soft
ཤིན་ཏུ་རྣམ་དག་very pure
ཤིན་ཏུ་རྣོ་very sharp
ཤིན་ཏུ་ལན་ཚྭ་very salty
ཤིན་ཏུ་ལྕི་very heavy
ཤིན་ཏུ་སྐྱོ་བ་mind of sadness
ཤིན་ཏུ་སྡོམ་very concealed
ཤིན་ཏུ་སྲུང་well protected realm
ཤིན་རྫི་ཏ་a fruit
ཤིན་སྦྱང་pliancy
ཤིབ་པ་whisper
ཤིམ་པ་mixed up
ཤིར་ཆུག་accepting death
ཤིལ་བ་drip through
ཤིས་པ་auspicious
ཤིས་པ་པ་one blessed
ཤིས་པ་ཡིན་པ་be blessed
ཤིས་པའི་མིང་name foreboding good
ཤིས་ལུགས་mode of dispostion
ཤུ་ནི་ཀ་ར་ན་city in shambhala
ཤུ་བ་ཐོན་an abscess
ཤུ་བ་ན་abscess gives pain
ཤུ་བ་ཕན་abscess heals
ཤུ་བྷམ་happiness and good
ཤུ་མོ་ཟ་pulse
ཤུག་པ་juniper tree
ཤུགས་གནོན་stress
ཤུགས་ཅན་strong
ཤུགས་དིར་བ་groan loud from pain
ཤུགས་དྲག་པོ་strong tremor
ཤུགས་ཕྱུངས་energize
ཤུགས་བུ་girdle
ཤུགས་མེད་weak
ཤུགས་འཐེན་strain
ཤུགས་འཕྱོ་a number
ཤུགས་འཛུགས་jab
ཤུགས་རྩལ་wrestling
ཤུགས་ལ་འཛིན་possesses
ཤུགས་ལས་by itself
ཤུགས་སྣོན་reinforcement
ཤུགས་སྤྲུག་intensified
ཤུད་འགྲོ་བ་glide
ཤུན་གདོང་དཀར་place in tibet
ཤུན་གསང་བདེ་district with a fort
ཤུན་པགས་skin of animals
ཤུབ་case
ཤུབ་པར་སྨྲ་བ་whisper in the ears
ཤུབ་བུ་whisper
ཤུབ་བྱེད་པ་whisper
ཤུབ་ཤུབ་whispering
ཤུའི་ཁུ་བ་gravy
ཤུལ་ཁ་road
ཤུལ་ཐག་རིང་a long way
ཤུལ་དུ་behind
ཤུལ་དུ་ལུས་left behind
ཤུལ་བྱི་tibetan polecat
ཤུལ་རྩེ་boot
ཤུལ་ལུས་པ་survivor
ཤེ་ཁག་tribe
ཤེ་ཁྲོས་angered
ཤེ་ན་if it is asked
ཤེ་མོང་རྒྱས་muscles full
ཤེང་འཐུན་gatherer of wood
ཤེད་གསོས་strength is restored
ཤེད་ཆེན་པོ་strong
ཤེད་ཉམས་strength is impaired
ཤེད་མ་བྱེ་བ་undeveloped
ཤེད་ཤུགས་strength
ཤེད་སྐྱེད་པ་grow strong
ཤེན་བོན་priests
ཤེར་wisdom
ཤེལ་ཀ་ར་rock candy
ཤེལ་ཀོར་drinking glass
ཤེལ་གི་མེ་ལོང་crystal mirror
ཤེལ་གོང་crystal globe
ཤེལ་གྱི་ཁང་པ་crystal house
ཤེལ་གྱི་མཁར་crystal building
ཤེལ་གྱི་རྣ་རུ་crystal horn
ཤེལ་ཏ་kind of gum
ཤེལ་དྭངས་པ་clear mirror
ཤེལ་འོད་crystal lights
ཤེལ་སྣོད་flask
ཤེལ་སྦུབ་crystal tube
ཤེས་གསུམ་three knowledges
ཤེས་ཅན་intelligent
ཤེས་དགོངས་realize
ཤེས་པ་གཏད་པ་maintain presence
ཤེས་པ་ཕྱི་མ་subsequent thoughts
ཤེས་པ་ཕྲ་མོ་subtle feeling
ཤེས་པ་མེད་does not know
ཤེས་པ་ཚད་མ་valid consciousness
ཤེས་པ་ཧད་པོ་vacant state of mind
ཤེས་པའི་རྩོམ་flux of cognition
ཤེས་པར་བྱ་བ་will be understood
ཤེས་པར་བྱོས་one should recognize
ཤེས་པར་འགྱུར་he will know
ཤེས་ཕྱིན་prajnaparamita
ཤེས་བཞི་four knowledges
ཤེས་བཞིན་introspection
ཤེས་བྱའི་གཤིས་nature of knowables
ཤེས་མི་ཡོང་not understand
ཤེས་ཚད་literacy
ཤེས་ཟིན་པ་learnt
ཤེས་འདོད་ཚ་པོ་inquisitive
ཤེས་རབ་ཀྱི་ཆ་aspect of wisdom
ཤེས་རབ་ཆེ་བ་great wisdom
ཤེས་རབ་དམན་weak intelligence
ཤེས་རབ་མྱུར་བ་quick wisdom
ཤེས་རབ་རྣོ་བ་sharp wisdom
ཤེས་རྒྱུད་mental continuum
ཤེས་རྒྱུན་དལ་gentleness in spirit
ཤེས་རྒྱུས་lore
ཤེས་རྟོག་learned that
ཤེས་ལས་སྐྱེས་person
ཤེས་སྒོ་ཞན་poor in learning
ཤོ་dice
ཤོ་གམ་ལྕི་བ་high duty
ཤོ་བཀྲ་བ་partridge
ཤོ་བསྒྲིགས་well arranged
ཤོ་མདོ་abbr of sho pa mdo
ཤོ་མིག་གཅིག་ace
ཤོ་རྒྱབ་པ་dice
ཤོ་སྐྱམ་place in tibet
ཤོ་སྦག་རྩེ་བ་gamble
ཤོག་གང་full sheet of paper
ཤོག་ངོས་page
ཤོག་ངོས་དང་པོ་first page
ཤོག་དུད་cigarette
ཤོག་ནག་black paper
ཤོག་པོ་སྦྱར་བ་paste paper
ཤོག་ཕག་explosion
ཤོག་བུ་paper
ཤོག་བྱ་kite
ཤོག་རྐྱང་བ་spread the wings
ཤོག་རྟགས་label
ཤོག་རྩལ་སྦྱོང་agility in flying
ཤོག་ལས་པ་paper manufacturer
ཤོག་ལིང་paper ling ga
ཤོག་ལེ་sheet
ཤོག་སྒམ་box
ཤོག་སྒོར་yuan
ཤོག་སྟོང་blank paper
ཤོག་སྦག་firecrackers
ཤོང་བུ་furrow
ཤོབ་སྨྲ་བ་tell a lie
ཤོར་ཟིན་པ་lost
ཤོལ་གྱི་རྐ་furrow of the plough
ཤོལ་པོ་species of willow
ཤོལ་རྩེ་boots
ཤོས་བུ་offerings of cakes
ཤྭ་བའི་ཁྲག་རྭ་pilose antler
ཤྭ་བོ་སྒང་district in kham
ཤྭ་འོད་mountain torrents
ཤྭ་ས་ན་class of brahman
ཤྲ་བ་ན་the ear
ཤྲི་རི་mountain in india
ས་ཀ་ཤེ་ancient indian city
ས་ཀོང་ཀོང་undulating ground
ས་ཁང་estate
ས་ཁང་བདག་པོ་tenant
ས་ཁུངས་ཀྱི་zonal
ས་ཁུལ་གྱི་territorial
ས་ཁོངས་territory
ས་ཁྱབ་covering the earth
ས་ཁྲ་བོ་ashamed
ས་གཅིག་པ་single stage
ས་གཅེར་བུ་bare uneven ground
ས་གཏམ་པ་hill
ས་གདན་rug
ས་གནས་དེ་གའི་local
ས་གཞི་འབད་པ་cultivate the ground
ས་གཞི་ཡོད་མཁན་landed
ས་གཞི་ལ་བརྟེན་touching the ground
ས་གཞི་སྐྱོང་king
ས་གཞིའི་རིག་པ་geology
ས་གཞིར་སླེབས་reached the ground
ས་གཡོ་earthquake
ས་གཡོམ་earthquake
ས་གཡོས་earthquake
ས་ཆ་དམའ་བ་low place
ས་ཆ་དོག་narrow place
ས་ཆོད་ཆེན་པོ་certain risks
ས་ཉུལ་spy
ས་ཐག་རིང་བ་very distant place
ས་ཐུལ་prepare the soil
ས་དགའ་lily
ས་དགུ་པ་ninth grounder
ས་དགྱེས་lily
ས་དང་པོ་ལ་on the first ground
ས་དམར་red earth
ས་དམར་འབོང་a small monastery
ས་དྲུག་པོ་sixth ground
ས་པན་sakya panchen
ས་ཕག་ལེབ་ལེབ་tile
ས་ཕུང་earth heap
ས་བཅུད་སེར་པོ་sulfur
ས་བཟང་fine land realm
ས་བརྐོ་བ་excavation
ས་བརྡར་བ་gnash
ས་བོན་seed
ས་བོན་ཉམས་fruitless
ས་བོན་མཛོད་anthers of the lotus
ས་བོན་མི་རུང་unsuitable seed
ས་བོན་རུལ་པ་putrid seeds
ས་བྲུ་བ་unearth
ས་བླ་above the ground
ས་མ་ག་མ་man
ས་མ་དག་པ་impure ground
ས་མ་ལ་sanctuary in manyul
ས་མགོ་superscribed sa
ས་མཆོད་མ་ocean
ས་མཐའ་border region
ས་མདོག་khaki
ས་མུ་ཙ་ཡ་a king
ས་མོས་ཚལ་group of lily plants
ས་ཙི་whitewash
ས་ཞུ་kerosene lamp
ས་ཟླ་gold
ས་འགུལ་earthquake
ས་འཆིང་lotus
ས་འདུལ་site of a building
ས་འདྲ་ཞིག་whoever
ས་འབྱེད་hoe
ས་འཚམས་confines
ས་འཚོ་མ་wife of buddha
ས་འཚོག་སྐྱེས་elephant of indra
ས་འཛིན་དབང་པོ་sumeru
ས་འཛིན་སྐྱེས་an insect
ས་འོག་ཕྲེང་བ་sulfate of arsenic
ས་འོག་ཚང་burrow
ས་འོག་ལམ་tunnel
ས་འོག་སྤྱོད་subject to earth
ས་ཡ་one million
ས་ཡ་གཅིག་one million
ས་ཡངས་པ་wide open country
ས་ཡབ་sovereign
ས་ཡི་ཀ་བ་pillar of earth
ས་ཡི་གདུ་པ་blue water lily
ས་ཡི་ཐིག་ལེ་ruler
ས་ཡི་དུས་period of earth
ས་ཡི་བྱི་ལམ་a demon
ས་ཡི་ཙི་ཙི་field shrew
ས་ཡི་ཛམ་བུ་ཀ་betel plant
ས་ཡི་འདབ་grass
ས་ཡི་འོག་below the ground
ས་ཡི་རྣ་ཝ་epithet of karna
ས་ཡི་སང་ག་an indian king
ས་ཡིག་signature
ས་ཡིས་within the level
ས་ཡུལ་བཤད་པ་topography
ས་ཡོམ་རིག་པ་seismology
ས་ར་ལ་a tree
ས་ར་ཧ་indian saint
ས་ར་ཧ་པ་indian saint
ས་རང་a sword
ས་རུབ་dusk
ས་རེང་ལྡན་epithet of vishnu
ས་རོ་དུ་ཧ་indian saint
ས་རྐོ་མཁན་tiller
ས་རྒྱུས་geography
ས་རྟགས་sign of earth
ས་རྡེ་persistence
ས་རྡོག་iron
ས་རྣམ་place in tibet
ས་རྩ་crude
ས་རྫི་ཀ་alkaline earth
ས་རློག་pig
ས་རློག་པ་reduce to powder
ས་ལ་ཀི་ས་flower of sal tree
ས་ལ་གཙུགས་པ་put in the ground
ས་ལ་གཟུགས་kneel
ས་ལ་བབས་ཟིན་པ་landed
ས་ལ་བཙུགས་kneel
ས་ལ་འཁྱོག་snake
ས་ལ་འགྱེལ་བ་faint
ས་ལ་འགྲེ་བ་roll on the ground
ས་ལ་འདྲུད་པ་drag
ས་ལ་འབྱར་སྡོད་bend over
ས་ལ་འཛུགས་kneel
ས་ལམ་grounds and paths
ས་ལིམ་an indian king
ས་ལུགས་sa skya pa tradition
ས་ལུད་ཉལ་elephant
ས་ལུས་musk deer
ས་ལེ་brilliant
ས་ལེབ་shallow
ས་ཤས་inertia
ས་སམ་crossing of roads
ས་སྒྲེ་bare ground
ས་སྒྲེ་བོ་bare uneven ground
ས་སྒྲོག་white water lily
ས་སྟེང་དུ་aground
ས་སྟོབས་མིག་a prince
ས་སྣ་རུ་border
ས་སྣུམ་kerosene
ས་སྤུང་mound
ས་སྦས་གཏོང་བ་bury
ས་སྨྱུག་chalk
ས་སྲིབ་མཚམས་at dusk
ས་སྲུང་tree
ས་སྲུང་མ་irawadi river
ས་སྲོས་ནས་when it grew dark
ས་སློག་wild boar
ས་ཧ་པ་ར་a buddhist monastery
ས་ཧྲུག་rubble
ས་ཧྲེངས་fallow
སག་ཅན་brawny
སག་ཐུག་thick brawn
སག་པ་little bubble
སག་བདར་rasp
སག་བདར་རྒྱག་པ་to rasp
སག་འགྲོས་slow in moving
སག་རམ་རྩི་sulfuric acid
སག་སིག་moving and resting
སང་ངེ་སེང་ངེ་clear light
སང་ཉིན་tomorrow
སང་ནང་པར་tomorrow
སང་ལོ་next year
སང་སང་a number
སང་སྦྱིན་secret gift
སངས་ཀྱིས་by awakening
སངས་རྒྱས་བྱ་བ་buddha activity
སངས་རྒྱས་ཞིང་buddha field
སངས་རྒྱས་འབངས་name of a king
སད་ནས་having awoken
སད་པའི་རིགས་awakened family
སད་པར་བྱེད་པ་wake from sleep
སད་མི་མི་བདུན་seven men of trial
སད་རྗེས་སུ་after waking up
སན་ཏ་ནི་ཀ་flower
སན་ནེ་restless
སན་བུན་fluttering
སམ་དལ་moustaches
སའི་གདུ་བུ་lily
སའི་ངོས་surface of the earth
སའི་ཐིག་ལེ་auspicious place
སའི་དབང་ཕྱུག་king
སའི་ཟླ་བ་gold
སའི་རིམ་པ་bhumi levels
སའི་ལོགས་surface of the earth
སར་བརྟན་put on the ground
སར་བསྡད་sit on the ground
སལ་shines
སལ་ལེ་lucid
སི་གླུ་whistled tune
སི་ཇི་བི་ཇི་hermit thrush
སི་ཏུ་place in kham
སི་ཐ་date tree
སི་བརྡ་whistling as a sign
སི་ཛ་ཛུ་tree with milky sap
སི་ར་worship
སི་རི་འབུ་centipede
སི་རྒྱབ་པ་whistle
སི་ལ་sort of incense
སི་སུ་མ་ར་dolphin
སི་སྤན་hot chili
སིག་བུ་sort of a basket
སིག་ར་sort of a basket
སིང་གེ་lion
སིང་པ་sikhs of punjab
སིང་ཚོལ་teapot
སིང་སྒྲ་small bell sound
སིད་པ་whistle
སིན་ག་ལ་ceylon
སིན་དྷར་ancient indian sect
སིན་དྷུ་country sindhu
སིབ་ནད་measles
སིམ་dissolves
སིམ་བྱིད་moon
སིམ་འཛིན་cool
སིལ་cymbal
སིལ་ཁྲོལ་musical instrument
སིལ་གཏོར་smithereens
སིལ་ཐོར་smithereens
སིལ་དངུལ་rupee of ladak
སིལ་བུ་a little
སིལ་མཁན་cymbal player
སིལ་སྒྲོག་peacock
སིལ་སྙན་མ་female cymbal player
སུ་གི་yogi
སུ་ཅུ་ཏིག་medicinal herb
སུ་ཏ་ཡ་an elephant
སུ་ཏ་རི་place in himavata
སུ་མ་ན་a flower
སུ་མི་medicinal root
སུ་མེ་ཐོ་a mountain
སུ་ཡང་རུང་any
སུ་ཡིན་who is
སུ་ཡིན་ནའང་whosoever
སུ་ཡིན་རུང་whoever
སུ་ལ་ཡང་whether
སུག་པོ་limb
སུག་བྲིས་handwriting
སུག་མཐིལ་hoof
སུག་ཙ་hairs of the hoof
སུག་སུག་རྒོད་laughing loudly
སུང་ང་amulet
སུན་ཁྱུད་scandal
སུན་པོ་བྱེད་པ་dislike
སུན་མང་repeatedly bored
སུན་ཞུས་were annoyed
སུན་སྣང་མེད་པ་patient
སུམ་three
སུམ་ག་shoulder bag
སུམ་གལ་bag
སུམ་ཆ་a third
སུམ་བཅུ་thirty
སུམ་འབྱིན་mortify
སུམ་ཡར་a third
སུམ་རྩེན་དབང་lord of heaven
སུམ་ལྡབ་three times
སུའང་anyone
སུར་to whom
སུར་ཕན་red pepper
སུས་བཀག་stopped by whom
སེ་ཁྲ་མ་species of fly
སེ་ཁྲོམ་place in tibet
སེ་གོལ་finger snap
སེ་གོལ་གཏོགས་snap the fingers
སེ་གོལ་བརྡབས་snap the fingers
སེ་དུག་poison in se shing
སེ་དུག་ནད་syphilis
སེ་བདུད་demon
སེ་བོ་grey
སེ་མོ་necklace
སེ་འབྲུ་ནག་པོ་blackberry
སེ་འབྲུ་རྒོད་wild pomegranate
སེ་ཡབ་fig
སེ་ཡོ་grey
སེ་ར་པ་monk of sera
སེ་རག་དུར་སྨན་carrot
སེ་རེལ་half open
སེ་རྡུར་place in tibet
སེ་རྨ་syphilitic ulcers
སེ་ལིང་ཡོན་commander
སེ་ཤར་རེ་བ་whitish brown
སེ་སེ་kind of brick tea
སེ་ཧང་kind of brick tea
སེག་གཅོད་པ་cut obliquely
སེགས་ཅན་gravelly
སེང་ཁྲི་lion throne
སེང་གེ་lion
སེང་གེ་ཅན་boat
སེང་གེ་ཡོད་པ་lion inhabited realm
སེང་གེའི་རལ་པ་mane of the lion
སེང་ངེ་བ་vibrant
སེན་མོ་nail
སེན་མོའི་གར་peacock
སེབ་ནས་from between
སེམ་མེ་slightly smiling
སེམས་ཀྱི་ཁམས་temper
སེམས་ཀྱི་དབང་mental power
སེམས་ཀྱི་ནད་mental illness
སེམས་ཀྱི་བྱ་བ་activity of mind
སེམས་ཀྱི་སེམས་mental motivation
སེམས་ཀྱིས་mentally
སེམས་ཁྲེལ་concern
སེམས་གཅོང་depression
སེམས་གཏད་focus attention
སེམས་གཏིང་ནས་sincerely
སེམས་གཏོང་བ་heed
སེམས་གནས་mental abiding
སེམས་གནས་དགུ་nine mental abidings
སེམས་གནས་པ་mental abiding
སེམས་གནས་སྐབས་mental state
སེམས་གསལ་དྭངས་cleared up mind
སེམས་གསོ་བ་console
སེམས་གྱོང་པོ་harsh
སེམས་ངལ་sorrow
སེམས་ཅན་དག་པ་pure sentient being
སེམས་ཅན་དམན་པ་inferior being
སེམས་ཅན་ཕལ་པ་ordinary people
སེམས་ཅན་ཞུགས་pregnant woman
སེམས་ཆགས་attachment
སེམས་ཉིད་དག་པ་pure nature of mind
སེམས་ཏིག་infinitesimal sphere
སེམས་དགེ་healthy attitude
སེམས་དགེ་བ་virtuous mind
སེམས་དངོས་entity of the mind
སེམས་དཔའ་being
སེམས་དཔའ་ཆེ་great being
སེམས་དམ་པ་bodhicitta
སེམས་དྭངས་unpolluted heart
སེམས་དྭངས་བ་lucid state of mind
སེམས་དྲུག་six minds
སེམས་ན་འདུག་troubled mind
སེམས་བཟུང་concentrate
སེམས་མི་བརྟན་unstable thought
སེམས་ཚུབ་trouble of mind
སེམས་ཞུས་dismayed
སེམས་ཟློག་དཀའ་hard to give up
སེམས་འཁྱུག་mind travels quickly
སེམས་འཁྲུལ་བ་mistaken mind
སེམས་འགྱུ་བ་mental movements
སེམས་འགྱུར་བ་change the mind
སེམས་འཇོག་གོ་setting the mind
སེམས་འཇོག་པ་setting the mind
སེམས་འདས་beyond mind
སེམས་འཚབས་distressed
སེམས་འཚུབ་impatient
སེམས་འཚོར་གྱི་emotional
སེམས་རྒྱུད་mental continuum
སེམས་རྟེན་mental basis
སེམས་ལ་གདུང་བ་mental torment
སེམས་ལ་གནོད་པ་resent
སེམས་ལ་གཟན་gnaws at the heart
སེམས་ལ་དབང་mental power
སེམས་ལ་བཀོད་meditation
སེམས་ལ་འཁུར་བ་bear in mind
སེམས་ལས་མེད་པ་indifferent
སེམས་ལྷིང་པོ་calm
སེམས་ཤུགས་enthusiasm
སེམས་སྐད་ཅིག་mind moment
སེམས་སྐྱོ་mental aversion
སེམས་སྣུམ་པ་gladness
སེམས་སྤྲོ་joyful mind
སེམས་སྤྲོ་བ་overjoyed
སེར་ཀ་ཆེན་པོ་crevice
སེར་ཁམ་ཁམ་pale yellow
སེར་ཁྱུག་གེ་bright yellow
སེར་གོས་yellow robe of monk
སེར་དམག་monk soldiers
སེར་ནག་མ་yellowish black
སེར་པོ་yellow
སེར་པོ་ཉིད་yellowness
སེར་མ་buddhist nun
སེར་མདོག་ཅན་yellowish
སེར་འཕྲེང་clerical procession
སེར་རླུང་hailstorm
སེར་སྐྱ་མ་a yaksha princess
སེར་སྐྱའི་གནས་hermitage of kapila
སེར་སྐྱའི་གཞི་residence of kapila
སེར་སྣ་miserliness
སེར་སྣ་ཉིད་miserliness
སེར་སྣ་བྱས་ཏེ་miserly
སེར་སྣའི་སེམས་miserly mind
སེར་ཧྲག་hailstorm
སེར་ཧྲག་བབས་to hail
སེལ་གྱི་གཞུང་exorcism rites
སེལ་གྱི་སྒོ་exorcism rites
སེལ་ནག་black exorcism
སེལ་བྱེད་clearer away
སེལ་ཟེར་ཅན་moon
སེལ་འཇུག་པ་exorcise
སོ་གཟེར་toothache
སོ་གོས་lip
སོ་གྲི་saw
སོ་ཅན་elephant
སོ་ཆ་an emetic fruit
སོ་ཉམས་བྱེད་kapettha tree
སོ་ཐག་weaving linen
སོ་ཐམས་པ་lock jaw
སོ་ཐར་སྡོམ་པ་pratimoksha vows
སོ་དཀར་white tooth
སོ་དང་རྐན་teeth or palate
སོ་ནད་toothache
སོ་ནས་agriculture
སོ་པའི་ལས་ཀ་espionage
སོ་བ་thick shelled barley
སོ་བརྒྱབ་པ་bite
སོ་བརྡར་བ་whet
སོ་བསོད་comfortable
སོ་མ་ན་ཐ་bramanical sanctuary
སོ་མ་ར་ཙའི་རས་linen
སོ་མ་ར་རྩ་hemp
སོ་མ་ཤོར་do not lose
སོ་མར་བཞག་remain fresh
སོ་མི་གསོད་uncomfortable
སོ་མེད་toothless
སོ་འཁྲུ་toothbrush
སོ་འཆིང་lip
སོ་ཡིས་ཟིན་པ་caught by the teeth
སོ་རས་linen
སོ་རོ་rubbish
སོ་རྒྱག་to bite
སོ་རྒྱག་པ་bite
སོ་རྒྱབ་པ་gnaw
སོ་རྙིལ་gum
སོ་ལྡན་elephant
སོ་ཤ་gum
སོ་སོ་བ་མེད་པ་cannot be split
སོ་སོ་སྐྱེ་བོ་common being
སོ་སོའི་ཅ་ལག་belonging
སོ་སོའི་ཆ་portion
སོ་སོའི་མཐུ་exalted
སོ་སོའི་མིང་surname
སོ་སོར་ཁ་བྲལ་separation
སོ་སོར་གཅོད་bifurcate
སོ་སོར་ངེས་པ་distinction
སོ་སོར་ཐོབ་པ་received back
སོ་སོར་བཀག་པ་individual negation
སོ་སོར་བཞད་a flower
སོ་སོར་བརྟག་པ་individual analysis
སོ་སོར་བཤད་demonstration
སོ་སོར་ཟས་sesame
སོ་སོར་འགོག་obstruction
སོ་སོར་རྒོད་flower
སོ་སོར་སྟོན་པ་to disclose clearly
སོ་སོར་སྤོངས་individually abandon
སོ་སྐྱེ་བོ་common being
སོ་སྐྱེས་རྣམས་common men
སོ་སྨན་tooth paste
སོ་སྨན་བྱེ་མ་tooth powder
སོ་སྲུབ་gap in the teeth
སོག་ཆུ་river in east tibet
སོག་པ་པོ་one who hoards
སོག་མའི་འབུ་ལ་a shoe of straw
སོག་མོ་mongolian woman
སོག་ཞྭ་mongolian cap
སོག་འཇོག་hoarding money
སོག་རྟ་mongol horse
སོག་ལེ་saw
སོག་ལེ་རྒྱག་པ་saw
སོག་ལྡུམ་stubbles
སོག་ལྷམ་mongol boot
སོང་ཙ་ན་when time had passed
སོང་སོང་པ་those that had gone
སོང་སྟེ་having proceeded
སོན་ཕན་abacus
སོབ་ཁྲ་bad in its quality
སོབ་ཇ་inferior tea
སོབ་སོབ་ཅན་spongy
སོབ་སོབ་བཟོ་བ་soften
སོམ་ཉི་doubt
སོམ་ཉིའི་དྲ་བ་doubt
སོའི་dental
སོའི་ན་ཟུག་toothache
སོའི་སྙིལ་gums
སོའི་སྨན་པ་dentist
སོའི་ཨེམ་ཆེ་dentist
སོའུ་གན་དྷི་ཀ་flower
སོར་finger
སོར་གནས་separate place
སོར་གཞུག་sustaining freshness
སོར་ཕྲེང་angulimala
སོར་བཞག་པ་put in its place
སོར་མོ་finger
སོར་མོ་བཞི་པ་mild purgative fruit
སོར་མོ་མེད་པ་fingerless
སོར་མོ་ལྔ་པ་castor oil plant
སོར་མོར་རིང་བ་long fingers
སོར་ཚིག་joint of a finger
སོར་འདུས་withdrawal
སོལ་ནག་charcoal
སོལ་ནག་ཐང་པོ་place in tibet
སོལ་བའི་མེ་charcoal fire
སོལ་མདུད་gem worn on the neck
སོལ་རིལ་briquette
སོས་ཀ་summer season
སོས་ཀ་བཞད་rainbow
སོས་གདལ་apathy
སོས་པར་freshly
སོས་བླད་པ་chew
སྐ་ཅིག་moment
སྐ་བ་astringent
སྐ་རགས་ཆུང་པ་sash
སྐ་རགས་བཤུར་བ་girdle with a clasp
སྐ་རགས་འཆིང་བ་put on a girdle
སྐ་སླ་thick and thin
སྐང་བཤགས་expiatory rituals
སྐང་ཤ་sods cut out
སྐད་ཀྱི་vocal
སྐད་ཀྱི་གཅོང་vocal melodies
སྐད་གཅིག་མ་nowness
སྐད་གཏོང་to invite
སྐད་གྱོང་པོ་imperfect language
སྐད་ངར་rough language
སྐད་ཅིག་ཁོ་ན་only for a moment
སྐད་ཅིག་དང་པོ་first moment
སྐད་ཅིག་དྲན་པ་instant presence
སྐད་ཅིག་རིག་པ་instant rigpa
སྐད་ཆ་ཚབས་ཆེན་very bad news
སྐད་ཆ་ཤབ་ཤུབ་whisper
སྐད་ཆ་ཤོད་ས་addressee
སྐད་ཆེན་པོ་loud
སྐད་ཆེན་པོར་aloud
སྐད་ཆེན་འབྲུག་loud thunder
སྐད་དྲག་པ་powerful voice
སྐད་པར་ཕེན་ཙི་gramophone record
སྐད་ཕྲ་ཤོས་soprano
སྐད་བཏང་past of skad gtong
སྐད་བསྒྱུར་change the language
སྐད་ཚ་པོ་noisy
སྐད་ཟ་ངེ་ཟིང་discord
སྐད་ཟེར་to claim
སྐད་འབོད་slogan
སྐད་འབྱིན་singing of a bird
སྐད་འབྱིན་པ་shout
སྐད་འཛེར་hoarse
སྐད་རྒྱལ་donkey
སྐད་རྙོངས་jargon
སྐད་ལུགས་dialect
སྐད་ལེགས་མ་celestial courtesan
སྐད་སྐྲ་དིར་བ་groan loud from pain
སྐད་སྒྲ་noise
སྐད་སྒྲ་ཆེ་fame
སྐད་སྒྲ་ཆེ་བ་loud
སྐད་སྟེར་བ་call to a person
སྐད་སྦོམ་པོ་bass
སྐབ་delay
སྐབས་ཁེལ་བ་time for
སྐབས་གཉིས་པ་second chapter
སྐབས་ཅིག་one time
སྐབས་དབྱེ་clarification
སྐབས་ཕྱེ་ན་make opportunity
སྐབས་མཚམས་juncture
སྐབས་མི་རྙེད་to utterly hinder
སྐབས་འབྱེད་པ་leisure
སྐབས་རེ་ཙམ་only occasionally
སྐབས་རེར་occasionally
སྐབས་རྙེད་པ་find an opportunity
སྐབས་ཤིག་while
སྐབས་སྐབས་from time to time
སྐམ་ཀྲོང་lanky
སྐམ་དམག་army
སྐམ་དྲས་neat and clean
སྐམ་ཟན་dry food
སྐམ་འགྲོ་བ་wither
སྐམ་ལམ་journey by land
སྐམ་ལས་སྐྱེ་བ་born on land
སྐམ་ཤ་dry meat
སྐམ་ས་dry land
སྐར་ཀ་weight
སྐར་ཁ་weight
སྐར་ཁུང་དྲ་བ་grated window
སྐར་ཆ་second
སྐར་ཆུང་little star
སྐར་ཕྲན་little star
སྐར་མ་star
སྐར་མ་གཅིག་ཙམ་for about a minute
སྐར་མ་གསུམ་ཙམ་about three minutes
སྐར་མ་བཅོ་ལྔ་a quarter of an hour
སྐར་མ་རྒྱལ་constellation pusya
སྐར་མ་ལ་དགའ་བ་delight in stars
སྐར་མཁན་astrologer
སྐར་མིག་བུ་eagle
སྐལ་དོན་supersensory object
སྐལ་པར་མི་ལྡན་unsuitable
སྐལ་བ་ངན་པ་misfortune
སྐལ་བ་བཟང་great fortune
སྐལ་བ་མཉམ་པ་having equal lot
སྐལ་ལྡན་བུ་fortunate son
སྐལ་ལྡན་རྣམས་suitable ones
སྐས་ཀྱི་རིམ་པ་order of steps
སྐས་འཇུག་པ་place a ladder
སྐས་ལ་འབབ་པ་come down a ladder
སྐི་བཏུབ་པ་behead
སྐི་རགས་girdle
སྐུ་གདུང་relics
སྐུ་གཞོན་youthful body
སྐུ་གཤེགས་to die
སྐུ་ཐང་picture of deity
སྐུ་ཐོག་མང་པོ་many generations
སྐུ་དྲིན་kindness
སྐུ་ཕུང་corpse
སྐུ་བཞེངས་to stand up
སྐུ་བཞེངས་གནང་please get up
སྐུ་བསྒྲེས་aged
སྐུ་བླཏམས་birth of a great man
སྐུ་བླཏམས་པ་be born
སྐུ་མ་ནོངས་པར་safely
སྐུ་མཆིན་liver
སྐུ་མཉེད་handkerchief
སྐུ་མདངས་complexion
སྐུ་མཚམས་solitary meditation
སྐུ་མེད་པ་bodiless
སྐུ་ཚབ་གཏོང་བ་delegate
སྐུ་ཞགས་དྲུང་your honor
སྐུ་འཁྲུང་བ་be born
སྐུ་འཁྲུངས་birth of a great man
སྐུ་འདད་funeral repast
སྐུ་འདྲ་religious image
སྐུ་འདྲའི་statuary
སྐུ་རགས་sash
སྐུ་ལ་ཀླུབས་garbed
སྐུ་ལ་བཀབ་པ་cover
སྐུ་སྐྱེས་present
སྐུད་པའི་འབུ་silkworm
སྐུད་རིས་needlework on cloth
སྐུད་སེར་yellow thread
སྐུན་བུ་wicker work basket
སྐུབ་very low
སྐུམ་ཁྲུ་གང་one and a half feet
སྐུམ་པའི་contraction
སྐུར་བཟེང་become a patter
སྐུར་བསྟན་manifests
སྐུར་ཞུས་scandal
སྐུར་ས་consignee
སྐུལ་བྱེད་incentive
སྐུལ་མཁན་overseer
སྐེ་ཐག་chain
སྐེ་བཏགས་locket
སྐེ་བཙིར་བ་strangle
སྐེ་བསྡམ་པ་strangulate
སྐེ་འཁོར་necklace
སྐེ་འཆིང་tie
སྐེ་རག་belt
སྐེ་སྟོང་cavity of the throat
སྐེ་སྡོམ་strangulation
སྐེང་ལུངས་a place in tibet
སྐེད་halfway
སྐེད་ཐིག་གི་equatorial
སྐེད་དཀར་white sash
སྐེད་མ་pomegranate
སྐེད་ཙམ་nearly halfway
སྐེད་རགས་girdle
སྐེད་སོ་the waists
སྐེམ་ནད་consumption
སྐེམ་བྱེད་མ་a goddess
སྐེར་དོགས་པ་tie round the neck
སྐོ་རེ་on
སྐོ་སྐོ་the chin
སྐོང་འགུག་summon
སྐོང་རྫས་appeasements
སྐོངས་མདོས་expiation mdos
སྐོམ་thirst
སྐོམ་དད་thirst
སྐོམ་དད་ཆེ་thirst
སྐོམ་དྲོད་thirsty and hot
སྐོམ་ནས་thirsty
སྐོམ་པ་thirst
སྐོམ་འདོད་thirst
སྐོམས་པ་thirst
སྐོམས་ཤིག་become thirsty
སྐོར་གསུམ་trilogy
སྐོར་ཐག་cord of a lathe
སྐོར་ཐིག་pair of compasses
སྐོར་དབྱུག་sling
སྐོར་བྱ་བ་police
སྐོར་ཚེར་on this occasion
སྐོར་ར་revolution
སྐོར་ལ་about
སྐོར་ལོག་པ་wrong turn
སྐོར་ལྕག་པ་police
སྐོར་ལྡབ་པ་repeat
སྐོལ་མི་one who boils tea
སྐྱ་ག་magpie
སྐྱ་གམ་plain unpainted box
སྐྱ་ཆོས་blank book
སྐྱ་ཉིལ་zinc
སྐྱ་ཐ་ལེ་of plain white color
སྐྱ་ནར་ཁྲ་བོ་a flower
སྐྱ་པོ་pale whitish yellow
སྐྱ་བ་paddle
སྐྱ་བ་འཛིན་rower
སྐྱ་མཇུག་rudder
སྐྱ་རེངས་དཀར་white dawn
སྐྱ་རེངས་ཤར་བ་dawn
སྐྱ་རྒྱས་plenteous crop
སྐྱ་རྩ་dry grass
སྐྱ་ལྒང་ངེ་perfectly white
སྐྱ་སེང་གི་བུ་sons of pandu
སྐྱག་misfortune
སྐྱག་གཅིན་excreta
སྐྱག་པ་གཏོང་བ་shit
སྐྱག་པོ་a place in tibet
སྐྱག་པོ་འདམ་ར་marshy plain
སྐྱང་reddish brown
སྐྱབས་བཅོལ་asylum exile
སྐྱབས་བཅོལ་པ་refugee
སྐྱབས་བཅོལ་བ་refugee
སྐྱབས་བཅོལ་ས་place of refuge
སྐྱབས་འགྲོ་refuge practice
སྐྱབས་འོས་worthy of protection
སྐྱབས་སུ་མཆི་go for refuge
སྐྱམ་ཕུ་place in tibet
སྐྱར་གོག་naked
སྐྱར་བ་again and again
སྐྱར་བའི་ཚིག་repetition
སྐྱར་མོ་heron
སྐྱར་ལེབ་sheldrake
སྐྱལ་swimming
སྐྱས་ཆེན་པོ་death
སྐྱི་interest on loan
སྐྱི་ཁུང་place in tibet
སྐྱི་གྱའ་fear
སྐྱི་ཐོག་common property
སྐྱི་བུང་cloud
སྐྱི་མོ་skin
སྐྱིད་ཆེས་comfortable
སྐྱིད་པོ་ཉལ་བ་sleep well
སྐྱིད་མོས་ཚལ་pleasure grove
སྐྱིད་འཁྱམ་excursion
སྐྱིད་ཡུལ་happy place
སྐྱིན་ཐང་hail and sleet
སྐྱིན་པ་འཚབ་པ་liquidator of debts
སྐྱིན་པ་ལེན་པ་take on credit
སྐྱིན་མགོ་lizard
སྐྱིན་མི་debtor
སྐྱིལ་expanse
སྐྱིལ་འཁོར་sacred diagram
སྐྱུ་རུ་ཤིང་olive tree
སྐྱུག་བཤལ་cholera
སྐྱུག་ལོག་nausea
སྐྱུགས་ལོག་nausea
སྐྱུད་པ་forget
སྐྱུར་ངོན་drunkard
སྐྱུར་བ་sour
སྐྱུར་བཀོད་creation
སྐྱུར་མ་abortion
སྐྱུར་ཤིང་a plant
སྐྱུས་altogether
སྐྱུས་ཐོག་པ་altogether
སྐྱེ་དགུ་ཡོངས་all beings
སྐྱེ་དང་འཆི་birth and death
སྐྱེ་དམན་གྱི་feminine
སྐྱེ་པོ་poor
སྐྱེ་བ་དཀར་པོ་wholesome birth
སྐྱེ་བ་བརྒྱུད་many lifetimes
སྐྱེ་བ་ཙམ་mere production
སྐྱེ་བ་ཟད་པ་extinction of birth
སྐྱེ་བ་འཛིན་have a rebirth
སྐྱེ་བ་རྒྱལ་person
སྐྱེ་བ་སྔོན་མ་former life
སྐྱེ་བ་སྤེལ་copulate
སྐྱེ་བའི་ཆ་ཅན་dog
སྐྱེ་བོ་གནས་པ་place of habitation
སྐྱེ་བོ་ཐ་མལ་ordinary beings
སྐྱེ་བོ་མཁས་པ་intellectual people
སྐྱེ་བོ་མང་པོ་many beings
སྐྱེ་མཁན་the thinker
སྐྱེ་མེད་དོན་unborn reality
སྐྱེ་ཚེ་mustard
སྐྱེ་འཆི་birth and death
སྐྱེ་འཇུག་birth and entering
སྐྱེ་རགས་girdle
སྐྱེ་རེ་ལང་བ་erect
སྐྱེ་རྒྱུད་family line
སྐྱེ་ལྡན་animated beings
སྐྱེ་ལྡུམ་plantain
སྐྱེ་སྐར་birthday
སྐྱེ་སྒོ་ཞན་པ་ugly face
སྐྱེ་སྒོ་ལེགས་beautiful face
སྐྱེག་misfortune
སྐྱེངས་embarrassed
སྐྱེངས་བ་མེད་shameless
སྐྱེད་པོ་father
སྐྱེད་བུ་hearth
སྐྱེད་འབབ་accrue
སྐྱེད་ཡོང་shall make progress
སྐྱེད་རིམ་development stage
སྐྱེད་སྒོ་principal door
སྐྱེད་སྤོགས་interest from money
སྐྱེན་thorn
སྐྱེན་ལ་upwards
སྐྱེམས་ཆང་beer
སྐྱེམས་ཆུ་drinkable water
སྐྱེམས་སིང་small beer cup
སྐྱེར་སྐྱ་reddish brown
སྐྱེར་སྐྱེར་solitary
སྐྱེལ་གྱུར་removal of articles
སྐྱེལ་མཁན་escort
སྐྱེལ་མི་escort
སྐྱེས་ཁུར་present of cakes
སྐྱེས་ཆང་a present of beer
སྐྱེས་དུས་when they arise
སྐྱེས་ཕྲན་youth
སྐྱེས་བ་རྒྱལ་man
སྐྱེས་ཚད་effectiveness
སྐྱེས་ཚལ་gardens
སྐྱེས་ཚེས་birthday
སྐྱེས་རྟགས་birthmark
སྐྱེས་ལྡན་mankind
སྐྱེས་ལྷ་deity of birth
སྐྱེས་སོ་ཅོག་ancestors
སྐྱེས་སྐར་birthday
སྐྱེས་སྒྲ་ཅན་goat
སྐྱེས་སྡོང་plantain
སྐྱོ་པོ་ཆགས་པ་emaciate
སྐྱོ་བ་བསངས་relax
སྐྱོ་བ་སྐྱེ་བ་deplore
སྐྱོ་མ་ཅན་slanderous
སྐྱོ་མ་བྱེད་པ་slander
སྐྱོ་འགྱེད་weariness dispersed
སྐྱོ་ཤེས་revulsion
སྐྱོ་སངས་console in his grief
སྐྱོ་སངས་གནས་pleasure garden
སྐྱོ་སངས་ཉིད་freedom from fatigue
སྐྱོ་སྣང་melancholy
སྐྱོག་ནག་iron spoon or scoop
སྐྱོག་ལྟོ་འབུ་snail
སྐྱོང་དལ་assistance
སྐྱོང་བདེ་simple to sustain
སྐྱོད་to go
སྐྱོད་བྱེད་oar
སྐྱོད་ཟིན་པ་gone
སྐྱོན་ངན་ཅན་vicious
སྐྱོན་ཆེ་grave fault
སྐྱོན་ཆེན་པོ་grave fault
སྐྱོན་བསལ་ཏོ་disclosed the fault
སྐྱོན་བྱེད་པ་commit a fault
སྐྱོན་འཛིན་find fault with
སྐྱོན་ཤེས་པ་physician
སྐྱོན་སྤང་བ་leave off a fault
སྐྱོབ་གསོ་welfare
སྐྱོབ་མཁན་savior
སྐྱོབ་སྟོན་protector
སྐྱོབས་པ་protector
སྐྱོབས་བཞུམས་cried for help
སྐྲ་hair
སྐྲ་ཁམ་པ་brownish hair
སྐྲ་གཉིས་པ་comet
སྐྲ་གྲི་blade
སྐྲ་ཉག་གཅིག་single tuft of hair
སྐྲ་ཏོག་པ་pull out the hair
སྐྲ་བཞད་པ་comb hair
སྐྲ་བཞར་ཁང་barber shop
སྐྲ་བཞར་པ་have a haircut
སྐྲ་བཞར་མཁན་barber
སྐྲ་བཟང་secret word
སྐྲ་བཟང་མ་a yaksa goddess
སྐྲ་མཁན་barber
སྐྲ་མདུད་hair knot
སྐྲ་ཚབ་wig
སྐྲ་ཞེང་thin hair
སྐྲ་འདྲེས་མ་celestial courtesan
སྐྲ་འཕྱི་བ་pull out the hair
སྐྲ་འབལ་བ་pull out the hair
སྐྲ་ཡི་མཚམས་hairline
སྐྲ་རིང་པོ་braided hair
སྐྲ་རྦད་རྦོད་thick hair
སྐྲ་རྩ་clotted hair
སྐྲ་རྫུས་wig
སྐྲ་ལྷས་མ་pigtail
སྐྲ་སེ་བོ་grey hair
སྐྲ་སྐྱོག་པ་pull out the hair
སྐྲག་དངངས་terrified
སྐྲག་བྱེད་མ་wife of the sun
སྐྲག་སྐྲག་hard
སྐྲང་སོང་it is swollen
སྐྲད་expel
སྐྲན་tumor
སྐྲའི་ཅོད་པན་tiara
སྐྲའི་རྩེ་མོ་tip of a hair
སྐྲའི་ལཝ་བ་kind of hair cloth
སྐྲི་ཞིག་let him send
སྒ་ginger
སྒ་གློ་saddle girth
སྒ་ཆས་saddlery
སྒ་ཚྭ་pungent ginger
སྒ་རྒྱབ་པ་saddle
སྒ་སྐྱ་ginger
སྒ་སྒྲོན་པ་saddle a horse
སྒང་གི་ལིང་species of partridge
སྒང་ཕུག་balloon
སྒང་བ་grow or become full
སྒང་མ་upper
སྒང་མཐོན་པོ་high hill
སྒང་འབུར་hillock
སྒང་ཡིན་just
སྒང་ལ་བཞོན་པ་surmount
སྒབ་ཐུང་short skirt
སྒམ་སྒོ་མང་chest of drawers
སྒའུ་amulet
སྒར་པ་military camp
སྒར་མང་respectable men
སྒལ་པ་བསྲང་align the backbone
སྒལ་པའི་རུས་པ་backbone
སྒལ་ཕྱུགས་beast of burden
སྒལ་ཚིག་མེད་པ་invertebrate
སྒལ་ཚིགས་ཀྱི་spinal
སྒལ་འགེལ་བ་put on a load
སྒལ་འདབས་lumbar region
སྒལ་འཕང་བ་throw a load off
སྒལ་འབོགས་པ་take out a load
སྒལ་རྒྱུང་spine
སྒལ་རྟ་pack horse
སྒུ་ཕྱོགས་bent forward
སྒུ་མོ་sling
སྒུག་to wait
སྒུག་པ་པོ་waiter
སྒུག་པར་བྱེད་one who waits for
སྒུག་སྡོད་staying waiting
སྒུར་ཏེ་writhing with pain
སྒུར་བྱས་bent
སྒུར་རྒྱབ་bent back
སྒུལ་ཀྱོག་jolt
སྒུལ་མ་ཐུབ་པ་immobile
སྒུལ་རུང་བ་moveable
སྒུལ་ཤུགས་impetus
སྒུལ་སྐྱོད་agitation
སྒེག་མ་a goddess of beauty
སྒེའུ་གཤེར་ginger
སྒེའུ་ཆུང་garlic
སྒེར་ཕྱོགས་ནས་personally
སྒེར་སེམས་selfish
སྒེར་སོ་སོ་individual
སྒོ་ཁ་doorway
སྒོ་ཁྱི་watchdog
སྒོ་གཏན་bolt of a door
སྒོ་ངའི་མཛོད་testicles
སྒོ་ཆེན་great gate
སྒོ་ཐམས་ཅད་ལས་from all approaches
སྒོ་དགག་པ་close a door
སྒོ་དགུ་nine doorways
སྒོ་དྲག་པོ་keen senses
སྒོ་ཕྱེ་to open the door
སྒོ་བཀུམ་པ་shut a door
སྒོ་བཅད་པ་close a door
སྒོ་བདུང་བ་knock at the door
སྒོ་བཞི་four series
སྒོ་བརྒྱ་in a hundred ways
སྒོ་བརྒྱད་eight doorways
སྒོ་བསྟུན་to conform to
སྒོ་བསྟུན་ན་according to
སྒོ་བསྟུན་པ་to adhere to
སྒོ་བསྲུངས་བ་door keeper
སྒོ་མ་འགག་པ་unconfined
སྒོ་མ་འགགས་པ་unconfined
སྒོ་མེ་ལོང་ཅན་lhasa temple door
སྒོ་ཙམ་mere hint a little
སྒོ་འཁད་འདུག་the door sticks
སྒོ་འབྱེད་ཀྱི་inaugural
སྒོ་འབྱེད་པ་open a door
སྒོ་རག་པ་door keeper
སྒོ་རུ་ཆུག་approach
སྒོ་རྡུང་བ་to knock at a door
སྒོ་རྣམ་single board
སྒོ་རྩ་at the door
སྒོ་རྩིག་པ་wall up a door
སྒོ་སེང་chink of a door
སྒོ་སྙོད་cummin seed
སྒོ་སྤང་lintel
སྒོ་སྲུང་པ་sentinel
སྒོག་ཏིང་mortar
སྒོག་སྐྱ་white garlic
སྒོག་སྔོན་blue garlic
སྒོང་ཐོག་a medicinal fruit
སྒོང་ཐོག་པ་a plant
སྒོང་པྲི་yolk
སྒོད་ཡས་a numeral
སྒོམ་གྱི་རྟེན་meditation stick
སྒོམ་ཆེན་པ་mystic
སྒོམ་ཐབས་method of practice
སྒོམ་དུ་ཁྱེར་continue training
སྒོམ་དུ་བཅུག་send to meditate
སྒོམ་པ་མཆོག་supreme meditation
སྒོམ་བྱ་object of meditation
སྒོམ་བྱེད་པ་to use the training
སྒོམ་རྒྱབ་པ་meditate
སྒོམ་རྟེན་meditation stick
སྒོམ་སྐྱོན་faulty meditation
སྒོམ་སྦྱངས་meditation training
སྒོའི་རྟིང་པ་hinge
སྒོའི་རྩ་བ་at the door
སྒོའི་སྣ་ལྕགས་bolt
སྒོར་ཐིག་pair of compasses
སྒོར་བསླེབས་came to the door
སྒོར་འཇུག་པ་to embark on
སྒོར་འཛུལ་བ་slip out the door
སྒོར་ལུང་gor valley
སྒོས་ཁུར་a preta
སྒོས་ཆོས་private phenomena
སྒྱིད་ཁུང་hollow of the knee
སྒྱིད་ཁྱོལ་one lame in his legs
སྒྱིད་པ་knee joint
སྒྱུ་ཐབས་ways
སྒྱུ་མ་ཆེན་མོ་mahamaya
སྒྱུ་མ་མཁན་magician
སྒྱུ་མ་མཐོང་བ་see an illusion
སྒྱུ་མའི་ལུས་illusion body
སྒྱུ་ཟོག་religious deceit
སྒྱུ་རྒོད་super illusion
སྒྱུ་རྩལ་པ་artist
སྒྱུ་ལུས་illusory body
སྒྱུག་མོ་mother in law
སྒྱུར་བཀོད་strong advice
སྒྱུར་འགྲེལ་rendition
སྒྱེ་ཕྱོགས་bent forward
སྒྱེ་སྒུར་crooked
སྒྱེན་པ་be on the move
སྒྱེའུ་small bag
སྒྱོག་པོ་father in law
སྒྱོགས་མདའ་catapult
སྒྱོགས་མདེལ་shell
སྒྲ་གནས་abiding in sound
སྒྲ་གྲག་thunder
སྒྲ་ཆེན་པོ་high loud sound
སྒྲ་ཇི་བཞིན་པ་literal
སྒྲ་ཉན་པ་hear sound
སྒྲ་བ་speech
སྒྲ་བརྒྱ་པ་thunder
སྒྲ་བརྙན་echo
སྒྲ་བཤད་etymology
སྒྲ་བསྒྱུར་translating
སྒྲ་བྱུང་ལོ་resounded
སྒྲ་ཙམ་only a voice
སྒྲ་ཡི་གནས་ear
སྒྲ་སྐད་ཀྱི་phonetic
སྒྲ་སྒྱུར་translation
སྒྲ་སྒྲོག་to sound
སྒྲ་སྙན་pleasant sound
སྒྲ་སྦྱོང་to sound
སྒྲའི་གཞི་basis of a term
སྒྲའི་རྒྱན་metaphor in rhetoric
སྒྲའི་ལྷ་sound deity
སྒྲིག་ཁྲིམས་discipline
སྒྲིག་ཆས་uniform
སྒྲིག་པོ་fit
སྒྲིག་འཛུགས་organization
སྒྲིག་ལས་setting
སྒྲིགས་གཞི་charter
སྒྲིགས་པ་adjust
སྒྲིགས་པོ་precise
སྒྲིན་competition
སྒྲིབ་པ་ཕྲ་subtle obstruction
སྒྲིབ་པ་སྦྱང་purify obscurations
སྒྲིབ་སྐྱོན་obstacle and defect
སྒྲིབས་པ་build
སྒྲིམ་པོ་wise
སྒྲིལ་འཁོར་reel
སྒྲིལ་སྒྲིལ་roll
སྒྲུང་པ་relater of legends
སྒྲུང་པོ་wise
སྒྲུང་འབབ་descent of a story
སྒྲུན་མ་protectors
སྒྲུབ་ཉུང་short practice
སྒྲུབ་ཐབས་means of achievement
སྒྲུབ་ནུས་the power to perform
སྒྲུབ་པའི་དུས་practice period
སྒྲུབ་པར་དཀའ་difficult to achieve
སྒྲུབ་ཕུག་meditation cave
སྒྲུབ་བརྩོན་great practitioner
སྒྲུབ་མཁས་one who propitiates
སྒྲུབ་མཆོག་supreme practitioner
སྒྲུབ་ཚུགས་application
སྒྲུབ་ཚུལ་mode of proof
སྒྲུབ་འབྲས་result
སྒྲུབ་རྩོམ་novel
སྒྲུབ་རྩོལ་industry
སྒྲུབ་སྔགས་activation mantra
སྒྲུབ་སླ་པ་easy to perform
སྒྲེ་མོ་bare ground
སྒྲེག་པ་belch
སྒྲེགས་belch
སྒྲེང་raise
སྒྲེངས་raise
སྒྲེངས་ཤིག་hoisted
སྒྲེས་པ་numeral
སྒྲོ་གླིང་deliberation
སྒྲོ་ཕྱགས་feather duster
སྒྲོ་སོག་quill
སྒྲོག་གུ་button
སྒྲོག་རུས་པ་shelter for swans
སྒྲོགས་ཞུམ་scream
སྒྲོགས་ལྡན་river
སྒྲོན་ཁེབས་lamp shade
སྒྲོན་ཏེ་having offered
སྒྲོན་དྲེག་lamp black
སྒྲོན་དྲེགས་lamp black
སྒྲོན་བརྙན་slide show
སྒྲོན་བསྐལ་enlightened age
སྒྲོམ་ཆེ་བ་large box or chest
སྒྲོལ་ལམ་path of liberation
སྒྲོས་དག་perfect
སྔ་གུང་morning and noon
སྔ་གོང་ནས་formerly
སྔ་གོང་ཡབ་your late father
སྔ་དགོངས་morning and evening
སྔ་དགྲ་former enemy
སྔ་དུས་in bygone times
སྔ་དྲོའི་ཇ་morning tea
སྔ་ནས་བསགས་པ་formerly collected
སྔ་ནས་ཡོད་always exists
སྔ་ནུབ་eve
སྔ་ཕྱིར་former and later
སྔ་བར་dawn
སྔ་བར་འཆོས་པ་previously contrived
སྔ་མ་སྔ་མས་the previous stages
སྔ་མཁོ་olden time
སྔ་མགོ་pillow
སྔ་མཇལ་མྱོང་བ་had met before
སྔ་མའི་དུས་in early times
སྔ་མའི་ཚུལ་former conduct
སྔ་ཞོགས་ཇ་morning tea
སྔ་འདོན་advance
སྔ་རྒོལ་former disputant
སྔ་རྣམས་those in front
སྔ་ལུགས་སུ་prior
སྔ་ཤས་very early
སྔ་སྔ་very early
སྔ་སྨིན་early ripening
སྔ་སྨིན་འབྲས་early ripening paddy
སྔ་ཧར་a kind of tea
སྔགས་ཐིག་mantra drop
སྔགས་ཕྱོགས་mantra series
སྔགས་བཏུ་བ་extracts of mantra
སྔགས་འདོན་པ་utter lamentation
སྔགས་རམས་པ་doctor in mysticism
སྔགས་རྨས་པ་doctor of mysticism
སྔགས་ལམ་mantra approach
སྔགས་སྐྲག་sudden fear
སྔགས་སྒྲུབ་པ་recite mantras
སྔགས་སྤེལ་བ་recite mantras
སྔངས་སྐྲག་panic
སྔན་དུ་before
སྔན་བུ་medicinal herb
སྔར་གྱི་མཚན་མ་former sign
སྔར་དྲངས་formerly invited
སྔར་བཤད་པ་ལྟར་as explained earlier
སྔར་བས་as before
སྔར་འདྲིས་known previously
སྔར་རྒྱུན་like before
སྔར་ལས་མང་more than before
སྔར་ལས་ལྷག་པ་even more
སྔར་སྐྱེས་an elder brother
སྔས་མགོ་pillow
སྔས་མལ་couch of pillows
སྔས་འབོལ་pillow
སྔས་སྟན་pillow
སྔས་སྦྲེལ་sharing the pillow
སྔུར་བ་snore
སྔོ་dedicate
སྔོ་ངད་aromatic herbs
སྔོ་དག་dark blue
སྔོ་དམར་purple
སྔོ་ཚལ་ཞིག་spinach
སྔོ་འཛིན་apprehending blue
སྔོ་ཡི་herbal
སྔོ་ཡེར་རེ་pure blue
སྔོ་རིགས་སྔགས་ritualistic science
སྔོ་རྩྭ་green grass
སྔོ་ལོ་green leaf
སྔོ་སྐྱེན་early growth
སྔོགས་པ་churn milk
སྔོན་གྱི་གནས་past lives
སྔོན་གྱི་དཔེ་precedent
སྔོན་ཆད་མེད་unprecedented
སྔོན་ཐོན་advanced
སྔོན་ནས་from a former time
སྔོན་པོ་blue
སྔོན་པོ་བཞིན་blue sky
སྔོན་ཕྱོགས་in front of
སྔོན་བཞིན་as formerly
སྔོན་བྱོན་ancient
སྔོན་མ་former
སྔོན་མར་prior
སྔོན་མུས་སུ་in the past
སྔོན་ཚུད་ནས་beforehand
སྔོན་འགྲོ་པ་beginner
སྔོན་འཇུག་prefix
སྔོན་འདྲིས་previously met
སྔོན་འདྲེན་པ་formerly invited
སྔོན་འབུམ་a botanical work
སྔོན་འབྱོན་པ་predecessor
སྔོན་འཛིན་apprehending blue
སྔོན་རྩིས་estimation
སྔོན་ལ་འགྲོ་བ་advance
སྔོན་ཤེས་intuition
སྔོན་སོང་preceding
སྔོན་སྐྱེས་པ་elder brother
སྔོས་dedicate
སྔོས་པ་bluish
སྙད་འདོགས་པ་malicious accusation
སྙན་ear
སྙན་གཏོད་པ་give ear to
སྙན་གྲགས་fame
སྙན་གྲགས་ཀྱི་glorious
སྙན་གླུ་melody
སྙན་ངག་གི་grammatical
སྙན་ངག་རོ་ལྡན་humorous poem
སྙན་ཆ་earrings
སྙན་ནང་district in nw tibet
སྙན་པ་སྨྲ་བ་pleasant speech
སྙན་པའི་སྒྲ་agreeable voice
སྙན་པར་སྨྲ་བ་pleasant statement
སྙན་བརྗོད་graphic description
སྙན་མཆོག་ear
སྙན་མོ་place in tibet
སྙན་ཞུ་ཕུལ་བ་apply
སྙན་ཞུ་འབུལ་བ་present a petition
སྙན་འཇེགས་polite and gentle
སྙན་འཇེབ་sweet
སྙན་རྒྱན་ear ring
སྙན་ལ་རིང་བ་long and melodious
སྙན་ལྕོག་ear
སྙན་ལྷོང་བ་make dear
སྙན་ཤལ་flap of the ear
སྙན་སེང་ཞུ་བ་report remonstrate
སྙན་སྐད་melodious language
སྙན་སྲབ་credulous
སྙབ་པ་smack with the lips
སྙམ་གྱིན་thinking
སྙམ་དུ་thinking
སྙམ་དུ་བསམ་is the thought
སྙམ་དུ་བསམ་ནས་thinking
སྙམ་དུ་རློམ་thinking
སྙམ་དུ་སེམས་thinking
སྙམ་འབྱུང་it may seem that
སྙལ་ཡས་a number
སྙལ་སྨིན་fermentation
སྙི་པོ་heart
སྙི་མོ་delicate
སྙི་ཤང་ཀ་ཏ་mountains in nepal
སྙིག་མ་exhaust muck
སྙིགས་མའི་residual
སྙིང་ཁར་སྦྱར་to join at the heart
སྙིང་ཁུ་fluidity
སྙིང་ཁུར་nectar
སྙིང་ག་breast
སྙིང་གི་cardiac
སྙིང་ཆ་core
སྙིང་ཉེ་faithfulness
སྙིང་ཐག་conviction
སྙིང་ཐག་པ་earnest
སྙིང་པོ་བསྡུས་condense the essence
སྙིང་པོ་མཆོག་a number
སྙིང་པོ་ལེན་take advantage of
སྙིང་པོར་བྱས་put in the center
སྙིང་བྱང་ཆུབ་essence of bodhi
སྙིང་མོ་ཆེ་so daring
སྙིང་ཚིམ་པོ་comfortable
སྙིང་ཚིལ་fat about the heart
སྙིང་འབབ་དྲི་agreeable scent
སྙིང་འཚངས་heart seizes
སྙིང་རི་monastery in tibet
སྙིང་རྗེ་ཅན་compassionate
སྙིང་རྗེ་བ་compassionate person
སྙིང་རྗེ་མེད་mercilessness
སྙིང་རྗེས་with compassion
སྙིང་ལ་into the heart
སྙིང་ལ་ཁུགས་upon the breast
སྙིང་ལ་བརྣགས་long for
སྙིང་ལགས་lady
སྙིང་ལྡན་full of substance
སྙིང་སྡུས་synopsis
སྙིང་སྣ་various hearts
སྙིལ་སྡུད་པ་waste amassed wealth
སྙུ་གུ་pen
སྙུག་བཟོ་wicker work
སྙུག་རུམ་place in tibet
སྙུག་ཤིང་bamboo
སྙུགས་ཆེན་continual
སྙུགས་སུ་in a long time
སྙུགས་སྦྲུལ་species of lizard
སྙུན་མེད་free from illness
སྙེ་ཐང་village
སྙེ་ཕུ་town in tibet
སྙེ་མ་fruit cluster
སྙེ་མདོ་village in tibet
སྙེ་མོ་district in tibet
སྙེ་མོ་གཞུ་place nw of lhasa
སྙེ་འཕྲེང་large grove in tibet
སྙེག་མ་a pursuer
སྙེད་འདུས་པ་ན་as many
སྙེམ་ཆུང་servile
སྙེམས་པས་with grandeur
སྙེས་འབོལ་pillow
སྙོང་plaster
སྙོངས་པ་apply an ointment
སྙོམ་པོ་indolence
སྙོམ་མེ་བ་dull type
སྙོམ་འཇུག་absorptions
སྙོམ་ལས་lazy one
སྙོམས་ཆུང་insignificant one
སྙོམས་དུ་མེད་without an equal
སྙོམས་པར་balanced
སྙོམས་པར་སྦྱར་unite with
སྙོམས་པོར་evenly
སྙོམས་འགྱུར་will be balanced
སྟ་གྲི་pick axe
སྟ་རེའི་ལྟག་པ་back of an axe
སྟག་tiger
སྟག་ཁྲ་བོ་colorful tiger
སྟག་གི་མཇུག་མ་castor oil plant
སྟག་གི་རྐང་པ་tree or plant
སྟག་གོང་nape
སྟག་དམར་ཡག་tiger in its prime
སྟག་དོང་quiver
སྟག་ནང་བཞིན་tigerish
སྟག་པ་ཤིང་birch tree
སྟག་ཕྲུག་tiger cub
སྟག་མོ་tigress
སྟག་ཤར་full grown youth
སྟག་ཤིང་birch tree
སྟག་སྡེ་place in tibet
སྟག་སྦྲང་hornet
སྟང་དབྱལ་progenitors
སྟན་བདེ་བ་comfortable seat
སྟན་བྱིན་seat of state
སྟན་འགེབས་པ་lay a mat on
སྟན་འཐུག་པོ་thick rug
སྟན་ལས་བཞེངས་rises from the seat
སྟན་ལས་ལངས་get up from a seat
སྟན་ལས་ལྡང་བ་rise from a seat
སྟབ་ཀ་place in tibet
སྟབ་སེང་sap of a tree
སྟབས་བདེ་བ་easy to plant or fix
སྟབས་འགྲིག་པ་suitable occasion
སྟབས་ཡག་ནས་fortunately
སྟབས་ཡག་པོ་fortunate
སྟབས་སུ་འགྱིང་assume a pose
སྟར་ག་walnut
སྟར་གའི་ཤིང་walnut tree
སྟར་བུའི་ཤིང་walnut tree
སྟི་བའི་གནས་resting place
སྟིང་བསྐུལ་service
སྟིབ་པ་offer
སྟིབས་པ་offer
སྟུན་ཤིང་iron club
སྟུབས་པ་cut to pieces
སྟེ་ཁ་edge of axe
སྟེ་ལོང་unsubstantial
སྟེ་ལྟག་back of the axe
སྟེགས་platform
སྟེགས་ཀྱི་ཁར་upon a throne
སྟེགས་བུ་platform
སྟེང་above
སྟེང་ཁང་upper story
སྟེང་གི་གཞི་upper surface
སྟེང་གི་ཕྱོགས་zenith
སྟེང་ཐོག་top
སྟེང་ནས་with
སྟེང་ཕྱོགས་zenith
སྟེང་མ་upper
སྟེང་འཇུག་surmounting letters
སྟེང་འོག་upper and lower
སྟེང་རྡུང་pestle
སྟེང་རླུང་upper prana
སྟེང་ཤོད་upper and lower
སྟེང་ཤོས་uppermost
སྟེང་སོ་upper teeth
སྟེང་སྐྱོབ་canopy
སྟེན་བྱེད་faith
སྟེན་བྱེད་པ་serve reverentially
སྟེམས་པ་to control
སྟེའུ་adze
སྟེའུ་ཀ་མ་kind of missile
སྟེའུ་སྟག་sharp arrow
སྟེས་དབང་གིས་by the power of fate
སྟོ་tribe in tibet
སྟོ་ཐག་rope
སྟོ་ར་circle of dancers
སྟོང་ཀྱིས་by virtue of
སྟོང་ཁམས་all the worlds
སྟོང་གཞི་base which is empty
སྟོང་གཟུགས་empty form
སྟོང་གསུམ་one billion
སྟོང་གྲོགས་support
སྟོང་ཅན་arrow
སྟོང་ཆ་factor of emptiness
སྟོང་ཆམ་མེ་བ་totally empty
སྟོང་ཉིད་emptiness
སྟོང་ཉེ་tribal name in tibet
སྟོང་དུ་གྱུར་become empty
སྟོང་པ་ཉིད་emptiness
སྟོང་པ་ལ་རེག་nothing
སྟོང་པར་གནས་པ་abide as nothing
སྟོང་ཕྲག་གཅིག་one thousand
སྟོང་བ་ཉིད་emptiness
སྟོང་བསྐལ་age of vacuity
སྟོང་ཟད་empty and idle
སྟོང་ཟིལ་corydalis meifolia
སྟོང་རི་ཟིལ་corydalis meifolia
སྟོང་རྩ་རེ་ཙམ་one thousand
སྟོང་སང་ངེ་pure emptiness
སྟོང་སང་སང་vacant
སྟོང་སོབ་hollow like chaff
སྟོང་སྙེད་about a thousand
སྟོང་ཧང་ཧང་vacant
སྟོངས་གཞི་basis of emptiness
སྟོངས་པ་empty
སྟོད་ཁོར་waistcoat
སྟོད་གླུ་hymn of praise
སྟོད་ཐུང་shirt
སྟོད་ཕུར་polar star
སྟོད་འབྲེལ་name of a commentary
སྟོད་ར་flattering language
སྟོད་རས་cotton cloth
སྟོད་སྐོར་waistcoat
སྟོན་ཀ་autumn
སྟོན་ཀའི་དུས་fall
སྟོན་ཁ་autumn
སྟོན་པ་བཞི་four maxims
སྟོན་པ་སྤང་བ་shed
སྟོན་པའི་གནས་place of displaying
སྟོན་བསྡུ་autumn harvest
སྟོན་བྱུང་autumn
སྟོན་མཛད་པ་to reveal
སྟོན་ལྗང་district in tibet
སྟོབས་ཅན་powerful
སྟོབས་བཅུ་ten powers
སྟོབས་བཟང་མ་medicinal plant
སྟོབས་མང་པོ་iron
སྟོབས་མིག་number
སྟོབས་མེད་པ་feeble
སྟོབས་ཞན་པོ་weak
སྟོབས་རྩལ་ཅན་robust
སྟོབས་ལྡན་བུ་son of bali
སྟོབས་ཤུགས་ཅན་energetic
སྟོབས་སྐྱེད་increase of strength
སྟོབས་སྐྱེས་vigor
སྟོར་lose
སྡང་བའི་དགྲ་hating enemy
སྡང་བའི་རྟགས་signs of hatred
སྡང་མིག་angry eyes
སྡང་ཚད་enough
སྡང་སེམས་hatred
སྡང་སྐྱེན་པ་swift to wrath
སྡིག་ཅན་ཤན་པ་sinful butcher
སྡིག་ཆེ་most heinous crime
སྡིག་ཆེན་sinner
སྡིག་ཏོ་བ་sinner
སྡིག་པ་ཅན་sinful
སྡིག་པ་དག་པ་purified of sin
སྡིག་པ་བསགས་པ་sinner
སྡིག་པ་བྱེད་པ་sinner
སྡིག་པ་ར་ཙ་scorpion
སྡིག་པ་ར་ཚ་scorpion
སྡིག་པ་རྭ་ཅན་scorpion
སྡིག་པ་ལ་འཛུད་seduce into sin
སྡིག་པའི་ལས་evil deeds
སྡིག་བརྡ་warning
སྡིག་བལྟ་scorpion
སྡིག་རྭ་scorpion
སྡིག་ལྟུང་sins and downfalls
སྡིག་ཤས་wicked people
སྡིག་སྡུག་sin and suffering
སྡིང་ཆ་stage
སྡིངས་ཆ་platform
སྡུ་also
སྡུ་བ་brief
སྡུག་ག་worse
སྡུག་གོས་mourning dress
སྡུག་མཐའ་sad ending
སྡུག་ཞྭ་mourning hood or cap
སྡུག་འདྲེ་demon
སྡུག་འབབ་པ་be in mourning
སྡུག་ཡུལ་wretched place
སྡུག་ཤོས་worst
སྡུག་སེམས་affectionate
སྡུག་སྦྱོང་torture
སྡུག་སྲན་hardiness
སྡུག་སྲུང་བ་mourn
སྡུད་པ་པོ་collector
སྡུད་པའི་ཚིག་conjunction
སྡུམ་ཐབས་family life
སྡུམ་མཚེས་neighbor
སྡུམ་ར་garden
སྡུམས་བྱེད་པ་reconciliation
སྡུམས་མཛད་intermediary
སྡུར་བླང་amber
སྡུར་ལེན་exercises
སྡུས་བསྔལ་suffering
སྡེ་ཁག་department
སྡེ་ཅན་ancient indian sage
སྡེ་དགོན་central monastery
སྡེ་ཕྱོགས་རིས་factions
སྡེ་བཙུགས་monastery
སྡེ་འཁྲུགས་civil wars
སྡེ་སྐོར་district
སྡེད་དཔོན་leader
སྡེབ་ཚོང་wholesale
སྡེབས་བླངས་to take up together
སྡེར་གང་plateful
སྡེར་མ་ཆག་ཆག་broken dish or plate
སྡེར་མེད་without claws
སྡེར་མོ་རྣོ་sharp claw
སྡེར་རྩེ་plate
སྡོ་ཁམ་belonging together
སྡོ་མཐེང་azure
སྡོང་གཅིག་one day
སྡོང་ཇ་tea of seng ldang
སྡོང་ཐུང་བ་short stem
སྡོང་པོ་tree trunk
སྡོང་པོ་གཅིག་species of gentian
སྡོང་བུ་tree trunk
སྡོང་བུ་རིང་gourd
སྡོང་བུའི་སྨན་medicinal plant
སྡོང་རྒན་old tree
སྡོད་ཁང་ཆ་ཚང་apartment
སྡོད་གནས་ཀྱི་residential
སྡོད་ན་དྲག་it is better to stay
སྡོད་པ་གསུམ་threefold abidance
སྡོད་བཅུག་པ་accommodate
སྡོད་བཞིན་པ་staying
སྡོད་མི་habitant
སྡོད་མི་ཁོམ་no leisure to stay
སྡོད་སྡོད་sit
སྡོམ་ཁྲིམས་covenant
སྡོམ་ནག་པོ་black spider
སྡོམ་པ་གནང་བ་ordain
སྡོམ་པ་མེད་no vow
སྡོམ་པའི་གཞི་fundamental vows
སྡོམ་པའི་སེམས་restrained mind
སྡོམ་བརྗོད་synopsis
སྡོམ་མིན་bad discipline
སྡོམ་མོ་she spider
སྡོམ་འཆོར་vow is dissipated
སྡོམ་རྟེན་obligation
སྡོམས་རྟགས་combined reason
སྣ་ཀུ་nose
སྣ་ཁུ་nose
སྣ་ཁུག་རྡབ་པ་have bad luck
སྣ་ཁུང་nostril
སྣ་གཅིག་single
སྣ་གུག་flat nose
སྣ་ཅན་མ་wind
སྣ་ཆམ་nose cold
སྣ་ཆུ་nose mucus
སྣ་ཐག་འཐེན་པ་snuff
སྣ་ཐོད་sling
སྣ་དགུ་all kinds of
སྣ་དམར་བ་red nose
སྣ་ནས་སྦྲིད་པ་sneeze
སྣ་ཕུ་place in tibet
སྣ་ཕྱིས་nose rag
སྣ་བག་བྲེལ་being tethered
སྣ་བབས་glanders
སྣ་བའི་དབང་པོ་nose sense power
སྣ་བུག་nostril
སྣ་བུག་གི་nasal
སྣ་བུམ་ink stand
སྣ་བོ་ལ་ཁ་a mountain peak
སྣ་ཚོགས་ཏོག་a son of kamadeva
སྣ་ཚོགས་བཙེགས་mount sumeru
སྣ་ཚོགས་འཛིན་earth
སྣ་ཚོགས་རྒྱུ་fish
སྣ་ཚོགས་ལྷ་type of lha
སྣ་ཚོགས་སུ་in so many ways
སྣ་ཟིན་ཙམ་to take hold of
སྣ་འཁྱོག་པ་bent nose
སྣ་རེ་ཙམ་only a portion
སྣ་རྟོག་nostril
སྣ་རྣམ་ཤེས་nose consciousness
སྣ་ལྔ་five kinds
སྣ་སུན་wearying
སྣ་སྒང་bridge of nose
སྣ་སྒོ་opening
སྣ་སྣེམ་lazy
སྣ་སྦྱོང་snuff
སྣ་སྦྲང་mucus
སྣ་སྨད་place in tibet
སྣག་tribal name
སྣག་ཐིག་black line
སྣག་ཚ་ink
སྣག་ཚ་སྐམ་པོ་chinese ink
སྣགས་mantra
སྣགས་ཐིག་mantra drop
སྣང་ངོ་ཐ་དད་diversity
སྣང་ཆ་appearance factor
སྣང་དག་མ་བཏང་be indifferent
སྣང་དངས་naturally clear
སྣང་བ་གསལ་luminosity
སྣང་བ་ཉིད་appearance itself
སྣང་བ་དཀར་པོ་moonlight
སྣང་བ་མཆེད་པ་increase of light
སྣང་བ་མཐོ་uplifted
སྣང་བ་ཙམ་merely appears
སྣང་བ་ཟ་ཟི་obscure dim light
སྣང་བ་འགྲོ་པོ་comely
སྣང་བ་ཡོད་པའི་when it is light
སྣང་བ་སྡུད་focus appearances
སྣང་བཅས་conception
སྣང་བའི་དངོས་concrete presence
སྣང་བའི་ས་levels of visions
སྣང་བྱས་effulgent
སྣང་མཁན་perceiver
སྣང་མི་སྣང་is or is not
སྣང་མེད་without appearance
སྣང་མོད་it seemed
སྣང་ཙམ་mere appearance
སྣང་ཚུལ་mode of appearance
སྣང་འོད་a flower
སྣང་ཡུལ་appearing object
སྣང་ཡུལ་ཀུན་all external vision
སྣང་རིག་གསལ་luminous perception
སྣང་རིགས་པ་apparent character
སྣང་སྐྱིད་fun
སྣད་འགྲོ་become injured
སྣབས་ལུད་ཅན་snotty
སྣམ་གཞོགས་side
སྣམ་ཕྲག་breast pocket
སྣམ་ཕྲུག་woollen cloth
སྣམ་བུ་འཐག་པ་weave woolen cloth
སྣམ་ལས་བྱེད་པ་spin and weave
སྣའི་ཅག་ཀྲུམ་bridge of the nose
སྣའི་རྣམ་ཤེས་nose consciousness
སྣལ་མ་བསྟོམ་cut threads
སྣུམ་ཀོང་small oil bowl
སྣུམ་ཅན་ཤིང་a medicinal plant
སྣུམ་དྲི་smell of fat
སྣུམ་བག་polished
སྣུམ་བག་ཆགས་པ་a little oil on it
སྣུམ་བྱུག་པ་lubricate
སྣུམ་བྱུགས་པ་be smeared with oil
སྣུམ་ཞུ་oil lamp
སྣུམ་རྩི་oily substance
སྣུམ་སྐུད་པ་be smeared with oil
སྣེ་གདོང་རྩེ་town
སྣེ་གདོང་རྫོང་fort of the town
སྣེ་བཏགས་tag
སྣེ་ཚར་shred
སྣེ་ཟུར་བདར་བ་chip
སྣེ་ལེན་པ་steward
སྣེ་ལེན་ཞུ་བ་welcome
སྣེ་ཤོད་village in khams
སྣེག་མང་པོ་sundry
སྣེའུ་གླིང་ཁ་grove near lhasa
སྣོང་guilt
སྣོང་ཅན་guilty
སྣོད་གཅིག་ཏུ་in one vessel
སྣོད་ཆག་པ་broken vessel
སྣོད་ཆས་utensil
སྣོད་ཆེན་པོ་cauldron
སྣོད་དུ་བཙུད་put into a vessel
སྣོད་དུ་བརྫངས་poured into a vessel
སྣོད་པོ་ཆེ་jug
སྣོད་བཀང་བ་a vessel filled up
སྣོད་བརྒྱང་བ་to set out a vessel
སྣོད་མཆོག་excellent vessel
སྣོད་སྐྱོམ་པ་shake a vessel
སྣོད་སྟོང་པ་empty vessel
སྣོན་པོ་བཏབ་add on
སྣོམ་བྱེད་the nose
སྤ་ཀོང་frighten
སྤ་ཅུ་གང་bamboo manna
སྤ་དབྱུག་walking cane
སྤ་ཚབ་place in upper tibet
སྤ་འཁར་walking cane
སྤ་འབྲུམ་a fruit
སྤ་ཡི་སྙས་small stake
སྤ་ར་village nw of lhasa
སྤ་རི་kind of cotton cloth
སྤ་ལྕག་walking cane
སྤ་སྐོར་hoop of a cask
སྤག་ལྟར་བརྫིས་mixed in dough
སྤག་ལྟར་བསྣོས་mixed in dough
སྤང་ཁ་marsh
སྤང་ཁྲི་bookstand
སྤང་གཉེན་discard and remedy
སྤང་གདན་apron
སྤང་པ་abandon
སྤང་མེད་nothing to abandon
སྤང་རྩྭ་turf
སྤང་ལམ་path of renunciation
སྤང་ལུང་grassy valley
སྤང་ཤ་mushroom
སྤང་སངས་clearing
སྤང་སེ་a bird
སྤངས་ཏེ་giving up
སྤངས་པ་ཉིད་abandonment
སྤངས་བ་abandonment
སྤངས་བསྟོད་elevation
སྤམ་པོ་suitable
སྤམ་པོ་ཅན་elegant
སྤམ་པོ་མེད་པོ་gawky
སྤམ་མདོག་ཁ་པོ་modest
སྤར་པ་raise
སྤར་ཕུ་place in tibet
སྤར་ཟིན་པ་lit
སྤིག་རྫོང་place in tibet
སྤུ་གཙང་མ་gem
སྤུ་གཡོས་hairs stood on end
སྤུ་གུ་དོར་place in tibet
སྤུ་གྲི་razor
སྤུ་གྲི་གང་བ་hell full of razors
སྤུ་ངན་pubic hair
སྤུ་ཇ་kind of tea
སྤུ་ཐག་rope made of hair
སྤུ་ནག་སྐྱ་ཅན་grizzly
སྤུ་བརྗེས་to shed its skin
སྤུ་ཙམ་མེད་not even a trace of
སྤུ་འོ་བྲག་rock cavern in tibet
སྤུ་ཡི་ཁུང་བུ་pores of the hair
སྤུ་ར་knife
སྤུ་རིང་ཉ་fish
སྤུ་རིས་hairline
སྤུ་རྩུབ་པོ་coarse hair
སྤུ་ལོང་goose bumps
སྤུ་ལོང་བྱེད་to cause goose bumps
སྤུ་ཤད་རྩེ་མོ་the tip of one hair
སྤུ་ཤེལ་amber
སྤུ་སོབ་སོབ་shaggy
སྤུ་སྙོལ་suppression of anger
སྤུ་སྤ་ད་མ་fabulous asura abode
སྤུག་gem
སྤུང་གསོག་heap
སྤུང་པ་རྒྱས་པ་fleshy shoulder
སྤུང་འཛོམས་huddle
སྤུང་སྡེ་division
སྤུངས་ཆེ་བ་resilience
སྤུན་གཉེན་kinsfolk
སྤུན་ཆེན་བ་elder brother
སྤུན་ནང་བཞིན་fraternal
སྤུན་བཞི་allegory
སྤུན་མཆེད་relative
སྤུར་བྱངས་པ་burn a dead body
སྤུར་སྒམ་coffin
སྤུར་སྒྲོམ་coffin
སྤུས་ཀ་སྡུག་པ་inferior
སྤུས་ཁ་property of a thing
སྤུས་གཙང་pure
སྤུས་དག་པོ་of excellent quality
སྤུས་བསྒྱུར་change the quality
སྤུས་ཚད་sample
སྤུས་འབྲིང་middling
སྤུས་རབ་superior quality
སྤེ་place in tibet
སྤེག་ཤིང་part of a cart
སྤེན་པ་saturday
སྤེན་མ་tamarisk plant
སྤེལ་གཞི་a village in tsang
སྤེལ་བ་ལ་for increasing
སྤེལ་མར་alternating
སྤེལ་ཟིན་increased
སྤེལ་རྒྱས་པར་blaze about
སྤོ་ཐང་name of rat in story
སྤོ་བོ་ལགས་old man
སྤོ་ལོ་ball
སྤོ་ལོག་football
སྤོ་ཤུད་evacuation shift
སྤོ་སྤོ་great grandfather
སྤོགས་བྱེད་པ་make profit
སྤོང་བའི་ལམ་path of abandonment
སྤོང་བྱེད་abandoner
སྤོང་ལམ་path of renunciation
སྤོད་ཁང་hermitage
སྤོད་ཅན་seasoned
སྤོད་འདེབས་པ་season
སྤོན་ཚང་physician
སྤོབས་པ་courage
སྤོས་ཉུག་པ་rub perfume
སྤོས་ཕྱེ་fumigating powder
སྤོས་རོལ་incense and music
སྤོས་ཤེལ་amber
སྤོས་སྒྲུབ་པ་burn incense
སྤོས་སྤར་བ་to burn incense
སྤོས་སྦྱོར་བ་burn incense
སྤྱང་ཁུ་ལ་ཁ་hill near lhasa
སྤྱང་ཁྲིག་a tribe
སྤྱང་ཐབས་knack
སྤྱང་ནག་black wolf
སྤྱངས་study
སྤྱད་པར་བྱ་བ་can undertake
སྤྱན་ཁུག་eyebrow
སྤྱན་ཁྱུག་eyebrow
སྤྱན་ཆབ་བསིལ་shed tears
སྤྱན་ཆབ་ཤོར་to cry
སྤྱན་དབུས་མ་middle eye
སྤྱན་དྲང་invite
སྤྱན་དྲངས་invite
སྤྱན་དྲོངས་invite
སྤྱན་ཟེམ་མེ་slightly smiling
སྤྱན་འདྲེན་invite
སྤྱན་འབེབས་inspection
སྤྱན་ལེགས་ཤེས་intelligent
སྤྱན་ལྟོས་imitation
སྤྱི་ཀློང་cosmic space
སྤྱི་གཅེར་bald
སྤྱི་གཙུག་ཏུ་above the head
སྤྱི་གུ་pen
སྤྱི་གླིང་park
སྤྱི་ཅེར་bald
སྤྱི་ཐབ་mess
སྤྱི་དང་མཐུན་follow the general
སྤྱི་དམངས་citizen
སྤྱི་དོན་general meaning
སྤྱི་ན་generally
སྤྱི་ཕན་public welfare
སྤྱི་བདེ་public security
སྤྱི་བརྟོལ་ཅན་shameless
སྤྱི་བརྟོལ་དུ་without hesitation
སྤྱི་བློན་chief officer
སྤྱི་མདའ་general
སྤྱི་ཙམ་general idea
སྤྱི་ཚོགས་ཀྱི་social
སྤྱི་ཟུམ་combined
སྤྱི་འདུས་union of
སྤྱི་ཡོངས་totality
སྤྱི་རྒྱ་kilogram
སྤྱི་རྗེ་lord
སྤྱི་སྒོས་general and special
སྤྱི་སྙོམས་average
སྤྱི་སྣང་external vision
སྤྱི་སྣོད་outer world
སྤྱི་སྤུང་cycle of teachings
སྤྱིན་གནས་donors
སྤྱིན་པ་giving
སྤྱིན་ཕོར་glue pot
སྤྱིན་སྐུད་པ་spread glue on
སྤྱིན་སྐོལ་བ་manufacture glue
སྤྱིའི་general
སྤྱིའི་ཆིངས་general structure
སྤྱིའི་ཚུགས་headfirst
སྤྱིར་in general
སྤྱིར་གྱིས་generally
སྤྱིར་དུ་generally
སྤྱིར་བཏང་གི་usual
སྤྱིར་བཏང་དུ་generally
སྤྱིར་བཤད་པ་general explanation
སྤྱིར་བསྟན་པ་general explanation
སྤྱིལ་པ་hut dweller
སྤྱིལ་བུ་thatched hut
སྤྱིལ་མ་female hut dweller
སྤྱོད་ངན་པ་wicked
སྤྱོད་པ་ཞིབ་པ་strict monastic walk
སྤྱོད་བཟང་གི་ethic
སྤྱོད་བྱེད་མ་woman
སྤྱོད་ལན་reaction
སྤྱོད་སྒོ་use
སྤྲ་ཐོག་medicinal herb
སྤྲ་ཕྲུག་young langur
སྤྲ་མོ་young langur
སྤྲ་སྤྲེའུ་monkeys
སྤྲང་པོ་beggar
སྤྲང་པོ་བཟོ་བ་impoverish
སྤྲང་སྐད་slang
སྤྲི་cream
སྤྲིན་cloud
སྤྲིན་གསར་ink
སྤྲིན་པ་cloud
སྤྲིན་བཅུད་rain
སྤྲིན་བལ་cotton
སྤྲིན་མེད་པ་cloudless
སྤྲིན་རྩ་བ་root of long pepper
སྤྲིན་ལ་དགའ་peacock
སྤྲིན་སྐྱེས་thunder
སྤྲིབས་པ་be hungry
སྤྲུ་བ་hellebore
སྤྲུ་མ་hellebore
སྤྲུགས་པ་shake
སྤྲུགས་བསིགས་falling asunder
སྤྲུགས་ཟིན་པ་shook
སྤྲུལ་ཆེན་པོ་great emanation
སྤྲུལ་ཏེ་emanating
སྤྲུལ་པ་དང་ཕོ་envoys
སྤྲུལ་པ་སྐུ་emanation body
སྤྲུལ་བསྒྱུར་transformations
སྤྲུལ་མིང་incarnation names
སྤྲུལ་འཁོར་navel center
སྤྲུལ་ཡང་གསང་bon divinity
སྤྲེ་monkey
སྤྲེའུ་monkey
སྤྲེའུ་འདྲ་spider
སྤྲོ་གཡེངས་amusement
སྤྲོ་ཐུང་ཐུང་irascible
སྤྲོ་བ་ཆུང་ངུ་little elaboration
སྤྲོ་བ་ཆུང་བ་little elaboration
སྤྲོ་བ་ཆེ་great elaboration
སྤྲོ་བ་འཕེལ་to have joy
སྤྲོ་བ་སེམས་joyful
སྤྲོ་བ་སྐྱེད་set heart on
སྤྲོ་བར་elaborate
སྤྲོ་བསྡུ་emanate and resolve
སྤྲོ་བསྲིངས་consoled
སྤྲོ་བོ་བཟོ་བ་entertain
སྤྲོ་རིམ་པ་increase by degrees
སྤྲོ་སང་བ་great joy
སྤྲོ་སེམས་alacrity
སྤྲོད་དེ་having come out
སྤྲོད་འཐམ་མོ་technicality
སྤྲོད་ལྷག་arrear
སྤྲོས་པ་ཅན་elaborate
སྦ་to conceal
སྦ་ཁུག་purse
སྦ་ཐག་rope of twisted cane
སྦ་དཀར་kind of linen cloth
སྦ་བཞེད་tibetan chronicle
སྦ་རེ་སྦོ་རེ་rugged
སྦ་ལྕག་cane or bamboo whip
སྦ་སྐོར་hoop of bamboo
སྦག་སྦག་bike
སྦགས་མི་ཚུགས་cannot be worsened
སྦང་བོ་soak
སྦང་སྐོམ་dried
སྦངས་གླུམ་wet malt
སྦངས་ལུད་dung manure
སྦངས་སྐམ་dung dried for fuel
སྦབ་species of bird
སྦར་kindle
སྦར་གཟུང་grip
སྦར་བ་གང་handful
སྦར་མོ་གང་a handful
སྦར་ཡས་a number
སྦར་ར་a handful of
སྦར་ཤད་རྒྱབ་པ་scratch
སྦལ་ནག་toad
སྦལ་པ་toad
སྦས་གསང་གིས་secretly
སྦས་གསང་མེད་པ་indiscreet
སྦས་པའི་hidden
སྦས་ཚུལ་secret manner
སྦས་ས་hiding place
སྦིག་kind of wild animal
སྦུ་སོབ་surf
སྦུ་སྐྲ་ལི་བ་disordered hair
སྦུག་གི་inner
སྦུག་ཆལ་cymbal
སྦུགས་དམ་royal seal
སྦུགས་རྩ་the pulse
སྦུགས་རླུང་act of tasting
སྦུང་བ་heap
སྦུད་པ་འབུད་པ་blow the bellows
སྦུན་any outer cover
སྦུན་ཟླ་brother
སྦུན་སྐོགས་strip bare
སྦུབ་ཁོང་hollow ball
སྦུབ་ཆལ་pair of cymbals
སྦུབས་གྲོལ་blossoming
སྦུབས་ཅན་nutmeg
སྦུབས་འབྲས་nutmeg
སྦུབས་སོ་cheek tooth
སྦུབས་སྐྱེས་nutmeg
སྦུར་པ་beetle
སྦུར་འཁྱོག་beetle
སྦུར་ལོང་topaz
སྦུས་དག་meticulous
སྦེ་ཀ་toad
སྦེ་སེ་ཀོབ་movie theatre
སྦེག་slender
སྦེད་བཞིན་པ་hiding
སྦེད་བྱེད་ཀྱི་burial
སྦོ་high
སྦོ་འཁྲོག་in the belly
སྦོ་འཁྲོག་པ་wheeze from swelling
སྦོ་རྐུན་པ་pickpocket
སྦོན་པ་to eat
སྦོམ་དགའ་མ་a buddhist nun
སྦོམ་པོ་gross contravention
སྦོམ་ཕྲ་མཉམ་པ་of equal thickness
སྦོར་kindle
སྦོར་ལོ་anemone palyantha
སྦྱང་ཀུ་wolf
སྦྱང་གྲུང་གི་skillful
སྦྱང་བྱེད་purifying process
སྦྱང་ཟིང་པ་learnt
སྦྱར་ཀ་བྱེད་པ་borrow
སྦྱར་ཏེ་བརྟན་place
སྦྱར་ཐུག་misery
སྦྱར་དུ་རུང་བ་full knowledge
སྦྱར་བས་བཀུ་to mix
སྦྱར་ཟིན་པ་stuck
སྦྱར་འགྲེམ་poster
སྦྱར་ལྕང་willow
སྦྱར་ཤོག་plaster
སྦྱར་སྒྲིག་fixation
སྦྱར་སྨན་plaster
སྦྱིན་གཏེར་charitable person
སྦྱིན་པའི་དབང་power of giving
སྦྱིན་པའི་འོས་objects of charity
སྦྱིན་པར་བྱ་must be given to
སྦྱིན་པར་བྱ་བ་gift
སྦྱིན་པར་བྱེད་giving
སྦྱིན་བསྲེག་fire ceremony
སྦྱིན་རླབས་empowering blessing
སྦྱིན་སྲེག་burnt offering
སྦྱིན་སྲེགས་burnt offering
སྦྱིན་སྲེས་burnt offering
སྦྱིའུ་ལ་ཕུག་medicinal plant
སྦྱོང་བ་བྱེད་to do training in
སྦྱོང་རིམས་diarrhea
སྦྱོང་ལམ་path of purification
སྦྱོང་སྔོན་initial purification
སྦྱོར་བརྒྱ་པ་epithet of vishnu
སྦྱོར་བྱུང་acquired
སྦྱོར་མཚམས་place of their union
སྦྲ་ཆེན་yak hair tent
སྦྲ་ཐག་yak hair tent rope
སྦྲ་ཚིལ་wax
སྦྲ་ལྷ་sa bdag monster
སྦྲ་སྣམ་yak hair blanket
སྦྲག་ཁང་post office
སྦྲགས་པ་attach
སྦྲང་དཀར་white honey
སྦྲང་དོང་honeycomb
སྦྲང་ནག་fly
སྦྲང་བུ་bees
སྦྲང་བུག་bees nest
སྦྲང་བུའི་སྐད་buzz
སྦྲང་བྱི་marten
སྦྲང་མ་black bee
སྦྲང་མ་པོ་drone
སྦྲང་ཡབ་mosquito curtain
སྦྲང་རྩིགས་མ་beeswax
སྦྲང་རྩིའི་རོ་taste of honey
སྦྲང་སྐྱབས་mosquito curtain
སྦྲིད་ཆི་ལེ་བ་going into shock
སྦྲུལ་snake
སྦྲུལ་གདུག་པ་poisonous snake
སྦྲུལ་གྱི་serpentine
སྦྲུལ་ཅན་a comet
སྦྲུལ་མགོ་finial ornaments
སྦྲུལ་མགོ་ལེབ་cobra
སྦྲུལ་འཁྱིལ་བ་coil up like a snake
སྦྲུལ་ལྟ་བུ་serpentine
སྦྲུལ་ལྤགས་snake skin
སྦྲེང་sprinkle
སྦྲེལ་ཟླ་ཅན་having an assistant
སྦྲོ་བ་delight
སྨ་ར་ཅན་bearded
སྨ་ར་ཉུང་scanty beard
སྨ་ས་suitable
སྨག་རྒྱུ་black pepper
སྨད་གཡོག་skirt
སྨད་དཀྲིས་back folds of dhuti
སྨད་དུ་བྱུང་བ་wonderful
སྨད་པ་གསུད་spasmodic cholera
སྨད་རྒྱས་མ་woman in full sense
སྨད་ལ་downwards
སྨན་གཏོང་བ་administer medicine
སྨན་གོ་ལ་globular medicine
སྨན་གྱི་བྱ་བ་effect of medicine
སྨན་གྲུབ་various medicines
སྨན་གྲྭ་medical school
སྨན་ཆན་aconite
སྨན་ཆོས་kind of dye
སྨན་ཐོ་prescription
སྨན་དུལ་མ་medicinal powders
སྨན་པ་མཁས་པ་skillful physician
སྨན་པའི་medical
སྨན་པའི་ཆེད་for the good of
སྨན་པར་སྟེན་པ་consult a doctor
སྨན་བཀུ་medicinal extract
སྨན་བཅོས་ཁང་clinic
སྨན་བཏགས་medicine pulverized
སྨན་བཙུན་medicine lady
སྨན་བརྟགས་པ་be useful
སྨན་ཚོང་མཁན་druggist
སྨན་ཚོས་kind of dye
སྨན་ཟོང་drugs
སྨན་ལེབ་tablet
སྨན་སྒ་medicinal ginger
སྨན་སྣ་ཅན་spicy
སྨན་སྣ་རྒྱབ་པ་spice
སྨན་སྤྲོད་ཁང་pharmacy
སྨན་སྦྱར་herbal ingredients
སྨན་སྦྱར་བ་mix up medicine
སྨན་སྦྱོར་medicinal compound
སྨན་སྦྱོར་གྱི་medicinal
སྨན་སྦྲུལ་elaphe dione pallas
སྨར་ཁམས་name of a district
སྨར་ཁྲིད་oral guidance
སྨས་པ་molest
སྨས་སྐྱོན་injury
སྨི་meter
སྨི་གུ་reed pen
སྨིག་བུ་small lizard
སྨིག་རྒྱུ་mirage
སྨིག་རྒྱུ་གཡོ་wavering of a mirage
སྨིག་སྒྱུ་mirage
སྨིགས་རྒྱུ་mirage
སྨིན་པའི་རྟགས་mellow
སྨིན་ཕག་eyebrow
སྨིན་མ་eyebrow
སྨིན་མཚམས་སུ་between the eyebrows
སྨིན་ཚམས་eyebrows
སྨིན་ལམ་prayer
སྨིན་ལིང་པ་old school lineage
སྨུག་ཁུ་brownish purple dye
སྨུག་ཐུང་cakes of wheat
སྨུག་པ་འཁྱིམས་encircling fog
སྨུག་མ་stale rotting meat
སྨུག་མ་བུ་ཁུར་country of cannibals
སྨུག་སྒ་brown ginger
སྨུགས་ལོང་thick fog
སྨོན་པ་མེད་absence of intention
སྨོན་མེད་absence of intention
སྨོན་ལམ་བཏབ་perform invocations
སྨོན་ལམ་འདེབས་offer a wish
སྨོས་དྲག་loud voice
སྨྱི་གུ་reed pen
སྨྱིག་རྒྱུ་mirage
སྨྱུ་གུ་pen
སྨྱུག་གླང་reed pipe
སྨྱུག་ཕྲན་reed
སྨྱུག་མའི་ར་བ་bamboo fence
སྨྱུག་ཚལ་སྦུག་holy place in tibet
སྨྱུག་ཚིག་knot of a cane
སྨྱུག་རྩ་bamboo shoot
སྨྱུག་སྒྲོམ་wicker chest
སྨྱུང་གནས་fasting
སྨྱོ་ནད་mental disorder
སྨྱོ་ཚུབ་rabid
སྨྱོ་འདྲེ་spirits of madness
སྨྱོན་པ་བཟོ་བ་madden
སྨྱོན་འདོད་craze
སྨྱོན་སྤྱོད་lunacy
སྨྱོན་ཧམ་ཅན་conceited person
སྨྱོས་འདུག་he is mad
སྨྲ་བ་ཆད་པར་have impeded speech
སྨྲ་བ་ཉུང་བ་speaks little
སྨྲ་བ་བཅད་to remain silent
སྨྲ་བའི་ལྷ་god of speech
སྨྲ་བར་བཅད་པ་ascetic
སྨྲ་བྱེད་པ་speak
སྨྲ་འདོད་desired to be spoken
སྨྲ་རྒྱུ་explication
སྨྲ་སེང་སྒྲུབ་tantric propitiation
སྨྲང་ཆེན་great proclamation
སྨྲང་བ་speak
སྨྲས་དགུ་many things to say
སྨྲེ་སྔགས་sorrowful moaning
སྨྲེང་བ་speak
སྩལ་དུ་གསོལ་please grant
སྩོགས་པ་neighbor
སྲ་བ་hard
སྲ་བར་བྱེད་པ་harden
སྲ་བར་འགྱུར་བ་robust constitution
སྲ་འབྲས་medicinal fruit
སྲ་སྲ་sin
སྲག་ཤུལ་violent
སྲང་ག་hall of a house
སྲང་གང་one ounce
སྲང་གཅིག་one pala weight
སྲང་དོ་two ounces
སྲང་ཡར་tortuous path
སྲང་ལ་set of scales
སྲང་ལམ་བཙོག་པ་slum
སྲད་district in tibet
སྲན་hard
སྲན་པ་པོ་one that endures
སྲན་ཕུང་heap of peas
སྲན་ཕྱེ་pea flour
སྲན་མའི་ཞིང་field of peas
སྲན་མེ་ཏོག་blossoms of the pea
སྲན་འབྲུ་ཙམ་པ་the size of a pea
སྲན་རིལ་green pea
སྲན་སེར་soybean
སྲན་སྣུམ་bean oil
སྲབ་ཀྱོགས་reins
སྲབ་ཐག་reins
སྲབ་མཐུར་halter
སྲབ་མདའ་reins
སྲམ་otter
སྲས་དཔོན་young master
སྲས་མོ་ལྷ་ལྕམ་sisters
སྲས་ཚབ་adopted son or child
སྲས་ལྟོར་bastard prince
སྲས་སྲོས་children
སྲི་གནོན་exorcise
སྲི་མ་སྣོམ་པ་smell
སྲི་མེད་liberal
སྲིང་བལ་ཁྲབ་quilted cloth armor
སྲིངས་look up
སྲིད་ཏང་political party
སྲིད་དུ་in length
སྲིད་དོན་politics
སྲིད་དོན་གྱི་political
སྲིད་ན་in the world
སྲིད་པ་གསུམ་three existences
སྲིད་པ་ཆགས་པ་created existence
སྲིད་པ་ཏྲ་astrological chart
སྲིད་པ་ཡན་ལག་branch of existence
སྲིད་པའི་དཔེ་archetypal events
སྲིད་པའི་མཚོ་ocean of existence
སྲིད་བྱུས་policy
སྲིད་བྱེད་moon
སྲིད་རུང་བ་probable
སྲིད་རྒྱུ་possibility
སྲིན་གོང་cocoon
སྲིན་གླིང་cannibal island
སྲིན་ཕྲན་མ་ant
སྲིན་བལ་ཅན་sewing thread
སྲིན་བུ་པད་མ་leech
སྲིན་མཛུབ་ring finger
སྲིན་འབུ་པད་མ་leech
སྲིན་འབྲུ་mulberry
སྲིན་ལག་ring finger
སྲིན་ལག་གཡས་right ring finger
སྲིན་ལད་middle finger
སྲིན་ཤིང་mulberry tree
སྲིབ་གཅིག་ལ་in one moment
སྲིའུ་ནག་mulberry tree
སྲིལ་silkworm
སྲུང་པོ་guardian
སྲུང་བ་བཏགས་པ་suspend an amulet
སྲུང་བུ་guardian
སྲུང་བུམ་vase of protection
སྲུང་མཛད་preserver
སྲུང་འཛིན་reservation
སྲུང་སྐྱོབ་པ་guardian
སྲུང་སྐྱོབས་help and assist
སྲུབ་ཇ་buttered tea
སྲུབས་བྱེད་churner
སྲུབས་མ་churning rod
སྲུབས་མེད་གོས་very fine silk robe
སྲུར་funeral
སྲུར་ཁང་funeral pyre
སྲུལ་མོ་decayed
སྲེ་ནག་soot
སྲེ་མོ་weasel
སྲེག་གནས་cemetery
སྲེག་ཟ་fire
སྲེགས་scorch
སྲེད་species of corn
སྲེད་པོ་lover
སྲེད་བོ་miserly
སྲེད་མ་damsel of mara
སྲེད་མེད་བུ་epithet of vishnu
སྲེད་མེད་མ་wife of vishnu
སྲེད་མོ་sweetheart
སྲེད་རྒྱལ་མ་bon deity
སྲེད་རྒྱུ་cause of attachment
སྲེལ་བྱ་gold
སྲེལ་ཚིག་additional verses
སྲེས་པ་mix up
སྲོ་མ་སེང་གེ་medicinal herb
སྲོ་མོ་aunt
སྲོ་ལོང་kind of bird
སྲོག་གཅོད་ཀྱི་sanguinary
སྲོག་གཅོད་པ་killing
སྲོག་གི་ཀ་བ་name of a vein
སྲོག་གི་ཁམས་life element
སྲོག་གི་གླུད་ransom for life
སྲོག་ཆགས་living being
སྲོག་ཆགས་ལྡན་pregnant woman
སྲོག་ཆགས་སྨན་animal medicine
སྲོག་ཏུ་ལྟ་བ་view of a soul
སྲོག་དང་སྡོ་བ་risk life
སྲོག་དོར་བ་die
སྲོག་བསྡོས་suicidal activities
སྲོག་བསླུ་བ་ransom life
སྲོག་བླུག་པ་resuscitate
སྲོག་མཐུ་life force
སྲོག་ལ་གཟན་preys upon life
སྲོག་ལ་ཆགས་པ་cling to life
སྲོག་ལྷ་deity of life
སྲོག་སྐྱོབ་པ་save life
སྲོག་སྦྱིན་པ་liven
སྲོང་straighten
སྲོང་པ་straight
སྲོད་བ་པ་renunciant
སྲོད་ཡོལ་སོང་the evening has past
སྲོབས་criticize
སྲོབས་པ་confidence
སྲོལ་གཏོད་པ་introduce a practice
སྲོལ་གོང་པ་medicinal herb
སྲོལ་ཆགས་པ་become the custom
སྲོལ་བསྣུབས་abolished the custom
སྲོལ་འཛུག་པ་institute a custom
སྲོལ་རྙིང་པ་demode
སྲོས་སྣོད་censor
སླ་ཆོས་སུ་བྱས་to regard as trivial
སླ་པོ་བཟོ་བ་dilute
སླ་བ་མ་ཡིན་not easily obtained
སླ་བྱེད་བདེ་བ་easy
སླང་དྲེག་frying pan soot
སླད་ནས་སྤེལ་spread in the future
སླའོ་it may be easily
སླར་གསོ་revival
སླར་དུག་aconite
སླར་ནས་again in future
སླར་བྱས་མཐུན་effigy
སླར་མི་ལྡོག་པ་irreversible
སླར་འོང་བ་come back
སླར་ཡང་འཇུག་པ་add again
སླར་རྒོལ་བ་rejected
སླར་ལོག་པ་return
སླར་སྡུད་པ་withdrawal
སླར་སྡོད་པ་withdrawal
སླར་སྨྲ་པ་spoke again
སླར་སྨྲ་བར་བྱ་should speak again
སླུ་བ་མེད་པར་infallibly
སླུ་བར་deceptive
སླུ་བྲིད་པ་imposter
སླུ་མི་མེས་a person
སླུ་ཟས་bait
སླུ་སྣང་deceptive appearance
སླེ་པོ་flat basket crate
སླེ་མིག་distorted eye
སླེད་knitting needle
སླེབ་reach
སླེབ་ཐོ་account of receipts
སླེབ་ཚར་has arrived
སླེབས་ཟིན་པ་came
སླེབས་ས་access
སླེབས་ས་ཡོད་པ་accessible
སློ་མ་winnowing basket
སློག་སྟོན་ཁང་academy
སློབ་གཉེར་ཁང་academic institution
སློབ་གཉེར་བ་scholar
སློབ་གྲྭ་school
སློབ་གྲྭ་བ་student
སློབ་ཐེངས་class period
སློབ་དེབ་textbook
སློབ་དོན་discipline
སློབ་པ་པོ་learner
སློབ་པ་རྣམས་disciples
སློབ་པའི་ལམ་paths of learners
སློབ་བརྒྱུད་lineage of disciples
སློབ་མ་student
སློབ་མ་གཞན་དག་the other pupils
སློབ་མ་བཟང་པོ་good student
སློབ་མ་མྱོང་བ་become a student
སློབ་མ་རྣམས་students
སློབ་ཚོགས་students
སློབ་འཁྲིད་teaching
སློབ་འཁྲིད་པ་teach
སློབ་རིམ་level
སློབ་ལམ་path of training
སློབ་སྟོན་ཁང་administration
སློབ་སྦྲིང་sisyalekha
ཧ་གི་over there
ཧ་གོ་to understand
ཧ་གོ་ཁག་པོ་abstruse
ཧ་གོ་པ་know
ཧ་གོ་ཟིན་པ་knew
ཧ་ཅང་very
ཧ་ཅང་གསལ་པོ་evident
ཧ་ཅང་གི་ངན་པ་atrocious
ཧ་ཅང་གི་ཆེན་gigantic
ཧ་ཅང་གི་ཉམ་ཐག་austere
ཧ་ཅང་གི་དགའ་rapture
ཧ་ཅང་གི་དགའ་བ་enrapture
ཧ་ཅང་ངན་པ་very bad
ཧ་ཅང་དགའ་པོ་very happy
ཧ་ཅང་བཟང་པོ་exceedingly good
ཧ་ཅང་མང་པོ་too many
ཧ་ཅང་མི་རིང་not very far
ཧ་ཅང་ཡག་པོ་service
ཧ་ཅང་ལྟོགས་པ་famish
ཧ་ཐལ་ཆེས་པ་utterly
ཧ་པོ་medicinal herb
ཧ་ཕུན་རྩི་molecule
ཧ་བུ་སྦ་བ་medicinal herb
ཧ་མི་གོ་not understand
ཧ་ཛོ་ག་འོང་small town in assam
ཧ་འདེབས་པ་breathe
ཧ་ཡེགས་woe
ཧ་ར་play at dice
ཧ་རི་parrot
ཧ་རི་ཀི་ལ་city in za hor
ཧ་རི་ནི་ཀ་a flower
ཧ་རེ་statue
ཧ་རེ་ཉ་ཀ་medicinal plant
ཧ་རེ་ཧུ་རེ་careless
ཧ་ལས་པོ་stupendous
ཧ་ལོ་རྐྱང་པ་simple flower
ཧ་ཤིག་mineral medicine
ཧ་སྟོང་འདབ་double flower
ཧ་ཧ་བ་pain interjection
ཧ་ཧ་ཧོ་misery
ཧག་ཐོབ་རྒྱབ་པ་scowl
ཧང་ཡོན་kind of brick tea
ཧང་སང་བ་astonish
ཧད་ཀྱིས་suddenly
ཧད་ཀྱིས་ལང་བ་rise suddenly
ཧད་ཀྱིས་ལངས་fleeing from harm
ཧད་ཆ་གཅིག་pair of shoes
ཧད་སྨན་kind of fruit
ཧབ་གོད་བྱེད་པ་laugh sneeringly
ཧབ་ཐོབ་རྒྱབ་པ་scramble
ཧབ་བྲིད་sneeze
ཧབ་ཟ་བྱེད་པ་eat quickly
ཧབ་ཤ་violence
ཧབ་ཧོབ་ཟ་བ་eat quickly
ཧམ་པ་གཤོད་པ་exaggerate
ཧམ་པ་བྱེད་པ་be covetous
ཧམ་པ་མ་བཅོ་be not covetous
ཧམ་པས་ཁྱེར་taken away by force
ཧའི་shoe
ཧར་གྱིས་abruptly
ཧར་རེ་གཏད་gaze straight ahead
ཧར་ལང་བ་rise suddenly
ཧར་ལངས་get up immediately
ཧས་ཆེར་སྨྲ་བ་exaggerate
ཧས་པ་ཆེན་པོ་nothing to doubt
ཧས་པོ་རི་hill near bsam yas
ཧས་སྟག་ཚང་place in bhutan
ཧི་མ་ལ་ཡ་himalayas
ཧི་ར་diamond
ཧི་རི་corn stack
ཧི་རི་རྩིག་པ་build a corn stack
ཧི་ལིང་noise
ཧིའི་ཀ་breast bone
ཧུ་ཁྱུ་sound of sighing
ཧུ་རེ་alertness
ཧུ་སུ་coriander
ཧུབ་གཅིག་one mouthful
ཧུབ་དོ་two mouthfuls
ཧུབ་ཕོགས་a kind of tea
ཧུམ་ང་angry self
ཧུམ་པ་snuggle
ཧུའུ་teapot
ཧུར་པོ་མེད་པ་spiritless
ཧུར་ཕྱུངས་དྲག་intensity
ཧུར་རེ་intensely
ཧུར་ཧུར་པོ་sparkling
ཧུས་ཅན་wet
ཧུས་ཕོག་injured by damp
ཧེ་དེ་ཝ་startled awareness
ཧེ་ཕང་ཆིན་organ
ཧེ་བག་ཤོར་བ་differ
ཧེང་humph
ཧེལ་བ་width
ཧོག་ཧོག་abruptly
ཧོན་ནེ་བ་a state of emptiness
ཧོབ་ཧེ་ཁ་ལ་abrupt
ཧོམ་བྱེད་པ་sacrifice
ཧོར་དོང་turkestan quiver
ཧོར་པ་དཀར་པོ་species of hawk
ཧོར་ཟླ་calendar month
ཧོར་འདྲ་བབས་པ་confiscate
ཧོར་ཡུལ་turkestan
ཧོལ་བ་loosen the soil
ཧྭ་ཧེང་peanut
ཧྭ་ཧེང་སྣུམ་peanut oil
ཧྲང་པ་robust constitution
ཧྲམ་དཀར་species of gout
ཧྲམ་ནག་species of gout
ཧྲལ་torn
ཧྲལ་ཧྲོལ་phantasmal
ཧྲི་ཀྲང་division commander
ཧྲི་ཡོན་commune member
ཧྲིག་གེ་instinctiveness
ཧྲིག་པ་hang
ཧྲིག་ལ་ཤི་died by hanging
ཧྲིལ་བསྒྲིལ་ན་to summarize
ཧྲུ་ཅི་chairman
ཧྲུག་ཧྲུག་broken to pieces
ཧྲུད་པོ་jagged
ཧྲུལ་གྱིས་ཐོད་let go completely
ཧྲུལ་པོར་utterly
ཧྲེ་ཡོན་commune member
ཧྲེམ་པ་swollen
ཧྲེམ་མེ་swollen
ཧྲོའུ་ལིའུ་ཏན་hand grenade
ཨ་ཀ་place in khams
ཨ་ཀུ་uncle
ཨ་ཀྱོག་པ་ཀྱོག་zigzag
ཨ་ཀྲ་གུ་a fruit
ཨ་ཀྲོང་species of fern
ཨ་ག་རུ་ནག་པོ་best quality of aloe
ཨ་ག་རུ་མཆོག་best quality of aloe
ཨ་ཅང་ཅང་of course
ཨ་ཅེ་ལྷ་མོ་tibetan opera
ཨ་ཅེ་སོང་madam has left
ཨ་ཅོར་towel
ཨ་ཆེན་རྒྱལ་པོ་cosmic king
ཨ་ཆོག་ear
ཨ་ཏ་ཏ་pain interjection
ཨ་ཏ་པལ་a vegetable medicine
ཨ་ཏ་ར་དམར་པོ་an indian saint
ཨ་ཏི་ཡོ་ག་primordial yoga
ཨ་དབྱི་auntie
ཨ་དུ་མ་ཡ་a country
ཨ་དོགས་table
ཨ་ན་ན་sorrow interjection
ཨ་ནིའི་དགོན་པ་nunnery
ཨ་ནིའི་ཚོགས་པ་sisterhood
ཨ་ནེ་དྲུང་honorable miss
ཨ་ཕོ་a title
ཨ་ཕོ་ང་i myself
ཨ་ཕྱ་grandmother
ཨ་ཕྱི་grandmother
ཨ་བི་ཤ་fritillary bulb
ཨ་བོ་that
ཨ་བྱག་name of a medicine
ཨ་བྷི་ས་a medicinal fruit
ཨ་མ་ང་expression of sorrow
ཨ་མ་དྲིན་ཆེན་my kind mother
ཨ་མ་ནང་བཞིན་motherly
ཨ་མཆོག་ear
ཨ་མི་མུ་ཟི་ancient dynasty
ཨ་མུ་ཀམ་cemetery
ཨ་མེས་yogins
ཨ་མྲ་mangoe
ཨ་མྲ་ཤིང་mangoe tree
ཨ་མྲི་ཏ་ནམ་place of nectar
ཨ་མྲོ་mangoe
ཨ་ཙི་ཨ་ཙི་oh my
ཨ་ཚི་fright interjection
ཨ་ཚི་ཚི་fright interjection
ཨ་ཛ་ག་ར་python snake
ཨ་ཝ་དྷུ་ཏི་air passage
ཨ་ཞང་ཚ་བོ་uncle and nephew
ཨ་འཚམ་is it all right
ཨ་ཡི་ཁུ་ག་ovum
ཨ་ཡིག་letter a
ཨ་ཡུ་hornless
ཨ་ཡོ་whelp
ཨ་ར་ར་sorrow interjection
ཨ་རབ་སྒང་place in khams
ཨ་ལི་ལ་བར་ཏ་a great river
ཨ་ལུས་cat
ཨ་ལོགས་རྒྱབ་པ་invert
ཨ་ལྕག་elder sister
ཨ་ལྕག་ལགས་elder sister
ཨ་ལྕེ་ལགས་oh madam
ཨ་ཤ་པ་a yaksha demon
ཨ་ཤིང་latch
ཨ་ཤུ་apricot
ཨ་ཤོམ་maize
ཨ་ས་ར་kind of flower
ཨ་སི་knife
ཨ་སྟོང་yawn
ཨ་སྟོང་རྒྱག་པ་yawn
ཨ་སྟོང་རྒྱབ་པ་yawn
ཨ་སྦྱར་thin broth
ཨ་སྲུ་aunt
ཨ་སློག་ཐེབས་པ་capsize tumble
ཨ་སློག་རྒྱབ་པ་topple
ཨ་ཧ་ishvara
ཨང་ཀི་དང་པོ་the first quality
ཨང་ཀི་མཇུག་མ་the last one
ཨང་ཀིའི་numerical
ཨང་གྲངས་ཀྱི་serial
ཨང་ང་oh
ཨང་ཐུང་under garment
ཨང་མཁན་liar
ཨང་ཡིག་numeral figure
ཨང་རྟ་loin cloth
ཨང་རྩིས་ཀྱི་mathematical
ཨན་white chalk
ཨན་སྟོང་cervical vertebra
ཨམ་མཆོག་ear
ཨའུ་ནེ་ཙོ་parrot
ཨར་ཇག་རྒོད་wild bandits
ཨར་དམར་red aloeswood
ཨར་པོ་བ་brick layer
ཨར་ཛ་ཀ་cotton
ཨར་འདམ་cement
ཨལ་གཅིག་one half of a pair
ཨས་མ་གར་བྷ་emerald
ཨི་ཁུང་ཅན་porous
ཨི་གུ་ལ་limb
ཨི་རྩི་སྐུལ་བ་tickle
ཨི་ཤོ་མ་ཏི་great river in india
ཨིག་སྒྲ་hiccup
ཨིན་དྲ་ནི་ལ་sapphire
ཨིས་ཆུང་novice
ཨུ་ཅུག་persistency
ཨུ་ཏ་ཀ་an ancient sage
ཨུ་ཏྲ་ཡ་ན་ancient indian king
ཨུ་ཚུགས་ཅན་willful
ཨུ་ཡི་of us
ཨུ་ཡོན་committee member
ཨུ་རྒྱན་ཡུལ་country of udyana
ཨུ་སྤུ་tea kettle
ཨུ་ཧུ་ལགས་oh my
ཨུང་གུ་oil lamp
ཨུཏ་པ་ལ་ཆེ་full blown lotus
ཨུཏ་པ་ལ་ཤིང་lotus plant
ཨུན་ཆུང་young monk
ཨེ་མ་ཆེའི་physician
ཨེ་རན་ད་castor oil plant
ཨེ་ལ་pomegranate
ཨེ་ལའི་བརྒྱུད་epithet of vairocana
ཨེ་ལའི་འདབ་the tongue
ཨེ་སྒོར་earring
ཨེམ་རྗེ་doctor
ཨོ་མོ་སུ་sock
ཨོ་ཙོང་onion
ཨོ་ལྡོང་wind pipe
ཨོག་རྒྱ་beard
ཨོག་ཤོ་beautiful white neck
ཨོང་གུ་lamp
ཨོང་རས་wick of a lamp
ཨོང་ལོག་ptarmigan
ཨོས་སྐོ་chin`
  .split("\n")
  .map((line) => line.split(/(?<![a-z ])(?=[a-z ])/))
  .forEach((x) =>
    firestore()
      .collection("Users")
      .doc(AXGgorHEUUVYsZPZo0pAezl9ys53)
      .collection("Notes")
      .add({
        title: x[0].trim(),
        body: x[1],
      }),
  );

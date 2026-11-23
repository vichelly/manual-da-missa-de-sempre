// Liturgical content. Texts are in Portuguese and Latin; edit them here.
import type { OrdoSection } from '../types';

/** The Ordinary of the Low Mass under the rubrics of St. Pius X (Divino Afflatu), Latin and Portuguese. */
export const ORDO_MISSAE: OrdoSection[] = [
  {
    title: 'Entrada do sacerdote',
    posture: 'standing',
    postureNote: 'De pé quando o sacerdote entra; ajoelhar-se quando ele chega ao pé do altar.',
    lines: [
      {
        kind: 'rubric',
        text: 'O sacerdote entra precedido do acólito, sobe ao altar, prepara o cálice e abre o missal. Desce ao pé do altar, faz genuflexão (ou inclinação) e começa.',
      },
    ],
  },
  {
    title: 'Orações ao pé do altar',
    posture: 'kneeling',
    postureNote:
      'Na Missa rezada, de joelhos; na Missa cantada, de pé (segundo o livro da capela).',
    lines: [
      {
        kind: 'priest',
        latin: 'In nomine Patris, ✠ et Filii, et Spiritus Sancti. Amen.',
        translation: 'Em nome do Pai, ✠ e do Filho, e do Espírito Santo. Amém.',
      },
      {
        kind: 'priest',
        latin: 'Introibo ad altare Dei.',
        translation: 'Subirei ao altar de Deus.',
      },
      {
        kind: 'server',
        latin: 'Ad Deum qui lætificat juventutem meam.',
        translation: 'A Deus, que alegra a minha juventude.',
      },
      {
        kind: 'rubric',
        text: 'Salmo 42 (omitido no Tempo da Paixão e nas Missas de Réquiem).',
      },
      {
        kind: 'priest',
        latin:
          'Judica me, Deus, et discerne causam meam de gente non sancta: ab homine iniquo et doloso erue me.',
        translation:
          'Julgai-me, ó Deus, e separai a minha causa da gente não santa: livrai-me do homem iníquo e enganador.',
      },
      {
        kind: 'server',
        latin:
          'Quia tu es, Deus, fortitudo mea: quare me repulisti, et quare tristis incedo, dum affligit me inimicus?',
        translation:
          'Porque Vós, ó Deus, sois a minha fortaleza: por que me repelistes, e por que ando triste, enquanto o inimigo me aflige?',
      },
      {
        kind: 'priest',
        latin:
          'Emitte lucem tuam et veritatem tuam: ipsa me deduxerunt, et adduxerunt in montem sanctum tuum, et in tabernacula tua.',
        translation:
          'Enviai a vossa luz e a vossa verdade: elas me guiaram e me conduziram ao vosso monte santo e aos vossos tabernáculos.',
      },
      {
        kind: 'server',
        latin: 'Et introibo ad altare Dei: ad Deum qui lætificat juventutem meam.',
        translation: 'E subirei ao altar de Deus, a Deus que alegra a minha juventude.',
      },
      {
        kind: 'priest',
        latin:
          'Confitebor tibi in cithara, Deus, Deus meus: quare tristis es, anima mea, et quare conturbas me?',
        translation:
          'Louvar-Vos-ei com a cítara, ó Deus, meu Deus: por que estás triste, minha alma, e por que me perturbas?',
      },
      {
        kind: 'server',
        latin: 'Spera in Deo, quoniam adhuc confitebor illi: salutare vultus mei, et Deus meus.',
        translation:
          'Espera em Deus, porque ainda O louvarei: Ele é a salvação da minha face e o meu Deus.',
      },
      {
        kind: 'priest',
        latin: 'Gloria Patri, et Filio, et Spiritui Sancto.',
        translation: 'Glória ao Pai, e ao Filho, e ao Espírito Santo.',
      },
      {
        kind: 'server',
        latin: 'Sicut erat in principio, et nunc, et semper: et in sæcula sæculorum. Amen.',
        translation:
          'Assim como era no princípio, agora e sempre, e por todos os séculos dos séculos. Amém.',
      },
      {
        kind: 'priest',
        latin: 'Introibo ad altare Dei.',
        translation: 'Subirei ao altar de Deus.',
      },
      {
        kind: 'server',
        latin: 'Ad Deum qui lætificat juventutem meam.',
        translation: 'A Deus, que alegra a minha juventude.',
      },
      {
        kind: 'priest',
        latin: 'Adjutorium nostrum ✠ in nomine Domini.',
        translation: 'O nosso auxílio ✠ está no nome do Senhor.',
      },
      {
        kind: 'server',
        latin: 'Qui fecit cælum et terram.',
        translation: 'Que fez o céu e a terra.',
      },
      {
        kind: 'rubric',
        text: 'O sacerdote, profundamente inclinado, reza o Confiteor.',
      },
      {
        kind: 'priest',
        latin:
          'Confiteor Deo omnipotenti, beatæ Mariæ semper Virgini, beato Michæli Archangelo, beato Joanni Baptistæ, sanctis Apostolis Petro et Paulo, omnibus Sanctis, et vobis, fratres: quia peccavi nimis cogitatione, verbo et opere: mea culpa, mea culpa, mea maxima culpa. Ideo precor beatam Mariam semper Virginem, beatum Michælem Archangelum, beatum Joannem Baptistam, sanctos Apostolos Petrum et Paulum, omnes Sanctos, et vos, fratres, orare pro me ad Dominum Deum nostrum.',
        translation:
          'Eu confesso a Deus todo-poderoso, à bem-aventurada sempre Virgem Maria, ao bem-aventurado São Miguel Arcanjo, ao bem-aventurado São João Batista, aos santos Apóstolos Pedro e Paulo, a todos os Santos e a vós, irmãos, que pequei muitas vezes por pensamentos, palavras e obras: por minha culpa, minha culpa, minha máxima culpa. Por isso, peço à bem-aventurada sempre Virgem Maria, ao bem-aventurado São Miguel Arcanjo, ao bem-aventurado São João Batista, aos santos Apóstolos Pedro e Paulo, a todos os Santos e a vós, irmãos, que rogueis por mim ao Senhor, nosso Deus.',
      },
      {
        kind: 'server',
        latin:
          'Misereatur tui omnipotens Deus, et dimissis peccatis tuis, perducat te ad vitam æternam.',
        translation:
          'Deus todo-poderoso tenha misericórdia de vós, perdoe os vossos pecados e vos conduza à vida eterna.',
      },
      {
        kind: 'priest',
        latin: 'Amen.',
        translation: 'Amém.',
      },
      {
        kind: 'server',
        latin:
          'Confiteor Deo omnipotenti, beatæ Mariæ semper Virgini, beato Michæli Archangelo, beato Joanni Baptistæ, sanctis Apostolis Petro et Paulo, omnibus Sanctis, et tibi, pater: quia peccavi nimis cogitatione, verbo et opere: mea culpa, mea culpa, mea maxima culpa. Ideo precor beatam Mariam semper Virginem, beatum Michælem Archangelum, beatum Joannem Baptistam, sanctos Apostolos Petrum et Paulum, omnes Sanctos, et te, pater, orare pro me ad Dominum Deum nostrum.',
        translation: '(O mesmo Confiteor, dizendo “a vós, padre” em lugar de “a vós, irmãos”.)',
      },
      {
        kind: 'priest',
        latin:
          'Misereatur vestri omnipotens Deus, et dimissis peccatis vestris, perducat vos ad vitam æternam.',
        translation:
          'Deus todo-poderoso tenha misericórdia de vós, perdoe os vossos pecados e vos conduza à vida eterna.',
      },
      {
        kind: 'server',
        latin: 'Amen.',
        translation: 'Amém.',
      },
      {
        kind: 'priest',
        latin:
          'Indulgentiam, ✠ absolutionem, et remissionem peccatorum nostrorum tribuat nobis omnipotens et misericors Dominus.',
        translation:
          'O Senhor todo-poderoso e misericordioso nos conceda o perdão, ✠ a absolvição e a remissão dos nossos pecados.',
      },
      {
        kind: 'server',
        latin: 'Amen.',
        translation: 'Amém.',
      },
      {
        kind: 'priest',
        latin: 'Deus, tu conversus vivificabis nos.',
        translation: 'Ó Deus, voltando-Vos para nós, nos dareis a vida.',
      },
      {
        kind: 'server',
        latin: 'Et plebs tua lætabitur in te.',
        translation: 'E o vosso povo se alegrará em Vós.',
      },
      {
        kind: 'priest',
        latin: 'Ostende nobis, Domine, misericordiam tuam.',
        translation: 'Mostrai-nos, Senhor, a vossa misericórdia.',
      },
      {
        kind: 'server',
        latin: 'Et salutare tuum da nobis.',
        translation: 'E dai-nos a vossa salvação.',
      },
      {
        kind: 'priest',
        latin: 'Domine, exaudi orationem meam.',
        translation: 'Senhor, ouvi a minha oração.',
      },
      {
        kind: 'server',
        latin: 'Et clamor meus ad te veniat.',
        translation: 'E chegue até Vós o meu clamor.',
      },
      {
        kind: 'priest',
        latin: 'Dominus vobiscum.',
        translation: 'O Senhor esteja convosco.',
      },
      {
        kind: 'server',
        latin: 'Et cum spiritu tuo.',
        translation: 'E com o teu espírito.',
      },
      {
        kind: 'priest',
        latin: 'Oremus.',
        translation: 'Oremos.',
      },
      {
        kind: 'rubric',
        text: 'O sacerdote sobe ao altar rezando em silêncio:',
      },
      {
        kind: 'priest',
        latin:
          'Aufer a nobis, quæsumus, Domine, iniquitates nostras: ut ad Sancta sanctorum puris mereamur mentibus introire. Per Christum Dominum nostrum. Amen.',
        translation:
          'Afastai de nós, Senhor, nós Vos pedimos, as nossas iniquidades, para que mereçamos entrar com almas puras no Santo dos Santos. Por Cristo, nosso Senhor. Amém.',
      },
      {
        kind: 'rubric',
        text: 'Beijando o altar, onde estão as relíquias:',
      },
      {
        kind: 'priest',
        latin:
          'Oramus te, Domine, per merita Sanctorum tuorum, quorum reliquiæ hic sunt, et omnium Sanctorum: ut indulgere digneris omnia peccata mea. Amen.',
        translation:
          'Nós Vos rogamos, Senhor, pelos méritos dos vossos Santos, cujas relíquias aqui estão, e de todos os Santos, que Vos digneis perdoar todos os meus pecados. Amém.',
      },
    ],
  },
  {
    title: 'Intróito e Kyrie',
    posture: 'standing',
    postureNote: 'De pé quando o sacerdote sobe ao altar.',
    lines: [
      {
        kind: 'proper',
        text: 'Intróito: próprio do dia, lido no lado da Epístola. O sacerdote faz o sinal da cruz ao começar.',
      },
      {
        kind: 'rubric',
        text: 'No centro do altar, alternado com o ministro:',
      },
      {
        kind: 'priest',
        latin:
          'Kyrie, eleison. Kyrie, eleison. Kyrie, eleison. Christe, eleison. Christe, eleison. Christe, eleison. Kyrie, eleison. Kyrie, eleison. Kyrie, eleison.',
        translation:
          'Senhor, tende piedade (3 vezes). Cristo, tende piedade (3 vezes). Senhor, tende piedade (3 vezes).',
      },
    ],
  },
  {
    title: 'Gloria',
    posture: 'standing',
    postureNote:
      'Dito nos domingos (fora do Advento e do tempo da Septuagésima à Páscoa) e nas festas; omitido nas férias, nas vigílias, na maior parte das Missas votivas e nas Missas de Réquiem.',
    lines: [
      {
        kind: 'priest',
        latin:
          'Gloria in excelsis Deo. Et in terra pax hominibus bonæ voluntatis. Laudamus te. Benedicimus te. Adoramus te. Glorificamus te. Gratias agimus tibi propter magnam gloriam tuam. Domine Deus, Rex cælestis, Deus Pater omnipotens. Domine Fili unigenite, Jesu Christe. Domine Deus, Agnus Dei, Filius Patris. Qui tollis peccata mundi, miserere nobis. Qui tollis peccata mundi, suscipe deprecationem nostram. Qui sedes ad dexteram Patris, miserere nobis. Quoniam tu solus Sanctus. Tu solus Dominus. Tu solus Altissimus, Jesu Christe. Cum Sancto Spiritu ✠ in gloria Dei Patris. Amen.',
        translation:
          'Glória a Deus nas alturas, e paz na terra aos homens de boa vontade. Nós Vos louvamos. Nós Vos bendizemos. Nós Vos adoramos. Nós Vos glorificamos. Graças Vos damos por vossa imensa glória. Senhor Deus, Rei dos céus, Deus Pai todo-poderoso. Senhor Filho unigênito, Jesus Cristo. Senhor Deus, Cordeiro de Deus, Filho do Pai. Vós que tirais os pecados do mundo, tende piedade de nós. Vós que tirais os pecados do mundo, acolhei a nossa súplica. Vós que estais sentado à direita do Pai, tende piedade de nós. Porque só Vós sois o Santo. Só Vós o Senhor. Só Vós o Altíssimo, Jesus Cristo. Com o Espírito Santo ✠ na glória de Deus Pai. Amém.',
      },
    ],
  },
  {
    title: 'Coleta',
    posture: 'standing',
    lines: [
      {
        kind: 'priest',
        latin: 'Dominus vobiscum.',
        translation: 'O Senhor esteja convosco.',
      },
      {
        kind: 'server',
        latin: 'Et cum spiritu tuo.',
        translation: 'E com o teu espírito.',
      },
      {
        kind: 'priest',
        latin: 'Oremus.',
        translation: 'Oremos.',
      },
      {
        kind: 'proper',
        text: 'Coleta (oração do dia): próprio do dia. Com frequência seguem-se outras orações (comemorações): a primeira tem conclusão própria e as demais terminam juntas numa só conclusão. O ministro responde Amen no fim da primeira e no fim da última.',
      },
      {
        kind: 'priest',
        latin:
          '… Per Dominum nostrum Jesum Christum, Filium tuum: qui tecum vivit et regnat in unitate Spiritus Sancti Deus, per omnia sæcula sæculorum.',
        translation:
          '… Por nosso Senhor Jesus Cristo, vosso Filho, que convosco vive e reina na unidade do Espírito Santo, Deus, por todos os séculos dos séculos.',
      },
      {
        kind: 'server',
        latin: 'Amen.',
        translation: 'Amém.',
      },
    ],
  },
  {
    title: 'Epístola e Gradual',
    posture: 'sitting',
    lines: [
      {
        kind: 'proper',
        text: 'Epístola: próprio do dia, lida no lado da Epístola.',
      },
      {
        kind: 'server',
        latin: 'Deo gratias.',
        translation: 'Graças a Deus.',
      },
      {
        kind: 'proper',
        text: 'Gradual e Aleluia (ou Trato, na Quaresma; Sequência, em certas festas): próprio do dia.',
      },
    ],
  },
  {
    title: 'Evangelho',
    posture: 'standing',
    postureNote: 'De pé desde o “Dominus vobiscum” antes do Evangelho.',
    lines: [
      {
        kind: 'rubric',
        text: 'O ministro leva o missal ao lado do Evangelho. O sacerdote, inclinado no centro, reza:',
      },
      {
        kind: 'priest',
        latin:
          'Munda cor meum ac labia mea, omnipotens Deus, qui labia Isaiæ Prophetæ calculo mundasti ignito: ita me tua grata miseratione dignare mundare, ut sanctum Evangelium tuum digne valeam nuntiare. Per Christum Dominum nostrum. Amen.',
        translation:
          'Purificai o meu coração e os meus lábios, Deus todo-poderoso, que purificastes os lábios do profeta Isaías com uma brasa ardente; dignai-Vos, por vossa benigna misericórdia, purificar-me de tal modo que eu possa anunciar dignamente o vosso santo Evangelho. Por Cristo, nosso Senhor. Amém.',
      },
      {
        kind: 'priest',
        latin:
          'Jube, Domine, benedicere. Dominus sit in corde meo, et in labiis meis: ut digne et competenter annuntiem Evangelium suum. Amen.',
        translation:
          'Dignai-Vos, Senhor, abençoar-me. O Senhor esteja no meu coração e nos meus lábios, para que eu anuncie digna e convenientemente o seu Evangelho. Amém.',
      },
      {
        kind: 'priest',
        latin: 'Dominus vobiscum.',
        translation: 'O Senhor esteja convosco.',
      },
      {
        kind: 'server',
        latin: 'Et cum spiritu tuo.',
        translation: 'E com o teu espírito.',
      },
      {
        kind: 'priest',
        latin: '✠ Sequentia sancti Evangelii secundum N.',
        translation: '✠ Continuação do santo Evangelho segundo N.',
      },
      {
        kind: 'server',
        latin: 'Gloria tibi, Domine.',
        translation: 'Glória a Vós, Senhor.',
      },
      {
        kind: 'rubric',
        text: 'Todos fazem com o polegar três pequenos sinais da cruz: na fronte, nos lábios e no peito.',
      },
      {
        kind: 'proper',
        text: 'Evangelho: próprio do dia.',
      },
      {
        kind: 'server',
        latin: 'Laus tibi, Christe.',
        translation: 'Louvor a Vós, ó Cristo.',
      },
      {
        kind: 'priest',
        latin: 'Per evangelica dicta deleantur nostra delicta.',
        translation: 'Pelas palavras do Evangelho sejam apagados os nossos pecados.',
      },
    ],
  },
  {
    title: 'Sermão',
    posture: 'sitting',
    lines: [
      {
        kind: 'rubric',
        text: 'Se houver sermão, o sacerdote o faz aqui.',
      },
    ],
  },
  {
    title: 'Credo',
    posture: 'standing',
    postureNote:
      'De pé. Ajoelhar-se no “Et incarnatus est” até “et homo factus est”. Dito aos domingos e em certas festas.',
    lines: [
      {
        kind: 'priest',
        latin:
          'Credo in unum Deum, Patrem omnipotentem, factorem cæli et terræ, visibilium omnium et invisibilium. Et in unum Dominum Jesum Christum, Filium Dei unigenitum. Et ex Patre natum ante omnia sæcula. Deum de Deo, lumen de lumine, Deum verum de Deo vero. Genitum, non factum, consubstantialem Patri: per quem omnia facta sunt. Qui propter nos homines, et propter nostram salutem descendit de cælis.',
        translation:
          'Creio em um só Deus, Pai todo-poderoso, criador do céu e da terra, de todas as coisas visíveis e invisíveis. E em um só Senhor, Jesus Cristo, Filho unigênito de Deus, nascido do Pai antes de todos os séculos. Deus de Deus, luz da luz, Deus verdadeiro de Deus verdadeiro; gerado, não criado, consubstancial ao Pai: por Ele todas as coisas foram feitas. Que, por nós homens e para a nossa salvação, desceu dos céus.',
      },
      {
        kind: 'rubric',
        text: 'Todos se ajoelham:',
      },
      {
        kind: 'priest',
        latin: 'Et incarnatus est de Spiritu Sancto ex Maria Virgine: et homo factus est.',
        translation: 'E se encarnou pelo Espírito Santo, no seio da Virgem Maria, e se fez homem.',
      },
      {
        kind: 'rubric',
        text: 'De pé:',
      },
      {
        kind: 'priest',
        latin:
          'Crucifixus etiam pro nobis: sub Pontio Pilato passus, et sepultus est. Et resurrexit tertia die, secundum Scripturas. Et ascendit in cælum: sedet ad dexteram Patris. Et iterum venturus est cum gloria, judicare vivos et mortuos: cujus regni non erit finis. Et in Spiritum Sanctum, Dominum et vivificantem: qui ex Patre Filioque procedit. Qui cum Patre et Filio simul adoratur, et conglorificatur: qui locutus est per Prophetas. Et unam, sanctam, catholicam et apostolicam Ecclesiam. Confiteor unum baptisma in remissionem peccatorum. Et exspecto resurrectionem mortuorum. ✠ Et vitam venturi sæculi. Amen.',
        translation:
          'Foi também crucificado por nós sob Pôncio Pilatos; padeceu e foi sepultado. Ressuscitou ao terceiro dia, conforme as Escrituras, e subiu aos céus, onde está sentado à direita do Pai. E de novo há de vir em sua glória, para julgar os vivos e os mortos; e o seu reino não terá fim. Creio no Espírito Santo, Senhor que dá a vida, e procede do Pai e do Filho; e com o Pai e o Filho é adorado e glorificado: Ele que falou pelos profetas. Creio na Igreja una, santa, católica e apostólica. Professo um só batismo para remissão dos pecados. E espero a ressurreição dos mortos ✠ e a vida do mundo que há de vir. Amém.',
      },
    ],
  },
  {
    title: 'Ofertório',
    posture: 'sitting',
    lines: [
      {
        kind: 'priest',
        latin: 'Dominus vobiscum.',
        translation: 'O Senhor esteja convosco.',
      },
      {
        kind: 'server',
        latin: 'Et cum spiritu tuo.',
        translation: 'E com o teu espírito.',
      },
      {
        kind: 'priest',
        latin: 'Oremus.',
        translation: 'Oremos.',
      },
      {
        kind: 'proper',
        text: 'Antífona do Ofertório: próprio do dia.',
      },
      {
        kind: 'rubric',
        text: 'Oferecendo a hóstia na patena:',
      },
      {
        kind: 'priest',
        latin:
          'Suscipe, sancte Pater, omnipotens æterne Deus, hanc immaculatam hostiam, quam ego indignus famulus tuus offero tibi Deo meo vivo et vero, pro innumerabilibus peccatis, et offensionibus, et negligentiis meis, et pro omnibus circumstantibus, sed et pro omnibus fidelibus christianis vivis atque defunctis: ut mihi, et illis proficiat ad salutem in vitam æternam. Amen.',
        translation:
          'Recebei, Pai santo, Deus eterno e todo-poderoso, esta hóstia imaculada, que eu, vosso indigno servo, Vos ofereço a Vós, meu Deus vivo e verdadeiro, pelos meus inumeráveis pecados, ofensas e negligências, por todos os aqui presentes e também por todos os fiéis cristãos, vivos e defuntos, para que a mim e a eles aproveite para a salvação na vida eterna. Amém.',
      },
      {
        kind: 'rubric',
        text: 'Pondo vinho e algumas gotas de água no cálice:',
      },
      {
        kind: 'priest',
        latin:
          'Deus, ✠ qui humanæ substantiæ dignitatem mirabiliter condidisti, et mirabilius reformasti: da nobis per hujus aquæ et vini mysterium, ejus divinitatis esse consortes, qui humanitatis nostræ fieri dignatus est particeps, Jesus Christus, Filius tuus, Dominus noster: Qui tecum vivit et regnat in unitate Spiritus Sancti Deus: per omnia sæcula sæculorum. Amen.',
        translation:
          'Ó Deus, ✠ que admiravelmente criastes a dignidade da natureza humana e mais admiravelmente ainda a restaurastes, concedei-nos, pelo mistério desta água e deste vinho, participar da divindade d’Aquele que se dignou participar da nossa humanidade, Jesus Cristo, vosso Filho, nosso Senhor, que convosco vive e reina na unidade do Espírito Santo, Deus, por todos os séculos dos séculos. Amém.',
      },
      {
        kind: 'rubric',
        text: 'Oferecendo o cálice:',
      },
      {
        kind: 'priest',
        latin:
          'Offerimus tibi, Domine, calicem salutaris, tuam deprecantes clementiam: ut in conspectu divinæ majestatis tuæ, pro nostra et totius mundi salute, cum odore suavitatis ascendat. Amen.',
        translation:
          'Nós Vos oferecemos, Senhor, o cálice da salvação, suplicando à vossa clemência que ele suba como suave perfume à presença da vossa divina majestade, pela nossa salvação e pela de todo o mundo. Amém.',
      },
      {
        kind: 'rubric',
        text: 'Inclinado:',
      },
      {
        kind: 'priest',
        latin:
          'In spiritu humilitatis, et in animo contrito suscipiamur a te, Domine: et sic fiat sacrificium nostrum in conspectu tuo hodie, ut placeat tibi, Domine Deus.',
        translation:
          'Em espírito de humildade e com o coração contrito sejamos por Vós recebidos, Senhor; e assim se faça hoje o nosso sacrifício na vossa presença, que Vos seja agradável, Senhor Deus.',
      },
      {
        kind: 'priest',
        latin:
          'Veni, Sanctificator omnipotens æterne Deus: et bene ✠ dic hoc sacrificium, tuo sancto nomini præparatum.',
        translation:
          'Vinde, Santificador, Deus eterno e todo-poderoso, e aben ✠ çoai este sacrifício preparado para o vosso santo nome.',
      },
    ],
  },
  {
    title: 'Lavabo',
    posture: 'sitting',
    lines: [
      {
        kind: 'rubric',
        text: 'No lado da Epístola, o ministro derrama água sobre os dedos do sacerdote. Salmo 25 (o Gloria Patri final é omitido no Tempo da Paixão e nas Missas de Réquiem):',
      },
      {
        kind: 'priest',
        latin:
          'Lavabo inter innocentes manus meas: et circumdabo altare tuum, Domine: Ut audiam vocem laudis, et enarrem universa mirabilia tua. Domine, dilexi decorem domus tuæ, et locum habitationis gloriæ tuæ. Ne perdas cum impiis, Deus, animam meam, et cum viris sanguinum vitam meam: In quorum manibus iniquitates sunt: dextera eorum repleta est muneribus. Ego autem in innocentia mea ingressus sum: redime me, et miserere mei. Pes meus stetit in directo: in ecclesiis benedicam te, Domine. Gloria Patri, et Filio, et Spiritui Sancto. Sicut erat in principio, et nunc, et semper: et in sæcula sæculorum. Amen.',
        translation:
          'Lavarei as minhas mãos entre os inocentes e andarei em torno do vosso altar, Senhor, para ouvir a voz do louvor e contar todas as vossas maravilhas. Senhor, amei a beleza da vossa casa e o lugar onde habita a vossa glória. Não percais, ó Deus, a minha alma com os ímpios, nem a minha vida com os homens sanguinários, em cujas mãos está a iniquidade e cuja direita está cheia de subornos. Eu, porém, andei na minha inocência: resgatai-me e tende piedade de mim. O meu pé está firme no caminho reto: nas assembleias Vos bendirei, Senhor. Glória ao Pai, e ao Filho, e ao Espírito Santo. Assim como era no princípio, agora e sempre, e por todos os séculos dos séculos. Amém.',
      },
      {
        kind: 'rubric',
        text: 'Inclinado no centro do altar:',
      },
      {
        kind: 'priest',
        latin:
          'Suscipe, sancta Trinitas, hanc oblationem, quam tibi offerimus ob memoriam passionis, resurrectionis, et ascensionis Jesu Christi, Domini nostri: et in honorem beatæ Mariæ semper Virginis, et beati Joannis Baptistæ, et sanctorum Apostolorum Petri et Pauli, et istorum, et omnium Sanctorum: ut illis proficiat ad honorem, nobis autem ad salutem: et illi pro nobis intercedere dignentur in cælis, quorum memoriam agimus in terris. Per eundem Christum Dominum nostrum. Amen.',
        translation:
          'Recebei, ó Trindade Santa, esta oblação que Vos oferecemos em memória da paixão, ressurreição e ascensão de Jesus Cristo, nosso Senhor, e em honra da bem-aventurada sempre Virgem Maria, de São João Batista, dos santos Apóstolos Pedro e Paulo, destes [cujas relíquias estão no altar] e de todos os Santos, para que a eles sirva de honra e a nós de salvação; e se dignem interceder por nós no céu aqueles cuja memória celebramos na terra. Pelo mesmo Cristo, nosso Senhor. Amém.',
      },
    ],
  },
  {
    title: 'Orate, fratres e Secreta',
    posture: 'sitting',
    postureNote: 'Em muitas capelas os fiéis já se ajoelham aqui.',
    lines: [
      {
        kind: 'rubric',
        text: 'Voltado para o povo:',
      },
      {
        kind: 'priest',
        latin:
          'Orate, fratres: ut meum ac vestrum sacrificium acceptabile fiat apud Deum Patrem omnipotentem.',
        translation:
          'Orai, irmãos, para que o meu e o vosso sacrifício seja aceito por Deus Pai todo-poderoso.',
      },
      {
        kind: 'server',
        latin:
          'Suscipiat Dominus sacrificium de manibus tuis, ad laudem et gloriam nominis sui, ad utilitatem quoque nostram, totiusque Ecclesiæ suæ sanctæ.',
        translation:
          'Receba o Senhor de tuas mãos este sacrifício, para louvor e glória do seu nome, para nosso proveito e de toda a sua santa Igreja.',
      },
      {
        kind: 'priest',
        latin: 'Amen.',
        translation: 'Amém.',
      },
      {
        kind: 'proper',
        text: 'Secreta: próprio do dia, rezada em silêncio.',
      },
      {
        kind: 'priest',
        latin: '… Per omnia sæcula sæculorum.',
        translation: '… Por todos os séculos dos séculos.',
      },
      {
        kind: 'server',
        latin: 'Amen.',
        translation: 'Amém.',
      },
    ],
  },
  {
    title: 'Prefácio e Sanctus',
    posture: 'standing',
    postureNote: 'De pé no Prefácio; ajoelhar-se no Sanctus.',
    lines: [
      {
        kind: 'priest',
        latin: 'Dominus vobiscum.',
        translation: 'O Senhor esteja convosco.',
      },
      {
        kind: 'server',
        latin: 'Et cum spiritu tuo.',
        translation: 'E com o teu espírito.',
      },
      {
        kind: 'priest',
        latin: 'Sursum corda.',
        translation: 'Corações ao alto.',
      },
      {
        kind: 'server',
        latin: 'Habemus ad Dominum.',
        translation: 'Já os temos no Senhor.',
      },
      {
        kind: 'priest',
        latin: 'Gratias agamus Domino Deo nostro.',
        translation: 'Demos graças ao Senhor, nosso Deus.',
      },
      {
        kind: 'server',
        latin: 'Dignum et justum est.',
        translation: 'É digno e justo.',
      },
      {
        kind: 'rubric',
        text: 'Prefácio da Santíssima Trindade, dito nos domingos comuns. Nas festas e em certos tempos o prefácio é outro (veja o missal).',
      },
      {
        kind: 'priest',
        latin:
          'Vere dignum et justum est, æquum et salutare, nos tibi semper et ubique gratias agere: Domine sancte, Pater omnipotens, æterne Deus: Qui cum unigenito Filio tuo, et Spiritu Sancto, unus es Deus, unus es Dominus: non in unius singularitate personæ, sed in unius Trinitate substantiæ. Quod enim de tua gloria, revelante te, credimus, hoc de Filio tuo, hoc de Spiritu Sancto, sine differentia discretionis sentimus. Ut in confessione veræ sempiternæque Deitatis, et in personis proprietas, et in essentia unitas, et in majestate adoretur æqualitas. Quam laudant Angeli atque Archangeli, Cherubim quoque ac Seraphim: qui non cessant clamare quotidie, una voce dicentes:',
        translation:
          'É verdadeiramente digno e justo, razoável e salutar, que Vos demos graças sempre e em toda parte, Senhor santo, Pai todo-poderoso, Deus eterno, que, com o vosso Filho unigênito e o Espírito Santo, sois um só Deus e um só Senhor: não na unidade de uma só pessoa, mas na Trindade de uma só substância. Pois o que, por vossa revelação, cremos da vossa glória, isso mesmo cremos do vosso Filho e do Espírito Santo, sem diferença nem distinção. Assim, ao professarmos a verdadeira e eterna Divindade, adoramos a propriedade nas pessoas, a unidade na essência e a igualdade na majestade. A ela louvam os Anjos e os Arcanjos, os Querubins e os Serafins, que não cessam de clamar todos os dias, dizendo a uma só voz:',
      },
      {
        kind: 'rubric',
        text: 'O ministro toca o sino.',
      },
      {
        kind: 'priest',
        latin:
          'Sanctus, Sanctus, Sanctus Dominus Deus Sabaoth. Pleni sunt cæli et terra gloria tua. Hosanna in excelsis. ✠ Benedictus qui venit in nomine Domini. Hosanna in excelsis.',
        translation:
          'Santo, Santo, Santo é o Senhor Deus dos Exércitos. Os céus e a terra estão cheios da vossa glória. Hosana nas alturas. ✠ Bendito o que vem em nome do Senhor. Hosana nas alturas.',
      },
    ],
  },
  {
    title: 'Cânon: antes da Consagração',
    posture: 'kneeling',
    postureNote: 'O Cânon é rezado em silêncio pelo sacerdote.',
    lines: [
      {
        kind: 'priest',
        latin:
          'Te igitur, clementissime Pater, per Jesum Christum, Filium tuum, Dominum nostrum, supplices rogamus, ac petimus, uti accepta habeas, et benedicas, hæc ✠ dona, hæc ✠ munera, hæc ✠ sancta sacrificia illibata, in primis, quæ tibi offerimus pro Ecclesia tua sancta catholica: quam pacificare, custodire, adunare, et regere digneris toto orbe terrarum: una cum famulo tuo Papa nostro N. et Antistite nostro N. et omnibus orthodoxis, atque catholicæ et apostolicæ fidei cultoribus.',
        translation:
          'A Vós, pois, Pai clementíssimo, por Jesus Cristo, vosso Filho e Senhor nosso, humildemente rogamos e pedimos que aceiteis e abençoeis estes ✠ dons, estas ✠ ofertas, estes ✠ santos sacrifícios imaculados, que Vos oferecemos, primeiramente, pela vossa santa Igreja católica: dignai-Vos dar-lhe a paz, guardá-la, uni-la e governá-la em toda a terra, juntamente com o vosso servo, o nosso Papa N., o nosso Bispo N. e todos os ortodoxos que professam a fé católica e apostólica.',
      },
      {
        kind: 'rubric',
        text: 'Memento dos vivos: o sacerdote junta as mãos e reza por aqueles que quer recomendar.',
      },
      {
        kind: 'priest',
        latin:
          'Memento, Domine, famulorum famularumque tuarum N. et N. et omnium circumstantium, quorum tibi fides cognita est, et nota devotio, pro quibus tibi offerimus: vel qui tibi offerunt hoc sacrificium laudis, pro se, suisque omnibus: pro redemptione animarum suarum, pro spe salutis et incolumitatis suæ: tibique reddunt vota sua æterno Deo, vivo et vero.',
        translation:
          'Lembrai-Vos, Senhor, dos vossos servos e servas N. e N., e de todos os aqui presentes, cuja fé e devoção conheceis, pelos quais Vos oferecemos, ou que Vos oferecem este sacrifício de louvor, por si e por todos os seus, pela redenção de suas almas, pela esperança da sua salvação e conservação, e Vos apresentam os seus votos, a Vós, Deus eterno, vivo e verdadeiro.',
      },
      {
        kind: 'priest',
        latin:
          'Communicantes, et memoriam venerantes, in primis gloriosæ semper Virginis Mariæ, Genetricis Dei et Domini nostri Jesu Christi: sed et beatorum Apostolorum ac Martyrum tuorum, Petri et Pauli, Andreæ, Jacobi, Joannis, Thomæ, Jacobi, Philippi, Bartholomæi, Matthæi, Simonis et Thaddæi: Lini, Cleti, Clementis, Xysti, Cornelii, Cypriani, Laurentii, Chrysogoni, Joannis et Pauli, Cosmæ et Damiani: et omnium Sanctorum tuorum; quorum meritis precibusque concedas, ut in omnibus protectionis tuæ muniamur auxilio. Per eundem Christum Dominum nostrum. Amen.',
        translation:
          'Em comunhão e venerando a memória, primeiramente, da gloriosa sempre Virgem Maria, Mãe de Deus e Senhor nosso Jesus Cristo, e também dos vossos bem-aventurados Apóstolos e Mártires Pedro e Paulo, André, Tiago, João, Tomé, Tiago, Filipe, Bartolomeu, Mateus, Simão e Tadeu, Lino, Cleto, Clemente, Xisto, Cornélio, Cipriano, Lourenço, Crisógono, João e Paulo, Cosme e Damião, e de todos os vossos Santos: por seus méritos e preces, concedei-nos ser sempre fortalecidos com o auxílio da vossa proteção. Pelo mesmo Cristo, nosso Senhor. Amém.',
      },
      {
        kind: 'rubric',
        text: 'O livro da capela traz no Communicantes também “sed et beati Joseph, ejusdem Virginis Sponsi” (e também de São José, Esposo da mesma Virgem), menção acrescentada em 1962.',
      },
      {
        kind: 'rubric',
        text: 'Estendendo as mãos sobre as oblatas. O ministro toca o sino uma vez (costume).',
      },
      {
        kind: 'priest',
        latin:
          'Hanc igitur oblationem servitutis nostræ, sed et cunctæ familiæ tuæ, quæsumus, Domine, ut placatus accipias: diesque nostros in tua pace disponas, atque ab æterna damnatione nos eripi, et in electorum tuorum jubeas grege numerari. Per Christum Dominum nostrum. Amen.',
        translation:
          'Esta oblação, pois, da nossa servidão e de toda a vossa família, nós Vos pedimos, Senhor, que a aceiteis favoravelmente; disponde os nossos dias na vossa paz, livrai-nos da condenação eterna e mandai que sejamos contados no rebanho dos vossos eleitos. Por Cristo, nosso Senhor. Amém.',
      },
      {
        kind: 'priest',
        latin:
          'Quam oblationem tu, Deus, in omnibus, quæsumus, bene ✠ dictam, adscrip ✠ tam, ra ✠ tam, rationabilem, acceptabilemque facere digneris: ut nobis Cor ✠ pus, et San ✠ guis fiat dilectissimi Filii tui, Domini nostri Jesu Christi.',
        translation:
          'Esta oblação, ó Deus, nós Vos pedimos, dignai-Vos torná-la em tudo aben ✠ çoada, apro ✠ vada, ratifi ✠ cada, digna e aceitável, para que se torne para nós o Cor ✠ po e o San ✠ gue do vosso diletíssimo Filho, nosso Senhor Jesus Cristo.',
      },
    ],
  },
  {
    title: 'Consagração',
    posture: 'kneeling',
    postureNote:
      'Olhe para a Hóstia e para o Cálice elevados e incline-se em adoração. O ministro toca o sino em cada elevação.',
    lines: [
      {
        kind: 'priest',
        latin:
          'Qui pridie quam pateretur, accepit panem in sanctas ac venerabiles manus suas, et elevatis oculis in cælum ad te Deum, Patrem suum omnipotentem, tibi gratias agens, bene ✠ dixit, fregit, deditque discipulis suis, dicens: Accipite, et manducate ex hoc omnes.',
        translation:
          'Na véspera da sua paixão, tomou o pão em suas santas e veneráveis mãos e, elevando os olhos ao céu, a Vós, Deus, seu Pai todo-poderoso, dando-Vos graças, aben ✠ çoou-o, partiu-o e deu-o aos seus discípulos, dizendo: Tomai e comei todos dele.',
      },
      {
        kind: 'priest',
        latin: 'HOC EST ENIM CORPUS MEUM.',
        translation: 'ISTO É O MEU CORPO.',
        emphasis: true,
      },
      {
        kind: 'rubric',
        text: 'Elevação da Hóstia. Costuma-se dizer interiormente: “Meu Senhor e meu Deus!”',
      },
      {
        kind: 'priest',
        latin:
          'Simili modo postquam cenatum est, accipiens et hunc præclarum Calicem in sanctas ac venerabiles manus suas: item tibi gratias agens, bene ✠ dixit, deditque discipulis suis, dicens: Accipite, et bibite ex eo omnes.',
        translation:
          'Do mesmo modo, depois de cear, tomando também este precioso Cálice em suas santas e veneráveis mãos, dando-Vos graças de novo, aben ✠ çoou-o e deu-o aos seus discípulos, dizendo: Tomai e bebei todos dele.',
      },
      {
        kind: 'priest',
        latin:
          'HIC EST ENIM CALIX SANGUINIS MEI, NOVI ET ÆTERNI TESTAMENTI: MYSTERIUM FIDEI: QUI PRO VOBIS ET PRO MULTIS EFFUNDETUR IN REMISSIONEM PECCATORUM.',
        translation:
          'ESTE É O CÁLICE DO MEU SANGUE, DA NOVA E ETERNA ALIANÇA: MISTÉRIO DA FÉ: QUE SERÁ DERRAMADO POR VÓS E POR MUITOS PARA REMISSÃO DOS PECADOS.',
        emphasis: true,
      },
      {
        kind: 'priest',
        latin: 'Hæc quotiescumque feceritis, in mei memoriam facietis.',
        translation: 'Todas as vezes que fizerdes isto, fazei-o em memória de mim.',
      },
      {
        kind: 'rubric',
        text: 'Elevação do Cálice.',
      },
    ],
  },
  {
    title: 'Cânon: depois da Consagração',
    posture: 'kneeling',
    lines: [
      {
        kind: 'priest',
        latin:
          'Unde et memores, Domine, nos servi tui, sed et plebs tua sancta, ejusdem Christi Filii tui, Domini nostri, tam beatæ passionis, nec non et ab inferis resurrectionis, sed et in cælos gloriosæ ascensionis: offerimus præclaræ majestati tuæ de tuis donis, ac datis, hostiam ✠ puram, hostiam ✠ sanctam, hostiam ✠ immaculatam, Panem ✠ sanctum vitæ æternæ, et Calicem ✠ salutis perpetuæ.',
        translation:
          'Por isso, Senhor, nós, vossos servos, e também o vosso povo santo, lembrando-nos da bem-aventurada paixão do mesmo Cristo, vosso Filho e Senhor nosso, da sua ressurreição dos infernos e da sua gloriosa ascensão aos céus, oferecemos à vossa excelsa majestade, dos vossos dons e dádivas, a hóstia ✠ pura, a hóstia ✠ santa, a hóstia ✠ imaculada, o Pão ✠ santo da vida eterna e o Cálice ✠ da salvação perpétua.',
      },
      {
        kind: 'priest',
        latin:
          'Supra quæ propitio ac sereno vultu respicere digneris: et accepta habere, sicuti accepta habere dignatus es munera pueri tui justi Abel, et sacrificium Patriarchæ nostri Abrahæ: et quod tibi obtulit summus sacerdos tuus Melchisedech, sanctum sacrificium, immaculatam hostiam.',
        translation:
          'Dignai-Vos olhar para eles com rosto propício e sereno, e aceitá-los, como Vos dignastes aceitar os dons do vosso servo, o justo Abel, o sacrifício do nosso patriarca Abraão e o que Vos ofereceu o vosso sumo sacerdote Melquisedeque: sacrifício santo, hóstia imaculada.',
      },
      {
        kind: 'priest',
        latin:
          'Supplices te rogamus, omnipotens Deus: jube hæc perferri per manus sancti Angeli tui in sublime altare tuum, in conspectu divinæ majestatis tuæ: ut quotquot ex hac altaris participatione sacrosanctum Filii tui Cor ✠ pus, et San ✠ guinem sumpserimus, omni benedictione cælesti et gratia repleamur. Per eundem Christum Dominum nostrum. Amen.',
        translation:
          'Humildemente Vos suplicamos, Deus todo-poderoso: mandai que estas ofertas sejam levadas pelas mãos do vosso santo Anjo ao vosso altar sublime, na presença da vossa divina majestade, para que todos nós que, participando deste altar, recebermos o sacrossanto Cor ✠ po e San ✠ gue do vosso Filho, sejamos repletos de toda bênção celeste e graça. Pelo mesmo Cristo, nosso Senhor. Amém.',
      },
      {
        kind: 'rubric',
        text: 'Memento dos mortos.',
      },
      {
        kind: 'priest',
        latin:
          'Memento etiam, Domine, famulorum famularumque tuarum N. et N., qui nos præcesserunt cum signo fidei, et dormiunt in somno pacis. Ipsis, Domine, et omnibus in Christo quiescentibus, locum refrigerii, lucis et pacis, ut indulgeas, deprecamur. Per eundem Christum Dominum nostrum. Amen.',
        translation:
          'Lembrai-Vos também, Senhor, dos vossos servos e servas N. e N., que nos precederam com o sinal da fé e dormem o sono da paz. A eles, Senhor, e a todos os que descansam em Cristo, nós Vos suplicamos que concedais o lugar do refrigério, da luz e da paz. Pelo mesmo Cristo, nosso Senhor. Amém.',
      },
      {
        kind: 'rubric',
        text: 'Batendo no peito e elevando um pouco a voz nas três primeiras palavras:',
      },
      {
        kind: 'priest',
        latin:
          'Nobis quoque peccatoribus famulis tuis, de multitudine miserationum tuarum sperantibus, partem aliquam et societatem donare digneris, cum tuis sanctis Apostolis et Martyribus: cum Joanne, Stephano, Matthia, Barnaba, Ignatio, Alexandro, Marcellino, Petro, Felicitate, Perpetua, Agatha, Lucia, Agnete, Cæcilia, Anastasia, et omnibus Sanctis tuis: intra quorum nos consortium, non æstimator meriti, sed veniæ, quæsumus, largitor admitte. Per Christum Dominum nostrum.',
        translation:
          'Também a nós, pecadores, vossos servos, que esperamos na multidão das vossas misericórdias, dignai-Vos conceder alguma parte e sociedade com os vossos santos Apóstolos e Mártires: com João, Estêvão, Matias, Barnabé, Inácio, Alexandre, Marcelino, Pedro, Felicidade, Perpétua, Águeda, Luzia, Inês, Cecília, Anastácia e todos os vossos Santos. Admiti-nos, nós Vos pedimos, na companhia deles, não pesando os nossos méritos, mas concedendo-nos o perdão. Por Cristo, nosso Senhor.',
      },
      {
        kind: 'priest',
        latin:
          'Per quem hæc omnia, Domine, semper bona creas, sancti ✠ ficas, vivi ✠ ficas, bene ✠ dicis, et præstas nobis.',
        translation:
          'Por quem, Senhor, sempre criais, santi ✠ ficais, vivi ✠ ficais, aben ✠ çoais e nos concedeis todos estes bens.',
      },
      {
        kind: 'rubric',
        text: 'Pequena elevação: o sacerdote ergue juntos a Hóstia e o Cálice no “omnis honor et gloria”. O livro da capela marca aqui um toque de sino.',
      },
      {
        kind: 'priest',
        latin:
          'Per ip ✠ sum, et cum ip ✠ so, et in ip ✠ so, est tibi Deo Patri ✠ omnipotenti, in unitate Spiritus ✠ Sancti, omnis honor, et gloria. Per omnia sæcula sæculorum.',
        translation:
          'Por ✠ Ele, com ✠ Ele e n’ ✠ Ele, a Vós, Deus Pai ✠ todo-poderoso, na unidade do Espírito ✠ Santo, toda a honra e toda a glória. Por todos os séculos dos séculos.',
      },
      {
        kind: 'server',
        latin: 'Amen.',
        translation: 'Amém.',
      },
    ],
  },
  {
    title: 'Pater noster e fração',
    posture: 'standing',
    postureNote: 'De pé no Pater noster; ajoelhar-se para as orações antes da Comunhão.',
    lines: [
      {
        kind: 'priest',
        latin:
          'Oremus. Præceptis salutaribus moniti, et divina institutione formati, audemus dicere:',
        translation:
          'Oremos. Instruídos por preceitos salutares e formados pelo ensinamento divino, ousamos dizer:',
      },
      {
        kind: 'priest',
        latin:
          'Pater noster, qui es in cælis, sanctificetur nomen tuum. Adveniat regnum tuum. Fiat voluntas tua, sicut in cælo et in terra. Panem nostrum quotidianum da nobis hodie. Et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris. Et ne nos inducas in tentationem.',
        translation:
          'Pai nosso, que estais nos céus, santificado seja o vosso nome. Venha a nós o vosso reino. Seja feita a vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje. Perdoai-nos as nossas dívidas, assim como nós perdoamos aos nossos devedores. E não nos deixeis cair em tentação.',
      },
      {
        kind: 'server',
        latin: 'Sed libera nos a malo.',
        translation: 'Mas livrai-nos do mal.',
      },
      {
        kind: 'priest',
        latin: 'Amen.',
        translation: 'Amém.',
      },
      {
        kind: 'priest',
        latin:
          'Libera nos, quæsumus, Domine, ab omnibus malis, præteritis, præsentibus, et futuris: et intercedente beata et gloriosa semper Virgine Dei Genetrice Maria, cum beatis Apostolis tuis Petro et Paulo, atque Andrea, et omnibus Sanctis, ✠ da propitius pacem in diebus nostris: ut ope misericordiæ tuæ adjuti, et a peccato simus semper liberi, et ab omni perturbatione securi. Per eundem Dominum nostrum Jesum Christum, Filium tuum. Qui tecum vivit et regnat in unitate Spiritus Sancti Deus. Per omnia sæcula sæculorum.',
        translation:
          'Livrai-nos, Senhor, nós Vos pedimos, de todos os males passados, presentes e futuros; e, por intercessão da bem-aventurada e gloriosa sempre Virgem Maria, Mãe de Deus, dos vossos bem-aventurados Apóstolos Pedro e Paulo, de André e de todos os Santos, ✠ dai-nos propício a paz em nossos dias, para que, ajudados pela vossa misericórdia, sejamos sempre livres do pecado e protegidos de toda perturbação. Pelo mesmo nosso Senhor Jesus Cristo, vosso Filho, que convosco vive e reina na unidade do Espírito Santo, Deus, por todos os séculos dos séculos.',
      },
      {
        kind: 'server',
        latin: 'Amen.',
        translation: 'Amém.',
      },
      {
        kind: 'priest',
        latin: 'Pax ✠ Domini sit ✠ semper vobis ✠ cum.',
        translation: 'A paz ✠ do Senhor ✠ esteja sempre ✠ convosco.',
      },
      {
        kind: 'server',
        latin: 'Et cum spiritu tuo.',
        translation: 'E com o teu espírito.',
      },
      {
        kind: 'rubric',
        text: 'Pondo uma partícula da Hóstia no Cálice:',
      },
      {
        kind: 'priest',
        latin:
          'Hæc commixtio, et consecratio Corporis et Sanguinis Domini nostri Jesu Christi, fiat accipientibus nobis in vitam æternam. Amen.',
        translation:
          'Esta mistura e consagração do Corpo e do Sangue de nosso Senhor Jesus Cristo sirva para a vida eterna a nós que os recebemos. Amém.',
      },
    ],
  },
  {
    title: 'Agnus Dei e orações antes da Comunhão',
    posture: 'kneeling',
    lines: [
      {
        kind: 'rubric',
        text: 'Batendo no peito a cada invocação:',
      },
      {
        kind: 'priest',
        latin:
          'Agnus Dei, qui tollis peccata mundi: miserere nobis. Agnus Dei, qui tollis peccata mundi: miserere nobis. Agnus Dei, qui tollis peccata mundi: dona nobis pacem.',
        translation:
          'Cordeiro de Deus, que tirais os pecados do mundo, tende piedade de nós. Cordeiro de Deus, que tirais os pecados do mundo, tende piedade de nós. Cordeiro de Deus, que tirais os pecados do mundo, dai-nos a paz.',
      },
      {
        kind: 'priest',
        latin:
          'Domine Jesu Christe, qui dixisti Apostolis tuis: Pacem relinquo vobis, pacem meam do vobis: ne respicias peccata mea, sed fidem Ecclesiæ tuæ; eamque secundum voluntatem tuam pacificare et coadunare digneris: Qui vivis et regnas Deus per omnia sæcula sæculorum. Amen.',
        translation:
          'Senhor Jesus Cristo, que dissestes aos vossos Apóstolos: Deixo-vos a paz, dou-vos a minha paz; não olheis para os meus pecados, mas para a fé da vossa Igreja; e dignai-Vos dar-lhe a paz e a união, segundo a vossa vontade, Vós que viveis e reinais, Deus, por todos os séculos dos séculos. Amém.',
      },
      {
        kind: 'priest',
        latin:
          'Domine Jesu Christe, Fili Dei vivi, qui ex voluntate Patris, cooperante Spiritu Sancto, per mortem tuam mundum vivificasti: libera me per hoc sacrosanctum Corpus et Sanguinem tuum ab omnibus iniquitatibus meis, et universis malis: et fac me tuis semper inhærere mandatis, et a te numquam separari permittas: Qui cum eodem Deo Patre et Spiritu Sancto vivis et regnas Deus in sæcula sæculorum. Amen.',
        translation:
          'Senhor Jesus Cristo, Filho de Deus vivo, que, por vontade do Pai e com a cooperação do Espírito Santo, destes a vida ao mundo pela vossa morte: livrai-me, por este vosso sacrossanto Corpo e Sangue, de todas as minhas iniquidades e de todos os males; fazei que eu permaneça sempre fiel aos vossos mandamentos e não permitais que eu jamais me separe de Vós, que, com o mesmo Deus Pai e o Espírito Santo, viveis e reinais, Deus, pelos séculos dos séculos. Amém.',
      },
      {
        kind: 'priest',
        latin:
          'Perceptio Corporis tui, Domine Jesu Christe, quod ego indignus sumere præsumo, non mihi proveniat in judicium et condemnationem: sed pro tua pietate prosit mihi ad tutamentum mentis et corporis, et ad medelam percipiendam: Qui vivis et regnas cum Deo Patre in unitate Spiritus Sancti Deus, per omnia sæcula sæculorum. Amen.',
        translation:
          'A recepção do vosso Corpo, Senhor Jesus Cristo, que eu, indigno, ouso receber, não se torne para mim causa de juízo e condenação; mas, pela vossa bondade, sirva-me de proteção da alma e do corpo e de remédio salutar, Vós que viveis e reinais com Deus Pai, na unidade do Espírito Santo, Deus, por todos os séculos dos séculos. Amém.',
      },
    ],
  },
  {
    title: 'Comunhão do sacerdote',
    posture: 'kneeling',
    lines: [
      {
        kind: 'priest',
        latin: 'Panem cælestem accipiam, et nomen Domini invocabo.',
        translation: 'Receberei o Pão do céu e invocarei o nome do Senhor.',
      },
      {
        kind: 'rubric',
        text: 'Três vezes, batendo no peito. O ministro toca o sino a cada vez (costume).',
      },
      {
        kind: 'priest',
        latin:
          'Domine, non sum dignus, ut intres sub tectum meum: sed tantum dic verbo, et sanabitur anima mea.',
        translation:
          'Senhor, eu não sou digno de que entreis sob o meu teto, mas dizei uma só palavra e a minha alma será salva.',
      },
      {
        kind: 'priest',
        latin: 'Corpus Domini nostri Jesu Christi custodiat animam meam in vitam æternam. Amen.',
        translation:
          'O Corpo de nosso Senhor Jesus Cristo guarde a minha alma para a vida eterna. Amém.',
      },
      {
        kind: 'priest',
        latin:
          'Quid retribuam Domino pro omnibus quæ retribuit mihi? Calicem salutaris accipiam, et nomen Domini invocabo. Laudans invocabo Dominum, et ab inimicis meis salvus ero.',
        translation:
          'Que darei ao Senhor por tudo o que Ele me deu? Tomarei o cálice da salvação e invocarei o nome do Senhor. Louvando invocarei o Senhor, e serei salvo dos meus inimigos.',
      },
      {
        kind: 'priest',
        latin: 'Sanguis Domini nostri Jesu Christi custodiat animam meam in vitam æternam. Amen.',
        translation:
          'O Sangue de nosso Senhor Jesus Cristo guarde a minha alma para a vida eterna. Amém.',
      },
    ],
  },
  {
    title: 'Comunhão dos fiéis',
    posture: 'kneeling',
    postureNote:
      'Comunga-se de joelhos, na boca. Quem não comunga permanece de joelhos e pode fazer a comunhão espiritual.',
    lines: [
      {
        kind: 'rubric',
        text: 'Se há fiéis para comungar, o ministro, inclinado, reza o Confiteor:',
      },
      {
        kind: 'server',
        latin:
          'Confiteor Deo omnipotenti, beatæ Mariæ semper Virgini, beato Michæli Archangelo, beato Joanni Baptistæ, sanctis Apostolis Petro et Paulo, omnibus Sanctis, et tibi, pater: quia peccavi nimis cogitatione, verbo et opere: mea culpa, mea culpa, mea maxima culpa. Ideo precor beatam Mariam semper Virginem, beatum Michælem Archangelum, beatum Joannem Baptistam, sanctos Apostolos Petrum et Paulum, omnes Sanctos, et te, pater, orare pro me ad Dominum Deum nostrum.',
        translation: '(O mesmo Confiteor das orações ao pé do altar, com “a vós, padre”.)',
      },
      {
        kind: 'rubric',
        text: 'O sacerdote, voltado para os fiéis:',
      },
      {
        kind: 'priest',
        latin:
          'Misereatur vestri omnipotens Deus, et dimissis peccatis vestris, perducat vos ad vitam æternam.',
        translation:
          'Deus todo-poderoso tenha misericórdia de vós, perdoe os vossos pecados e vos conduza à vida eterna.',
      },
      {
        kind: 'server',
        latin: 'Amen.',
        translation: 'Amém.',
      },
      {
        kind: 'priest',
        latin:
          'Indulgentiam, ✠ absolutionem, et remissionem peccatorum vestrorum tribuat vobis omnipotens et misericors Dominus.',
        translation:
          'O Senhor todo-poderoso e misericordioso vos conceda o perdão, ✠ a absolvição e a remissão dos vossos pecados.',
      },
      {
        kind: 'server',
        latin: 'Amen.',
        translation: 'Amém.',
      },
      {
        kind: 'rubric',
        text: 'O sacerdote, voltado para os fiéis, mostra a Hóstia:',
      },
      {
        kind: 'priest',
        latin: 'Ecce Agnus Dei, ecce qui tollit peccata mundi.',
        translation: 'Eis o Cordeiro de Deus, eis o que tira os pecados do mundo.',
      },
      {
        kind: 'priest',
        latin:
          'Domine, non sum dignus, ut intres sub tectum meum: sed tantum dic verbo, et sanabitur anima mea. (3 vezes)',
        translation:
          'Senhor, eu não sou digno de que entreis sob o meu teto, mas dizei uma só palavra e a minha alma será salva. (3 vezes)',
      },
      {
        kind: 'rubric',
        text: 'A cada fiel:',
      },
      {
        kind: 'priest',
        latin: 'Corpus Domini nostri Jesu Christi ✠ custodiat animam tuam in vitam æternam. Amen.',
        translation:
          'O Corpo de nosso Senhor Jesus Cristo ✠ guarde a tua alma para a vida eterna. Amém.',
      },
    ],
  },
  {
    title: 'Abluções',
    posture: 'kneeling',
    lines: [
      {
        kind: 'priest',
        latin:
          'Quod ore sumpsimus, Domine, pura mente capiamus: et de munere temporali fiat nobis remedium sempiternum.',
        translation:
          'O que recebemos com a boca, Senhor, acolhamos com a alma pura; e este dom temporal se torne para nós remédio eterno.',
      },
      {
        kind: 'priest',
        latin:
          'Corpus tuum, Domine, quod sumpsi, et Sanguis, quem potavi, adhæreat visceribus meis: et præsta; ut in me non remaneat scelerum macula, quem pura et sancta refecerunt sacramenta: Qui vivis et regnas in sæcula sæculorum. Amen.',
        translation:
          'O vosso Corpo, Senhor, que recebi, e o Sangue que bebi, se unam às minhas entranhas; e concedei que não fique em mim mancha alguma de pecado, a mim que fui alimentado por estes puros e santos sacramentos, Vós que viveis e reinais pelos séculos dos séculos. Amém.',
      },
    ],
  },
  {
    title: 'Antífona da Comunhão e Pós-comunhão',
    posture: 'standing',
    lines: [
      {
        kind: 'proper',
        text: 'Antífona da Comunhão: próprio do dia.',
      },
      {
        kind: 'priest',
        latin: 'Dominus vobiscum.',
        translation: 'O Senhor esteja convosco.',
      },
      {
        kind: 'server',
        latin: 'Et cum spiritu tuo.',
        translation: 'E com o teu espírito.',
      },
      {
        kind: 'priest',
        latin: 'Oremus.',
        translation: 'Oremos.',
      },
      {
        kind: 'proper',
        text: 'Pós-comunhão: próprio do dia, com tantas orações quantas houve na Coleta.',
      },
      {
        kind: 'priest',
        latin: '… Per omnia sæcula sæculorum.',
        translation: '… Por todos os séculos dos séculos.',
      },
      {
        kind: 'server',
        latin: 'Amen.',
        translation: 'Amém.',
      },
    ],
  },
  {
    title: 'Despedida e Bênção',
    posture: 'kneeling',
    postureNote: 'De pé no Dominus vobiscum e no Ite, missa est; ajoelhar-se para a bênção.',
    lines: [
      {
        kind: 'priest',
        latin: 'Dominus vobiscum.',
        translation: 'O Senhor esteja convosco.',
      },
      {
        kind: 'server',
        latin: 'Et cum spiritu tuo.',
        translation: 'E com o teu espírito.',
      },
      {
        kind: 'priest',
        latin: 'Ite, missa est.',
        translation: 'Ide, a Missa terminou.',
      },
      {
        kind: 'server',
        latin: 'Deo gratias.',
        translation: 'Graças a Deus.',
      },
      {
        kind: 'rubric',
        text: 'Nas Missas sem Gloria, o sacerdote diz, voltado para o altar: Benedicamus Domino. ℟ Deo gratias. Nas Missas de Réquiem: Requiescant in pace. ℟ Amen (e não há bênção).',
      },
      {
        kind: 'rubric',
        text: 'Inclinado diante do altar:',
      },
      {
        kind: 'priest',
        latin:
          'Placeat tibi, sancta Trinitas, obsequium servitutis meæ: et præsta; ut sacrificium, quod oculis tuæ majestatis indignus obtuli, tibi sit acceptabile, mihique, et omnibus, pro quibus illud obtuli, sit, te miserante, propitiabile. Per Christum Dominum nostrum. Amen.',
        translation:
          'Seja-Vos agradável, ó Trindade Santa, a homenagem da minha servidão; e concedei que o sacrifício que eu, indigno, ofereci aos olhos da vossa majestade Vos seja aceitável e, pela vossa misericórdia, seja propiciatório para mim e para todos aqueles por quem o ofereci. Por Cristo, nosso Senhor. Amém.',
      },
      {
        kind: 'rubric',
        text: 'Voltado para o povo, que recebe a bênção de joelhos, fazendo o sinal da cruz:',
      },
      {
        kind: 'priest',
        latin: 'Benedicat vos omnipotens Deus, Pater, et Filius, ✠ et Spiritus Sanctus.',
        translation: 'Abençoe-vos Deus todo-poderoso, Pai, e Filho, ✠ e Espírito Santo.',
      },
      {
        kind: 'server',
        latin: 'Amen.',
        translation: 'Amém.',
      },
    ],
  },
  {
    title: 'Último Evangelho',
    posture: 'standing',
    postureNote: 'De pé. Ajoelhar-se (genuflexão) no “Et Verbum caro factum est”.',
    lines: [
      {
        kind: 'priest',
        latin: 'Dominus vobiscum.',
        translation: 'O Senhor esteja convosco.',
      },
      {
        kind: 'server',
        latin: 'Et cum spiritu tuo.',
        translation: 'E com o teu espírito.',
      },
      {
        kind: 'rubric',
        text: 'Normalmente é o início do Evangelho de São João. Quando se faz a comemoração de um domingo, de uma féria maior ou de uma vigília que tem Evangelho próprio, lê-se esse Evangelho no missal, e o ministro antes o leva ao lado do Evangelho.',
      },
      {
        kind: 'priest',
        latin: '✠ Initium sancti Evangelii secundum Joannem.',
        translation: '✠ Início do santo Evangelho segundo João.',
      },
      {
        kind: 'server',
        latin: 'Gloria tibi, Domine.',
        translation: 'Glória a Vós, Senhor.',
      },
      {
        kind: 'priest',
        latin:
          'In principio erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum. Hoc erat in principio apud Deum. Omnia per ipsum facta sunt: et sine ipso factum est nihil, quod factum est: in ipso vita erat, et vita erat lux hominum: et lux in tenebris lucet, et tenebræ eam non comprehenderunt. Fuit homo missus a Deo, cui nomen erat Joannes. Hic venit in testimonium, ut testimonium perhiberet de lumine, ut omnes crederent per illum. Non erat ille lux, sed ut testimonium perhiberet de lumine. Erat lux vera, quæ illuminat omnem hominem venientem in hunc mundum. In mundo erat, et mundus per ipsum factus est, et mundus eum non cognovit. In propria venit, et sui eum non receperunt. Quotquot autem receperunt eum, dedit eis potestatem filios Dei fieri, his, qui credunt in nomine ejus: qui non ex sanguinibus, neque ex voluntate carnis, neque ex voluntate viri, sed ex Deo nati sunt.',
        translation:
          'No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus. Ele estava no princípio com Deus. Todas as coisas foram feitas por Ele, e sem Ele nada foi feito do que foi feito. N’Ele estava a vida, e a vida era a luz dos homens; e a luz brilha nas trevas, e as trevas não a compreenderam. Houve um homem enviado por Deus, cujo nome era João. Ele veio como testemunha, para dar testemunho da luz, a fim de que todos cressem por meio dele. Ele não era a luz, mas veio para dar testemunho da luz. Era a luz verdadeira, que ilumina todo homem que vem a este mundo. Estava no mundo, e o mundo foi feito por Ele, e o mundo não O conheceu. Veio para o que era seu, e os seus não O receberam. Mas a todos os que O receberam deu o poder de se tornarem filhos de Deus, aos que creem no seu nome, os quais não nasceram do sangue, nem da vontade da carne, nem da vontade do homem, mas de Deus.',
      },
      {
        kind: 'rubric',
        text: 'Todos fazem genuflexão:',
      },
      {
        kind: 'priest',
        latin:
          'ET VERBUM CARO FACTUM EST, et habitavit in nobis: et vidimus gloriam ejus, gloriam quasi Unigeniti a Patre, plenum gratiæ et veritatis.',
        translation:
          'E O VERBO SE FEZ CARNE, e habitou entre nós; e vimos a sua glória, glória como do Unigênito do Pai, cheio de graça e de verdade.',
      },
      {
        kind: 'server',
        latin: 'Deo gratias.',
        translation: 'Graças a Deus.',
      },
    ],
  },
  {
    title: 'Orações depois da Missa rezada',
    posture: 'kneeling',
    postureNote:
      'Prescritas depois de toda Missa rezada (Leão XIII e Pio XI). O sacerdote as reza ajoelhado no degrau do altar, alternando com os fiéis; podem ser ditas em português.',
    lines: [
      {
        kind: 'rubric',
        text: 'Três vezes:',
      },
      {
        kind: 'priest',
        latin:
          'Ave Maria, gratia plena, Dominus tecum; benedicta tu in mulieribus, et benedictus fructus ventris tui, Jesus.',
        translation:
          'Ave Maria, cheia de graça, o Senhor é convosco; bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus.',
      },
      {
        kind: 'server',
        latin:
          'Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc et in hora mortis nostræ. Amen.',
        translation:
          'Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora da nossa morte. Amém.',
      },
      {
        kind: 'priest',
        latin:
          'Salve, Regina, Mater misericordiæ; vita, dulcedo et spes nostra, salve. Ad te clamamus, exsules filii Hevæ. Ad te suspiramus, gementes et flentes in hac lacrimarum valle. Eia ergo, advocata nostra, illos tuos misericordes oculos ad nos converte. Et Jesum, benedictum fructum ventris tui, nobis post hoc exsilium ostende. O clemens, o pia, o dulcis Virgo Maria.',
        translation:
          'Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei. E depois deste desterro mostrai-nos Jesus, bendito fruto do vosso ventre. Ó clemente, ó piedosa, ó doce sempre Virgem Maria.',
      },
      {
        kind: 'priest',
        latin: 'Ora pro nobis, sancta Dei Genetrix.',
        translation: 'Rogai por nós, santa Mãe de Deus.',
      },
      {
        kind: 'server',
        latin: 'Ut digni efficiamur promissionibus Christi.',
        translation: 'Para que sejamos dignos das promessas de Cristo.',
      },
      {
        kind: 'priest',
        latin:
          'Oremus. Deus, refugium nostrum et virtus, populum ad te clamantem propitius respice; et intercedente gloriosa et immaculata Virgine Dei Genetrice Maria, cum beato Joseph, ejus Sponso, ac beatis Apostolis tuis Petro et Paulo, et omnibus Sanctis, quas pro conversione peccatorum, pro libertate et exaltatione sanctæ Matris Ecclesiæ, preces effundimus, misericors et benignus exaudi. Per eundem Christum Dominum nostrum.',
        translation:
          'Oremos. Ó Deus, nosso refúgio e nossa força, olhai propício para o povo que a Vós clama; e, pela intercessão da gloriosa e imaculada Virgem Maria, Mãe de Deus, de São José, seu Esposo, dos vossos bem-aventurados Apóstolos Pedro e Paulo e de todos os Santos, ouvi, misericordioso e benigno, as preces que Vos dirigimos pela conversão dos pecadores e pela liberdade e exaltação da santa Mãe Igreja. Pelo mesmo Cristo, nosso Senhor.',
      },
      {
        kind: 'server',
        latin: 'Amen.',
        translation: 'Amém.',
      },
      {
        kind: 'priest',
        latin:
          'Sancte Michael Archangele, defende nos in proelio; contra nequitiam et insidias diaboli esto præsidium. Imperet illi Deus, supplices deprecamur: tuque, Princeps militiæ cælestis, Satanam aliosque spiritus malignos, qui ad perditionem animarum pervagantur in mundo, divina virtute in infernum detrude.',
        translation:
          'São Miguel Arcanjo, defendei-nos no combate; sede o nosso refúgio contra a maldade e as ciladas do demônio. Ordene-lhe Deus, instantemente o pedimos; e vós, Príncipe da milícia celeste, pela virtude divina, precipitai no inferno Satanás e os outros espíritos malignos que andam pelo mundo para perder as almas.',
      },
      {
        kind: 'server',
        latin: 'Amen.',
        translation: 'Amém.',
      },
      {
        kind: 'rubric',
        text: 'Costuma-se acrescentar três vezes (invocação concedida por São Pio X):',
      },
      {
        kind: 'priest',
        latin: 'Cor Jesu sacratissimum,',
        translation: 'Sacratíssimo Coração de Jesus,',
      },
      {
        kind: 'server',
        latin: 'Miserere nobis.',
        translation: 'Tende piedade de nós.',
      },
      {
        kind: 'rubric',
        text: 'O sacerdote se levanta e se retira; os fiéis ficam de pé enquanto ele sai.',
      },
    ],
  },
];

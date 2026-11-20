import { Card, NumberedSteps } from '@/ui';
import styles from './ExaminationPage.module.css';

export function ConfessionGuide() {
  return (
    <>
      <Card title="Como se confessar">
        <NumberedSteps>
          <li>
            Ajoelhe-se, faça o sinal da cruz e diga: <em>“Abençoai-me, padre, porque pequei.”</em>
          </li>
          <li>Diga há quanto tempo foi a sua última confissão.</li>
          <li>
            Acuse os seus pecados com simplicidade, dizendo a espécie e, nos pecados mortais, o
            número de vezes, ao menos aproximado.
          </li>
          <li>
            Termine dizendo:{' '}
            <em>
              “Destes e de todos os pecados da minha vida passada, peço perdão a Deus e a vós,
              padre, penitência e absolvição.”
            </em>
          </li>
          <li>Ouça os conselhos e a penitência. Quando o padre pedir, reze o ato de contrição.</li>
          <li>Depois, cumpra a penitência o quanto antes.</li>
        </NumberedSteps>
      </Card>
      <Card title="Ato de contrição">
        <p className={styles.prayer}>
          Senhor meu Jesus Cristo, Deus e Homem verdadeiro, Criador e Redentor meu, por serdes Vós
          quem sois, sumamente bom e digno de ser amado sobre todas as coisas, e porque Vos amo e
          estimo, pesa-me, Senhor, de todo o meu coração, de Vos ter ofendido; pesa-me também por
          ter perdido o Céu e merecido o Inferno; e proponho firmemente, ajudado com os auxílios da
          vossa divina graça, emendar-me e nunca mais Vos tornar a ofender, e espero alcançar o
          perdão das minhas culpas pela vossa infinita misericórdia. Amém.
        </p>
      </Card>
    </>
  );
}

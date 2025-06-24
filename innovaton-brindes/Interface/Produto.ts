import { PrecoDia } from './PrecoDia';
import { Cor } from './Cor';

export interface Produto {
  codigo_produto: number;
  nome: string;
  descricao: string;
  img_home_produto: string;
  preco_dias: PrecoDia[];
  cores: Cor[]; 
  rgb_cores: string;
}

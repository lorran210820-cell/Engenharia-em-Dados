const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
if (localStorage.getItem('eed-theme') === 'light') root.classList.add('light-mode');
themeToggle?.addEventListener('click', () => {
  root.classList.toggle('light-mode');
  localStorage.setItem('eed-theme', root.classList.contains('light-mode') ? 'light' : 'dark');
});

const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');
menuButton?.addEventListener('click', () => {
  const open = sidebar.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

const configs = {
  andaime:{label:'Andaime',sub:'Produção, efetivo e produtividade',accent:'#14877f',integration:true,kpis:[['Produção do dia','7.812 ML','+8,4% sobre ontem','up'],['Produtividade','38,6 ML/MOD','Meta: 42 ML/MOD','warn'],['Absenteísmo','11,8%','Faixa esperada: 10–13%','warn'],['Efetivo liberado','196 MOD','20 em treinamento','up'],['Montagem','5.944 ML','76% da produção','up'],['Desmontagem','1.868 ML','24% da produção','up'],['HH realizado','1.542 h','91% do previsto','warn'],['Aderência diária','84,2%','16 de 19 frentes','up']],bars:[62,74,58,81,69,88,76],donut:72,activities:[['CWP-03 • EL. 324','Passarela Eixo 05 / Fila D',82],['CWA-297','Montagem sob sistema AVC',64],['Linha B','Apoio à parada operacional',91]],evidence:['CWP-03 • Frente 01','CWA-297 • Torre','Linha B • Montagem','CWP-05 • Liberação']},
  planejamento:{label:'Planejamento',sub:'Prazo, aderência e restrições',accent:'#287ea8',kpis:[['Avanço físico','68,4%','Planejado: 71,2%','warn'],['Aderência semanal','86,1%','+3,2 p.p. na semana','up'],['Atividades críticas','07','3 com plano de ação','down'],['Lookahead liberado','82%','Próximas 3 semanas','up'],['PPC','79,6%','Meta: ≥ 85%','warn'],['IWP liberadas','18','4 aguardando análise','up'],['SPI','0,96','Leve atraso','warn'],['Restrições abertas','12','5 vencem hoje','down']],bars:[58,63,61,72,70,78,76],donut:79,activities:[['IWP-CWP-03','Montagem eletromecânica',76],['IWP-CWA-297','Integração com AVC',58],['Tie-in TR-2091','Preparação de parada',88]],evidence:['Reunião • Lookahead','Curva S • Semanal','Campo • Restrição','IWP • Liberação']},
  tubulacao:{label:'Tubulação',sub:'Fabricação, montagem e testes',accent:'#5b8f67',kpis:[['Avanço geral','63,8%','+1,4 p.p. no dia','up'],['Juntas montadas','148','Meta diária: 160','warn'],['Juntas soldadas','116','78% das montadas','up'],['Rejeição END','2,7%','Meta: < 3%','up'],['Spools liberados','84','12 em inspeção','up'],['Suportes','72%','Avanço acumulado','up'],['Teste hidrostático','06','2 em preparação','up'],['HH realizado','1.126 h','94% do previsto','warn']],bars:[46,60,55,67,72,78,74],donut:81,activities:[['LINE-2201','Montagem de spools',72],['RACK-03','Instalação de suportes',81],['TH-006','Preparação para teste',58]],evidence:['Rack 03 • Spools','Linha 2201 • Junta','Suportes • Liberação','Teste • Preparação']},
  mecanica:{label:'Mecânica',sub:'Equipamentos, estruturas e testes',accent:'#b8841f',kpis:[['Avanço geral','71,2%','+0,9 p.p. no dia','up'],['Equip. montados','24/31','77% do escopo','up'],['Torque controlado','184','12 pendentes','warn'],['Pendências','09','3 críticas','down'],['Estruturas','82%','Acumulado','up'],['Alinhamentos','16','14 aprovados','up'],['Testes a vazio','05','2 programados','up'],['HH realizado','986 h','97% do previsto','up']],bars:[52,58,64,71,68,76,81],donut:78,activities:[['TR-2091KS-03','Alinhamento transportador',84],['CWP-04','Montagem de chutes',63],['CWA-297','Estrutura metálica',76]],evidence:['Transportador • Alinhamento','CWP-04 • Chute','Estrutura • Montagem','Equipamento • Inspeção']},
  eletrica:{label:'Elétrica',sub:'Cabos, terminações e energização',accent:'#b99025',kpis:[['Avanço geral','59,7%','+1,1 p.p. no dia','up'],['Cabos lançados','18,4 km','74% do previsto','warn'],['Terminações','326','Meta semanal: 410','warn'],['Megagens aprov.','98,1%','6 pendências','up'],['Bandejamento','68%','Acumulado','up'],['Painéis instalados','42/51','82% do escopo','up'],['Energizações','08','3 programadas','up'],['HH realizado','1.038 h','92% do previsto','warn']],bars:[41,48,53,62,67,73,70],donut:74,activities:[['SE-01','Lançamento de alimentadores',68],['CCM-04','Terminação de cabos',74],['CWP-06','Iluminação industrial',57]],evidence:['SE-01 • Cabos','CCM-04 • Terminação','CWP-06 • Iluminação','Painel • Inspeção']},
  instrumentacao:{label:'Instrumentação',sub:'Malhas, instrumentos e calibração',accent:'#786f9d',kpis:[['Avanço geral','54,3%','+0,8 p.p. no dia','up'],['Instrumentos','186/294','63% instalados','up'],['Calibrações','142','96% aprovadas','up'],['Malhas testadas','88','Meta semanal: 105','warn'],['Hook-ups','128','17 em execução','up'],['Pendências','14','4 impeditivas','down'],['Cabos controle','12,7 km','69% do escopo','up'],['HH realizado','742 h','89% do previsto','warn']],bars:[36,43,48,54,59,65,68],donut:69,activities:[['CWP-03','Instalação de instrumentos',62],['PLC-02','Teste de malhas',71],['TR-2091','Sensores e chaves',54]],evidence:['Instrumento • Instalação','PLC-02 • Malha','TR-2091 • Sensor','Bancada • Calibração']},
  qualidade:{label:'Qualidade',sub:'Inspeções, RNC e documentação',accent:'#3d8b6c',kpis:[['Inspeções no dia','46','42 aprovadas','up'],['Aprovação','91,3%','Meta: ≥ 90%','up'],['RNC abertas','08','2 vencidas','down'],['Dossiês','74%','Avanço documental','warn'],['PIT executado','88%','Semana atual','up'],['Pendências doc.','19','-6 na semana','up'],['Retrabalho','1,8%','Meta: < 2%','up'],['Tempo resposta','1,4 dia','-0,3 dia','up']],bars:[68,72,66,81,87,84,91],donut:91,activities:[['PIT-ANDAIME','Inspeções e liberações',92],['RNC-008','Tratamento de desvio',64],['DATA BOOK','Consolidação documental',74]],evidence:['Inspeção • Campo','RNC • Evidência','Relatório • Ensaio','Dossiê • Validação']},
  seguranca:{label:'Segurança',sub:'Desvios, inspeções e ações preventivas',accent:'#b95558',kpis:[['Dias sem acidente','127','Meta: zero acidente','up'],['Inspeções','38','100% realizadas','up'],['Desvios abertos','11','4 críticos','down'],['Ações concluídas','87%','Meta: ≥ 90%','warn'],['DDS realizados','24','100% das equipes','up'],['APR auditadas','19','2 com ressalvas','warn'],['Taxa frequência','0,00','No período','up'],['Observações','63','+18% na semana','up']],bars:[74,81,79,86,83,91,88],donut:87,activities:[['ALTURA','Auditoria NR-35',88],['ISOLAMENTO','Verificação de áreas',76],['PLANO DE AÇÃO','Tratamento de desvios',67]],evidence:['NR-35 • Auditoria','Área • Isolamento','DDS • Equipe','Desvio • Tratativa']}
};

function renderDashboard(){
  const main=document.querySelector('[data-dashboard]'); if(!main)return;
  const key=document.body.dataset.discipline; const c=configs[key]||configs.andaime;
  document.documentElement.style.setProperty('--accent',c.accent);
  document.title=`${c.label} | Engenharia em Dados`;
  document.querySelectorAll('[data-discipline-label]').forEach(el=>el.textContent=c.label);
  document.querySelector('[data-subtitle]').textContent=c.sub;
  const banner=document.getElementById('integrationBanner');
  if(c.integration){
    banner.querySelector('div').insertAdjacentHTML('afterbegin','<span class="client-logos" aria-label="Ambiente de demonstração ENESA e Vale"><img src="assets/logo-enesa.png" alt="ENESA"><img src="assets/logo-vale.png" alt="Vale"></span>');
  }
  if(!c.integration){banner.classList.add('inactive');banner.querySelector('strong').textContent='Integração em preparação';banner.querySelector('span').textContent='Este módulo será conectado quando a fonte de dados estiver disponível.';banner.querySelector('a').textContent='Em breve'}
  document.getElementById('kpiGrid').innerHTML=c.kpis.map((k,i)=>`<article class="kpi-card" style="--card-color:${c.accent}"><div class="kpi-label"><span>${k[0]}</span><span>${String(i+1).padStart(2,'0')}</span></div><div class="kpi-value">${k[1]}</div><div class="kpi-foot trend-${k[3]}">${k[2]}</div></article>`).join('');
  document.getElementById('barChart').innerHTML=c.bars.map((v,i)=>`<div class="bar-col"><b>${v}%</b><div class="bar" style="--h:${v}%;--plan:${Math.min(v+8,95)}%"><span class="bar plan"></span></div><small>${['SEG','TER','QUA','QUI','SEX','SÁB','DOM'][i]}</small></div>`).join('');
  document.getElementById('donut').style.background=`conic-gradient(${c.accent} 0 ${c.donut}%, var(--accent2) ${c.donut}% ${Math.min(c.donut+12,95)}%, var(--danger) ${Math.min(c.donut+12,95)}% 100%)`;
  document.getElementById('donutValue').textContent=c.donut+'%';
  document.getElementById('activityList').innerHTML=c.activities.map(a=>`<article class="activity"><div class="activity-top"><strong>${a[0]}</strong><span class="status">EM CURSO</span></div><p>${a[1]}</p><div class="progress"><span style="--p:${a[2]}%"></span></div><div class="activity-foot"><span>Avanço físico</span><b>${a[2]}%</b></div></article>`).join('');
  document.getElementById('evidenceGrid').innerHTML=c.evidence.map(e=>`<div class="evidence" data-label="${e}" role="img" aria-label="Evidência: ${e}"></div>`).join('');
  document.getElementById('today').textContent=new Intl.DateTimeFormat('pt-BR',{day:'2-digit',month:'long',year:'numeric'}).format(new Date());
}
renderDashboard();

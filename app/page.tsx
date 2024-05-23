import Date from '../components/date'
import Story from '../components/story'

export default function Home() {
  return (
    <div className='container space-y-5'>
      <h1 className='text-balance text-center text-3xl'>故事創作機</h1>
      <p className='text-balance text-center'>簡單入門的時間軸製作工具</p>
      <Date date='2013/6/21'>
        <Story time='9:30 AM'>
          <h2>佔領之前，封閉協議引起懷疑</h2>
          <p>
            馬政府於2010年與中國簽署了一項名為「經濟合作架構協議」（ECFA）的自由貿易協定。在ECFA框架下，馬繼續推進了2013年6月21日與中國簽署的兩岸服務貿易協議（CSSTP），此協議是在兩岸領導人第九次兩岸領導人會議期間達成的。問題是整個過程給人一種「私下交易」的印象。後來揭示，這項協議甚至未在國民黨內部達成共識。
          </p>
        </Story>
      </Date>
    </div>
  )
}

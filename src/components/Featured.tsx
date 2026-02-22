export default function Featured() {
  const features = [
    {
      icon: "🌊",
      title: "Термальные купальни",
      desc: "3 купальни +38…+42°C под открытым небом. Улучшение кровообращения, снятие мышечных зажимов, очищение кожи.",
    },
    {
      icon: "🏔️",
      title: "Экотропы в горах",
      desc: "Маршруты от лёгких до сложных. «Тропа зрения» — специальные упражнения для глаз с видом на дальние пики.",
    },
    {
      icon: "⛺",
      title: "Глэмпинг",
      desc: "Комфортные шатры с кроватями на деревянных платформах. Звёзды, костёр, тишина — без компромиссов с удобством.",
    },
    {
      icon: "🌿",
      title: "Сенсорное восстановление",
      desc: "Ароматы альпийских трав, звуки горной реки, отсутствие гаджетов. Ваша нервная система скажет спасибо.",
    },
  ];

  return (
    <div id="about" className="bg-white px-6 py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-20 mb-20">
          <div className="flex-1 mb-8 lg:mb-0">
            <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">Чего нет больше нигде на Кавказе</h3>
            <p className="text-3xl lg:text-5xl font-bold text-neutral-900 leading-tight">
              Не санаторий.<br />Не гостиница.<br />Настоящий контакт с природой.
            </p>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              За 3–7 дней вы снимете стресс, улучшите сон, промоете лёгкие горным воздухом и дадите глазам отдохнуть от экранов. Просто вода, горы и тишина.
            </p>
            <div className="flex gap-12">
              <div>
                <p className="text-4xl font-bold text-neutral-900">2500₽</p>
                <p className="text-sm text-neutral-500 mt-1">в сутки с человека</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-neutral-900">40 км</p>
                <p className="text-sm text-neutral-500 mt-1">от Нальчика</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
          <div className="flex-1 h-[400px] lg:h-[600px]">
            <img
              src="https://cdn.poehali.dev/projects/8bf8248e-342d-4e21-852e-6705fe24ece5/files/4dedc5ab-0477-4716-b785-347540c55b47.jpg"
              alt="Термальные источники в горах"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 lg:pl-16 grid grid-cols-1 gap-8 content-center">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <span className="text-3xl shrink-0">{f.icon}</span>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1">{f.title}</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

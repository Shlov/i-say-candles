

export const BuilderPage = () => {

  return (
    <div>
      <h2>Конструктор свічок</h2>
      <h3>Хей! Тут ти можеш створити диво!</h3>
      <h4>Ти моеш обрати всі деталі, з яких створиться твоя свічка</h4>
      <p>гніт</p>
      <label>
        <input type="radio" name="oppression" value="cotton" />
        бавовна
      </label>
      <label>
        <input type="radio" name="oppression" value="wood" checked />
        дерево
      </label>

      <p>тара</p>
      <label>
        <input type="radio" name="container" value="flower-pot" />
        кашпо
      </label>
      <label>
        <input type="radio" name="container" value="jar" checked />
        баночка
      </label>
      <label>
        <input type="radio" name="container" value="glass" checked />
        стакан
      </label>

      <p>віск</p>
      <label>
        <input type="radio" name="wax" value="coconut" />
        кокосовий
      </label>
      <label>
        <input type="radio" name="wax" value="soy" checked />
        соєвий
      </label>
      <label>
        <input type="radio" name="wax" value="palm" checked />
        пальмовий
      </label>

      <p>Аромат</p>

      {/* <label for="aroma">Аромат</label> */}
      <select id="aroma" name="aroma">
        <option value="no" selected>без аромату</option>
        <option value="rose">Роза</option>
        <option value="chocolate">Шоколад</option>
        <option value="orange">Апельсин</option>
        <option value="coffee">Кофе</option>
      </select>

      <p>Барвник</p>

      {/* <label for="coloring">Барвник</label> */}
      <select id="coloring" name="coloring">
        <option value="no" selected>без барвника</option>
        <option value="red">червний</option>
        <option value="blue">синій</option>
        <option value="orange">помаранчевий</option>
        <option value="yellow">жовтий</option>
      </select>

    </div>
  )
}
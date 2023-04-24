import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';

const Kanban = () => {
  return (
    <div className='m-2 md:md-10 mt-14 p-2 md:p-10 bg-white rounded-e-3xl'>
      <Header category="App" title="Kanban" />
      <KanbanComponent
        id="kanban"
        dataSource={kanbanData}
        cardSettings={{contentField: 'Summary', headerField: 'Id'}}
        keyField='Status'
      >
        <ColumnsDirective>
          {kanbanGrid.map((items, index) =>
            <ColumnDirective key={index} {...items} />
          )}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default Kanban
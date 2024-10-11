import { IgrColumn, IgrGrid, IgrGridModule, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarExporter, IgrGridToolbarHiding, IgrGridToolbarPinning, IgrGridToolbarTitle, IgrPaginator } from 'igniteui-react-grids';
import { IgrList, IgrListItem, IgrListModule } from 'igniteui-react';
import { useState } from 'react';
import { useGetCustomerList, useGetCustomerOrdersResultList } from '../../hooks/demo-demo-hooks';
import 'igniteui-react-grids/grids';
import styles from './child-view.module.css';
import createClassTransformer from '../../style-utils';

IgrGridModule.register();
IgrListModule.register();

export default function ChildView() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const [selectedCustomer, setSelectedCustomer] = useState<string | undefined>();
  const { demoDemoCustomer } = useGetCustomerList();
  const { demoDemoCustomerOrdersResult } = useGetCustomerOrdersResultList(selectedCustomer as any);

  return (
    <>
      <div className={classes("row-layout child-view-container")}>
        <div className={classes("column-layout group")}>
          <IgrList className={classes("list")}>
            {demoDemoCustomer?.map((item) => (
              <div style={{display: 'contents'}} onClick={() => setSelectedCustomer(item.customerID)} key={uuid()}>
                <IgrListItem>
                  <div slot="title" key={uuid()}>{item.companyName}</div>
                  <div slot="subtitle" key={uuid()}>{item.contactName}</div>
                  <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>star</span>
                  </span>
                </IgrListItem>
              </div>
            ))}
          </IgrList>
        </div>
        <div className={classes("column-layout group_1")}>
          <IgrGrid data={demoDemoCustomerOrdersResult} primaryKey="orderID" rowSelection="single" rowEditable="true" moving="true" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
            <IgrGridToolbar>
              <IgrGridToolbarActions>
                <IgrGridToolbarPinning></IgrGridToolbarPinning>
                <IgrGridToolbarHiding></IgrGridToolbarHiding>
                <IgrGridToolbarExporter></IgrGridToolbarExporter>
              </IgrGridToolbarActions>
              <IgrGridToolbarTitle>
                <span key={uuid()}>Grid Toolbar</span>
              </IgrGridToolbarTitle>
            </IgrGridToolbar>
            <IgrPaginator perPage="10"></IgrPaginator>
            <IgrColumn field="orderID" dataType="number" header="orderID" groupable="true" sortable="true" resizable="true" hasSummary="true" selectable="false"></IgrColumn>
            <IgrColumn field="customerID" dataType="string" header="customerID" groupable="true" sortable="true" resizable="true" hasSummary="true" selectable="false"></IgrColumn>
            <IgrColumn field="employeeID" dataType="number" header="employeeID" groupable="true" sortable="true" resizable="true" hasSummary="true" selectable="false"></IgrColumn>
            <IgrColumn field="orderDate" dataType="date" header="orderDate" groupable="true" sortable="true" resizable="true" hasSummary="true" selectable="false"></IgrColumn>
            <IgrColumn field="requiredDate" dataType="date" header="requiredDate" groupable="true" sortable="true" resizable="true" hasSummary="true" selectable="false"></IgrColumn>
            <IgrColumn field="shippedDate" dataType="date" header="shippedDate" groupable="true" sortable="true" resizable="true" hasSummary="true" selectable="false"></IgrColumn>
            <IgrColumn field="shipVia" dataType="number" header="shipVia" groupable="true" sortable="true" resizable="true" hasSummary="true" selectable="false"></IgrColumn>
            <IgrColumn field="freight" dataType="number" header="freight" groupable="true" sortable="true" resizable="true" hasSummary="true" selectable="false"></IgrColumn>
            <IgrColumn field="shipName" dataType="string" header="shipName" groupable="true" sortable="true" resizable="true" hasSummary="true" selectable="false"></IgrColumn>
            <IgrColumn field="shipAddress" dataType="string" header="shipAddress" groupable="true" sortable="true" resizable="true" hasSummary="true" selectable="false"></IgrColumn>
            <IgrColumn field="shipCity" dataType="string" header="shipCity" groupable="true" sortable="true" resizable="true" hasSummary="true" selectable="false"></IgrColumn>
            <IgrColumn field="shipRegion" dataType="string" header="shipRegion" groupable="true" sortable="true" resizable="true" hasSummary="true" selectable="false"></IgrColumn>
            <IgrColumn field="shipPostalCode" dataType="string" header="shipPostalCode" groupable="true" sortable="true" resizable="true" hasSummary="true" selectable="false"></IgrColumn>
            <IgrColumn field="shipCountry" dataType="string" header="shipCountry" groupable="true" sortable="true" resizable="true" hasSummary="true" selectable="false"></IgrColumn>
          </IgrGrid>
        </div>
      </div>
    </>
  );
}

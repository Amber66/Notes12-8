import AppBar from "material-ui/AppBar";
 import DropDownMenu from "material-ui/DropDownMenu";
 import MenuItem from "material-ui/MenuItem";
+import IconCheck from 'material-ui/svg-icons/navigation/check';
+import IconWarning from 'material-ui/svg-icons/alert/warning';
 import Chip from "material-ui/Chip";
 
 import * as BalanceModule from "../../modules/balance";
         }
     }
 
+    isUserImportToken = (name) => {
+
+        for (let index = 0; index < this.props.user.userTokens.length; index++) {
+            const element = this.props.user.userTokens[index];
+            if (element.name === name) {
+                return true;
+            }   
+        }
+        return false;
+    }
+    
     buildTokenItems = dir => {
         const { baseCurrency, selectedCurrency } = this.props.user;
         const { config } = getEtherDelta();
                 //     return 0;
                 // })
                 .map(token => (
-                    <MenuItem key={token} value={token} primaryText={token} />
-                ));
+                    <MenuItem key={token} value={token} primaryText={token} rightIcon={this.isUserImportToken(token)?<IconWarning style={{ fill: '#d25125' }}/>:<IconCheck style={{ fill: '#68d326' }}/>} />
+                 ));
         } else {
             return [];
         }

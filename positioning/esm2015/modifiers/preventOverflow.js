/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getBoundaries, isModifierEnabled } from '../utils';
/**
 * @param {?} data
 * @return {?}
 */
export function preventOverflow(data) {
    var _a;
    if (!isModifierEnabled(data.options, 'preventOverflow')) {
        return data;
    }
    // NOTE: DOM access here
    // resets the targetOffsets's position so that the document size can be calculated excluding
    // the size of the targetOffsets element itself
    /** @type {?} */
    const transformProp = 'transform';
    /** @type {?} */
    const targetStyles = data.instance.target.style;
    // assignment to help minification
    const { top, left, [transformProp]: transform } = targetStyles;
    targetStyles.top = '';
    targetStyles.left = '';
    targetStyles[transformProp] = '';
    /** @type {?} */
    const boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
    ((_a = data.options.modifiers.preventOverflow) === null || _a === void 0 ? void 0 : _a.boundariesElement) || 'scrollParent', false // positionFixed
    );
    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    targetStyles.top = top;
    targetStyles.left = left;
    targetStyles[transformProp] = transform;
    /** @type {?} */
    const order = ['left', 'right', 'top', 'bottom'];
    /** @type {?} */
    const check = {
        /**
         * @param {?} placement
         * @return {?}
         */
        primary(placement) {
            /** @type {?} */
            let value = ((/** @type {?} */ (data))).offsets.target[placement];
            if (((/** @type {?} */ (data))).offsets.target[placement] < boundaries[placement] &&
                !false // options.escapeWithReference
            ) {
                value = Math.max(((/** @type {?} */ (data))).offsets.target[placement], boundaries[placement]);
            }
            return { [placement]: value };
        },
        /**
         * @param {?} placement
         * @return {?}
         */
        secondary(placement) {
            /** @type {?} */
            const mainSide = placement === 'right' ? 'left' : 'top';
            /** @type {?} */
            let value = data.offsets.target[mainSide];
            if (((/** @type {?} */ (data))).offsets.target[placement] > boundaries[placement] &&
                !false // escapeWithReference
            ) {
                value = Math.min(data.offsets.target[mainSide], boundaries[placement] -
                    (placement === 'right' ? data.offsets.target.width : data.offsets.target.height));
            }
            return { [mainSide]: value };
        }
    };
    /** @type {?} */
    let side;
    order.forEach((/**
     * @param {?} placement
     * @return {?}
     */
    placement => {
        side = ['left', 'top']
            .indexOf(placement) !== -1
            ? 'primary'
            : 'secondary';
        data.offsets.target = Object.assign(Object.assign({}, data.offsets.target), ((/** @type {?} */ (check)))[side](placement));
    }));
    return data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmVudE92ZXJmbG93LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy8iLCJzb3VyY2VzIjpbIm1vZGlmaWVycy9wcmV2ZW50T3ZlcmZsb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7O0FBRzVELE1BQU0sVUFBVSxlQUFlLENBQUMsSUFBVTs7SUFFeEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsRUFBRTtRQUN2RCxPQUFPLElBQUksQ0FBQztLQUNiOzs7OztVQUtLLGFBQWEsR0FBRyxXQUFXOztVQUMzQixZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSzs7VUFDekMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsWUFBWTtJQUM5RCxZQUFZLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUN0QixZQUFZLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUN2QixZQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDOztVQUUzQixVQUFVLEdBQUcsYUFBYSxDQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQ2xCLENBQUMsRUFBRSxVQUFVO0lBQ2IsT0FBQSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxlQUFlLDBDQUFFLGlCQUFpQixLQUFJLGNBQWMsRUFDM0UsS0FBSyxDQUFDLGdCQUFnQjtLQUN2QjtJQUVELHdCQUF3QjtJQUN4Qiw4RUFBOEU7SUFDOUUsWUFBWSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDdkIsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDekIsWUFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLFNBQVMsQ0FBQzs7VUFFbEMsS0FBSyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDOztVQUUxQyxLQUFLLEdBQUc7Ozs7O1FBQ1osT0FBTyxDQUFDLFNBQWlCOztnQkFDbkIsS0FBSyxHQUFHLENBQUMsbUJBQUEsSUFBSSxFQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNuRCxJQUNFLENBQUMsbUJBQUEsSUFBSSxFQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7Z0JBQy9ELENBQUMsS0FBSyxDQUFDLDhCQUE4QjtjQUNyQztnQkFDQSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLG1CQUFBLElBQUksRUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUNsRjtZQUVELE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ2hDLENBQUM7Ozs7O1FBQ0QsU0FBUyxDQUFDLFNBQWlCOztrQkFDbkIsUUFBUSxHQUFHLFNBQVMsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSzs7Z0JBQ25ELEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDekMsSUFDRSxDQUFDLG1CQUFBLElBQUksRUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO2dCQUMvRCxDQUFDLEtBQUssQ0FBQyxzQkFBc0I7Y0FDN0I7Z0JBQ0EsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQzdCLFVBQVUsQ0FBQyxTQUFTLENBQUM7b0JBQ3JCLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FDakYsQ0FBQzthQUNIO1lBRUQsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDL0IsQ0FBQztLQUNGOztRQUVHLElBQVk7SUFFaEIsS0FBSyxDQUFDLE9BQU87Ozs7SUFBQyxTQUFTLENBQUMsRUFBRTtRQUN4QixJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO2FBQ25CLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDLFNBQVM7WUFDWCxDQUFDLENBQUMsV0FBVyxDQUFDO1FBRWhCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxtQ0FDZCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FDbkIsQ0FBQyxtQkFBQSxLQUFLLEVBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUNuQyxDQUFDO0lBRUosQ0FBQyxFQUFDLENBQUM7SUFFSCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRCb3VuZGFyaWVzLCBpc01vZGlmaWVyRW5hYmxlZCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IERhdGEgfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KGRhdGE6IERhdGEpIHtcblxuICBpZiAoIWlzTW9kaWZpZXJFbmFibGVkKGRhdGEub3B0aW9ucywgJ3ByZXZlbnRPdmVyZmxvdycpKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvLyBOT1RFOiBET00gYWNjZXNzIGhlcmVcbiAgLy8gcmVzZXRzIHRoZSB0YXJnZXRPZmZzZXRzJ3MgcG9zaXRpb24gc28gdGhhdCB0aGUgZG9jdW1lbnQgc2l6ZSBjYW4gYmUgY2FsY3VsYXRlZCBleGNsdWRpbmdcbiAgLy8gdGhlIHNpemUgb2YgdGhlIHRhcmdldE9mZnNldHMgZWxlbWVudCBpdHNlbGZcbiAgY29uc3QgdHJhbnNmb3JtUHJvcCA9ICd0cmFuc2Zvcm0nO1xuICBjb25zdCB0YXJnZXRTdHlsZXMgPSBkYXRhLmluc3RhbmNlLnRhcmdldC5zdHlsZTsgLy8gYXNzaWdubWVudCB0byBoZWxwIG1pbmlmaWNhdGlvblxuICBjb25zdCB7IHRvcCwgbGVmdCwgW3RyYW5zZm9ybVByb3BdOiB0cmFuc2Zvcm0gfSA9IHRhcmdldFN0eWxlcztcbiAgdGFyZ2V0U3R5bGVzLnRvcCA9ICcnO1xuICB0YXJnZXRTdHlsZXMubGVmdCA9ICcnO1xuICB0YXJnZXRTdHlsZXNbdHJhbnNmb3JtUHJvcF0gPSAnJztcblxuICBjb25zdCBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhcbiAgICBkYXRhLmluc3RhbmNlLnRhcmdldCxcbiAgICBkYXRhLmluc3RhbmNlLmhvc3QsXG4gICAgMCwgLy8gcGFkZGluZ1xuICAgIGRhdGEub3B0aW9ucy5tb2RpZmllcnMucHJldmVudE92ZXJmbG93Py5ib3VuZGFyaWVzRWxlbWVudCB8fCAnc2Nyb2xsUGFyZW50JyxcbiAgICBmYWxzZSAvLyBwb3NpdGlvbkZpeGVkXG4gICk7XG5cbiAgLy8gTk9URTogRE9NIGFjY2VzcyBoZXJlXG4gIC8vIHJlc3RvcmVzIHRoZSBvcmlnaW5hbCBzdHlsZSBwcm9wZXJ0aWVzIGFmdGVyIHRoZSBvZmZzZXRzIGhhdmUgYmVlbiBjb21wdXRlZFxuICB0YXJnZXRTdHlsZXMudG9wID0gdG9wO1xuICB0YXJnZXRTdHlsZXMubGVmdCA9IGxlZnQ7XG4gIHRhcmdldFN0eWxlc1t0cmFuc2Zvcm1Qcm9wXSA9IHRyYW5zZm9ybTtcblxuICBjb25zdCBvcmRlciA9IFsnbGVmdCcsICdyaWdodCcsICd0b3AnLCAnYm90dG9tJ107XG5cbiAgY29uc3QgY2hlY2sgPSB7XG4gICAgcHJpbWFyeShwbGFjZW1lbnQ6IHN0cmluZykge1xuICAgICAgbGV0IHZhbHVlID0gKGRhdGEgYXMgYW55KS5vZmZzZXRzLnRhcmdldFtwbGFjZW1lbnRdO1xuICAgICAgaWYgKFxuICAgICAgICAoZGF0YSBhcyBhbnkpLm9mZnNldHMudGFyZ2V0W3BsYWNlbWVudF0gPCBib3VuZGFyaWVzW3BsYWNlbWVudF0gJiZcbiAgICAgICAgIWZhbHNlIC8vIG9wdGlvbnMuZXNjYXBlV2l0aFJlZmVyZW5jZVxuICAgICAgKSB7XG4gICAgICAgIHZhbHVlID0gTWF0aC5tYXgoKGRhdGEgYXMgYW55KS5vZmZzZXRzLnRhcmdldFtwbGFjZW1lbnRdLCBib3VuZGFyaWVzW3BsYWNlbWVudF0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBbcGxhY2VtZW50XTogdmFsdWUgfTtcbiAgICB9LFxuICAgIHNlY29uZGFyeShwbGFjZW1lbnQ6IHN0cmluZykge1xuICAgICAgY29uc3QgbWFpblNpZGUgPSBwbGFjZW1lbnQgPT09ICdyaWdodCcgPyAnbGVmdCcgOiAndG9wJztcbiAgICAgIGxldCB2YWx1ZSA9IGRhdGEub2Zmc2V0cy50YXJnZXRbbWFpblNpZGVdO1xuICAgICAgaWYgKFxuICAgICAgICAoZGF0YSBhcyBhbnkpLm9mZnNldHMudGFyZ2V0W3BsYWNlbWVudF0gPiBib3VuZGFyaWVzW3BsYWNlbWVudF0gJiZcbiAgICAgICAgIWZhbHNlIC8vIGVzY2FwZVdpdGhSZWZlcmVuY2VcbiAgICAgICkge1xuICAgICAgICB2YWx1ZSA9IE1hdGgubWluKFxuICAgICAgICAgIGRhdGEub2Zmc2V0cy50YXJnZXRbbWFpblNpZGVdLFxuICAgICAgICAgIGJvdW5kYXJpZXNbcGxhY2VtZW50XSAtXG4gICAgICAgICAgKHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyA/IGRhdGEub2Zmc2V0cy50YXJnZXQud2lkdGggOiBkYXRhLm9mZnNldHMudGFyZ2V0LmhlaWdodClcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgW21haW5TaWRlXTogdmFsdWUgfTtcbiAgICB9XG4gIH07XG5cbiAgbGV0IHNpZGU6IHN0cmluZztcblxuICBvcmRlci5mb3JFYWNoKHBsYWNlbWVudCA9PiB7XG4gICAgc2lkZSA9IFsnbGVmdCcsICd0b3AnXVxuICAgICAgLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTFcbiAgICAgID8gJ3ByaW1hcnknXG4gICAgICA6ICdzZWNvbmRhcnknO1xuXG4gICAgZGF0YS5vZmZzZXRzLnRhcmdldCA9IHtcbiAgICAgIC4uLmRhdGEub2Zmc2V0cy50YXJnZXQsXG4gICAgICAuLi4oY2hlY2sgYXMgYW55KVtzaWRlXShwbGFjZW1lbnQpXG4gICAgfTtcblxuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn1cbiJdfQ==
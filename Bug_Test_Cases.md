# TodoApp - Bug Test Cases

## Bug Test Cases Format: Bug Title, Description, Priority, Reproducibility

---

## **CRITICAL PRIORITY BUGS**

### **BUG-001: Task Creation with Empty Name Validation Failure**
- **Bug Title:** Task Creation Validation Bypass
- **Description:** Application allows creation of tasks with empty names when validation should prevent it. The form shows error toast but still creates the task in some edge cases.
- **Priority:** Critical
- **Reproducibility:** High - Consistently reproducible by rapid clicking or form manipulation

### **BUG-002: WebRTC Sync Data Corruption**
- **Bug Title:** P2P Sync Data Loss During Connection Interruption
- **Description:** When WebRTC connection is interrupted during sync process, partial data transfer can corrupt existing tasks or cause data loss. The merge process doesn't handle partial transfers gracefully.
- **Priority:** Critical
- **Reproducibility:** Medium - Occurs when network drops during active sync

### **BUG-003: LocalStorage Quota Exceeded Error**
- **Bug Title:** App Crash on Storage Quota Exceeded
- **Description:** When localStorage quota is exceeded (typically with 1000+ tasks), the app crashes without graceful error handling. Users lose all data and cannot recover.
- **Priority:** Critical
- **Reproducibility:** High - Consistently reproducible with large datasets

### **BUG-004: PWA Installation Failure on iOS Safari**
- **Bug Title:** PWA Install Prompt Not Appearing on iOS Safari
- **Description:** Progressive Web App installation prompt doesn't appear on iOS Safari, preventing users from installing the app. This affects core PWA functionality.
- **Priority:** Critical
- **Reproducibility:** High - Consistently reproducible on iOS Safari

---

## **HIGH PRIORITY BUGS**

### **BUG-005: Task Name Character Limit Inconsistency**
- **Bug Title:** Task Name Length Validation Inconsistent
- **Description:** Task name validation shows different character limits in different parts of the UI. AddTask shows 40 chars, EditTask shows different limit, causing confusion.
- **Priority:** High
- **Reproducibility:** High - Always visible in UI

### **BUG-006: QR Code Generation Failure**
- **Bug Title:** QR Code Generation Fails for Large Tasks
- **Description:** QR code generation fails when task data exceeds certain size limits, preventing task sharing via QR codes. Error handling is insufficient.
- **Priority:** High
- **Reproducibility:** Medium - Occurs with tasks containing large descriptions or multiple categories

### **BUG-007: Import/Export Data Validation Bypass**
- **Bug Title:** Malformed JSON Import Causes App Crash
- **Description:** Importing malformed JSON files can cause the application to crash instead of showing proper validation errors. Error boundary doesn't catch all cases.
- **Priority:** High
- **Reproducibility:** High - Consistently reproducible with invalid JSON

### **BUG-008: Drag and Drop Task Reordering Failure**
- **Bug Title:** Drag and Drop Breaks Task Order Persistence
- **Description:** After dragging tasks to reorder them, the new order doesn't persist after page refresh. Tasks revert to original order.
- **Priority:** High
- **Reproducibility:** High - Consistently reproducible

### **BUG-009: Theme Switching Performance Issue**
- **Bug Title:** Theme Switch Causes UI Freeze with Many Tasks
- **Description:** Switching themes causes significant UI freeze when there are 500+ tasks. The theme application process is not optimized for large datasets.
- **Priority:** High
- **Reproducibility:** High - Consistently reproducible with large task lists

### **BUG-010: Offline Task Creation Sync Failure**
- **Bug Title:** Offline Tasks Don't Sync When Coming Online
- **Description:** Tasks created while offline don't properly sync when the user comes back online. Some tasks are lost or duplicated.
- **Priority:** High
- **Reproducibility:** Medium - Occurs in specific offline/online transition scenarios

---

## **MEDIUM PRIORITY BUGS**

### **BUG-011: Emoji Picker AI Feature Error**
- **Bug Title:** AI Emoji Suggestions Cause Browser Crash
- **Description:** Using AI emoji suggestions feature causes browser crash on non-Chrome browsers or when Gemini Nano is not properly installed.
- **Priority:** Medium
- **Reproducibility:** High - Consistently reproducible on unsupported browsers

### **BUG-012: Task Deadline Timezone Issues**
- **Bug Title:** Task Deadlines Show Wrong Timezone
- **Description:** Task deadlines display in incorrect timezone, causing confusion about due dates. The datetime-local input doesn't handle timezone conversion properly.
- **Priority:** Medium
- **Reproducibility:** Medium - Occurs across different timezones

### **BUG-013: Category Deletion Data Integrity**
- **Bug Title:** Category Deletion Leaves Orphaned Tasks
- **Description:** When deleting categories, some tasks remain assigned to the deleted category, causing UI inconsistencies and potential crashes.
- **Priority:** Medium
- **Reproducibility:** Medium - Occurs in specific deletion scenarios

### **BUG-014: Profile Picture Upload Size Limit**
- **Bug Title:** Profile Picture Upload Fails Silently
- **Description:** Large profile picture uploads fail silently without error messages. Users don't know why their picture didn't upload.
- **Priority:** Medium
- **Reproducibility:** High - Consistently reproducible with large images

### **BUG-015: Search Functionality Performance**
- **Bug Title:** Search Becomes Unresponsive with Large Task Lists
- **Description:** Search functionality becomes unresponsive and slow when searching through 1000+ tasks. No debouncing or optimization implemented.
- **Priority:** Medium
- **Reproducibility:** High - Consistently reproducible with large datasets

### **BUG-016: Task Sharing Link Expiration**
- **Bug Title:** Shared Task Links Become Invalid After Time
- **Description:** Shared task links become invalid after a certain period, preventing users from accessing shared tasks. No clear expiration policy.
- **Priority:** Medium
- **Reproducibility:** Low - Difficult to reproduce consistently

### **BUG-017: App Badge Count Inaccuracy**
- **Bug Title:** App Badge Shows Incorrect Task Count
- **Description:** PWA app badge shows incorrect count of incomplete tasks, especially after bulk operations or sync processes.
- **Priority:** Medium
- **Reproducibility:** Medium - Occurs after specific operations

### **BUG-018: Keyboard Navigation Issues**
- **Bug Title:** Keyboard Navigation Broken in Task List
- **Description:** Keyboard navigation doesn't work properly in task list, making the app inaccessible for keyboard-only users.
- **Priority:** Medium
- **Reproducibility:** High - Consistently reproducible

---

## **LOW PRIORITY BUGS**

### **BUG-019: Toast Notification Overlap**
- **Bug Title:** Multiple Toast Notifications Overlap
- **Description:** Multiple toast notifications can overlap and become unreadable when triggered rapidly in succession.
- **Priority:** Low
- **Reproducibility:** Medium - Occurs with rapid user actions

### **BUG-020: Color Picker Accessibility**
- **Bug Title:** Color Picker Not Accessible to Screen Readers
- **Description:** Color picker component is not accessible to screen readers, making it difficult for visually impaired users to select colors.
- **Priority:** Low
- **Reproducibility:** High - Consistently reproducible

### **BUG-021: Splash Screen Generation Error**
- **Bug Title:** Splash Screen Generation Fails on Some Devices
- **Description:** Custom splash screen generation fails on certain device configurations, showing default browser splash instead.
- **Priority:** Low
- **Reproducibility:** Low - Device-specific issue

### **BUG-022: Read Aloud Feature Voice Selection**
- **Bug Title:** Read Aloud Voice Selection Doesn't Persist
- **Description:** Selected voice for read aloud feature doesn't persist across sessions, reverting to default voice.
- **Priority:** Low
- **Reproducibility:** High - Consistently reproducible

### **BUG-023: Progress Bar Animation Glitch**
- **Bug Title:** Progress Bar Shows Incorrect Animation
- **Description:** Progress bar animation sometimes shows incorrect progress when tasks are completed rapidly.
- **Priority:** Low
- **Reproducibility:** Medium - Occurs with rapid task completion

### **BUG-024: Category Color Display Issue**
- **Bug Title:** Category Colors Don't Match Selected Color
- **Description:** Category colors sometimes don't match the selected color in the color picker, showing slightly different shades.
- **Priority:** Low
- **Reproducibility:** Medium - Occurs with specific color selections

### **BUG-025: Task Description Rendering Issue**
- **Bug Title:** Long Task Descriptions Break Layout
- **Description:** Very long task descriptions without spaces can break the UI layout, causing horizontal scrolling issues.
- **Priority:** Low
- **Reproducibility:** Medium - Occurs with very long unbroken text

---

## **EDGE CASE BUGS**

### **BUG-026: Concurrent User Data Modification**
- **Bug Title:** Concurrent Modifications Cause Data Conflicts
- **Description:** When multiple browser tabs are open and tasks are modified simultaneously, data conflicts can occur leading to inconsistent state.
- **Priority:** Medium
- **Reproducibility:** Low - Requires specific timing

### **BUG-027: Browser Back Button Navigation**
- **Bug Title:** Browser Back Button Breaks App State
- **Description:** Using browser back button can break the app state, causing tasks to disappear or UI to become unresponsive.
- **Priority:** Medium
- **Reproducibility:** Medium - Occurs with specific navigation patterns

### **BUG-028: Memory Leak in Long Sessions**
- **Bug Title:** Memory Usage Increases Over Time
- **Description:** Long browser sessions show increasing memory usage, potentially causing performance degradation over time.
- **Priority:** Low
- **Reproducibility:** Low - Requires extended usage

### **BUG-029: Cross-Browser Compatibility Issues**
- **Bug Title:** Feature Inconsistencies Across Browsers
- **Description:** Some features work differently or not at all across different browsers, particularly Firefox and Safari.
- **Priority:** Medium
- **Reproducibility:** High - Browser-specific

### **BUG-030: Mobile Touch Interaction Issues**
- **Bug Title:** Touch Interactions Unresponsive on Mobile
- **Description:** Some touch interactions become unresponsive on mobile devices, particularly drag and drop functionality.
- **Priority:** Medium
- **Reproducibility:** Medium - Device-specific

---

## **SECURITY-RELATED BUGS**

### **BUG-031: XSS Vulnerability in Task Descriptions**
- **Bug Title:** Potential XSS in Task Description Rendering
- **Description:** Task descriptions with malicious HTML/JavaScript content could potentially execute, though this is mitigated by React's built-in XSS protection.
- **Priority:** High
- **Reproducibility:** Low - Requires specific malicious content

### **BUG-032: Data Exposure in Shared Links**
- **Bug Title:** Sensitive Data Exposed in Shared Task Links
- **Description:** Shared task links contain compressed data that could potentially be decoded to reveal sensitive information.
- **Priority:** Medium
- **Reproducibility:** High - Consistently reproducible

---

## **PERFORMANCE BUGS**

### **BUG-033: Initial Load Performance**
- **Bug Title:** Slow Initial Load with Large Datasets
- **Description:** App takes excessive time to load when there are 1000+ tasks, causing poor user experience.
- **Priority:** Medium
- **Reproducibility:** High - Consistently reproducible with large datasets

### **BUG-034: Memory Usage with Images**
- **Bug Title:** High Memory Usage with Profile Pictures
- **Description:** Profile pictures consume excessive memory and are not properly optimized or cleaned up.
- **Priority:** Low
- **Reproducibility:** High - Consistently reproducible

### **BUG-035: Animation Performance Issues**
- **Bug Title:** Animations Lag on Low-End Devices
- **Description:** UI animations become laggy and cause poor performance on low-end mobile devices.
- **Priority:** Low
- **Reproducibility:** Medium - Device-specific

---

## **Summary Statistics**

- **Total Bug Test Cases:** 35
- **Critical Priority:** 4 bugs
- **High Priority:** 6 bugs  
- **Medium Priority:** 15 bugs
- **Low Priority:** 10 bugs

**Priority Distribution:**
- Critical: 11.4%
- High: 17.1%
- Medium: 42.9%
- Low: 28.6%

**Reproducibility Distribution:**
- High Reproducibility: 20 bugs (57.1%)
- Medium Reproducibility: 12 bugs (34.3%)
- Low Reproducibility: 3 bugs (8.6%)

---

*This bug test case document should be regularly updated as new issues are discovered and existing ones are resolved.*

<?php
/*
*  GNU General Public License v3.0
*  Contributors: ADD YOUR NAME HERE, Mike P. Sinn
 */

namespace App\Buttons\States;
use App\Buttons\IonicButton;
class ReminderSearchStateButton extends IonicButton {
	public $accessibilityText = 'Select a Variable';
	public $action = '/#/app/reminder-search';
	public $fontAwesome = 'far fa-list-alt';
	public $icon = 'ion-search';
	public $id = 'reminder-search-state-button';
	public $image = 'https://static.quantimo.do/img/screenshots/variable-list-screenshot-caption.png';
	public $ionIcon = 'ion-search';
	public $link = '/#/app/reminder-search';
	public $stateName = 'app.reminderSearch';
	public $stateParams = [];
	public $text = 'Select a Variable';
	public $title = 'Select a Variable';
	public $tooltip = 'Select a Variable';
	public $menus = [];
}

<?php
/*
*  GNU General Public License v3.0
*  Contributors: ADD YOUR NAME HERE, Mike P. Sinn
 */

namespace App\Variables\CommonVariables\NutrientsCommonVariables;
use App\Variables\QMCommonVariable;
use App\VariableCategories\NutrientsVariableCategory;
use App\Units\RecommendedDailyAllowanceUnit;
class PhosphorusCommonVariable extends QMCommonVariable {
	public const CAUSE_ONLY = false;
	public const DEFAULT_UNIT_ID = RecommendedDailyAllowanceUnit::ID;
	public const DURATION_OF_ACTION = 604800;
	public const ID = 1950;
	public const IMAGE_URL = 'https://images-na.ssl-images-amazon.com/images/I/316IiooBX3L._SL160_.jpg';
	public const NAME = 'Phosphorus';
	public const PRICE = 7.9199999999999999;
	public const PRODUCT_URL = 'https://www.amazon.com/Hylands-Phosphorus-Tablets-Homeopathic-Congestion/dp/B00016X5EG?linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0001';
	public const PUBLIC = true;
	public const SYNONYMS = ['Phosphorus', 'Phosphoru'];
	public const VARIABLE_CATEGORY_ID = NutrientsVariableCategory::ID;
	public $causeOnly = self::CAUSE_ONLY;
	public $defaultUnitId = self::DEFAULT_UNIT_ID;
	public $durationOfAction = self::DURATION_OF_ACTION;
	public $id = self::ID;
	public $imageUrl = self::IMAGE_URL;
	public $name = self::NAME;
	public float $price = self::PRICE;
	public $productUrl = self::PRODUCT_URL;
	public $public = self::PUBLIC;
	public $synonyms = self::SYNONYMS;
	public $variableCategoryId = self::VARIABLE_CATEGORY_ID;
}
